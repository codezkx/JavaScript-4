// async function foo() {
//   let num = 0
//   console.log(num)
//   console.log( await (num += 1))
//   // console.log(num)
//   return ++num
// }

// foo().then(res => {
//   console.log(res)
// })
function foo() {
  return new Promise((resoleve, reject) => {
    // setTimeout(() => {
    //   console.log(2)
    //   resoleve(1) // 成功状态
    // }, 1000)
    reject(2)
  })
}

async function validate() {
  console.log(1)
  await foo()
  console.log(3)
}

validate().catch(console.log)

export {}