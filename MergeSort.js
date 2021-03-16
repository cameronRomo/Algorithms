const numbers = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

const merge = (firstArr, secondArr) => {
  const output = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < firstArr.length && rightIndex < secondArr.length) {
    const leftEl = firstArr[leftIndex];
    const rightEl = secondArr[rightIndex];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftIndex++;
    } else {
      output.push(rightEl);
      rightIndex++;
    }
  }
  return [...output, ...firstArr.slice(leftIndex), ...secondArr.slice(rightIndex)];
}

// recursive func to divide into two arrays
const mergeSort = (numbersToSort) => {
  // break elements into individual parts
  // compare individual arrays and Sort together in ascending order
  // potential helper func to take two sorted arrays and put them together
  // base case:
  if (numbersToSort.length <= 1) {
    return numbersToSort;
  } else {
    const middleIndex = Math.floor(numbersToSort.length / 2);
    const firstArr = numbersToSort.slice(0, middleIndex);
    const secondArr = numbersToSort.slice(middleIndex);
    console.log('firstArr :>> ', firstArr);
    console.log('secondArr :>> ', secondArr);

    return merge(
      mergeSort(firstArr),
      mergeSort(secondArr)
    )

  }
}

console.log('mergeSort(numbers) :>> ', mergeSort(numbers));