// Code your solutions in this file

function writeCards(nameArr, event) {
  return nameArr.map((name) => {
    return `Thank you, ${name}, for the wonderful ${event} gift!`;
  });
}
function countDown(number) {
  let outPut = number;
  for (let i = 0; i <= number; i++) {
    console.log(outPut);
    // outPut--;
    outPut = outPut - 1;
  }
}
