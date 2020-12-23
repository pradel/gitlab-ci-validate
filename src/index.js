const fs = require('fs');

if (!process.browser) {
  // eslint-disable-next-line global-require
  global.fetch = require('node-fetch');
}

module.exports = function gitlabCiValidate(filePath, options = {}) {
  let uri;
  if (!options.host) {
    options.host = 'https://gitlab.com';
  }
  const file = fs.readFileSync(filePath, 'utf8');
  const headers = { 'Content-Type': 'application/json' };
  if (options.private_token) {
    headers['Private-Token'] = options.private_token;
  }
  if (options.project_id) {
    uri = `${options.host}/api/v4/projects/${options.project_id}/ci/lint`;
  } else {
    uri = `${options.host}/api/v4/ci/lint`;
  }
  console.log(uri);
  // eslint-disable-next-line no-undef
  return fetch(uri, {
    method: 'POST',
    json: true,
    headers,
    body: JSON.stringify({
      content: file,
    }),
  }).then((res) => res.json());
};
