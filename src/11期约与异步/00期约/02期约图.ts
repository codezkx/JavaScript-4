// 1、Promise.all()
// let p1 = Promise.all([Promise.resolve(3), Promise.resolve(3)])
// setTimeout(console.log, 1000, p1)
let p2 = Promise.race([ 
  Promise.resolve(2), 
  new Promise((resolve, reject) => setTimeout(reject, 1000)),
  Promise.resolve(3), 
 ]); 
 setTimeout(console.log, 0, p2); // Promise <resolved>: 3


let p3 = Promise.race([ 
  Promise.resolve(5), 
  Promise.resolve(6), 
  Promise.resolve(7) 
 ]); 
 setTimeout(console.log, 0, p3); // Promise <resolved>: 5
 export {}