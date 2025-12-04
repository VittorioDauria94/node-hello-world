import chalk from "chalk";
import vowelsCounter from "./modules/vowelsCounter.js";
import greaterNumber from "./modules/greaterNumber.js";

const nome = process.argv[2];
const numbers = process.argv[3];

if (nome === undefined) {
  console.log("Non hai inserito alcun nome");
} else {
  console.log(chalk.red(`Hello ${nome}`));
}

console.log(
  `La parola o frase che hai scritto ha: ${vowelsCounter(nome)} vocali`
);

console.log(`Il numero più grande è: ${greaterNumber(numbers)}`);
