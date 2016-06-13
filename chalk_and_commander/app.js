const chalk = require('chalk');
var program = require('commander');

console.log(chalk.yellow('Demonstrates Parameters'));
console.log(chalk.red('Call App with --help for Info'));
console.log(chalk.blue('Chalk and Commander Demo'));
console.log(chalk.underline('Parameters attached'));
console.log();

program
  .version('1.2.4')
  .option('-c, --character', 'Count characters')
  .option('-l, --line', 'Count lines')
  .option('-w, --word', 'Count words')
  .parse(process.argv);

if (program.character) {
  console.log("Character parameter");
}

if (program.line) {
  console.log("line  parameter");
}
if (program.word) {
  console.log("word parameter");
}
