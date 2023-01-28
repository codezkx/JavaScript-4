const MAP1 = new Map([[1, 2], [3, 4]]);
console.log(MAP1);

// 迭代器协议  
/*
    1、迭代器调用next()方法按顺序迭代数组，直至value一直返回value为undefined且done为true
    2、迭代器表示对可迭代对象的一次性有序遍历。不同迭代器之间是没有影响的。
    3、迭代器不与可迭代对象某个时刻的快照绑定，而仅仅是使用**游标来记录遍历可迭代对象**的历程。如果可迭代对象在迭代期间被修改了，迭代器也会随之变化。
*/
let arr = ['foo', 'bar'];
console.log(arr[Symbol.iterator]); // 返回迭代器方法
let arr1 = arr[Symbol.iterator]();
console.log(arr1);
// 执行迭代器
console.log(arr1.next());
console.log(arr1.next());
console.log(arr1.next());

console.log('---------------------------------')
// 自定义迭代器
// 迭代类   一个实例只能迭代一次
class Counter {
    public count: number
    public limit: number
    constructor(limit: number) {
        this.count = 1;
        this.limit = limit
    }
    // 重写了类中的迭代器next方法
    next() {
        // console.log(this.count, 'count')
        return this.count < this.limit ?  { done: false, value: this.count++ } : { done: true, value: undefined };
    }

    [Symbol.iterator]() {
        return this;
    }
}

let counter = new Counter(3)
for (let i of counter) {
    console.log(i, 'i')
}

// for (let i of counter) {
//     console.log(i, 'i2')
// }

// 一个实例可创建多个迭代器

class Counters {
    private limit: number;
    constructor(limit: number) {
        this.limit = limit
    }

    [Symbol.iterator]() {
        let count: number = 1;
        const LIMIT: number = this.limit
        return {
            next() {
                return count <= LIMIT ?  { done: false, value: count++ } :  { done: true, value: undefined };
            }
        }
    }
}

const CONUNTERS = new Counters(3)

for (let i of CONUNTERS) {
    console.log(i, 's')
}

for (let i of CONUNTERS) {
    console.log(i, 's1')
}

