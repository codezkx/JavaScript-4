//  g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。
//  i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。
//  m：多行模式，表示查找到一行文本末尾时会继续查找。
//  y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。
//  u：Unicode 模式，启用 Unicode 匹配。
//  s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。

const pattern1: RegExp = /\[bc\]at/i;
console.log(pattern1.global) // 是否设置全局检索  默认fasle
console.log(pattern1.ignoreCase)  // 是否设置忽略大小写 默认true
console.log(pattern1.multiline) // 是否设置多行模式
console.log(pattern1.lastIndex) // 是否粘附模式
console.log(pattern1.source) // 是否设置匹配任何字符
console.log(pattern1.flags) // 返回是否是斜杠模式

