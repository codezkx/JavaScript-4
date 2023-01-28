// 注意：async返回的是一个期约对象 对象里面的值就是异步函数的返回值
async function addTwo(x: number): Promise<number> {
  return x + 2
}

async function addThree(x: number): Promise<number> {
  return x + 3
}

async function addFive(x: number): Promise<number> {
  return x + 5
}

async function addTen(x: number): Promise<number> {
  for (const fn of [addTwo, addThree, addFive]) {
    x = await fn(x)
  }
  return x
}

addTen(9).then(console.log)