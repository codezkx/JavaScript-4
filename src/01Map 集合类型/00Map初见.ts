export namespace mapBasics {
    // 注意Map中的key值必须唯一，不然会去重
    // 使用Map时需要注意IE浏览器的兼容性
    const map = new Map() // 创建一个空映射
    // console.log(map)
    const map1 = new Map([["key1", "value1"], ["key1", "value2"], ["key3", "value3"], ["key4", "value4"]])
    // console.log(map1)
    // console.log(map1.size) // 映射大小 4
    
    const map2 = new Map({
        // 
        [Symbol.iterator]: function* () {
            yield ["key1", "value1"];
            yield ["key2", "value2"];
            yield ["key3", "value3"];
        }
    })
    // console.log(map2)

    const map3 = new Map([])
    // console.log(map3.has(undefined))
    // console.log(map3.get(undefined))

    // Map的set、get、has、size、delete、clear 方法使用
    const map4 = new Map()
    // 查询Map映射中是否有对应的建
    map3.has("firstName") // false
    // 获取Map映射获取Map中的值
    map3.get("firstName") // undefiend
    // 获取Map映射的长度
    map3.size // 0

    map3.set('firstName', 'Matt').set('lastName', 'Frisbie')
    // 删除一个键值对
    // map3.delete("firstName")
    console.log(map3.get('firstName'))
    console.log(map3.has('lastName'))
    // 清空所有的键值对
    map3.clear()
    console.log(map3)
}