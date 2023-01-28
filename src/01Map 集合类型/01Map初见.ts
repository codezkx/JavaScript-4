export namespace mapHas {
    // Map映射看来要用任何值来作为键
    const functionKey = function () { };
    const symbolkey = Symbol();
    const objectKey = new Object();
    const nullKey = null;
    const undefinedKey = undefined;

    const m = new Map();
    m.set(functionKey, 'functionValue')
        .set(objectKey, 'objectValue')
        .set(symbolkey, 'symbolValue')
        .set(nullKey, 'nullValue')
        .set(undefined, 'undefinedValue');
    // console.log(m);

    const m1 = new Map();
    const objKey: any = {},
        objVal: any = {},
        arrKey: string[] = [],
        arrVal: string[] = [];
    
    m1.set(objKey, objVal).set(arrKey, arrVal)

    objKey.foo = 'foo'
    objVal.bar = 'bar'
    arrKey.push('foo')
    arrVal.push('bar')

    console.log(m1)
    console.log(m1.get(objKey))
    console.log(m1.get(arrKey))
    

    // 对象去重
    // deWeightThree(arr) {
    //     let map = new Map()
    //     for (let item of arr) {
    //         !map.has(item.skuId) ? map.set(item.skuId, item) : map.set(item.skuId , item)
    //     }
    //     return [...map.values()]
    // }
}