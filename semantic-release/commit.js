const https = require('https');
const fs = require('fs');

const creatCommit = () => {
  const reqBody = JSON.stringify({
    branch: 'master',
    start_branch: 'master',
    commit_message: 'ci: modify version & change log',
    actions: [
      {
        action: 'update',
        file_path: './package.json',
        content: 'new content'
      },
      {
        action: 'update',
        file_path: './package-lock.json',
        content: 'new content'
      },
      {
        action: 'update',
        file_path: './CHANGELOG.md',
        content: 'new content'
      }
    ]
  });

  const request = https.request(
    {
      method: 'POST',
      hostname: process.env.HOST_NAME,
      path: `/api/v4/projects/${process.env.PROJECT_ID}/repository/commits`,
      headers: { Authorization: `Bearer ${process.env.PERSONAL_TOKEN}` }
    },
    respose => {
      respose
        .on('data', chunk => {
          console.log('getting release response...');
          console.log(chunk.toString());
        })
        .on('end', () => {});
    }
  );

  request.on('error', err => console.log(err));

  request.write(reqBody);

  request.end();
};

module.exports = creatCommit;
