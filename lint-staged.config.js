module.exports = {
  '**/*.{js,jsx}': ['eslint --fix', 'git add'],
  '**/*.{css,scss,json,md}': ['prettier --write', 'git add'],
};
