function hasTargetSum(array, target) {
  // Write your algorithm here
  const seen = new Set();
  for (let num of array) {
    if (seen.has(target - num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}



/* 
  Write the Big O time complexity of your function here
   Time Complexity: O(n)
  The function iterates through the array once, where n is the length of the array.
  The operations performed inside the loop, such as set lookups and additions, have an average time complexity of O(1) due to the use of a set.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;