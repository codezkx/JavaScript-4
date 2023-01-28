export namespace dataView {
    /* 
    * ElementType:
    *   DataView 对存储在缓冲内的数据类型没有预设。它暴露的 API 强制开发者在读、写时指定一个
    *   ElementType，然后 DataView 就会忠实地为读、写而完成相应的转换。
    */
    const buf: ArrayBuffer = new ArrayBuffer(2)
    const view: DataView = new DataView(buf)
    // get 获取内存时不能超出最大视图缓存字节
    // console.log(view.getInt8(0))
    // console.log(view.getInt8(1))

    view.setUint8(0, 255)
    console.log(view.getInt8(0))
}
