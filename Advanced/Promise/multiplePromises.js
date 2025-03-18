const promise1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
);
const promise2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(
  (res) => res.json()
);

export function handlingMultiplePromises() {
  Promise.all([promise1, promise2])
    .then((results) => console.log("Both results:", results))
    .catch((error) => console.error("Error:", error));
}

const promise3 = Promise.reject("Manual rejection");

export function handlingAllSettled() {
  Promise.allSettled([promise1, promise2, promise3])
    .then((results) => console.log("All Settled Results:", results))
    .catch((error) => console.error("Error:", error));
}

const fastPromise = new Promise((resolve) => setTimeout(() => resolve("Fast"), 500));
const slowPromise = new Promise((resolve) => setTimeout(() => resolve("Slow"), 1000));
const failingPromise = new Promise((_, reject) => setTimeout(() => reject("Failed"), 700));

export function handlingRace() {
  Promise.race([fastPromise, slowPromise, failingPromise])
    .then((result) => console.log("Race Result:", result))
    .catch((error) => console.error("Race Error:", error));
}

const failingPromise1 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 500));
const failingPromise2 = new Promise((_, reject) => setTimeout(() => reject("Error 2"), 800));
const successPromise = new Promise((resolve) => setTimeout(() => resolve("Success!"), 1000));

export function handlingAny() {
  Promise.any([failingPromise1, failingPromise2, successPromise])
    .then((result) => console.log("Any Result:", result))
    .catch((error) => console.error("Any Error:", error));
}





