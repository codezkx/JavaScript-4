export namespace arrBuffer {
    // 1、可以允许 JavaScript 运行时访问一块名为 ArrayBuffer 的预分配内存。ArrayBuffer 是所有定型数组及视图引用的基本单位。
    // 2、是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。
    // 3、不能手动释放
    // 4、要读取或写入 ArrayBuffer，就必须通过视图。视图有不同的类型，但引用的都是 ArrayBuffer 中存储的二进制数据。
    const arrBuffer: ArrayBuffer = new ArrayBuffer(16)
    // console.log(arrBuffer.byteLength)

    // ArrayBuffer 支持一个方法slice
    const sliceArrBuffer: ArrayBuffer = arrBuffer.slice(4, 10)
    // console.log(sliceArrBuffer.byteLength)

    // DataView  必须在对已有的 ArrayBuffer 读取或写入时才能创建 DataView 实例。
    const buf: ArrayBuffer = new ArrayBuffer(18)
    // 构造函数接收一个可选的字节偏移量和字节长度
    // byteOffset=0 表示视图从缓冲起点开始
    // byteLength=8 限制视图为前 8 个字节 // 不传值默认是剩余的视图字节
    const dataBuf: DataView = new DataView(buf, 0, 8)
    console.log(dataBuf.byteOffset)
    console.log(dataBuf.byteLength)
}