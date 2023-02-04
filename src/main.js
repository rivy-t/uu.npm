#!/usr/bin/env node

// NodeJS v5.7.0+ required (for needed `shell` option of `spawn()`); ref: <https://nodejs.org/api/child_process.html#child_processspawnsynccommand-args-options>

const $path = require('path');

const isWinOS = /^win/i.test(process.platform);
const spawn = require('child_process').spawnSync;

const [, , cmd, ...args] = process.argv;

// POSIX-passthrough
// if (!isWinOS) exec_cmd = cmd;
// else {
// 	exec_cmd = $path.resolve(__dirname + '/../vendor/uutils/uutils.exe');
// 	args.unshift(cmd);
// }

if (isWinOS) exec_cmd = $path.resolve(__dirname + '/../vendor/uutils/uutils-i686-winos.exe');
else {
	exec_cmd = $path.resolve(__dirname + '/../vendor/uutils/uutils-i686-linux');
}
args.unshift(cmd);

// console.warn({ __filename, __dirname, exec_cmd, args });

process.exit(spawn(exec_cmd, args, { shell: true, stdio: 'inherit' }).status);
