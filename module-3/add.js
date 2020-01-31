export default function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const parsedNumbers = parseStringToNumberArray(numbers);
  checkoutOfRange(parsedNumbers);
  const sum = calculateSumOfArrayNumber(parsedNumbers);
  return sum;
}

function parseStringToNumberArray(numbers) {
  let delimiterPattern = '[,\n]';
  if(numbers.startsWith('//')){
    const delimiter = numbers[2];
    delimiterPattern = '[,\n'+delimiter+']';
    numbers = numbers.slice(4);
  }
  return numbers.split(",").map(number => { return Number(number) });
}
function checkoutOfRange(numbers) {
  const outOfRange = numbers.filter(value => value < 0);
  if (outOfRange.length > 0) {
    throw new Error(`Negative not allowed : ${outOfRange.join(', ')}`);
  }
}
function calculateSumOfArrayNumber(numbers) {
  let sum = 0;
  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
  }
  return sum;
}
