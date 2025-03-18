let basicPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let isSucceded = true;
    if (isSucceded) {
      resolve("Promise resolved");
    } else {
      reject("Promise rejected");
    }
  });
});

export function callPromise() {
  basicPromise
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
