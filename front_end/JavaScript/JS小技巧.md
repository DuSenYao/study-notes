---
title: JS小技巧
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

# JS小技巧

1. 关闭页面弹出框

    ```js
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      event.returnValue = "确定离开当前页面吗？";
    })
    ```

2. 异或运算小技巧：用异或运算交换两个整数的值

    ```js
    // 异或运算有个特征，两次异或运算相当于取消
    let a = 102; let b = 304;
    a = a ^ b; // 342  102 ^ 304 = 342
    b = a ^ b; // 102  342 ^ 304 = 102
    a = a ^ b; // 304  342 ^ 102 = 304
    console.log(a, b); // 304 102
    ```
