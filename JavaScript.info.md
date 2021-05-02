# JavaScript.info

> ## 变量命名

JavaScript 的变量命名有两个限制：

变量名称必须仅包含字母，数字，符号 $ 和 _。
首字符必须非数字。

> ## 区分大小写

命名为 apple 和 AppLE 的变量是不同的两个变量。

> ## 大写形式的常数

一个普遍的做法是将常量用作别名，以便记住那些在执行之前就已知的难以记住的值。

使用大写字母和下划线来命名这些常量。

例如，让我们以所谓的“web”（十六进制）格式为颜色声明常量：

    const COLOR_RED = "#F00";
    const COLOR_GREEN = "#0F0";
    const COLOR_BLUE = "#00F";
    const COLOR_ORANGE = "#FF7F00";

> ## BigInt 类型

number 类型无法表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数

BigInt 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。

    // 尾部的 "n" 表示这是一个 BigInt 类型
    const bigInt = 1234567890123456789012345678901234567890n;

> ## 反引号

反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。例如：

    let name = "John";

    // 嵌入一个变量
    alert( `Hello, ${name}!` ); // Hello, John!

    // 嵌入一个表达式
    alert( `the result is ${1 + 2}` ); // the result is 3

> ## 求幂 **

求幂运算 a ** b 是 a 乘以自身 b 次。

    alert( 4 ** (1/2) ); // 2（1/2 次方与平方根相同)
    alert( 8 ** (1/3) ); // 2（1/3 次方与立方根相同)

> ## 空值合并运算符 '??'

通常 ?? 的使用场景是，为可能是未定义的变量提供一个默认值。

例如，在这里，如果 user 是未定义的，我们则显示 Anonymous：

    let user;
    alert(user ?? "Anonymous"); // Anonymous
