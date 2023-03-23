# 23章 JSON

## 一、语法

>JSON 语法支持表示 3 种类型的值。
>
> 简单值：字符串、数值、布尔值和 null 可以在 JSON 中出现，就像在 JavaScript 中一样。**特殊**
>
>**值 undefined 不可以。**
>
> 对象：第一种复杂数据类型，对象表示有序键/值对。每个值可以是简单值，也可以是复杂类型。
>
> 数组：第二种复杂数据类型，数组表示可以通过数值索引访问的值的有序列表。数组的值可以
>
>是任意类型，包括简单值、对象，甚至其他数组。

### 1、简单值

>JavaScript 字符串与 JSON 字符串的主要区别是，**JSON 字符串必须使用双引号**（单引号会导致语法
>
>错误）。
>
>布尔值和 null 本身也是有效的 JSON 值。不过，实践中更多使用 JSON 表示比较复杂的数据结构，
>
>其中会包含简单值。

### 2、对象

>对象使用与 JavaScript 对象字面量略为不同的方式表示。
>
>````js
>let person = { 
> name: "Nicholas", 
> age: 29 
>};
>````
>
>虽然这对 JavaScript 开发者来说是标准的对象字面量，但 JSON 中的对象必须使用双引号把属性名
>
>包围起来。
>
>````js
>let object = { 
> "name": "Nicholas", 
> "age" : 29 
>}; 
>// 而用 JSON 表示相同的对象的语法是：
>{ 
> "name": "Nicholas", 
> "age": 29 
>}
>````
>
>**注意：JSON 中的对象属性名必须始终带双引号。手动编写 JSON 时漏掉这些双引号或使用单引号是常见错误**

## 二、解析与序列化

### 1、JSON对象

> JSON 对象有两个方法：stringify()和 parse()。在简单的情况下，这两个方法分别可以将JavaScript 序列化为 JSON 字符串，以及将 JSON 解析为原生 JavaScript 值。
>
> **注意：在序列化 JavaScript 对象时，所有函数和原型成员都会有意地在结果中省略。此外，值为 undefined的任何属性也会被跳过。数组中的ubdefined和函数处理成null**相当于深拷贝，但是需要注意的是前面的注意
>
> ````js
> let book = { 
>  title: "Professional JavaScript", 
>  authors: [ 
>  "Nicholas C. Zakas", 
>  "Matt Frisbie",
>   null,
>   function(){},
>  ], 
>  edition: 4, 
>  year: 2017 
> }; 
> // {"title":"Professional JavaScript","authors":["Nicholas C. Zakas","Matt Frisbie", null, null], 
> //"edition":4,"year":2017}
> let jsonText = JSON.stringify(book); 
> //JSON 字符串可以直接传给 JSON.parse()，然后得到相应的 JavaScript 值。比如，可以使用以下
> //代码创建与 book 对象类似的新对象：
> let bookCopy = JSON.parse(jsonText); 
> //注意，book 和 bookCopy 是两个完全不同的对象，没有任何关系。但是它们拥有相同的属性和值。
> //如果给 JSON.parse()传入的 JSON 字符串无效，则会导致抛出错误。
> ````

### 2、 序列化选项

> 参数
>
> ​	1、序列化对象
>
> ​	2、需要处理的序列化属性
>
> ​	3、缩进字符。 可用字符串表示（主要是用于观察序列化时，和源对象格式一样）

>**1、过滤结果**
>
>````js
> /* 
>    JSON.stringify()方法除了要序列化的对象，还可以接收两个参数
>        shsh
>*/
>
>let book = { 
>    title: "Professional JavaScript", 
>    0: 1,
>    authors: [ 
>        "Nicholas C. Zakas", 
>        "Matt Frisbie",
>        undefined, // 处理成null
>        null,
>        function(){},  // 处理成null
>    ], 
>    o: {
>        empt: undefined,
>        cb: function() {},
>        num: 1,
>    },
>    unT: undefined,
>    cb: function(){},
>    edition: 4, 
>    year: 2017 
>};
>let jsonTest = JSON.stringify(book) //{"0":1,"title":"ProfessionalJavaScript","authors":["Nicholas C. Zakas","MattFrisbie",null,null,null],"edition":4,"year":2017}
>let jsonText = JSON.stringify(book, 'title'); // 当第二个参数时对象或者时字符串等基础类型时会返回所有的序列化值
>console.log(jsonText)
>
>const jsonFn = JSON.stringify(book, (key, value) => { // 处理序列化对象中需要处理的值  ， 如果序列化对象中有不同子对象且对象key相同，则有可能序列化成同一结果。
>  switch(key) { 
>      case "authors": 
>          return value.join(",") 
>      case "year": 
>          return 5000; 
>      case "edition": 
>          return undefined; 
>      default: 
>          return value; 
>  }
>})
>console.log(jsonFn)
>/*
>注意：函数过滤器会应用到要序列化的对象所包含的所有对象，因此如果数组中包含多个具有这些属性的对象，则序列化之后每个对象都只会剩下上面这些属性。
>*/
>````
>
>**2、字符串缩进**
>
>````js
>/* 
>  JSON.stringify()
>      第三个参数  缩进和空格
>*/
>
>let book = { 
>  title: "Professional JavaScript", 
>  0: 1,
>  authors: [ 
>      "Nicholas C. Zakas", 
>      "Matt Frisbie",
>      undefined, // 处理成null
>      null,
>      function(){},  // 处理成null
>  ], 
>  o: {
>      empt: undefined,
>      cb: function() {},
>      num: 1,
>  },
>  unT: undefined,
>  cb: function(){},
>  edition: 4, 
>  year: 2017 
>};
>           
>const jsonText = JSON.stringify(book , null, 4); // 数字 表示缩进4个字符
>console.log(jsonText) // 输出和book格式一样
>const jsonText1 = JSON.stringify(book , null, '   '); // 空格字符串时 多少个字符表示多少个字符缩进
>console.log(jsonText1)
>const jsonText2 = JSON.stringify(book , null, '-'); // 字符串表示格式化对象时前面的空格用‘-’表示
>console.log(jsonText2)
>````
>
>**3、to JSON方法**
>
>>**有时候，对象需要在 JSON.stringify()之上自定义 JSON 序列化。此时，可以在要序列化的对象**
>>
>>**中添加 toJSON()方法，序列化时会基于这个方法返回适当的 JSON 表示。**
>>
>>```js
>>/* 
>>有时候，对象需要在 JSON.stringify()之上自定义 JSON 序列化。此时，可以在要序列化的对象中添加   toJSON()方法，序列化时会基于这个方法返回适当的 JSON 表示。
>>
>>注意，箭头函数不能用来定义 toJSON()方法。主要原因是箭头函数的词法作用域是全局作用域
>>*/
>>
>>let book = { 
>>    title: "Professional JavaScript", 
>>    authors: [ 
>>        "Nicholas C. Zakas", 
>>        "Matt Frisbie"
>>    ], 
>>    edition: 4, 
>>    year: 2017, 
>>    toJSON: function() { 
>>        return this.title; // 序列化只返回title属性
>>    }
>>}; 
>>let jsonText = JSON.stringify(book);
>>console.log(jsonText) // 返回序列化对象中的title属性
>>```
>>
>>>toJSON()方法可以与过滤函数一起使用，因此理解不同序列化流程的顺序非常重要。在把对象传
>>>
>>>给 JSON.stringify()时会执行如下步骤。
>>>
>>>(1) 如果可以获取实际的值，则调用 toJSON()方法获取实际的值，否则使用默认的序列化。
>>>
>>>(2) 如果提供了第二个参数，则应用过滤。传入过滤函数的值就是第(1)步返回的值。
>>>
>>>(3) 第(2)步返回的每个值都会相应地进行序列化。
>>>
>>>(4) 如果提供了第三个参数，则相应地进行缩进。
>>>
>>>理解这个顺序有助于决定是创建 toJSON()方法，还是使用过滤函数，抑或是两者都用。

### 3、解析选项

> 为区别于传给 JSON.stringify()的起过滤作用的替代函数（replacer），这个函数被称为还原函数(reviver)。实际上它们的格式完全一样，即还原函数也接收两个参数，属性名(key)和属性值(value), 另外也需要返回值。
>
> `````js
> /*
> 	如果还原函数返回 undefined，则结果中就会删除相应的键。如果返回了其他任何值，则该值就会成为相应键的值插入到结果中。
> */
> let book = { 
>       title: "Professional JavaScript", 
>       authors: [ 
>           "Nicholas C. Zakas", 
>           "Matt Frisbie" 
>       ], 
>       edition: 4, 
>       cb: function(){},
>       year: 2017, 
>       releaseDate: new Date(2017, 11, 1) 
>   }; 
>   let jsonText = JSON.stringify(book);
>   console.log(jsonText) // {"title":"Professional JavaScript","authors":["Nicholas C. Zakas","Matt Frisbie"],"edition":4,"year":2017,"releaseDate":"2017-11-30T16:00:00.000Z"}
>   let bookCopy = JSON.parse(jsonText, (key, value) => {
>       if (key === 'edition') {
>           return undefined
>       }
>       if (key == "releaseDate") {
>           new Date(value)
>       }
>       return value
>   }); // 会过过滤undefined
>   console.log(bookCopy) //{title: 'Professional JavaScript', authors: Array(2), year: 2017, releaseDate: '2017-11-30T16:00:00.000Z'}
> `````
>
> 