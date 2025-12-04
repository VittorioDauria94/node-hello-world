export default function greaterNumber(numbersString) {
  const numbersArray = numbersString.split(" ");
  let number = 0;

  numbersArray.forEach((num) => {
    num = parseInt(num);
    if (number < num) {
      number = num;
    }
  });
  return number;
}
