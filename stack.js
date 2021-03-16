// what is stack?

// functions: push, pop, peak, length
let word = "blah";

const evalPalindrome = () => {
  let letters = []
  let revWord = "";

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    revWord += letters.pop();
  }

  if (revWord === word) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not a palindrome");
  }
}

evalPalindrome();
