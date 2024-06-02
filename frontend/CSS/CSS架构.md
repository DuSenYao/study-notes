# CSS 架构

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

## 一. 设计模式

### 1.1 OOCSS

**OOCSS（Object Oriented CSS）**，面向对象的 CSS。

核心思想是**将页面中的元素抽象为对象，通过组合这些对象来构建页面**。

- **原则**

  - **容器与内容分离**

    ```html
    <!-- 容器与内容分离 -->
    <!-- post 中的 meta-data -->
    <div class="post">
      <p class="metadata"><a>Author name</a>commented on<a>21-02-2010</a>@</p>
    </div>
    <!-- comment 中的 meta-data -->
    <div class="comment">
      <p class="metadata"><a>Author-name</a>commented on<a>21-02-2010</a>@</p>
    </div>
    <style>
      .post { css code }
      .metadata { css code }
    </style>
    ```

  - **结构（基础对象）与皮肤分离**

    ```html
    <div class="menu fix"></div>
    <style>
      /* 结构（基础对象） */
      .menu {
        color: green;
        font-size: 14px;
      }
      /* 皮肤 */
      /* 通过扩展来对基础对象进行修改 */
      .fix {
        color: red;
        font-size: 16px;
      }
    </style>
    ```

- **优点**：代码复用，减少重复代码，提高代码的可维护性
- **缺点**：类名过多，增加了代码的复杂度

应用场景：**组件化开发**，**模块化开发**。

### 1.2 BEM

这种设计模式将**命名规范、让页面结构清晰**，本质是进阶版的 OOCSS。

- **块（Block）**：独立的实体，具有意义的整体。
- **元素（Elemnet`_`）**：用于描述块的子元素。
- **修饰符（Modifier`--`）**：用于修改块或元素的样式，不能单独存在。

```html
<!--BEM-->

<div class="menu">
  <div class="menu_tab menu_tab--style1">tab1</div>
  <div class="menu_tab menu_tab--style1">tab2</div>
  <div class="menu_tab menu_tab--style1">tab3</div>
  <div class="menu_tab menu_tab--style1">tab4</div>
</div>

<div class="menu menu--style3">
  <div class="menu_tab menu_tab--style2">tab1</div>
  <div class="menu_tab menu_tab--style2">tab2</div>
  <div class="menu_tab menu_tab--style2">tab3</div>
  <div class="menu_tab menu_tab--style2">tab4</div>
</div>
```

- **优点**：代码清晰，易于维护。
- **缺点**：类名过长，增加了代码的复杂度。

### 1.3 SMACSS
