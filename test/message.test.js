const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const test = require('node:test');
const path = require('node:path');
const { formatMessage } = require('../src/message');

test('formats the dependency check message', () => {
  assert.match(formatMessage('chalk'), /Dependency check: chalk/);
});

test('accepts a name from the command line', () => {
  const output = execFileSync(process.execPath, [path.join(__dirname, '../src/message.js'), '--name', 'demo'], {
    encoding: 'utf8',
  });
  assert.match(output, /Dependency check: demo/);
});
