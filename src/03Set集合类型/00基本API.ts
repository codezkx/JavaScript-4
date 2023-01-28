const m = new Set(['val1', 'val2', 'val3'])
console.log(m.size)  // 判断set集合大小

// 使用自定义迭代器初始化集合
const s2 = new Set({
    [Symbol.iterator]: function* () {
        yield 'val1';
        yield 'val2';
        yield 'val3';
    }
})
// add 添加值
const s = new Set()
s.add('a1').add('a2').add('a3')
console.log('add', s)
// 查询值has(value)
console.log(s.has('a1'))
// delete() 删除对应集合中的值  返回boolean
console.log(s.delete('a1'))
// clear()删除集合中所有元素
console.log(s.clear())

console.log('---------------------分割线------------------------')
// 顺序与迭代
const ITERATOR = new Set(["val1", "val2", "val3", "val4", "val5", "val6"])
console.log(...ITERATOR.values())
console.log(...ITERATOR.keys())
console.log(...ITERATOR[Symbol.iterator]())


