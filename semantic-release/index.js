const https = require('https');
const fs = require('fs');
const getMR = require('./merges');
const createRelease = require('./release');
const createCommit = require('./commit');
const RELEASE = require('./package.json').version;
const dotenv = require('dotenv');

dotenv.config();
let fixArr = [],
  featArr = [],
  counter = 1;

getMR(mrId => {
  getCommits(mrId, counter);
});

const getCommits = (mrId, counter) => {
  const resBody = [];
  const request = https.get(
    {
      hostname: process.env.HOST_NAME,
      path: `/api/v4/projects/${process.env.PROJECT_ID}/merge_requests/${mrId}/commits?per_page=100&page=${counter}`,
      headers: { Authorization: `Bearer ${process.env.PERSONAL_TOKEN}` }
    },
    respose => {
      respose
        .on('data', chunk => {
          resBody.push(chunk);
        })
        .on('end', () => {
          const commits = JSON.parse(Buffer.concat(resBody));
          if (!(commits instanceof Array)) {
            request.emit('error', 'getting commits error: returned object is not an Array');
            return;
          }
          let isEnd = false;
          if (commits.length === 100) {
            counter++;
            getCommits(mrId, counter);
          } else {
            isEnd = true;
          }
          pushCommitArr(commits, isEnd);
        });
    }
  );

  request.on('error', err => console.log(err));
};

const pushCommitArr = (commits, isEnd) => {
  console.log('editing change log...');
  commits.forEach(commit => {
    if (commit.title.toLowerCase().indexOf('merge branch') < 0) {
      if (commit.title.toLowerCase().indexOf('fix') === 0) {
        fixArr.push(commit);
      } else {
        featArr.push(commit);
      }
    }
  });
  if (isEnd) writeChangeLog();
};

const writeChangeLog = () => {
  let changes = '### Bug Fixes\n\n';
  fixArr.forEach(commit => {
    changes += `- ${commit.short_id}:${commit.title}` + '\n';
  });
  changes += '\n### Features\n\n';
  featArr.forEach(commit => {
    changes += `- ${commit.short_id}:${commit.title}` + '\n';
  });
  const final = changes.replace(/(fix:|feat:|refactor:|style:|perf:|ci:)/gim, '');
  console.log('saving change log...');
  fs.writeFile('../changes.md', final, { encoding: 'utf8' });
};

// // commiting to master branch
// createCommit()
// // create release tag
// createRelease({
//   name: 'New release',
//   tag_name: newVersion,
//   ref: 'master',
//   description: final
// });
