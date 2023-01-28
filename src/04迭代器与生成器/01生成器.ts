// 生成器对象作为可迭代对象   调用生成器函数会产生一个生成器对象。
function* generatorFn() {
    yield 1;
    yield 2;
    yield 3;
}

for (const x of generatorFn()) {
    console.log(x, 'x')
}

// 增强yield*  可迭代对象
function * generatorFn1() {
    yield* [1, 2, 3, 4, 5];
    yield* [6, 7];
    yield* [8, 9];
}

for (const x of generatorFn1()) {
    console.log(x, 'x2')
}