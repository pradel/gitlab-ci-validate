# gitlab-ci-validate

[![npm version](https://badge.fury.io/js/gitlab-ci-validate.svg)](https://badge.fury.io/js/gitlab-ci-validate)
[![npm](https://img.shields.io/npm/dm/gitlab-ci-validate.svg)](https://www.npmjs.com/package/gitlab-ci-validate)

Checks if your .gitlab-ci.yml file is valid.

Thanks to [@FGRibreau](https://github.com/FGRibreau) for the post about [validating .gitlab-ci.yml files](http://blog.fgribreau.com/2017/04/validate-gitlab-gitlab-ciyml-one-liner.html)!

![](assets/example.gif)

### Install:

```
yarn global add gitlab-ci-validate
npm i -g gitlab-ci-validate
```

### Usage:

```
# It will try to find if .gitlab-ci.yml is present on the current folder if no file path is provided
$ gitlab-ci-validate <file-path>

# You can specify your own gitlab host if you need
$ gitlab-ci-validate <file-path> --host https://my-gitlab-url

# You can provide a private token if you need
$ gitlab-ci-validate <file-path> --private-token <my-gitlab-token>
```

### Options

```
gitlab-ci-validate validate --help

  Description
    Manage set of tracked repositories

  Usage
    $ gitlab-ci-validate validate [file] [options]

  Options
    -H, --host             Change the gitlab host (default to https://gitlab.com)
    -P, --private-token    Authenticate to gitlab api using a private token
    -p, --project-id       Toggle individual project scoped execution, specify the project id context
    -w, --error-warn       Toggle warnings as an error condition
    -h, --help             Displays this message
```

## License

MIT © [Léo Pradel](https://www.leopradel.com/)
