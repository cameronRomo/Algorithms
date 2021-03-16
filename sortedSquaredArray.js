const numbers = [10000, 2, 3, 5, 6, 8, 1];

const sortedSquaredArray = (nums) => {
  const squareNums = nums.map(num => num * num)
  console.log('squareNums :>> ', squareNums);
  const sortedArray = squareNums.sort((a, b) => {
    return a - b;
  })
  console.log('sortedArray :>> ', sortedArray);
}

sortedSquaredArray(numbers)