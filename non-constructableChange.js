const coins = [1, 2, 5];

const nonConstructibleChange = (money) => {
  const sortedArray = money.sort((a, b) => {
    return a - b;
  })
  let lastValue = sortedArray[sortedArray.length - 1];
  console.log('lastValue :>> ', lastValue);
  for (let j = 1; j < lastValue; j++) {
    if (sortedArray.includes(j)) {
      console.log('sortedArray 1 :>> ', sortedArray);
      return
    } else if (!sortedArray.includes(j)) {
      console.log('sortedArray 2 :>> ', sortedArray);
      let sum = sortedArray.reduce((a, b) => {
        return a + b;
      }, 0)
      if (sum != j) {
        console.log('sum :>> ', sum);
        return sum;
      }
    }
  }
}

nonConstructibleChange(coins)