function fibonacci(num) {
  // type your code here

  // if (num === 0) {
  //   return 0
  // } else if (num === 1) {
  //   return 1
  // } else {
  //   let first = 0
  //   let second = 1
  //   let current = 1
  //   for (let i=2; i<=num; i++) {
  //     let temp = current
  //     current = first + second
  //     first = second
  //     second = temp
  //   }
  //   return current
  // }

  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1
  } else {
    let prior = 0;
    let current = 1;
    for (let i=2; i<=num; i++) {
      let temp = current
      current = prior + temp;
      prior = temp
    }
    return current
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
