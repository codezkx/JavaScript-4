export namespace mapIterator {
    const map = new Map([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']])
    // console.log(map.entries())
    // console.log(map[Symbol.iterator]())
    // Map映射进行映射
    for (let pair of map.entries()) {
        // console.log(pair)
    }
    for (let pair of map[Symbol.iterator]()) {
        // console.log(pair)
    }
    // console.log('<--------------------------------->')
    // entries 默认迭代器，所以可以直接对映射实例使用扩张操作，把映射转换成数组
    // console.log([...map])
    interface obj {
        name: string,
        age: number
    }

    const o: obj = {
        name: '孙行者',
        age: 540
    }
    function foo(params: obj) {
        // 对象类型有引用关系
        params.age = 200;
    }
    foo(o)
    // console.log(o)

    // keys and values 分别返回插入顺序生成键和值的迭代器
    for (let key of map.keys()) {
        // console.log(key) // 获取Map的键
    }
    for (let v of map.values()) {
        // console.log(v) // 获取Map映射的值
    }

    // 映射内部的引用则无法修改
    const map1 = new Map([['key1', 'value1']])

    for (let key of map1.keys()) {
        key = "newKey";
        // console.log(key)
        // console.log(map1.get("key1"))
    }
    // console.log(map1)
    type ko = {
        id: string | number;
    };
    const keyObj: ko = { id: 1 }
    const map2 = new Map([[keyObj, 'vall']])
    
    for (let key of map2.keys()) {
        key.id = "newKey"
        console.log(key)
        console.log(map2.get(keyObj))
    }
    console.log(map2)
}