// EXERCISE 1: 
// Write a function testNum that takes a number as an argument 
// and returns a Promise that tests if the value is less than or greater than the value 10.

const testNum = number => {
  const promise = new Promise((resolve, reject) => {
    if (number > 10) {
      resolve(`${number} is greater than 10, success!`)
    } else {
      reject(`${number} is less than 10, error!`)
    }
  });

  return promise;
};

testNum(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

testNum(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
