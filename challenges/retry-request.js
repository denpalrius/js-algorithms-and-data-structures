async function retryRequest(promiseFunc, nrOfRetries) {
  for (let i = 1; i <= nrOfRetries; i++) {
    // if (!hasFailed) {
    //   break;
    // }

    // return promiseFunc().then((val) => val);

    promiseFunc()
      .then((val) => {
        console.log("res:", val);
        hasFailed = false;
      })
      .catch((error) => {
        console.log("error:", error);
        hasFailed = true;
      });
  }

  // Write your code here
}

let hasFailed = false;

function getUserInfo() {
  return new Promise((resolve, reject) => {
    if (!hasFailed) {
      hasFailed = true;
      reject("Exception!");
    } else {
      resolve("Fetched user!");
    }
  });
}

let promise = retryRequest(getUserInfo, 3);
if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log("Error!"));
}
module.exports.retryRequest = retryRequest;
