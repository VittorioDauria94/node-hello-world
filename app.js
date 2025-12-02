import chalk from "chalk";

const nome = process.argv[2];

if (nome === undefined) {
  console.log("Non hai inserito alcun nome");
} else {
  console.log(chalk.red(`Hello ${nome}`));
}
