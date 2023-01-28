export namespace dataView {
    // 边界情形： DataView 完成读、写操作的前提是必须有充足的缓冲区，否则就会抛出 RangeError：
    // 定型数组的构造函数和实例都有一个 BYTES_PER_ELEMENT 属性，返回该类型数组中每个元素的大小：

    const buf: ArrayBuffer = new ArrayBuffer(12);  // 创建一个12字节的缓冲
    const view: DataView = new DataView(buf);
    // console.log(view.getInt8(0));
    // console.log(view.setInt8(0, 10));
    // console.log(view);

    // 定型数组
    // 创建一个引用该缓冲的Int32Array
    const ints = new Int32Array(buf)
    console.log(ints.BYTES_PER_ELEMENT)  //  每个元素四个字节
    console.log(ints.length) // 长度为3数组
    
    // 创建一个长度为6的Int32Array
    const ints2 = new Int32Array(6)

}