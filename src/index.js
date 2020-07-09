const fs = require('fs');

if (!process.browser) {
  // eslint-disable-next-line global-require
  global.fetch = require('node-fetch');
}

module.exports = function gitlabCiValidate(filePath, options = {}) {
  if (!options.host) {
    options.host = 'https://gitlab.com';
  }
  const file = fs.readFileSync(filePath, 'utf8');
  const headers = { 'Content-Type': 'application/json' };
  if (options.private_token) {
    headers['Private-Token'] = options.private_token;
  }
  // eslint-disable-next-line no-undef
  return fetch(`${options.host}/api/v4/ci/lint`, {
    method: 'POST',
    json: true,
    headers,
    body: JSON.stringify({
      content: file,
    }),
  }).then((res) => res.json());
};
