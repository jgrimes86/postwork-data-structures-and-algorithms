function findFirstDuplicate(arr) {
  // type your code here
  const arrObj = {}
  for (let i=0; i<arr.length; i++) {
    if (arrObj[arr[i]]) {
      return arr[i]
    } else {
      arrObj[arr[i]] = 1
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
- iterate through arr
- for each item in arr, map to an object with the item as the key
- for first addition of an item to the object, set value to 1
- if item key already exists, return the item
- if the loop does not return an item, return -1

*/
