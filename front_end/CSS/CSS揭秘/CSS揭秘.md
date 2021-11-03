---
title: CSS 揭秘
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

# CSS 揭秘

下面的JS 示例都是原生JS，只会用到一个工具函数 $$()。它可以获取和遍历所有匹配特定CSS选择符的DOM元素，定语如下：

```js
function $$(selector, context) {
  let dom  = context || document;
  let elements = dom.querySelectorAll(selector);
  return Array.prototype.slice.call(elements)
}
```

## 一. 简介

### 1.1 Web 标准
