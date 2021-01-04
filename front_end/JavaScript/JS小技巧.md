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
