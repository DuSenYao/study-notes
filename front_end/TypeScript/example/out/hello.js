/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 * @param {array} arr - promise arr
 * @return {Object} promise object
 * @param {number} input
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce((promiseChain, currentFunction) => {
    return promiseChain.then(currentFunction);
  }, Promise.resolve(input));
}

// promise function 1
/**
 * @param {number} a
 */
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
/**
 * @param {number} a
 */
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
/**
 * @param {number} a
 */
function f3(a) {
  return a * 3;
}

// promise function 4
/**
 * @param {number} a
 */
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10).then(console.log); // 1200
