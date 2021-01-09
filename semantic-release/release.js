const https = require('https');

const creatRelease = releaseObj => {
  const reqBody = JSON.stringify(releaseObj);

  const request = https.request(
    {
      method: 'POST',
      hostname: process.env.HOST_NAME,
      path: `/api/v4/projects/${process.env.PROJECT_ID}/releases`,
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

module.exports = creatRelease;
