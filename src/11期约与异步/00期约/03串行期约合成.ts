function addTow(x: number) {
  return x + 2;
};

function addThree(x: number) {
  return x + 3
} 

function addFive(x: number) {
  return x + 5
}

function addTen(x: number) {
  return [addTow, addThree, addFive].reduce((promise, fn) => promise.then(fn), Promise.resolve(x))
}

addTen(8).then(console.log)