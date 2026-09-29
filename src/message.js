const chalk = require('chalk');
const minimist = require('minimist');

function formatMessage(name) {
  return chalk.green(`Dependency check: ${name}`);
}

if (require.main === module) {
  const args = minimist(process.argv.slice(2));
  console.log(formatMessage(args.name || 'chalk'));
}

module.exports = { formatMessage };
