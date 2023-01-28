export namespace ArrayFrom {
    // Array实例方法使用 Array.from()
    
    //  1. 字符串会被拆分为单字符数组
    const matt: string[] = Array.from('holle word');
    // console.log(matt)

    // 2. 使用from()将集合和映射转换为一个型数组    Map<K, V> 
    const m: Map<number, number> = new Map().set(1, 2).set(3, 4);
    // console.log(Array.from(m))
    const s: Set<unknown> = new Set().add(1).add(2).add(3).add(4);
    // console.log(Array.from(s))
    
    // 3. Array.from() 对现有数组执行浅复制
    const a1: number[] = [1, 2, 3, 4]
    const a2: number[] = Array.from(a1)
    a2[0] = 5
    // console.log(a2 === a1) // false

    // 4. 可以使用任何可迭代对象
    const iter = {
        *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
        }
    };
    // console.log(Array.from(iter)) //  [1, 2, 3, 4]
    // 5. arguments 对象可以被轻松第转换为数组
    function getArgsArray(...arg: number[]) {
        return Array.from(arg)
    }
    const arg: number[] = getArgsArray(1, 2, 3, 4)
    console.log(arg)

    // 6. from() 也能转换待有必要属性的自定义对象
    const arrayLikeObject: any = {
        0: 1, 
        1: 2, 
        2: 3, 
        3: 4, 
        length: 4
    }
    console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]
}