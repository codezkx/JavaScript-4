#### JavaScript1-3章

## 第一章

### JavaScript组成

**核心**：

>ECMAScript (javascript的规范)
>
>文档对象模型：DOM
>
>浏览器对象模型：BOM

### DOM对象

> **文档对象模型**：是一个应用编程接口（API），用于在 HTML 中使用扩展的 XML。DOM 将整个页面抽象为一组分层节点。HTML 或 XML 页面的每个组成部分都是一种节点，包含不同的数据

**作用**

>DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API,可以轻松地删除、添加、替换、修改节点。



## 第二章

### script元素

**属性**

> **Async**: 表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其
>
> 他脚本加载。只对外部脚本文件有效。
>
> **Charset**: 可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不
>
> 在乎它的值。
>
> **Crossorigin**：可选。配置相关请求的CORS（跨源资源共享）设置。
>
> **Defer**：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。
>
> **Integrity**：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，
>
> Subresource Integrity）。
>
> **Src**：可选。表示包含要执行的代码的外部文件。
>
> **Type**：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。

#### 推迟执行脚本

> <script defer>	
>
> defer 属性只对外部脚本文件才有效, 执行在window.onload脚本之前

**属性：defer** 

> 推迟执行的脚本不一定总会按顺序执行或者在 DOMContentLoaded
>
> 事件之前执行，因此最好只包含一个这样的脚本。

注意

> 对于 XHTML 文档，指定 defer 属性时应该写成 defer="defer"。

#### 异步执行脚本

> <script async>
>
> async属性 只对外部脚本文件才有效， window.onload执行顺序不确定

**属性：async**

>让浏览器不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。

#### 动态加载脚本(异步)

### 行内代码与外部文件

**行内代码**

> 在HTML中直接嵌入JS代码

**外部文件**

> 利用script标签的src属性引入JS代码

**外部比较行内**

> **可维护性高**： JavaScript 代码如果分散到很多 HTML 页面，会导致维护困难。而用一个目录保存所有 JavaScript 文件，则更容易维护，这样开发者就可以独立于使用它们的 HTML 页面来编辑代码。
>
> **缓存**：浏览器会根据特定的设置缓存所有外部链接的 JavaScript 文件，这意味着如果两个页面都用到同一个文件，则该文件只需下载一次。这最终意味着页面加载更快。
>
> **适应未来**：通过把 JavaScript 放到外部文件中，就不必考虑用 XHTML 或前面提到的注释黑科技。包含外部 JavaScript 文件的语法在 HTML 和 XHTML 中是一样的。

## 第三章

### 语法

#### 区分大小写

> ECMAScript 中一切都区分大小写。无论是变量、函数名还是操作符，都区分大
>
> 小写。

#### 标识符

>定义: 标识符，就是变量、函数、属性、或则函数参数的名称。
>
>标识符规则：''
>
>​	a: 第一个字符必须是一个字母、下划线( _ )或则美元符号($)
>
>​	b: 剩下的其他字符可以是字母、下划线、美元符号或则数字
>
>标识符中的字母可以是扩展 ASCII（Extended ASCII）中的字母，也可以是 Unicode 的字母字符，如 À 和 Æ（但不推荐使用）。

**标识符规范**

> ECMAScript 标识符使用驼峰大小写形式，即第一个单词的首字母小写，后面每个单词
>
> 的首字母大写

#### 注释

> Mac 快捷键  VScode编辑器 
>
> ​	单行注释：command + /
>
> ​	多行注释：option + shift + a
>
> ECMAScript 采用 C 语言风格的注释，包括单行注释和块注释。单行注释以两个斜杠字符开头，如：
>
> // 单行注释
>
> 块注释以一个斜杠和一个星号（/*）开头，以它们的反向组合（*/）结尾，如：
>
> /* 这是多行
>
> 注释 */ 

#### 严格模式

> use script

#### 语句

> 即使语句末尾的分号不是必需的，也应该加上。记着加分号有助于防止省略造成的问题，比如可以避免输入内容不完整。此外，加分号也便于开发者通过删除空行来压缩代码（如果没有结尾的分号，只删除空行，则会导致语法错误）。加分号也有助于在某些情况下提升性能，因为解析器会尝试在合适的位置补上分号以纠正语法错误。

### 关键字与保留字

> ECMA-262 描述了一组保留的关键字，这些关键字有特殊用途，比如表示控制语句的开始和结束，或者执行特定的操作。

### 变量

>ECMAScript变量是松散类型，意思是变量可以用于保存任何类型的数据。
>
>3个关键字可以声明变量：var、const、let。其中，var在ECMAScript的所有版本中都可以使用，而const和let只能在ECMAScript6及更晚的版本中使用。

### Var关键字

**全局变量**

````
var message;  默认值为undefined
var message = 'hi'  变量的值是‘hi’
message = ‘hi’  隐士声明（不推荐使用这个声明方式）
````

#### var声明作用域

**局部作用域**

````
function test() { 
// 没有变量提升
 var message = "hi"; // 局部变量
} 
test(); 
console.log(message); // 出错！打印前以被销毁。
````

函数内定义全局变量

````
function test() { 
	//  这里变量 message 被赋值为unedfined
	message = "hi"; // 全局变量   执行到此处才能声明变量，并且var变量具有全局提升
} 
test(); 
console.log(message); // "hi"
````

#### var定义多个变量

````
var message = "hi", 
 		found = false, 
 		age = 29;
````

**注意**

>这里定义并初始化了 3 个变量。因为 ECMAScript 是松散类型的，所以使用不同数据类型初始化的变量可以用一条语句来声明。插入换行和空格缩进并不是必需的，但这样有利于阅读理解。在严格模式下，不能定义名为 eval 和 arguments 的变量，否则会导致语法错误。

#### var声明提升

````
使用 var 时，下面的代码不会报错。这是因为使用这个关键字声明的变量会自动提升到函数作用域
顶部：
function foo() { 
 console.log(age); 
 var age = 26; 
} 
foo(); // undefined 
之所以不会报错，是因为 ECMAScript 运行时把它看成等价于如下代码：
function foo() { 
var age; 
 console.log(age); 
 age = 26; 
} 
foo(); // undefined 
这就是所谓的“提升”（hoist），也就是把所有变量声明都拉到函数作用域的顶部。此外，反复多次
使用 var 声明同一个变量也没有问题：
function foo() { 
 var age = 16; 
 var age = 26; 
 var age = 36; 
 console.log(age); 
} 
foo(); // 36
````

### Let 声明

> let 跟 var 的作用差不多，但有着非常重要的区别。最明显的区别是，let 声明的范围是块作用域，而 var 声明的范围是函数作用域。

#### 特点

> 1、有块级作用域
>
> 2、不能重复定义变量（同一作用域），JavaScript 引擎会记录用于变量声明的标识符及其所在的块作用域，因此嵌套使用相同的标识符不会报错，而这是因为同一个块中没有重复声明。
>
> 3、var 定义的变量不能在用let定义不然会报错

#### 暂时性死区

> let声明的变量不能够被提升，let声明之前调用该变量则会出现暂时性死区。

#### 全局声明

> 与 var 关键字不同，使用 let 在全局作用域中声明的变量不会成为 window 对象的属性（var 声明的变量则会) 。但let在全局中还是起作用的，只是不能成为window属性而已。

````
var name = 'Matt'; 
console.log(window.name); // 'Matt' 
let age = 26; 
console.log(window.age); // undefined
````

#### 条件声明

> 在使用 var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。因为 let 的作用域是块，所以不可能检查前面是否已经使用 let 声明过同名变量，同时也就不可能在没有声明的情况下声明它。(不推荐使用条件声明)

````
<script> 
 let name = 'Nicholas'; 
 let age = 36; 
</script> 
<script> 
 // 假设脚本不确定页面中是否已经声明了同名变量
 // 那它可以假设还没有声明过
 if (typeof name === 'undefined') { 
 let name; 
 } 
 // name 被限制在 if {} 块的作用域内
 // 因此这个赋值形同全局赋值
 name = 'Matt'; 
 try { 
 console.log(age); // 如果 age 没有声明过，则会报错
 } 
 catch(error) { 
 let age;
 } 
 // age 被限制在 catch {}块的作用域内
 // 因此这个赋值形同全局赋值
 age = 26; 
</script>
````

#### for循环中的let声明

>使用 let 声明迭代变量时，**JavaScript 引擎在后台会为每个迭代循环声明一个新的迭代变量。**每个 setTimeout 引用的都是不同的变量实例，所以 console.log 输出的是我们期望的值，也就是循环执行过程中每个迭代变量的值。

````
for (let i = 0; i < 5; ++i) { 
 setTimeout(() => console.log(i), 0) 
} 
// 会输出 0、1、2、3、4
````

### const声明(优先使用)

> const 的行为与 let 基本相同，唯一一个重要的区别是用它**声明变量时必须同时初始化变量**，且尝试**修改 const 声明的变量**会导致运行时错误。

> const age = 26; 
>
> age = 36; // TypeError: 给常量赋值3.3 变量 29 
>
> // const 也不允许重复声明
>
> const name = 'Matt'; 
>
> const name = 'Nicholas'; // SyntaxError 
>
> // const 声明的作用域也是块
>
> const name = 'Matt'; 
>
> if (true) { 
>
>  const name = 'Nicholas'; 
>
> } 
>
> console.log(name); // Matt 

#### const特性

>1、不能重复声明变量
>
>2、基本类型不能再次修改
>
>3、对引用类型允许修改其属性，但不能修改其对象指向
>
>4、拥有自己的块级作用域

**const声明注意点**

>不能使用const变量来做for循环遍历。因为const时常量，for里用赋值操作。但还是遵循const规则。
>
>对于 for in 和for of 还是支持的 也是比较推荐

### 数据类型

> ECMAScript 有 6 种简单数据类型（也称为**原始类型**）：Undefined、Null、Boolean、Number、String 和 Symbol。
>
> 复杂类型： 引用类型

#### typeof操作符

> 1、判断基础类型
>
> 2、判断基础类型和引用类型
>
> 3、不能判断引用类型之间的类型

````
 "undefined"表示值未定义；
 "boolean"表示值为布尔值；
 "string"表示值为字符串；
 "number"表示值为数值；
 "object"表示值为对象（而不是函数）或 null； 
 "function"表示值为函数；（数据类型属于object，但是 ）
 "symbol"表示值为符号。
````

注意点

> 1、typeof null。判断是object. 特殊值。
>
> 2、严格来讲，函数在 ECMAScript 中被认为是对象，并不代表一种数据类型。可是函数也有自己特殊的属性。为此，就有必要通过 typeof 操作符来区分函数和其他对象。

#### Undefined类型

> Undefined 类型只有一个值，就是特殊值 undefined。当使用 **var 或 let 声明了变量**但没有初始化时，就相当于给变量赋予了 undefined 值。**函数**没有写返回值时默认返回undefined

**注意**

> 1、一般来说，永远不用显式地给某个变量设置 undefined 值。字面值 undefined主要用于比较，而且在 ECMA-262 第 3 版之前是不存在的。增加这个特殊值的目的就是为了正式明确空对象指针（null）和未初始化变量的区别。
>
> 2、即使未初始化的变量会被自动赋予 undefined 值，但我们仍然建议在声明变量的同时进行初始化。这样，当 typeof 返回"undefined"时，你就会知道那是因为给定的变量尚未声明，而不是声明了但未初始化。

#### Null类型

> Null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个**空对象指针**，这也是给typeof 传一个 null 会返回"object"的原因

````
在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用其他值。这样，只要检查
这个变量的值是不是 null 就可以知道这个变量是否在后来被重新赋予了一个对象的引用.
if (car != null) { 
 // car 是一个对象的引用
} 
undefined 值是由 null 值派生而来的.  这也是为什么undefined==null 为true. 注意这里是等于
````

**null与undefined**

> Undefined   不要显示的给变量赋值
>
> Null   可以为引用类型初始化时赋值作为初始化对象值

#### Boolean类型

> Boolean值友两种: true或则false
>
> 可隐士转换有： ''、null、false、undefined、NaN

#### Number类型

**整数**

> 可用八进制或则十六进制
>
> 八进制格式： 第一个数字必须是0; 严格模式下是无效的
>
> ````
> let octalNum1 = 070; // 八进制的 56 
> let octalNum2 = 079; // 无效的八进制值，当成 79 处理
> let octalNum3 = 08; // 无效的八进制值，当成 8 处理
> ````
>
> 十六进制格式： 必须让真正的数值前缀 0x（区分大小写）
>
> ````
> let hexNum1 = 0xA; // 十六进制 10 
> let hexNum2 = 0x1f; // 十六进制 31
> ````
>
> 注意：由于 JavaScript 保存数值的方式，实际中可能存在正零（+0）和负零（0）。正零和
>
> 负零在所有情况下都被认为是等同的，这里特地说明一下

**浮点数**

> **要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。**
>
> ```
> let floatNum1 = 1.1; 
> let floatNum2 = 0.1; 
> let floatNum3 = .1; // 有效，但不推荐
> ```
>
> 注意： 因为存储浮点值使用的内存空间是存储整数值的两倍，所以 ECMAScript 总是想方设法把值转换为整数。
>
> ````
> let floatNum1 = 1.; // 小数点后面没有数字，当成整数 1 处理
> let floatNum2 = 10.0; // 小数点后面是零，当成整数 10 处理
> ````
>
> 特别注意： 永远永远不要用浮点数。相加等于另一个浮点数。因为JS的浮点数不如整数精确

**科学计数法**

> 13000000
>
> 科学计数法：1.3e7
>
> 0.1230003
>
> 科学计数法：1.230004e-7

**JS值的范围**

> 最小值
>
> Number.MIN_VALUE = 5e-324。 超过显示：-Infinity(负无穷)
>
> 最大值
>
> Number.MAX_VALUE = 1.797 693 134 862 315 7e+308   超过显示：Infinity(正无穷)

**NaN**

> 有一个特殊的数值叫 NaN，意思是“不是数值”（Not a Number），用于表示本来要返回数值的操作失败了（而不是抛出错误）。
>
> isNaN()函数： 如果是number则返回false， 不是numbr返回true

**数值转换**

> 转换数值的三个函数：Number()、parseInt()、parseFloat()
>
> 上述函数区别：
>
> ​	Number(): 一般用于可用于任何数据类型。
>
> ​	parseInt()和parseFloat():主要用于将字符串转换为数值

##### Number函数的转换规则

> -  布尔值，true 转换为 1，false 转换为 0。 
>
> -  数值，直接返回。
>
> -  null，返回 0。 
>
> -  undefined，返回 NaN。
>
> - 字符串，应用一下规则。
>
>   - 如果字符串包含数值字符，包括数值字符前面带加、减号的情况，则转换为一个十进制数值。因此，Number("1")返回 1，Number("123")返回 123，Number("011")返回 11（忽略前面的零）。
>
>     ```
>     只能包含字符的数字，或则以上规则
>     ```
>
>   - 如果字符串包含有效的浮点值格式如"1.1"，则会转换为相应的浮点值（同样，忽略前面的零）。
>
>     ````
>     Number('0000.123') => 0.123
>     ````
>
>   - 如果字符串包含有效的十六进制格式如"0xf"，则会转换为与该十六进制值对应的十进制整数值。
>
>   - 如果是空字符串（不包含字符），则返回 0。 
>
>     - ````
>       Number('')=> 0
>       ````
>
>   - 如果字符串包含除上述情况之外的其他字符，则返回 NaN。
>
>     - ````
>       Number('-1a') => NaN
>       ````

##### ParseInt函数

> **参数：**
>
> ​	一、字符串
>
> ​	二、进制数
>
> **注意：**
>
> ​	如果第一个参数是16进制数，则必须传入第二个参数

> **转换规则**
>
> let num1 = parseInt("1234blue"); // 1234 
>
> let num2 = parseInt(""); // NaN 
>
> let num3 = parseInt("0xA"); // 10，解释为十六进制整数
>
> let num4 = parseInt(22.5); // 22 
>
> let num5 = parseInt("70"); // 70，解释为十进制值
>
> let num6 = parseInt("0xf"); // 15，解释为十六进制整数

##### ParseFloat函数

> 参数： stirng

> **转换规则**
>
> let num1 = parseFloat("1234blue"); // 1234，按整数解析
>
> let num2 = parseFloat("0xA"); // 0 
>
> let num3 = parseFloat("22.5"); // 22.5 
>
> let num4 = parseFloat("22.34.5"); // 22.34 
>
> let num5 = parseFloat("0908.5"); // 908.5 
>
> let num6 = parseFloat("3.125e7"); // 31250000 

#### String类型

>ECMAScript 中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量.

**转换为字符串**

> 利用函数： toString()     String()
>
> toString: 数值、布尔值、对象、字符串。**注意**:null和undefined是没有该函数
>
> - 参数： 进制数
>
> ```js
> 转换规则
> arr2 = [1,2,3, 'a',null, undefined, false, {a: 2}, ['a']]
> arr2.toString()  以下对应转换成字符串的输出
> '1,2,3,a,,,false,[object Object],a'
> ```
>
> String(): 
>
> - 参数： 基本类型与引用类型
>
> ````
> let value1 = 10; 
> let value2 = true; 
> let value3 = null; 
> let value4; 
> console.log(String(value1)); // "10" 
> console.log(String(value2)); // "true" 
> console.log(String(value3)); // "null" 
> console.log(String(value4)); // "undefined"
> ````
>
> 因为null和undefined是没有toString()方法的 返回时空。 则可以利用该函数除去null和undefined。
>
> String() 可以鉴别该数据是否有null和undefined。

**模版字符串**

> ECMAScript 6 新增了使用模板字面量定义字符串的能力。与使用单引号或双引号不同，模板字面量保留换行字符，可以跨行定义字符串。
>
> ```js
> let myMultiLineTemplateLiteral = `first line 
> second line`;
> ```
>
> **字符串插值通过在${}中使用一个 JavaScript 表达式实现**
>
> ````js
> let value = 5; 
> let exponent = 'second'; 
> // 以前，字符串插值是这样实现的：
> let interpolatedString = 
>  value + ' to the ' + exponent + ' power is ' + (value * value); 
> // 现在，可以用模板字面量这样实现：
> let interpolatedTemplateLiteral = 
>  `${ value } to the ${ exponent } power is ${ value * value }`; 
> console.log(interpolatedString); // 5 to the second power is 25 
> console.log(interpolatedTemplateLiteral); // 5 to the second power is 25
> ````
>
> **注意点**
>
> > **所有插入的值都会使用 toString()强制转型为字符**
> >
> > 开发中注意点： 数组使用toString()方法 变为字符串。 如果想用有[]需自己添加。
> >
> > ​							对象Object.   转换后是[object Object]
> >
> > **所以字符串插值尽量用来转换基本类型。引用类型需要特别注意！！！！**
>
> **字符串插值规则**
>
> ````js
> 所有插入的值都会使用 toString()强制转型为字符串，而且任何 JavaScript 表达式都可以用于插值。嵌套的模板字符串无须转义。
> 	console.log(`Hello, ${ `World` }!`); // Hello, World! 
> 
> 将表达式转换为字符串时会调用 toString()：
> let foo = { toString: () => 'World' }; 
> console.log(`Hello, ${ foo }!`); // Hello, World! 
> 
> 在插值表达式中可以调用函数和方法：
> function capitalize(word) { 
>  return `${ word[0].toUpperCase() }${ word.slice(1) }`; 
> } 
> console.log(`${ capitalize('hello') }, ${ capitalize('world') }!`); // Hello, World! 
> 
> /* 此外，模板也可以插入自己之前的值：*/
> let value = ''; 
> function append() { 
>  value = `${value}abc` 
>  console.log(value); 
> } 
> append(); // abc 
> append(); // abcabc 
> append(); // abcabcabc
> ````

#### Sambol类型

>**使用场景**：当代码中充斥着很多魔法字符串时，使用symbol
>
>```jsx
>var shapeType = { triangle: 'Triangle'};// 魔法字符串 就是只用来做识别的
>//const shapeType = {
>  // triangle: Symbol()
>//};
>function getArea(shape, options) { 
>    var area = 0; 
>    switch (shape) { 
>      case shapeType.triangle:
>      area = .5 * options.width * options.height; 
>      break; 
>    } 
>    return area;
>}
>
>getArea(shapeType.triangle, { width: 100, height: 100 });
>```

#### Obejct类型

**创建对象方法**

> 第一种方式：
>
> ​	const o = new Object() 不推荐
>
> 第二种方式：
>
> ​	const o = {}
>
> 第三种方式：
>
> ​	构造函数创建对象

**公共属性**

> **constructor**: 用于创建当前对象的函数;
>
> **HasOwnProperty(PropertyName)**: 用于判断当前对象实例（不是原型）上是否存在给定的属
>
> 性。
>
> **isPrototypeOf(Object)**: 用于判断当前对象是否为另一个对象的原型。
>
> **propertyIsEnumerable(*propertyName*)**：用于判断给定的属性是否可以使用（本章稍后讨
>
> 论的）for-in 语句枚举。与 hasOwnProperty()一样，属性名必须是字符串。
>
> **toLocaleString()**: 返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
>
> **toString()**: 返回对象的字符串表示。
>
> **valueOf()**：返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。

### 操作符

**运算符优先级**

> 优先级从高到底
> 	1. ()  优先级最高
> 	2. 一元运算符  ++   --   !
> 	3. 算数运算符  先*  /  %   后 +   -
> 	4. 关系运算符  >   >=   <   <=
> 	5. 相等运算符   ==   !=    ===    !==
> 	6. 逻辑运算符 先&&   后||
> 	7. 赋值运算符	=
> 	8. 默认从左至右 除了 赋值运算 = 三目运算 ?: 指数运算 **

#### **一元操作符**

> 概念：只操作一个值的操作符叫一元操作符

**前置递增/递减操作符**

> 变量的值都会在语句被求值之前改变
>
> 比如 let num0 = 10
>
> ​		const num1 = ++num0 + 1.  // 这里先算++num0 在算num0+1。 递减同理

**后置递增/递减操作符**

> 变量的值都会在语句被求值之后改变
>
> 比如 let num0 = 10
>
> ​		const num1 = （num0--） + 1.  // 这里先算num0+1 在算num0--。 递减同理

**对其他类型运算规则**

>  对于字符串，如果是有效的数值形式，则转换为数值再应用改变。变量类型从字符串变成数值。
>
>  对于字符串，如果不是有效的数值形式，则将变量的值设置为 NaN 。变量类型从字符串变成数值。
>
>  对于布尔值，如果是 false，则转换为 0 再应用改变。变量类型从布尔值变成数值。
>
>  对于布尔值，如果是 true，则转换为 1 再应用改变。变量类型从布尔值变成数值。
>
>  对于浮点值，加 1 或减 1。 
>
>  如果是对象，则调用其（第 5 章会详细介绍的）valueOf()方法取得可以操作的值。对得到的
>
> 值应用上述规则。如果是 NaN，则调用 toString()并再次应用其他规则。变量类型从对象变成
>
> 数值。

#### 一元相加和减

> **一元相加/减**：**如果将一元加应用到非数值，则会执行与使用 Number()转型函数一样的类型转换**：布尔值 false和 true 转换为 0 和 1，字符串根据特殊规则进行解析，对象会调用它们的 valueOf()和/或 toString()方法以得到可以转换的值。
>
> 区别：一元加对number类型没有任何影响
>
> ​			一元减把非负值转变成负值

#### 位操作符

> ~~num   将浮点数转化成整数. (只对number类型有作用)

#### 布尔操作符

**逻辑非**

> 对数值进行取反。true = !false

**逻辑与(短路操作符)**

>   **第一个参数为false则返回本省，反之返回第二个操作符**
>
> **let result = true && false;   // false（注意：这里返回的数据本身，并不是布尔值）**
>
> **let result = false && true; // false** 
>
> 如果左边为真，返回右边(不管右边（或者左边）是什么表达式都返回)   var x = false
>
> var y= x==true || !x  &&  false   //y=false
>
> 如果左边为假，返回左边本身
>
> var y=   false &&  true//y= false 

**逻辑或(短路操作符)**

> 如果左边为真， 返回本身
>
> var y=   true &&  false//y= false 
>
> 如果左边为假，返回右边
>
> var y=   false&&  true  //y= false 

#### 乘性操作符

**乘法操作符**

> 乘法操作符由一个星号（*）表示，可以用于计算两个数值的乘积。
>
> let num = 2 * 2 // 4
>
> 规则：
>
> ​	即两个正值相乘是正值，两个负值相乘也是正值，正负符号不同的值相乘得到负值。如果 ECMAScript 不能表示乘积，则返回 Infinity 或-Infinity。 
>
>  如果有任一操作数是 NaN，则返回 NaN。
>
> 如果是 Infinity 乘以 0，则返回 NaN。 
>
>  如果是 Infinity 乘以非 0的有限数值，则根据第二个操作数的符号返回 Infinity 或-Infinity。 
>
>  如果是 Infinity 乘以 Infinity，则返回 Infinity。 
>
>  如果有不是数值的操作数，则先在后台用 Number()将其转换为数值，然后再应用上述规则。

**除法操作符**

> 除法操作符由一个斜杠（/）表示，用于计算第一个操作数除以第二个操作数的商
>
> **let result = 66 / 11;** 
>
>  如果有任一操作数是 NaN，则返回 NaN。 
>
>  如果是 Infinity 除以 Infinity，则返回 NaN。 
>
>  如果是 0 除以 0，则返回 NaN。 
>
>  **如果是非 0 的有限值除以 0，则根据第一个操作数的符号返回 Infinity 或-Infinity。** 
>
>  如果是 Infinity 除以任何数值，则根据第二个操作数的符号返回 Infinity 或-Infinity。 
>
>  如果有不是数值的操作数，则先在后台用 Number()函数将其转换为数值，然后再应用上述规则。

**取模操作符**

> **let result = 26 % 5; //** **等于** **1** 
>
>  如果操作数是数值，则执行常规除法运算，返回余数。
>
>  如果被除数是无限值，除数是有限值，则返回 NaN。 
>
>  如果被除数是有限值，除数是 0，则返回 NaN。 
>
>  如果是 Infinity 除以 Infinity，则返回 NaN。 
>
>  如果被除数是有限值，除数是无限值，则返回被除数。
>
>  如果被除数是 0，除数不是 0，则返回 0。 
>
>  如果有不是数值的操作数，则先在后台用 Number()函数将其转换为数值，然后再应用上述规则。

#### 指数操作符

> ECMAScript 7 新增了指数操作符，Math.pow()现在有了自己的操作符**，结果是一样的：
>
> console.log(Math.pow(3, 2); // 9 

指数赋值操作符

> 指数操作符也有自己的指数赋值操作符**=，该操作符执行指数运算和结果的赋值操作：
>
> let squared = 3; 
>
> squared **= 2;   // 2是指数
>
> console.log(squared); // 9 

#### 加性操作符

**加法操作符**

> let result1 = 5 + 5; // 两个数值
>
> console.log(result1); // 10 
>
> let result2 = 5 + "5"; // 一个数值和一个字符串
>
> console.log(result2); // "55" 

**减法操作符**

> let result1 = 5 - true; // true 被转换为 1，所以结果是 4 
>
> let result2 = NaN - 1; // NaN 
>
> let result3 = 5 - 3; // 2 
>
> let result4 = 5 - ""; // ""被转换为 0，所以结果是 5 
>
> let result5 = 5 - "2"; // "2"被转换为 2，所以结果是 3 
>
> let result6 = 5 - null; // null 被转换为 0，所以结果是 5 

#### 关系操作符

> 关系操作符执行比较两个值的操作，包括小于（<）、大于（>）、小于等于（<=）和大于等于（>=），用法跟数学课上学的一样。这几个操作符都返回布尔值.  
>
> ​        基础中的基础不再赘述

**规则**

> 注意： **比较 NaN 时，无论是小于还是大于等于，比较的结果都会返回 false。**
>
>  如果操作数都是数值，则执行数值比较。
>
>  如果操作数都是字符串，则逐个比较字符串中对应字符的编码。
>
>  如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较。
>
>  如果有任一操作数是对象，则调用其 valueOf()方法，取得结果后再根据前面的规则执行比较。
>
> 如果没有 valueOf()操作符，则调用 toString()方法，取得结果后再根据前面的规则执行比较。
>
>  如果有任一操作数是布尔值，则将其转换为数值再执行比较。

#### 想等操作符

**等于和不等于**

> 值要想等，类型不需要想等
>
> 等于： 1 == ‘1’  // true
>
> 不等于：  1 != 1 //false

全等与不全等

> 值要想等，并且数值也要想等
>
> "55" === 55. // 

#### 条件操作符(三元元算符)

> variable = boolean_expression ? true_value : false_value; 
>
> // boolean_expression.  true_value 反之 false_value

#### 赋值操之符

> 简单赋值用等于号（=）表示，将右手边的值赋给左手边的变量，如下所示：
>
> let num = 10; 

#### 逗号操作符

> 逗号操作符可以用来在一条语句中执行多个操作，如下所示：
>
> let num1 = 1, num2 = 2, num3 = 3; 
>
> 在一条语句中同时声明多个变量是逗号操作符最常用的场景。不过，也可以使用逗号操作符来辅助赋值。在赋值时使用逗号操作符分隔值，最终会返回表达式中最后一个值：
>
> let num = (5, 1, 4, 8, 0); // num 的值为 0 

### 语句

#### if语句

#### do-while语句

#### while语句

#### for语句

#### for-in语句

#### for-of语句

#### 标签语句

#### break和continue语句

#### with语句

#### switch语句

以上过于基础不再赘述
