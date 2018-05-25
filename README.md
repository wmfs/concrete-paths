# concrete-paths

[![npm (scoped)](https://img.shields.io/npm/v/@wmfs/concrete-paths.svg)](https://www.npmjs.com/package/@wmfs/concrete-paths) [![Build Status](https://travis-ci.org/wmfs/concrete-paths.svg?branch=master)](https://travis-ci.org/wmfs/concrete-paths) [![codecov](https://codecov.io/gh/wmfs/concrete-paths/branch/master/graph/badge.svg)](https://codecov.io/gh/wmfs/concrete-paths) [![CodeFactor](https://www.codefactor.io/repository/github/wmfs/concrete-paths/badge)](https://www.codefactor.io/repository/github/wmfs/concrete-paths) [![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wmfs/tymly/blob/master/packages/concrete-paths/LICENSE)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwmfs%2Fconcrete-paths.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwmfs%2Fconcrete-paths?ref=badge_shield)

> An option-laden utility which takes general glob-paths, delimited paths etc. and returns an array of absolute paths.

## <a name="install"></a>Install
```bash
$ npm install concrete-paths --save
```

## <a name="usages"></a>Usages

__Given a directory containing:__

``` bash
/stuff
  /lib
    file1.js
    file2.js
  /logs
    log1.txt
    log2.txt
  /node_modules
    /some-package1
      foo.txt
      bar.txt
    /some-package2
      foo.txt
      bar.txt
  /test    
    test1.js
    test2.js
    
```

Then `concrete-paths` can be used in the following ways:

### Usage 1: Simple glob-pattern string usage

> Please see the `glob` package's [Glob Primer](https://www.npmjs.com/package/glob#glob-primer) for more information with working with glob patterns. 

```javascript
const concretePaths = require('concrete-paths')

concretePaths('/stuff/**/*.js').then(
  function(result) {
    // Result:
    // [
    //   '/stuff/lib/file1.js',
    //   '/stuff/lib/file2.js',
    //   '/stuff/test/test1.js',
    //   '/stuff/test/test2.js'
    // ]
  }
)

```

### Usage 2: Single `;` delimited string

> Useful when working with values derived from environment variables.

```javascript
const concretePaths = require('concrete-paths')

concretePaths('/stuff/lib/*.js;/stuff/logs/*.js').then(
  function(result) {
    // Result:
    // [
    //   '/stuff/lib/file1.js',
    //   '/stuff/lib/file2.js',
    //   '/stuff/logs/log1.txt',
    //   '/stuff/logs/log2.txt'
    // ]
  }
)

```


### Usage 3: Multiple strings via array

> Mix-and-match delimited strings, globs etc. in an array of strings.

```javascript
const concretePaths = require('concrete-paths')

concretePaths(
  [
    '/stuff/node_modules/some-package1/*',
    '/stuff/lib/*.js;/stuff/logs/*.js'
  ]  
).then(
  function(result) {
    // Result:
    // [
    //   '/stuff/node_modules/some-package1/foo.txt',
    //   '/stuff/node_modules/some-package1/bar.txt',
    //   '/stuff/lib/file1.js',
    //   '/stuff/lib/file2.js',
    //   '/stuff/logs/log1.txt',
    //   '/stuff/logs/log2.txt'
    // ]
  }
)

```

## <a name="api"></a>API

### `concretePaths`(`sourcePaths`, `[options]`) returns `promise`

### `sourcePaths`

### `options`
| Option  | Type | Notes |
| ------  | ----- | ------ |


## <a name="test"></a>Testing

```bash
$ npm test
```

## <a name="license"></a>License
[MIT](https://github.com/wmfs/concrete-paths/blob/master/LICENSE)


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwmfs%2Fconcrete-paths.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwmfs%2Fconcrete-paths?ref=badge_large)