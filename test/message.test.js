const assert = require('node:assert/strict');
const test = require('node:test');
const { formatMessage } = require('../src/message');

test('formats the dependency check message', () => {
  assert.match(formatMessage('chalk'), /Dependency check: chalk/);
});
