async function randomDelay(id: number) {
  const delay = Math.random() * 2000
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${id} finished`);
      resolve(1)
    }, delay)
  })
}

// async function foo() {
//   const t0 = Date.now();
//   for (let i = 0; i < 5; i++) {
//     await randomDelay(i)
//   }
//   console.log(`${Date.now() - t0}ms elased`)
// }
// foo()  // 有顺序

async function foo1() {
  const t0 = Date.now();
  const p0 = randomDelay(0); 
  const p1 = randomDelay(1); 
  const p2 = randomDelay(2);
  const p3 = randomDelay(3); 
  const p4 = randomDelay(4);
  await p1; 
  await p2; 
  await p3; 
  await p4; 
  setTimeout(console.log, 0, `${Date.now() - t0}ms elapsed`);
}

foo1()

// function foo2() {
//   console.log(1)
//   foo3()
//   console.log(3)
// }

// async function foo3() {
//   await foo4()
//   console.log(2)
// }

// function foo4() {
//   return new Promise(resolve => {

//   })
// }

// foo2()


export {}

