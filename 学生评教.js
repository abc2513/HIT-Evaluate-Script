/*
# HIT评教系统脚本

本脚本用于在hit评教系统，辅助完成学期学生评教的填写。该脚本是一个纯文本文件，使用文本编辑器/vscode之类的工具打开，然后手动复制到浏览器，一个评教页面复制一行代码就行。

免责声明：本代码仅供编程爱好者学习交流前端编码、JavaScript编程知识，无恶意导向！

首发：github.com/abc2513

使用步骤：

1. 打开评教系统的某个页面
2. 右键评教区域，在右键菜单中选择“检查”（这一步同时做了为开发者工具选中子页面的操作，不可省略！）
3. 在浏览器控制台工具中选择“控制台”，然后复制粘贴脚本文件中对应的那一行代码（在粘贴时浏览器可能会拒绝粘贴到控制台，这时候根据控制台的提示输入特定文本就能粘贴了）
4. 回车让控制台执行那一行代码，就能看到结果了。控制台返回值是改变选择框的个数。
5. 这时候你可能会想要修改部分内容，手动修改后点提交/保存就行了！

执行失败的可能情况

1. Q：控制台报错（红色信息）。A：可能是你的浏览器太老了不兼容部分语法，换个新的浏览器
2. Q：控制台没报错，但是页面没变，控制台的消息是“0”。A：这个系统页面有页面嵌套子页面的情况，选择器是选不到子页面里面的元素的；你需要在控制台里切换选中的页面。当然，你不知道怎么做的话，再做一次上面的步骤2也是一样的。

*/



//评课评教材
[...document.querySelectorAll('select')].map(item=>item.selectedIndex=2).length;
//评教与评学
[...(document.querySelectorAll('select'))].filter(item=>item.name.startsWith('tab')).map(item=>(item.selectedIndex=3)+item.dispatchEvent(new Event('change'))).length;
//评价实验课
[...document.querySelectorAll('select')].map(item=>item.selectedIndex=3).length;
//评价实验教师
[...(document.querySelectorAll('select'))].filter(item=>item.name.startsWith('tab')).map(item=>(item.selectedIndex=3)+item.dispatchEvent(new Event('change'))).length;