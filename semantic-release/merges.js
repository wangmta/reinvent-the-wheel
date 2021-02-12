const https = require('https');
// const fs = require('fs');

const getMR = callback => {
  const resBody = [];
  const request = https.get(
    {
      hostname: process.env.HOST_NAME,
      path: `/api/v4/projects/${process.env.PROJECT_ID}/merge_requests?state=merged&created_after=${process.env.CREATED_AFTER}`,
      headers: { Authorization: `Bearer ${process.env.PERSONAL_TOKEN}` }
    },
    respose => {
      respose
        .on('data', chunk => {
          console.log('getting latest merge requests...');
          resBody.push(chunk);
        })
        .on('end', () => {
          const merges = JSON.parse(Buffer.concat(resBody));
          if (!(merges instanceof Array)) {
            request.emit('error', 'getting merge requests error: returned object is not an Array');
            return;
          }
          // fs.writeFile('./merged-requests.js', JSON.stringify(merges), { encoding: 'utf8' });
          const mrId = merges[0].iid;
          callback(mrId);
          console.log('getting commits from last merge request...');
          return merges;
        });
    }
  );

  request.on('error', err => console.log(err));
};

module.exports = getMR;
