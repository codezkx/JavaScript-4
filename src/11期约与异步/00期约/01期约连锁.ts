const p0 = new Promise((resolve, reject) => {
  const res = '你好'
  console.log('first');
  resolve(res);
});

p0.then(res => console.log(`second${res}`))
  .then(res => console.log(`third${res}`))
  .then(res => console.log(`fourth${res}`));

let foo = function(str: string):Promise<any> {
  console.log(str)
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}

let p1 = new Promise((resolve, reject) => {
  const res = '你好1'
  console.log('last')
  resolve(res)
})

p1.then(res => foo('p1 executor'))
  .then(res => foo('p2 executor'))
  .then(res => foo('p3 executor'))
  .then(res => foo('p4 executor'))
  export {}