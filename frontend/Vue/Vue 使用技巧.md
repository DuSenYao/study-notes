# Vue 使用技巧

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Vue 使用技巧](#vue-使用技巧)
- [v-for 指令支持在渲染前对数据进行额外的处理](#v-for-指令支持在渲染前对数据进行额外的处理)

<!-- /code_chunk_output -->

## v-for 指令支持在渲染前对数据进行额外的处理

```html
<ul>
  <li v-for="(item, index) in handle(list)">
    <span>{{ `${index}.${item.name}` }}</span>
  </li>
</ul>
```

## 多事件处理

```html
<button @click="click(2), log($event)">点击</button>
```
