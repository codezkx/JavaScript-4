export namespace isArray {
    const arr: number[] = [1, 2, 3]
    console.log(arr instanceof Array)
    console.log(Array.isArray(arr))
    console.log(arr.constructor === Array)
    console.log(Object.prototype.toString.call(arr) === '[object Array]')

    // 上面为什么会返回[object Array]
    console.log(arr.toString())
}