const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const isValidSubsequence = (arr, seq) =>{
  let arrIndex = 0;
  let seqIndex = 0;
  while (arrIndex <= arr.length && seqIndex <= seq.length) {
    if(arr[arrIndex] === seq[seqIndex]) {
      seqIndex += 1;
    }
    arrIndex += 1;
  }
  return seqIndex === seq.length
}

console.log(isValidSubsequence(array, sequence))