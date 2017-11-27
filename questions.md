## Questions

* What is .then() used for, and what is .catch() used for?
  - .then() is used to register callbacks to receieve either the eventual value or the reason why the promise cannot be fufilled. [1]
  - .catch() is a function that is called when the `Promise` is rejected.
* What are good use cases for Promises?
  - Good use cases for Promises include HTTP requests via `fetch()` and async functions.
* What other libraries/functions can you find that uses Promises?
  - Other libraries/functions that use Promises include the device battery status API, the fetch API, and the ServiceWorker API.

[1]: [Spring.io - Understanding JavaScript Promises](https://spring.io/understanding/javascript-promises/)
