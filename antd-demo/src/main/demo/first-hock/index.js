import React, { useState, useEffect } from 'react'
// 引入 useState

function FirstHock() {
// 声明一个叫 "count" 的 state 变量，并设置初始值为0
// useState 方法它返回一个有两个值的数组。第一个值是当前的 state，第二个值是更新 state 的函数
    const [count, setCount] = useState(0);
    // 类似于componentdidmount 和 componentdiddupdate
    useEffect(() => {
        // 使用浏览器API更新文档标题
        document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                点我加1
            </button>
        </div>
    );
}

export default FirstHock