export default function vowelsCounter(word) {
  let counter = 0;
  const wordArray = Array.from(word.toLowerCase());

  wordArray.forEach((cur) => {
    if (
      cur === "a" ||
      cur === "e" ||
      cur === "i" ||
      cur === "o" ||
      cur === "u"
    ) {
      counter += 1;
    }
  });
  return counter;
}
