const p1 = new Promise((resolve, reject) => resolve(3))
console.log(p1)
const p2 = Promise.resolve()
console.log(p2)
const p3 = new Promise(() => {})
// setTimeout(console.log, 0, Promise.reject(p3))
const p4 = Promise.resolve(new Error('foo'))
setTimeout(console.log, 0, p4)
export {}