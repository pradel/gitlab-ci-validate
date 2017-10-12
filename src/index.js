const fs = require('fs');

if (!process.browser) {
  // eslint-disable-next-line global-require
  global.fetch = require('node-fetch');
}

module.exports = function gitlabCiValidate(filePath) {
  const file = fs.readFileSync(filePath, 'utf8');
  // eslint-disable-next-line no-undef
  return fetch('https://gitlab.com/api/v4/ci/lint', {
    method: 'POST',
    json: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      content: file,
    }),
  }).then(res => res.json());
};
