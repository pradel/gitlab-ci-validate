const fs = require('fs');
const rp = require('request-promise');

module.exports = function gitlabCiValidate(filePath) {
  const file = fs.readFileSync(filePath, 'utf8');
  return rp({
    method: 'POST',
    uri: 'https://gitlab.com/api/v4/ci/lint',
    json: true,
    body: {
      content: file,
    },
  });
};
