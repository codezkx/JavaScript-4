export namespace exec {
    type execArray = RegExpExecArray
    // 如果没有设置全局标记，则无论对同一个字符串调用多少次 exec()，也只会返回第一个匹配的信息。
    const text: string = "cat, bat, sat, fat";
    const pattern: RegExp = /.at/;
    // 如何对象可能为空需要使用类型断言
    const matches: execArray = pattern.exec(text) as execArray;
    // console.log(matches);
    // console.log(matches!.index);
    // console.log(matches[0]);
    // console.log(pattern!.lastIndex);
    // 如果在这个模式上设置了 g 标记，则每次调用 exec()都会在字符串中向前搜索下一个匹配项
    const pattern1: RegExp = /.at/g;
    let matches1: execArray = pattern1.exec(text) as execArray;
    console.log(matches1!.index);
    console.log(matches1[0]);
    console.log(pattern1!.lastIndex);
    matches1 = pattern1.exec(text) as execArray;
    console.log(matches1!.index);
    console.log(matches1[0]);
    console.log(pattern1!.lastIndex)
    // 如果模式设置了粘附标记 y，则每次调用 exec()就只会在 lastIndex 的位置上寻找匹配项。粘附标记覆盖全局标记。
    const pattern2: RegExp = /.at/y;
    let matches2: execArray = pattern2.exec(text) as execArray;
    console.log(matches2.index); // 0 
    console.log(matches2[0]); // cat 
    console.log(pattern2.lastIndex); // 3 
    // 以索引 3 对应的字符开头找不到匹配项，因此 exec()返回 null 
    // exec()没找到匹配项，于是将 lastIndex 设置为 0 
    matches2 = pattern2.exec(text); 
    console.log(matches2); // null 
    console.log(pattern2.lastIndex); // 0 
    // 向前设置 lastIndex 可以让粘附的模式通过 exec()找到下一个匹配项：
    pattern2.lastIndex = 5; 
    matches3 = pattern2.exec(text); 
    console.log(matches3.index); // 5 
    console.log(matches3[0]); // bat 
    console.log(pattern2.lastIndex); // 8
}