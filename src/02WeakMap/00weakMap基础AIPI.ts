export namespace weakMap {
    // 注意：弱映射中的键只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置键会抛出、TypeError。值的类型没有限制。
    const key1 = { id: 1 },
        key2 = { id: 2 },
        key3 = { id: 3 };
    const wm1 = new WeakMap([
        [key1, 'val1'],
        [key2, 'val2'],
        [key3, 'val3']
    ]);
    console.log(wm1)

}