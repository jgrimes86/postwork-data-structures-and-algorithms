function reverseString(str) {
  // type your code here
  let newString = "";
  for (let i=0; i<str.length; i++) {
    newString = str[i]+newString
  }
  return newString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("Expecting: 'olleh'")
  console.log("=>", reverseString("hello"))
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
start: hello
i=0: elloh
i=1: lloeh
i=2: loleh
i=3: olleh
*/

/*
- declare new variaible newString
- iterate through str using a counter i
- for each element in str, add to beginning of newString
- return newString
*/
