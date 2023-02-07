# 'uutils' for NPM

<!-- spellchecker:ignore (names) coreutils uutil uutils -->

- from [uutils/coreutils](https://github.com/uutils/coreutils)

## install

```shell
npm install git+https://github.com/rivy-t/uu.npm.git#master --save-dev
// or...
// npm install https://cdn.jsdelivr.net/gh/rivy-t/uu.npm@master/dist/uutils-uu.tgz --save-dev
```

<!-- `npm install @uutils/uu --save-dev` -->

## use in _package.json_

```jsonc
//...
scripts: {
  "foo": "uu UTIL ARGS"
}
//...
```
