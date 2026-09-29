const chalk = require('chalk');

function formatMessage(name) {
  return chalk.green(`Dependency check: ${name}`);
}

if (require.main === module) {
  console.log(formatMessage('chalk'));
}

module.exports = { formatMessage };
