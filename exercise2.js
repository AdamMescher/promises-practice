// EXERCISE 2:
// Write two functions that use Promises that you can chain! 
// The first function, makeAllCaps(), 
// will take in an array of words and capitalize them, 
// and then the second function, sortWords(), 
// will sort the words in alphabetical order. 
// If the array contains anything but strings, it should throw an error.

const makeAllCaps = arr => {
  const promise = new Promise((resolve, reject) => {
    if (allAreStrings(arr)) {
      const mapped = arr.map(ele => ele.toUpperCase());
      resolve(mapped);
    } else {
      reject('No, the array you passed in contained an element that was not a string!')
    }
  });

  return promise;
};

const sortWords = arr => {
  const promise = new Promise((resolve, reject) => {
    if (allAreStrings(arr)) {
      resolve(arr.sort())
    } else {
      reject('No, the array you passed in contained an element that was not a string!')
    }
  });

  return promise;
};

const allAreStrings = arr => arr.every(ele => typeof (ele) === 'string');

/* ------------------------------ */

const testArrayPass = ['dog', 'cat', 'bat', 'air'];
const testArrayFail = ['jim', 'kate', false];

makeAllCaps(testArrayPass)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(testArrayFail)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

