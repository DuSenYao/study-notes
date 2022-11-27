# VisualStudioCode

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [VisualStudioCode](#visualstudiocode)
  - [一. 常用知识](#一-常用知识)
    - [1.1 常用快捷键](#11-常用快捷键)
      - [1.1.1 通用](#111-通用)
      - [1.1.2 跳转](#112-跳转)
      - [1.1.3 基本编辑](#113-基本编辑)
      - [1.1.4 编程语言编辑](#114-编程语言编辑)
      - [1.1.5 搜索与替换](#115-搜索与替换)
      - [1.1.6 多光标与选择](#116-多光标与选择)
      - [1.1.7 窗口显示](#117-窗口显示)
      - [1.1.8 编辑器管理](#118-编辑器管理)
      - [1.1.9 文件管理](#119-文件管理)
    - [1.2 全部搜索-高级搜索选项](#12-全部搜索-高级搜索选项)
    - [1.3 编程语言定义代码块的起始和结束区域的标记](#13-编程语言定义代码块的起始和结束区域的标记)
    - [1.4 命令行打开](#14-命令行打开)
    - [1.5 打开结果视图查看一个符号的所有引用](#15-打开结果视图查看一个符号的所有引用)
    - [1.6 跳转符号按类型进行分组](#16-跳转符号按类型进行分组)
    - [1.7 配置语言的文件关联](#17-配置语言的文件关联)
  - [二. 常用功能](#二-常用功能)
    - [2.1 代码片段](#21-代码片段)
      - [2.1.1 使用代码片段](#211-使用代码片段)
      - [2.1.2 自定义代码片段](#212-自定义代码片段)
      - [2.1.3 代码片段的生效范围](#213-代码片段的生效范围)
      - [2.1.4 代码片段的语法](#214-代码片段的语法)
      - [2.1.5 定义代码片段快捷键](#215-定义代码片段快捷键)
    - [2.2 Git 控制](#22-git-控制)
      - [2.2.1 合并冲突](#221-合并冲突)
      - [2.2.2 设置 Git 默认编辑器](#222-设置-git-默认编辑器)
    - [2.3 Task 自动化任务](#23-task-自动化任务)
      - [2.3.1 配置并运行 Task](#231-配置并运行-task)
      - [2.3.2 Task 的属性](#232-task-的属性)
        - [2.3.2.1 输出行为](#2321-输出行为)
        - [2.3.2.2 运行行为](#2322-运行行为)
        - [2.3.2.3 变量替换](#2323-变量替换)
    - [2.4 多项目工作区（multi-root Workspaces）](#24-多项目工作区multi-root-workspaces)
      - [2.4.1 工作区文件](#241-工作区文件)
      - [2.4.2 与单文件夹的区别](#242-与单文件夹的区别)
  - [三. 调试](#三-调试)
    - [3.1 launch.json](#31-launchjson)
    - [3.2 launch.json 属性](#32-launchjson-属性)
      - [3.2.1 重要属性](#321-重要属性)
      - [3.2.2 可以被定义在 launch 和 attach 的配置属性](#322-可以被定义在-launch-和-attach-的配置属性)
      - [3.2.3 只能被定义在 launch 的配置属性](#323-只能被定义在-launch-的配置属性)
      - [3.2.4 只能被定义在 attach 的配置属性](#324-只能被定义在-attach-的配置属性)
      - [3.2.5 操作系统相关属性](#325-操作系统相关属性)
      - [3.2.6 远程调试相关属性](#326-远程调试相关属性)
    - [3.3 断点的种类和使用](#33-断点的种类和使用)
    - [3.4 调试面板](#34-调试面板)
  - [四. 插件](#四-插件)
    - [4.1 有趣的插件](#41-有趣的插件)
  - [五. 语言深入](#五-语言深入)
    - [5.1 JavaScript](#51-javascript)
    - [5.2 代码编辑](#52-代码编辑)
      - [5.2.1 IntelliSense](#521-intellisense)
      - [5.2.2 JSDoc](#522-jsdoc)
      - [5.2.3 自动导入](#523-自动导入)
      - [5.2.4 JSX](#524-jsx)
      - [5.2.5 代码导航](#525-代码导航)
      - [5.2.6 重构](#526-重构)
      - [5.2.7 移除无用的代码和变量](#527-移除无用的代码和变量)
      - [5.2.8 整理导入语句](#528-整理导入语句)
      - [5.2.9 文件移动时更新导入语句](#529-文件移动时更新导入语句)
      - [5.2.10 引用的 CodeLens](#5210-引用的-codelens)
      - [5.2.11 类型检查](#5211-类型检查)
      - [5.2.13 静态代码检查](#5213-静态代码检查)
      - [5.2.14 测试](#5214-测试)
    - [5.3 TypeScript](#53-typescript)
      - [5.3.1 准备工作](#531-准备工作)
      - [5.3.2 编译](#532-编译)
      - [5.3.3 调试](#533-调试)
    - [5.4 代码编辑](#54-代码编辑)
      - [5.4.1 代码编辑的配置](#541-代码编辑的配置)
      - [5.4.2 隐藏 JS 文件](#542-隐藏-js-文件)
      - [5.4.3 使用不同版本的 TS](#543-使用不同版本的-ts)
  - [六. 前端开发](#六-前端开发)
    - [6.1 HTML](#61-html)
      - [6.1.1 IntelliSense](#611-intellisense)
      - [6.1.2 自动闭合标签](#612-自动闭合标签)
      - [6.1.3 颜色选择器](#613-颜色选择器)
      - [6.1.4 验证嵌入的 JS 和 CSS](#614-验证嵌入的-js-和-css)
      - [6.1.5 代码折叠](#615-代码折叠)
      - [6.1.6 代码格式化](#616-代码格式化)
      - [6.1.7 自定义 HTML 数据格式](#617-自定义-html-数据格式)
    - [6.2 CSS/SCSS/Less](#62-cssscssless)
      - [6.2.1 IntelliSense](#621-intellisense)
      - [6.2.2 颜色预览](#622-颜色预览)
      - [6.2.3 颜色选择器](#623-颜色选择器)
      - [6.2.4 代码折叠](#624-代码折叠)
      - [6.2.5 静态代码检查](#625-静态代码检查)
      - [6.2.6 跳转到 CSS 符号](#626-跳转到-css-符号)
      - [6.2.7 悬停预览](#627-悬停预览)
      - [6.2.8 自定义 CSS 数据格式](#628-自定义-css-数据格式)
    - [6.3 Emmet](#63-emmet)
      - [6.3.1 Emmet 的支持范围](#631-emmet-的支持范围)
      - [6.3.2 在 HTML 中使用 Emmet](#632-在-html-中使用-emmet)
      - [6.3.3 在 CSS 中使用 Emmet](#633-在-css-中使用-emmet)
      - [6.3.4 设置 Emmet](#634-设置-emmet)
      - [6.3.5 Emmet 设置项](#635-emmet-设置项)
      - [6.3.6 自定义 Emmet 片段](#636-自定义-emmet-片段)
    - [6.4 Vue](#64-vue)
      - [6.4.1 快速开始](#641-快速开始)
      - [6.4.2 调试 Vue](#642-调试-vue)
      - [6.4.3 Vue 设置 VSCode 识别别名](#643-vue-设置-vscode-识别别名)
  - [七. 远程开发](#七-远程开发)

<!-- /code_chunk_output -->

---

## 一. 常用知识

### 1.1 常用快捷键

#### 1.1.1 通用

- `Ctrl + Shift + P` 或 `F1`：打开命令面板
- `Ctrl + K Ctrl + S`：打开快捷键编辑器
- `Ctrl + W`：关闭当前窗口
- `Ctrl + ,`：打开用户设置
- Ctrl + `：打开集成终端
- `Shift + Alt + 鼠标左键`：列选择

#### 1.1.2 跳转

- `Ctrl + P`：跳转到最近打开的文件
- `Ctrl + Shift + Tab / Ctrl + Tab`：在已打开的文件中跳转
- `Ctrl + Shift + O`：跳转到文件中的符号
- `Ctrl + G`：跳转到文件中的某一行
- `Home/end`：光标移动到当前行的起始/结尾
- `Ctrl + Home/end`：光标移动到当前文档的起始/结尾

#### 1.1.3 基本编辑

- `Ctrl + Shift + [ / ]`：折叠或展开当前代码块
- `Alt + ← / →`：向前/向编辑位置后跳转
- `Ctrl + Shift + K`：删除当前行
- `Alt + ↑ / ↓`：把当前行内容向上/下移动
- `Shift + Alt + ↑ / ↓`：把当前行内容向上/下复制
- `Ctrl + /`：添加或删除当前行的注释

#### 1.1.4 编程语言编辑

- `Ctrl + Shift + I`：格式化文档
- `Ctrl + K Ctrl + F`：格式化选定内容
- `F12`：跳转到定义
- `Alt + F12`：在当前页查看定义
- `Shift + F12`：查看引用
- `F2`：重命名符号
- `Ctrl + .`：快速修复
- `Ctrl + Shift + \`：在匹配的括号之间跳转

#### 1.1.5 搜索与替换

- `Ctrl + F`：搜索
- `Ctrl + H`：替换
- `Ctrl + Shift + F`：全局搜索
- `Ctrl + Shift + H`：全局替换

#### 1.1.6 多光标与选择

- `Alt + 鼠标左键`：插入一个新的光标
- `Ctrl + Alt + ↑ / ↓`：在上/下方添加一个光标
- `Ctrl + D`：第一次按下快捷键会选择当前光标处的单词，再次按下快捷键，会在下一个相同单词的位置添加一个新光标
- `Ctrl + Shift + L`：会在当前光标处单词所有出现的位置，都添加光标
- `Ctrl + L`：选中当前行
- `Shift + Alt + ← / →`：缩小/扩大选中的范围

#### 1.1.7 窗口显示

- `Ctrl + =/-`：窗口放大/缩小

#### 1.1.8 编辑器管理

- `Ctrl + \`：向右分割编辑器
- `Ctrl +1/2/3`：把焦点移动到不同的编辑器组

#### 1.1.9 文件管理

- `Ctrl + N`：新建文件
- `Ctrl + Shift + N`：新建编辑器
- `Ctrl + O`：打开文件
- `Ctrl + Tab`：向前在已打开的文件中选择一个
- `Ctrl + Shift + Tab`：向后在已打开的文件中选择一个

### 1.2 全部搜索-高级搜索选项

单击全部搜索输入框下方的省略号或使用 `Ctrl + Shift + J` 快捷键，可以调出高级搜索选项：**要包含的文件**和**排除的文件**，需要以 `.` 开头并且全拼，文件后缀名用 `,` 分隔。

### 1.3 编程语言定义代码块的起始和结束区域的标记

| 编程语言      | 起始区域                       | 结束区域                           |
| ------------- | ------------------------------ | ---------------------------------- |
| CSS/Less/SCSS | /\* #region \*/                | /\* #endregion \*/                 |
| CSS/Less/SCSS | /\* #region \*/                | /\* #endregion \*/                 |
| C/C++         | #pragma region                 | #pragma endregion                  |
| Java          | //#region 或 `//<editor-fold>` | //#endregion 或 `//</editor-fold>` |
| Python        | #region                        | #endregion                         |
| TypeScript/JS | // #region                     | // #endregion                      |
| Markdown      | \<!--#region-->                | \<!--endregion-->                  |

### 1.4 命令行打开

在命令行中输入 `code .` ，可以启动 VSCode 并直接打开当前文件夹

### 1.5 打开结果视图查看一个符号的所有引用

`Shift + Alt + F12` 快捷键或编辑菜单中的 Find All Reference，可以打开结果视图查看一个符号的所有引用。

### 1.6 跳转符号按类型进行分组

`Ctrl + Shift + O` 可以跳转到当前文件中的不同符号，通过输入 `:`，所有的符号都会按类型进行分组。

### 1.7 配置语言的文件关联

通过 `files.associations` 设置项，可以把一个新的文件扩展名添加到已有的编程语言中。

## 二. 常用功能

### 2.1 代码片段

#### 2.1.1 使用代码片段

1. 通过 `Ctrl + Shift + P` 快捷键打开命令面板，输入并执行 `Insert Snippet` 命令，会显示适合当前语言的所有代码片段的列表。

2. 在编辑器中编写代码时，VSCode 会提供智能提示功能，通过智能提示即可插入代码片段。

#### 2.1.2 自定义代码片段

命令面板的 `Preferences: Configure User Snippets`。代码片段的定义文件是 jsonc 格式的，支持 C 语言风格的注释：

```json
"For Loop": { // 代码片段名称
  // 定义了代码片段在 IntelliSense 中触发的单词。字符串的子串也可以作为触发条件。fc 也会匹配 for-const
  "prefix": ["for", "for-const"],
  // body 包含了三个占位符 ${2:element} ${1:array} 和 $0，在插入代码片段后，可以通过 Tab 键在占位符之间按顺序进行跳转
  // 冒号后面是默认的文本，前面的数字是出现的顺序，0 是最终的位置
  // 定义了要被插入的代码片段，它使用了数组，每一个元素表示一行独立的内容。这里有 3 行代码片段
  "body": [
    "for (const ${2:element} of ${1:array}) {",
    "\t$0",
    "}"
  ],
  // 可选项，定义了在 IntelliSense 中显示的描述性文本
  "description": "A for loop."
}
```

也可以使用这个[网站](https://snippet-generator.app/)快捷生成。生成的代码需要做一些修改，`${workspaceFolder}` 这部分和 snippets 的语法有冲突，所以需要加上个 `\\` 来转义。

#### 2.1.3 代码片段的生效范围

1. **语言维度**：定义代码对于哪些语言生效，每一个代码片段都可以在一种、多种或所有语言的范围内生效。

   - 一种语言的代码片段会被定义在对应语言的代码片段定义文件中，如：JavaScript 的代码片段被定义在 `javascript.json` 中

   - 多语言的代码片段被定义在以 `.code-snippets` 为结尾的 JSON 文件中，这个文件中有一个 `scope` 属性，它会包含一个或多个语言 ID，从而定义当前的代码片段对哪些语言生效，如果没有 `scope` 属性，当前的代码片段会对所有语言生效。

2. **项目维度**：定义代码片段实在当前项目中生效还是在全局范围内生效

   创建代码片段时的，`New Snippets file for '...'` 选项创建的是当前项目的代码片段，当前项目的代码片段的定义文件位于 `.vscode` 文件夹下的 `.code-snippets` 结尾的 JSON 文件中。对于多人协同开发的项目，当前项目维度的代码片段会十分有用。

#### 2.1.4 代码片段的语法

**Tabstops**
: 通过 Tabstops，可以使光标在代码片段中跳转。可以使用 `$1`、`$2`、`$3`等代码片段中的字符来指定光标的位置。光标会根据指定的位置对`$1`、`$2`、`$3` 等依次进行遍历。比较特殊的字符是 `$0`，它是光标抵达的最后一个字符。对于**数字一样**的 Tabstops，在编辑代码片段时，Tabstops 中的文本内容也会**随之更新**。

**占位符**
: 占位符是**包含默认**的 Tabstops，如: `${1:foo}`。占位符的文本会被默认地添加到相应 Tabstops 的位置。

**选择**
: 占位符可以把多个值作为文本内容。多个值以逗号分隔，并且用管道字符包围，如: `${1|noe,two,three|}`。当代码片段被插入后，跳转到对应的占位符时，会出现下拉列表，以便选择对应的文本。

**[变量](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)**（variable）
: 通过 `$variable` 或 `${variable:default}` 可以插入变量的值。当变量为空时，会插入默认值或空字符串。

- 可以使用的变量，如下所示：

  - `TM_SELECTED_TEXT`：当前被选中的文本
  - `TM_CURRENT_LINE`：当前光标所在行的文本
  - `TM_CURRENT_WORD`：当前光标所在的单词
  - `TM_LINE_INDEX`：从 0 开始计数的行号
  - `TM_LINE_NUMBER`：从 1 开始计数的行号
  - `TM_FILENAME`：当前文件的文件名
  - `TM_FILENAME_BASE`：当前文件的文件名（不包含扩展名）
  - `TM_DIRECTORY`：当前文件的目录名
  - `TM_FILEPATH`：当前文档的完整文件路径
  - `RELATIVE_FILEPATH`：当前文档的相对（相对于打开的工作区或文件夹）文件路径
  - `CLIPBOARD`：当前粘贴板的文本内容
  - `WORKSPACE_NAME`：当前工作区的目录名
  - `WORKSPACE_FOLDER`：打开的工作区或文件夹的路径
  - `CURSOR_INDEX`：基于零索引的光标编号
  - `CURSOR_NUMBER`：基于一个索引的光标编号

- 下面的变量可以用来插入**日期**和**时间**：

  - `CURRENT_YEAR`：当前的年份
  - `CURRENT_YEAR_SHORT`：当前年份的后两位数字
  - `CURRENT_MONTH`：当前月份的两位数字（如‘02’）
  - `CURRENT_MONTH_NAME`：当前月份的全称（如‘July’）
  - `CURRENT_MONTH_NAME_SHORT`：当前月份的简称（如‘Jul’）
  - `CURRENT_DATE`：当前月份的今天（如‘25’）
  - `CURRENT_DAY_NAME`：当前是星期几（如‘Monday’）
  - `CURRENT_DAY_NAME_SHORT`：当前是星期几（简称，如‘Mon’）
  - `CURRENT_HOUR`：当前的小时数（24 小时制）
  - `CURRENT_MINUTE`：当前的分钟数
  - `CURRENT_SECOND`：当前的秒数
  - `CURRENT_SECONDS_UNIX`：UNIX 时间(从 UTC1970 年 1 月 1 日 0:0:0 开始到现在的总秒数)

- 要插入随机值：

  - `RANDOM`：6 个随机十进制数字
  - `RANDOM_HEX`：6 个随机十六进制数字
  - `UUID`：版本 4 UUID

- 下面的变量可以用来插入注释，并且会根据不同的语言插入相应的注释：

  - `BLOCK_COMMENT_START`：块注释的开始字符。比如，HTML 是 `<!--`
  - `BLOCK_COMMENT_END`：块注释的结束符。比如，HTML 是 `-->`
  - `LINE_COMMENT`：行注释，比如，HTML 是 `<!-- -->`

#### 2.1.5 定义代码片段快捷键

打开命令面板，输入并执行 **Preferences:Open Keyboard Shortcuts(JSON)** 命令，可以打开定义快捷键的 **keybindings.json** 文件：

```json
{
  "key": "ctrl+shift+7", // 快捷键绑定命令
  "command": "editor.action.insertSnippet", // 要执行的命令的名称，这里的名称是 插入片段
  "when": "editorTextFocus", // 快捷键处于可以触发的条件，这里是 编辑文本焦点
  "args": {
    "snippet": "console.log($1)$0", // 设置的代码片段
    "langId": "javascript", // 引入代码片段的语言ID
    "name": "For Loop" // 引入语言JSON文件中的代码片段名称
  }
}
```

> **注意**：有的语言默认不开启快速提示，可以在 `settings.json` 文件中针对语言设置 **"editor.quickSuggestions": true**。

### 2.2 Git 控制

左下角的状态栏会显示当前所在的 Git 分支。

当对本地 Git 仓库的文件进行更改时，在编辑器的行号与源代码之间的沟槽中会有相应的提示，对于**增删改**，有以下三种不同的提示：

- **蓝色条**：表明这些行的代码有更改
- **绿色条**：表明新增了代码
- **红色小三角**：表明当前位置删除了代码

#### 2.2.1 合并冲突

当 VSCode 检测到 Git 合并冲突时，冲突的部分会被高亮显示，还会有不同的内联操作帮助快速解决冲突，如下所示：

- `Accept Current Change`：保留当前的更改
- `Accept Incoming Change`：保留新进来的更改
- `Accept Both Changes`：保留所有的更改
- `Compare Changes`：在 diff 视图中比较更改

#### 2.2.2 设置 Git 默认编辑器

1. 命令行中运行 `git config --global core.editor "code --wait"`，把 VSCode 设为 Git 的默认编辑器
2. 命令行中运行 `git config --global -e`，会调出 VSCode 来打开全局的 `.gitconfig` 文件，以配置 Git

   ```gitconfig
   [diff]
     tool = default-difftool
   [difftool "default-difftool"]
     cmd = code --wait --diff $LOCAL $REMOTE
   [merge]
     tool = code
   ```

### 2.3 Task 自动化任务

许多工具都可以把重复的任务自动化，包括代码静态检查、编译、打包、测试、部署等。如：

- **编译**：TypeScript 编译器、Java 编译器等
- **静态检查**：ESLint、TSLint 等
- **代码构建**：Make、Ant、Gulp 等

Task（任务）可以被用来**运行脚本**或**启动一个进程**。因此，许多工具都可以通过 Task 直接在 VSCode 中运行，而不需要额外再命令行中输入命令。Task 被配置在 `.vscode` 文件夹下的 `tasks.json` 文件中。

#### 2.3.1 配置并运行 Task

**配置**：终端 -> 配置任务

**运行**：点击 终端 -> 运行任务，会显示出所有可以运行的 Task，选择一个 Task 后，会选择要针对何种错误和警告扫描 Task 的输出。选择后，一个新的终端被创建，命令在终端中执行。按下任意键，终端会被关闭。

#### 2.3.2 Task 的属性

- `label`：在用户界面上展示的 Task 标签

- `type`：Task 的类型，分为以下两种：

  - `shell`：作为 Shell 命令运行（如 bash、cmd、PowerShell 等）
  - `process`：作为一个进程运行

- `command`：真正执行的命令
- `windows`：Windows 中的特定属性。相应的属性会在 Windows 系统中覆盖默认的属性定义。
- `linux`：特定于 Linux 的属性。
- `osx`：特定于 macOS 的属性。
- `group`：定义 Task 属于哪一个组。分为 `test` 和 `build`、`none`。
- `presentation`：定义用户界面如何处理 Task 的输出。
- `options`：定义 cwd（当前工作目录）、env（环境变量）和 shell 的值。
- `runOptions`：定义 Task 何时运行及如何运行

- `problemMatcher`：要使用的问题匹配程序。可以是一个字符串或一个问题匹配程序定义，也可以是一个字符串数组和多个问题匹配程序。

  通过问题匹配器，可以对 Task 的输出进行扫描，找到对应的错误和警告。VSCode 中内置了一系列的问题匹配器，不同语言的属性如下所示：

  | 编程语言               | 问题匹配器        |
  | ---------------------- | ----------------- |
  | TypeScript             | `$tsc`            |
  | TypeScript Watch       | `$tsc-watch`      |
  | JSHint                 | `$jshint`         |
  | JSHint Stylish         | `$jshint-stylish` |
  | ESLint Compact         | `$eslint-compact` |
  | ESLint Stylish         | `$eslint-stylish` |
  | Go                     | `$go`             |
  | CSHarp and VB Compiler | `$msCompile`      |
  | Lessc compiler         | `$lessc`          |
  | Node Sass compiler     | `$node-sass`      |

- `args`：调用任务时要传递给命令的参数。

  ```jsonc
  {
    "label": "dir",
    "type": "shell",
    "command": "dir /b"
  },
  // 等于
  {
    "label": "dir",
    "type": "shell",
    "command": "dir",
    "args": ["/b"]
  }
  ```

##### 2.3.2.1 输出行为

控制集成终端的输出行为，所有与输出相关的行为，都可以通过 `tasks.json` 中的 `presentation` 属性来定义，主要包含以下属性：

- `reveal`：控制集成终端是否显示。

  - `always`：集成终端总是会在 Task 启动时显示。默认设置。
  - `never`：集成终端不会主动显示。
  - `silent`：当输出是错误和警告时，集成终端才会显示。

- `focus`：控制集成终端在显示时是否取得焦点。默认值是 false。
- `echo`：控制被执行的命令是否在集成终端中输出。默认值是 true。
- `showReuseMessage`：控制是否显示"终端将被任务重用，按任意键关闭"提示信息。默认值是 true。

- `panel`：控制不同的 Task 在运行时是否共享同一个集成终端。其设置包含以下三种：

  - `shared`：共享集成终端。其他 Task 的运行输出结果也显示在相同的集成终端中。默认设置。
  - `dedicated`：Task 会有一个专用的集成终端。如果相应的 Task 再次运行，集成终端就会被复用。但是，其他 Task 的运行输出结果会显示在不同的集成终端中。
  - `new`：每次运行 Task 都会创建一个新的集成终端。

- `clear`：控制在 Task 运行前，是否清除集成终端的输出。默认值是 false。
- `group`：控制 Task 是否在同一个集成终端中运行。如果不同 Task 的 group 属性相同，那么它们会复用同一个集成终端。

##### 2.3.2.2 运行行为

通过 `tasks.json` 中的 `runOptions` 属性可以定义 Task 的运行行为，`runOptions` 属性主要包含以下属性：

- `reevaluateOnRerun`：在执行 `Rerun Last Task` 命令时，控制是否重新计算变量。默认值是 true。

- `runOn`：指定何时运行 Task。
  - `default`：只有在运行 `Run Task` 命令时，才会触发运行
  - `folderOpen`：当包含这个 `tasks.json` 的文件夹被打开时，便会触发运行。在运行前，VSCode 会询问是否要运行。

##### 2.3.2.3 变量替换

- 预定义的变量

  - `${workspaceFolder}`：在 VSCode 中打开的文件夹的完整路径
  - `${workspaceFolderBasename}`：在 VSCode 中打开的文件夹名
  - `${fileWorkspaceFolder}`：VSCode 中打开的文件的工作区文件夹路径
  - `${fileDirnameBasename}`：VSCode 中打开的文件所在的文件夹的名称
  - `${pathSeparator}`：操作系统用于分隔文件路径中的组件的字符
  - `${file}`：当前打开文件的完整路径
  - `${relativeFile}`：当前打开的文件的相对 workspaceFolder 的路径
  - `${relativeFileDirname}`：当前打开的文件的文件夹的相对 workspaceFolder 路径
  - `${fileBasename}`：当前打开的文件的文件名
  - `${fileBasenameNoExtension}`：当前打开的文件的文件名，不包含扩展名
  - `${fileDirname}`：当前打开的文件的文件夹的完整路径
  - `${fileExtname}` :当前打开的文件的扩展名
  - `${cwd}`：Task 启动时的工作目录
  - `${lineNumber}`：当前光标所在的行号
  - `${selectedText}`：当前 打开的文件中选中的文本
  - `${execPath}`：VSCode 可执行文件的完整路径
  - `${defaultBuildTask}`：默认的 Build Task 的名字
  - `${userHome}`：用户主页，如：C:\Users\dsy

- 环境变量

  通过 `${env:Name}` 的语法，可以引用环境变量。

- 配置变量

  通过 `${config:Name}` 的语法，可以引用 VSCode 的设置项。例：`${config:editor.fontSize}` 会得到编辑器的字体大小

- 输入变量

  有些时候，在运行 Task 时，每次都需要传入不同的变量，通过输入变量，可以轻松地对 Task 进行定制化。输入变量的语法是 `${input:variableID}`，variableID 引用了 `tasks.json` 中的 inputs 部分的配置内容。

  VSCode 支持以下三种类型的输入变量：

  - `promptString`：展示输入框，并获得用户的输入字符串

    - `description`：在文本输入框中展示的描述信息
    - `default`：输入的默认值

  - `pickString`：展示一个下拉列表，让用户选择其中一个选项

    - `description`：在下拉列表的输入框中展示的描述信息
    - `options`：选项数组，使用户可以在下拉列表中进行选择
    - `default`：输入的默认值。其值必须为下拉列表选项中的一个

  - `command`：运行任意的命令
    - `command`：要运行的命令
    - `args`：运行命令的参数（可选）

### 2.4 多项目工作区（multi-root Workspaces）

**添加多文件夹**：

- 文件 -> 将文件夹添加到工作区，选择要添加的文件夹。
- 可以通过拖拽把文件夹添加到工作区，可以同时选择多个文件夹拖拽。
- 文件 -> 打开文件夹，可以选择多个文件夹打开。
- 通过命令行的 `--add` 参数，可以把多个文件夹添加到最近活跃的 VSCode 窗口中。

  ```sh
  code --add folder1 folder2
  ```

#### 2.4.1 工作区文件

在工作区添加多个文件后，工作区会被命名为**无标题（工作区）**。在关闭多文件夹窗口时，会询问是否要保存工作区文件，选择保存工作区文件，VSCode 会创建一个扩展名为 `.code-workspace` 的文件。

文件 -> 将工作区另存为，可以把当前工作区的信息保存到 `*.code-workspace` 工作区文件中。

`*.code-workspace` 工作区文件有以下属性：

- `folders`：包含多个对象的数组，每个对象的属性有两个：

  - `path`：文件夹的路径，可以是绝对路径，也可以是相对路径
  - `name`：文件夹的可选名称

- `settings`：为了避免各个文件设置的冲突，可以通过设置全局的工作区配置，对当前工作区的所有文件夹进行设置

- `extensions`：插件建议

  - `recommendations`：向此工作区的用户推荐的扩展列表。扩展的标识符始终为 `${publisher}.${name}`。
  - `unwantedRecommendations`：不应向此工作区的用户推荐的扩展列表。扩展的标识符始终为 `${publisher}.${name}`。例如: "vscode.csharp"。

- `launch`：工作区启动配置

- `tasks`：任务定义文件

```jsonc
{
  "folders": [
    {
      "path": "."
    },
    {
      "path": "../folder1"
    }
  ],
  "settings": {},
  "extensions": { "recommendations": [], "unwantedRecommendations": [] },
  "launch": {
    "version": "0.2.0",
    "configurations": [],
    "compounds": []
  },
  "tasks": {
    "version": "2.0.0",
    "tasks": [
      {
        "label": "My Task",
        "command": "echo hello",
        "type": "shell",
        "args": [],
        "problemMatcher": ["$tsc"],
        "presentation": {
          "reveal": "always"
        },
        "group": "build"
      }
    ]
  }
}
```

#### 2.4.2 与单文件夹的区别

- **界面区别**：

  - 显示相对路径和符号
  - 面包屑导航会显示多文件夹的文件夹名
  - `Ctrl + P` 快速打开文件时，文件列表会显示文件夹名
  - 搜索时，搜索结果会按照文件夹来分组显示

- **源代码管理区别**：

  多文件夹项目如果有多个 git 的文件夹，那么在源代码管理视图中会显示 SOURCE CONTROL PROVIDERS，在 SOURCE CONTROL PROVIDERS 中点击代码仓库，可以在下方看到代码更改的详情。

## 三. 调试

VSCode 内置了对 Node.js 运行时的调试支持，无须安装额外的插件就能调试 JS 和 TS。其他编程语言，需要额外安装相应的调试器插件。内置的 Node.js 调试器及其他调试器插件支持以下两种模式：

- 调试：快捷键为 F5
- 运行：快捷键为 Ctrl + F5

### 3.1 launch.json

对于一些更加复杂的调试场景，需要创建调试配置，以便后续进行定制化调试。VSCode 的调试配置被存储在 `.vscode` 文件夹的 `launch.json` 文件中。可以通过以下步骤来创建一个调试配置：

1. 运行 -> 添加配置
2. VSCode 会在 `.vscode` 文件夹中创建并打开一个 `launch.json` 文件，文件中定义了调试所需要的的配置。

VSCode 还支持添加全局的 `launch.json` 配置。可以在全局的 `settings.json` 文件中使用 `launch` 属性设置全局的的调试配置。

### 3.2 launch.json 属性

launch.json 有 3 个属性：

- `version`：版本
- `configurations`：配置列表
- `compounds`：复合列表。每个复合可引用多个配置进行多目标调试，这些配置将一起启动。

下面主要看 configurations 的属性：

#### 3.2.1 重要属性

- `name`：调试配置的名字
- `type`：调试器的类型。例如：内置的 Node.js 调试器是 node。

- `request`：请求配置类型，有以下两种类型：

  - `launch`：启动程序（该程序定义在 program 设置项中）并调试
  - `attach`：将程序附加到一个正在运行的进程中进行调试

    如果想要附加到 Chrome 浏览器，针对不同系统，在命令行输入不同的命令来启动 Chrome 浏览器：

    - 在 Windows 下：`<path to chrome>/chrome.exe --remote-debugging-port=9222`，也可以打开 Chrome 快捷方式的属性 -> 目标，在最后添加 空格 + `--remote-debugging-port=9222`
    - 在 macOS 下：`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote--debugging-port=9222`
    - 在 Linux 下：`google-chrome --remote-debugging-port=9222`

    ```json
    {
      "name": "vueJs: attach chrome",
      "type": "chrome",
      "request": "attach",
      "port": 9222,
      "webRoot": "${workspaceFolder}",
      "url": "http://localhost:7878"
    }
    ```

    可以打开 `http://localhoat:9222/json` 来查看是否开启远程调试端口。

- `webRoot`：此设置指定 Web 服务器根工作区的绝对路径。用于将 `/app.js` 等路径解析为磁盘上的文件。pathMapping 的速记方式为 "/"。

#### 3.2.2 可以被定义在 launch 和 attach 的配置属性

- `protocol`：调试协议
- `port`：调试端口
- `restart`：连接超时或失败是否重连。重连的间隔和次数可以配置。默认值为 false，如果想设置为 true，可以通过在对象中指定 `delay` 和 `maxAttempts` 来自定义间隔和最大尝试次数，delay 单位为毫秒。

  ```json
  {
    "restart": {
      "delay": 1000,
      "maxAttempts": 3
    }
  }
  ```

- `timeout`：定义何时重启一个调试会话。单位为毫秒。
- `stopOnEntry`：是否在程序入口设置断点
- `smartStep`：在调试过程中，是否智能地忽略没有定义在源代码映射中的文件

- `outFiles`：定义生成的 JS 文件的位置
- `env`：设置环境变量
- `envFile`：包含环境变量定义的文件的绝对路径。
- `skipFiles`：定义在调试过程中需要忽略的文件

- `trace`：是否输出诊断信息
- `presentation`：对多个调试配置做分组和排序，group 相同的在同一组，根据 order 从小到大排序

  ```json
  {
    "name": "Launch Chrome",
    "request": "launch",
    "type": "chrome",
    "url": "http://localhost:8080",
    "webRoot": "${workspaceFolder}",
    "presentation": {
      "hidden": false,
      "group": "Chrome",
      "order": 1
    }
  }
  ```

- `preLaunchTask`：定义在调试前要运行的任务
- `postDebugTask`：定义在调试结束时要运行的任务
- `internalConsoleOptions`：定义调试控制台的显示
- `serverReadyAction`：设置在调试时自动在浏览器中打开 URL
- `cascadeTerminateToConfigurations`：当此调试会话终止时，也将停止的调试会话列表。

- `sourceMaps`：是否使用 sourcemap 映射（如存在），默认 true
- `sourceMapRenames`：是否在 sourcemap 使用 “名称” 映射。这需要请求源内容，后者在使用某些调试程序时，速度会很慢。
- `sourceMapPathOverrides`

  代码是经过编译打包然后在浏览器运行的，但调试时却可以直接调试源码，这是通过 sourcemap 做到的。调试工具都支持 sourcemap，并且是默认开启的。
  可以将 `sourceMaps` 设为 false 来关闭。这样调试的就是编译后的代码了。

  在开启 sourcemap 的情况下，用 Chrome DevTools 可以看到，源文件的路径是 /static/js/bundle.js：

  ![源文件路径](./image/%E6%BA%90%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84.webp)

  被 sourcemap 到了 /Users/guang/code/test-react-debug/src/index.js：

  ![源码路径](./image/%E6%BA%90%E7%A0%81%E8%B7%AF%E5%BE%84.webp)

  而在 VSCode 里，这个路径是有对应的文件的，所以就会打开对应文件的编辑器，这样就可以边调试边修改代码。但有的时候，sourcemap 到的文件路径在本地里找不到，这时候代码就只读了，因为没有地方保存。这种情况就需要通过 `sourceMapPathOverrides` 对 sourcemap 到的路径再做一次映射：

  ![sourcemap映射](./image/sourcemap%20%E6%98%A0%E5%B0%84.webp)

  默认有这么三个配置：

  ```json
  {
    "sourceMapPathOverrides": {
      "meteor://💻app/*": "${workspaceFolder}/*",
      "webpack:///./~/*": "${workspaceFolder}/node_modules/*",
      "webpack://?:*/*": "${workspaceFolder}/*"
    }
  }
  ```

  分别是把 meteor、webpack 开头的 path 映射到了本地的目录下。其中 `?:*` 代表匹配任意字符，但不映射，而 `*` 是用于匹配字符并映射的。

#### 3.2.3 只能被定义在 launch 的配置属性

- `program`：Node.js 应用程序的绝对路径
- `args`：传给 Node.js 应用程序的参数
- `cwd`：指定调试器的工作目录。默认值是 `${workspaceFolder}`（在 VSCode 中打开的文件夹的完整路径）

- `runtimeArgs`：传给运行时的参数。

  比如每次打开网页都默认调起 Chrome DevTools，就可以加一个 `--auto-open-devtools-for-tabs` 的启动参数：

  ```json
  {
    "request": "launch",
    "runtimeArgs": ["--auto-open-devtools-for-tabs"]
  }
  ```

  想要无痕模式启动，也就是不加载插件，没有登录状态，就可以加一个 `--incognito` 的启动参数。其实 `userDataDir` 就是指定了 --user-data-dir 的启动参数。

- `runtimeVersion`：定义运行时的版本
- `file`：要在浏览器中打开的本地 HTML 文件。

  ```json
  {
    "name": "Launch Chrome",
    "request": "launch",
    "type": "pwa-chrome",
    "file": "${workspaceFolder}/index.html",
    "webRoot": "${workspaceFolder}"
  }
  ```

  要修改调试的内容需要把 url 映射到本地文件才行，所以有下面的 `pathMapping` 的配置。

- `pathMapping`：将 URL 路径映射到本地文件夹，以将浏览器中的脚本解析为磁盘上的脚本

  ```json
  {
    "pathMapping": {
      "/static/js/": "${workspaceFolder}/src/"
    }
  }
  ```

- `console`：设置程序输出在哪里，该属性的可选值如下：

  - `internalConsole`：在 VSCode 的调试控制台输出，该值为默认值
  - `integratedTerminal`：在 VSCode 的集成终端输出
  - `externalTerminal`：在系统的终端输出

- `outputCapture`：如果设置为 std，那么 Node.js 进程的 stdout（标准输出）和 stderr（标准错误）就会显示在调试控制台中。

- `userDataDir`

  user data dir 是保存用户数据的地方，比如浏览记录、cookies、插件、书签、网站的数据等。用户数据目录有个特点，就是只能被一个 Chrome 实例所访问，如果之前启动了 Chrome 用了这个默认的 user data dir，那就不能再启动一个 Chrome 实例用它了。如果再跑一个就会报错 `Unable to attach to browser`。

  所以用调试模式启动 Chrome 的时候，需要单独指定一下 user data dir 的位置。或者把之前的 Chrome 实例关掉，这样才能用默认的。

  默认为 true，代表创建一个临时目录来保存用户数据。也可以设置为 false，使用默认 user data dir 启动 chrome。这样的好处就是登录状态、历史记录都有。也可以指定一个自定义的路径，这样用户数据就会保存在那个目录下。

  更重要的是，安装的 Vue DevTools 等插件都是在默认用户数据目录的，要是用临时数据目录跑调试，这些就都没了。当 `userDataDir` 设置为 true 的时候，Vue DevTools 插件是没有的，需要再安装。这个问题可以用 `runtimeExecutable` 解决。

- `runtimeExecutable`：运行时可执行文件路径。默认值为 node。

  调试网页的 JS，需要先把 Chrome 跑起来，默认跑的是 Google Chrome，其实它还有另外一个版本 Canary。这是给开发者用的每日构建版，能够快速体验新特性，但是不稳定。可以在[官网](https://www.google.com/intl/zh-CN/chrome/canary/)下载。然后指定 `runtimeExecutable` 为 canary，使用默认的用户数据目录启动。这样就可以调试用 canary，平时用 chrome 了，两者不共用同一个数据目录。

  `runtimeExecutable` 还可以指定用别的浏览器跑，可以是 stable，也就是稳定的 Google Chrome，或者 canary 还可以是 custom，然后用 CHROME_PATH 环境变量指定浏览器的地址。

#### 3.2.4 只能被定义在 attach 的配置属性

- `processId`：可以定义附加的进程 ID，如果被设置为 `${command:PickProcess}`，那么可以在调试器启动时显示的进程列表中选择需要调试的进程。

  ```jsonc
  {
    "name": "Attach to Process",
    "type": "node",
    "request": "attach",
    "processId": "${command:PickProcess}"
  }
  ```

- `attachExistingChildren`：是否尝试附加到已生成的子进程。默认值为 false。
- `autoAttachChildProcesses`：自动将调试器附加到新的子进程。默认值为 true。

#### 3.2.5 操作系统相关属性

- `windows`：特定于 Windows 的启动配置属性。
- `linux`：特定于 Linux 的启动配置属性。
- `osx`：特定于 macOS 的启动配置属性。

#### 3.2.6 远程调试相关属性

- `address`：要调试的进程的 TCP/IP 地址。默认值为 “localhost”。
- `websocketAddress`：要附加到的确切 websocket 地址。如果未指定，将使用 `address` 和 `port`。
- `localRoot`：定义本地的根目录。
- `remoteRoot`：定义远程的根目录。

VSCode 内置的 Node.js 调试器支持远程调试，只需要在 launch.json 文件中添加一个 `address` 属性即可。

```json
{
  "type": "node",
  "request": "attach",
  "name": "Attach to remote",
  "address": "TCP/IP address of process to be debugged",
  // 9229 是 node --inspect 和 --inspect-brk 的默认调试端口
  "port": 9229
}
```

默认情况下，VSCode 会把远程 Node.js 程序文件中的源代码展示在本地，但这些文件都是只读的。可以对文件中的源代码进行单步调试，但不可以修改它。

如果想在 VSCode 中打开可编辑的源代码，那么就需要**设置远程文件夹与本地文件夹的映射**。在 launch.json 文件中。可以通过添加 `localRoot` 和 `remoteRoot` 属性来进行映射。`localRoot` 用于定义本地文件夹的根目录，`remoteRoot` 则用于定义远程文件夹的根目录。

```jsonc
{
  "type": "node",
  "request": "attach",
  "name": "Attach to remote Edit Source code",
  "address": "TCP/IP address of process to  be debugger",
  "port": 9229,
  "localRoot": "${workspaceFolder}",
  "remoteRoot": "C:\\User\\username\\project\\server"
}
```

### 3.3 断点的种类和使用

- **普通断点**
  有两种方式添加普通断点：

  1. 单击左侧边栏
  2. 右键左侧边栏，选择添加断点

- **异常断点**

  代码抛了异常，想知道在哪抛的，这时候就可以用异常断点。

  ![异常断点](./image/%E5%BC%82%E5%B8%B8%E6%96%AD%E7%82%B9.png)

  - `Caught Exception`：在被 catch 处理的异常出断住。
  - `Uncaught Exception`：在没有被处理的错误或者 Promise 的 reject 处断住。更常用。

- **日志断点**
  日志断点是普通断点的一种变体，区别在于**不会中断调试**，而是可以把信息记录到控制台。日志断点对于调试无法暂停或停止的服务时特别有用。步骤如下：

  1. 右击需要添加日志断点行的行标，选择**添加记录点**。
  2. 输入要日志断点的信息，可以用 `{}` 使用变量。

- **条件断点**
  条件断点是表达式结果为 true 时才会进行断点：

  1. 右击需要添加日志断点行的行标，选择**添加条件断点**。
  2. 填写表达式

- **命中计数断点**
  只有该行代码命中了指定次数，才会进行断点：

  1. 选择条件断点，切换为命中次数选项，填写命中次数。

- **内联断点**
  仅当执行到达与内联断点关联的列时，才会命中内联断点。这在调试在一行中包含多个语句的缩小代码时特别有用。比如 for 循环，短路运算符等一行代码包含多个表达式时会特别有用。步骤如下：

  1. 在指定位置按 Shift + F9
  2. 调试之后，每次运行到该内联处的代码都会中断

除了 VSCode 的断点，还有网页的 [DOM 断点](/frontend/浏览器/Chrome_DevTools/Chrome-DevTools.md#519-dom-断点)、[事件监听器断点](/frontend/浏览器/Chrome_DevTools/Chrome-DevTools.md#811-event-listener-断点)、[url 请求断点](/frontend/浏览器/Chrome_DevTools/Chrome-DevTools.md#812-xhr-提取断点)。

### 3.4 调试面板

- **变量面板**
  变量面板可以查看所有变量，在变量上点击右键，可以设置变量值、复制变量值等操作。聚焦于数据面板时，可以通过键入值来搜索过滤。还可以控制是否筛选。

- **监听面板**
  可以将变量添加到监听面板，实时观察变量的变化。方式有以下两种：

  1. 在变量面板通过右键选择 “添加到监视” 将变量添加到监听面板。
  2. 直接在监听面板选择添加按钮进行变量添加。

- **调用堆栈**
  在断点时，方便的查看堆栈信息。

- **断点面板**
  对断点进行统一的控制。既可以控制单个断点的开关，也可以控制全部断点的开关。还能直接删除全部断点。

## 四. 插件

[插件市场](https://marketplace.visualstudio.com/vscode)，首页有四个分组：

- Featured：推荐插件
- Trending：每日插件安装数量榜
- Most Popular：插件总安装量榜
- Recently Added：最新发布的插件

### 4.1 有趣的插件

**REST Client**
测试 REST API 的工具。REST API 是前后端分离最佳实践，是开发的一套标准或者说是一套规范。REST Client 支持 `cURL` 和 `RFC2616` 这两种业界标准来调用 REST API。

> 例：[test.http](./演示文件/test.http)

- HTTP 语言
  REST Client 插件添加了 HTTP 语言的定义，支持把以 `.http` 或 `.rest` 结尾的文件中的代码当作 HTTP 语言进行处理，提供了语法高亮、代码智能提示、代码注释等功能。通过 `###` 分隔符，同一个 http 文件中可以涵盖多个 HTTP 请求。

- 代码生成
  在 HTTP 语言文件的右键菜单中，可以通过 `Generate Code Snippet` 命令来将 HTTP 请求生成不同编程语言的代码。

- 高阶功能
  - 身份认证：REST Client 支持 Basic Auth、SSL Client Certificates、Azure Active Directory 等多种验证机制。
  - 支持 Cookies
  - 支持 HTTP3xx 的重定向
  - 支持多种变量：环境变量、文件变量、预定义的系统变量等

**Code Runner**
代码一键运行，支持 40 多种语言

- 代码一键运行

  - 通过快捷键 `Ctrl+Alt+N`
  - 打开命令面板，输入并执行 Run Code
  - 在编辑区域的右键菜单中单击 Run Code
  - 在左侧的文件管理器中找到要运行的文件，在其右键菜单中单击 Run Code
  - 单击文件右上角的"运行"小三角按钮

> **注意**：Code Runner 插件并不包含各个编程语言的编译器。需要自行安装相应编程语言的编译器，并且把路径添加到 PATH 环境变量中。

- 停止代码运行

  - 通过 `Ctrl+Alt+M` 快捷键
  - 命令面板，输入并执行 Stop Code Run
  - 在输出面板的右键菜单中单击 Stop Code Run

- 在集成终端中运行代码
  默认情况下，Code Runner 会把运行输出结果打印在输出面板中。在 Code Runner 插件的 GitHub 上，用户最多的问题是如何解决乱码问题和怎样支持输入。通过 `Run Code configuration: Run In Terminal` 设置，把代码放到 VSCode 内置的集成终端来运行，就可以解决上面的两个问题。

- 自定义运行逻辑
  **Debug Visualizer**
  插件提供了实时的可视化调试方式，可以一键解析数据结构，并支持多种主流的编程语言。

**Peacock**
为 VSCode 窗口配置颜色。

- 命令面板 -> Peacock：Change to a Favorite Color 选择颜色
- 设置 -> peacock.surpriseMeOnStartup 是否为新开的 VSCode 窗口随机选择一个颜色

**Polacode**
插件可以把选中的代码导出为图片格式，并且完全保留代码在 VSCode 中原本的字体和颜色主题。在命令面板中，输入 Polacode 并执行。

**Paste JSON as code**
可以把 JSON 或 TS 转换成其他编程语言，包括 TS、Python、GO、Ruby、Java、Swift、C++、JS 等。

## 五. 语言深入

### 5.1 JavaScript

ECMAScript 是一种在 **ECMA-262** 标准中定义的脚本语言规范。而 JS 是一种编程语言，它实现了 ECMAScript 所定义的规范。

一般来说，JS 包含以下几部分：

- **ECMAScript**：描述了该语言的语法和基本对象
- **文档对象模型（DOM）**：DOM 是 HTML 和 XML 文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。
- **浏览器对象模型（BOM）**：描述与浏览器进行交互的方法和接口，提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。BOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

Node.js 和 JS 的区别和联系：

- Node.js 是一个 JS 运行时。JS 可以运行在 浏览器 或 Node.js 中。
- 在浏览器运行时中，JS 可以访问 document、window 等浏览器对象。
- 在 Node.js 运行时中，JS 可以访问与操作系统、文件系统等相关的 API。

### 5.2 代码编辑

#### 5.2.1 IntelliSense

IntelliSense 提供了代码补全功能，可以显示悬停信息、参数信息、快速信息等。

JS 库和框架的 IntelliSense 由 TS 的类型声明文件（.d.ts 文件）驱动。许多 JS 的 npm 软件包会包含 `.d.ts` 文件，这样在 VSCode 中就能直接获得 IntelliSense 功能。

如果 JS 的 npm 软件包中没有包含 `.d.ts` 文件，那么 VSCode 的自动类型获取就会自动下载社区维护的 `.d.ts` 文件，进而获取 IntelliSense 功能。

#### 5.2.2 JSDoc

除了可以通过类型推断和自动类型获取提供 IntelliSense 功能，VSCode 还可以通过 `JSDoc` 来提供。

在函数上方输入 `/**`，就能触发代码片段提示，自动生成以下的 JSDoc：

```js
/**
 *
 * @param {*} a
 * @param {*} b
 */
```

JSDoc 注释是使用 Markdown 进行格式化的，如果想使用粗体、斜体或项目列表，可以这样做：

```js
/**
 * 这个 _接口_ 有 **三个** 属性
 * 1. x
 * 2. y
 * 3. z
 */
```

可以根据函数定义添加对应的详细 JSDoc 描述。这样在其他地方引用对应函数时，就能显示详细的函数提示了。

> 通过设置 `"javascript.suggest.completeJSDocs:false"`，可以禁用 JSDoc 的提示。

#### 5.2.3 自动导入

自动导入可以在编写代码时提示变量及相应的依赖。当选择了其中某一个建议的选项后，VSCode 会在文件的顶部自动导入相应的依赖。

> 通过 `"javascript.suggest.autoImports:false"`，可以禁用自动导入。

#### 5.2.4 JSX

在 JSX 文件中，也可以使用 JS 的完整功能。在 `*.js` 和 `*.jsx` 文件中，都能使用 JSX 的语法。VSCode 也支持自动添加闭标签。

> 通过 `"javascript.autoClosingTags:false"`，可以禁用闭标签的自动补全。

#### 5.2.5 代码导航

对于 JS 代码，在编辑区域的右键菜单中可以看到以下几种主要的代码导航方式：

- Go to Definition（转到定义）：跳转到定义当前符号的代码，快捷键为 F12。
- Peek Definition（查看定义）：与 Go to Definition 类似，但会直接在内联编辑器中展示定义的代码，快捷键为 Alt+F12。
- Go to References（转到引用）：跳转到引用当前符号的代码，快捷键为 Shift+F12。
- Go to Definition（转到类型定义）：跳转到当前符号的类型定义。

#### 5.2.6 重构

VSCode 对 JS 支持以下几种重构命令：

- 提取到函数
- 提取到变量
- 在命名的导入与名字空间的导入之间切换
- 移动到新的文件

#### 5.2.7 移除无用的代码和变量

如果 VSCode 发现有不可达的代码，相应的代码颜色就会变浅，而且可以通过命令快速移除。

通过 `"editor.showUnused:false"` ，可以禁用使不可达代码颜色变浅。此外，还可以根据语言来进行设置：

```json
"[javascript]" : {
  "editor.showUnused" :false
}
```

#### 5.2.8 整理导入语句

通过 Organize Imports 源代码操作，可以对 JS 的 import 语句进行排序，并且移除没有使用的导入语句，快捷键为 `Shift + Alt + O`。

通过以下设置，还可以在保存文件时自动触发导入语句的整理：

```json
"editor.codeActionsOnSave": {
  "source.organizeImport" : true
}
```

#### 5.2.9 文件移动时更新导入语句

通过 `"javascript.updateImportsOnFileMove.enabled"` 设置项可以进行进一步配置，该配置项的可选值如下：

- `prompt`：默认值。在更新前会弹窗询问是否要更新路径
- `always`：自动更新路径
- `never`：不更新路径

#### 5.2.10 引用的 CodeLens

JS 代码支持会在类、函数、属性等上方的 CodeLes 上显示代码被引用的数量。

默认情况下，在 JS 代码中不会显示 CodeLens。可以通过设置 `"javascript.referencesCodeLens.enabled:true"`，来启用 CodeLens。

#### 5.2.11 类型检查

对于普通的 JS 文件，可以使用 TS 的高级功能来进行类型检查。这可以在代码编译和运行之前发现潜在的代码错误。同时，这些类型检查的功能还为 JS 提供了快速修复的功能，如：添加缺失的导入语句、添加缺失的属性等。

与 `.ts` 文件一样，TS 可以对 `.js` 文件进行类型推断。如果无法进行类型推断、那么会尝试使用 JSDoc。

VSCode 自带的类型检查工具可以与其他 JS 检测工具（如：ESlint、JSHint）并存。可以通过以下方式启用：

- **按文件启用**

  在 JS 文件的顶部添加 `// @ts-nocheck`，可以针对某一个文件禁用类型检查。此外，在代码的前一行添加 `//@ts-ignore` 可以禁用当前行的类型检查。

- **使用 `jsconfig.json` 或 `tsconfig.json` 启用**

  如果项目中包含 `jsconfig.json` 或 `tsconfig.json` 文件，那么可以在编辑器选项中添加 `"checkJs":true`：

  ```json
  {
    "compilerOptions": {
      "checkJs": true
    },
    "exclude": ["node_modules", "**/node_modules/*"]
  }
  ```

#### 5.2.13 静态代码检查

静态代码检查工具能够在编写代码时，提前发现代码中的问题。

- ESLint
  通过 `npm install eslint` 或者 `npm install -g eslint` 在当前工作区或全局安装 ESLint，然后创建一个 `.eslintrc.js` 配置文件。通过 `eslint.run` 设置项，可以设定是保存时（onSave）还是在输入时（onType）运行 ESlint 静态检查。

#### 5.2.14 测试

- Mocha Test Explorer
  Mocha 是常用的 JS 测试框架之一。Mocha Test Explorer 支持 Mocha 测试框架，支持的功能包括：

  - 单元测试的树状图单独显示在专有的测试资源管理器中。
  - 运行或调试单元测试
  - 测试覆盖率报告
  - 并行的运行测试
  - 保存文件时自动运行测试

### 5.3 TypeScript

TypeScript 是 JS 的超集，可以编译成 JS。与 JS 类似，不需要安装额外的插件，VSCode 为 TypeScript 提供了开箱即用的支持，包括但不限于：IntelliSense、调试、代码格式化、代码导航、代码重构、以及其他高级功能。

#### 5.3.1 准备工作

1. 安装 TypeScript 编译器
   安装 Node.js，安装完成后，需要确保 Node.js 已经被添加到 PATH 环境变量中。通过 npm 包管理工具安装 `npm install -g typescript`。在命令行输入 `tsc --version`，来验证 TypeScript 是否安装成功。

2. 编译 TypeScript 文件
   TS 文件需要先编译成 JS 文件后才能运行。打开 VSCode 的集成终端，在终端集成中输入 tsc file.ts。TS 的编译器（tsc）会对 `file.ts` 进行编译，并在同一目录下生成一个 `file.js` 的 JS 文件。

3. 一键运行 TypeScript
   在 VSCode 中使用 Code Runner 插件，可以一键运行 TypeScript 代码。但是，需要安装 **ts-node**，ts-node 是一个基于 Node.js 的 TS 执行器。

   安装 ts-node，需要 Node.js 运行时及 TypeScript 编译器，在命令行输入 `npm install -g ts-node` 命令，安装 ts-node。在安装了 Code Runner 插件后，可以使用以下几种方式快捷的运行代码：

   - 输入快捷键 `Ctrl + Alt + N`
   - 通过 `Ctrl + Shift + P` 快捷键打开命令面板，输入并执行 Run Code
   - 在编辑区域的右侧菜单中选择 Run Code
   - 在右侧的文件管理器中找到要运行的文件，在其右键菜单中选择 Run Code
   - 单击右上角的运行小三角按钮

#### 5.3.2 编译

TS 提供了丰富的项目设置和编译设置，以便后续进行项目管理及代码调试。`tsconfig.json` 文件定义了 TS 的项目设置及编译设置。

> 例：[tsconfig.json](./演示文件/tsconfig.json)

打开集成终端，只需要输入 `tsc`（注意：`tsconfig.json` 文件需要在根目录），TS 编译器就会根据 `tsconfig.json` 文件的配置对当前的 TS 项目进行编译。

**源代码映射**
如果需要调试 TS 文件，则需要把 TS 文件与生成的 JS 文件进行映射。有两种方式可以生成映射文件：

- 在 tsc 命令中添加 `--sourcemap` 参数，如下:

```sh
tsc hello.ts --sourcemap
```

- 在 `tsconfig.json` 文件中添加 `sourceMap` 属性，并将该属性设置为 `true`，然后在集成终端中输入 `tsc` 并执行。

> 例：[tsconfig.json](./演示文件/tsconfig.json)

通过以上任意一种方式，都会生成一个 `file.js.map` 的源代码映射文件。

**生成文件的位置**
默认情况下，生成的 JS 文件会和 TS 文件在同一个文件夹中。如果项目很大，则会产生很多 JS 文件，不便于管理。可以在 `tsconfig.json` 文件中添加 `outDir` 属性，来指定 JS 文件的目录。

> 例：[tsconfig.json](./演示文件/tsconfig.json)

#### 5.3.3 调试

- 快速调试
  VSCode 依赖于 TS 的映射文件将原始的 TS 文件与生成的 JS 文件进行映射。

  - 在 tsconfig.json 文件中需要添加 `sourceMap` 属性，并将其设置为 true。

  - 在集成终端中输入并执行 `tsc`。这条命令执行完毕后会在 `outDir` 属性定义的目录中生成一个 file.js.map 的源代码映射文件和一个 file.js 文件。

  - 在需要的 TS 文件处添加断点，然后切换到调试视图，选择预设的调试任务（[launch.json](/.vscode/launch.json) -> TS Launch Node），就可以进行调试。
    在左侧的调试视图中可以看到与当前代码相关的变量信息，在调试控制台，可以对 TS 变量和表达式直接进行运算。

- 调试配置
  TS 文件在调试前，需要编译，所以使用了以下两个属性：

  - `preLaunchTask`：定义了在调试前要运行的任务（在 tasks.json 文件中设置），在调试 TS 之前，需要先编译 TS 文件
  - `outFiles`：定义了 JS 文件的输出路径，优先级小于 tsconfig.json 中的定义。

### 5.4 代码编辑

在 VSCode 中的代码编辑功能方面，TS 和 JS 非常相似。

#### 5.4.1 代码编辑的配置

在代码编辑方面，TS 和 JS 主要的不同之处就是设置项的不同：

- 启用 JSDoc

  - `typescript.suggest.completeJSDocs`
  - `javascript.suggest.completeJSDocs`

- 启用自动导入

  - `typescript.autoImportSuggestions.enabled` -
  - `javascript.suggest.autoImports`

- 启用代码格式化

  - `typescript.format.enable`
  - `javascript.format.enable`

- 启用闭标签的自动补全

  - `typescript.autoClosingTags`
  - `javascript.autoClosingTags`

- 启用重命名或移动文件时自动更新导入路径

  - `typescript.updateImportsOnFileMove.enabled`
  - `javascript.updateImportsOnFileMove.enabled`

- 是否显示 CodeLens
  - `CodeLens typescript.referencesCodeLens.enabled`
  - `javascript.referencesCodeLens.enabled`

#### 5.4.2 隐藏 JS 文件

打开命令面板，输入并执行 `Preferences：Open Settings(JSON)`，打开 settings.json 文件，在该文件下添加以下以下配置：

```json
"files.exclude": {
  "**/*.js":{
    "when": "$(basename).ts"
  }
}
```

> 通过上面的配置，可以把与 TS 同名同级的 JS 文件隐藏。

#### 5.4.3 使用不同版本的 TS

有两种方式：

- 点击 TS 文件底部状态栏的 TS 的版本号，单击版本号选择切换。

- 在 TS 文件中，打开命令面板，输入并执行 `TypeScript：Select TypeScript Version`

## 六. 前端开发

VSCode 使用前端技术栈（HTML、CSS 和 TS）开发而成。同时 VSCode 对于前端开发也提供了极佳的支持。

### 6.1 HTML

VSCode 内置了对 HTML 的支持，包括**语法高亮**、**代码补全**、**代码格式化**等各类功能。

#### 6.1.1 IntelliSense

在 HTML 中编写代码时，VSCode 提供了强大的智能提示。还可以通过 `Ctrl + Space` 快捷键触发智能提示。

#### 6.1.2 自动闭合标签

- 在输入 `>` 字符后，VSCode 会自动插入闭合标签。
- 在输入 `/` 字符后，VSCode 会自动插入闭合标签。

可以通过 `"html.autoClosingTags": false` 设置来禁用自动闭合标签的功能

#### 6.1.3 颜色选择器

对于嵌入 HTML 文件的 CSS 样式，VSCode 也会支持颜色选择器。把鼠标悬停在颜色定义上，会显示颜色选择器。单击颜色选择器顶部的颜色字符串，可以切换不同的颜色模式：#203AAD、rgb(32,58,173) 及 hsl(229,69%,40%)

#### 6.1.4 验证嵌入的 JS 和 CSS

VSCode 支持对嵌入 HTML 文件的 JS 脚本和 CSS 样式进行语法验证。
可以通过以下设置来禁用或启用验证功能，默认为启用状态：

- `"html.validate.scripts":true` // 是否对嵌入的脚本进行验证
- `"html.validate.styles":true` // 是否对嵌入的样式进行验证

#### 6.1.5 代码折叠

代码折叠有以下三种方式：

- 通过单击行号与代码之间的折叠图标，可以对 HTML 代码进行代码折叠
- 通过区域标记 `<!--#region-->` 和 `<!--#endregion-->` 来定义代码折叠的范围
- 快捷键 `Ctrl + Shift + [\]` 折叠打开代码

可以通过以下设置来切换折叠的策略：

```json
"[html]":{
  "editor.foldingStrategy": "indentation"
}
```

#### 6.1.6 代码格式化

VSCode 为 HTML 语言提供了代码格式化的支持，代码格式化的操作有以下两种：

- 格式化文档（Shift + Alt + F）：格式化当前的整个文件

- 格式化选定文件（Ctrl + K -> Ctrl+F）：格式当前文件所选定的文本

HTML 代码格式化是基于 js-beautify npm 库进行的，通过 `"html.format.\*"` 中的设置可以对 HTML 代码格式化进行定制。

#### 6.1.7 自定义 HTML 数据格式

VSCode 可以自定义额外的 HTML 数据格式。自定义的 HTML 标签、属性及属性的值可以获得自动补全、显示悬停信息等功能。

1. 创建一个名为 `html.html-data.json` 的 HTML 数据格式文件
   例：[html.html-data.json](/.vscode/html.html-data.json)

2. 在 `.vscode/settings.json` 文件中通过 `html.customData` 设置项引入相应的 HTML 数据格式文件，然后，重启 VSCode。

> **注意**：仅能设置工作区文件夹。

### 6.2 CSS/SCSS/Less

#### 6.2.1 IntelliSense

输入 CSS 属性时，会有相应的提示列表。通过 `Ctrl + Space` 快捷键可以触发智能提示。

#### 6.2.2 颜色预览

在颜色定义的左侧有一个小方块，显示了 CSS 定义的颜色预览。可以通过设置来隐藏颜色预览：`"editor.colorDecorators": false`。

#### 6.2.3 颜色选择器

把鼠标悬停在颜色定义上，会显示颜色选择器。单击颜色选择器顶部的颜色字符串，可以切换不同的颜色模式。

#### 6.2.4 代码折叠

- 通过单击行号与代码之间的折叠图标，VSCode 支持对 CSS 代码进行代码折叠。

- 使用 `Ctrl + Shift + [/]` 来折叠展开代码。

- 可以通过区域标记来定义代码折叠的范围：

  - CSS/SCSS/Less：/\_#region\_/ 和 /\_#endregion\_/
  - SCSS/Less：//#region 和 //#endregion

  可以通过以下设置来切换折叠的策略：

  ```json
  "[CSS]": {
    "editor.foldingStrategy": "indentation"
  }
  ```

#### 6.2.5 静态代码检查

VSCode 支持对 CSS、SCSS 和 Less 进行代码检查。

通过设置可以分别禁用或启用对 CSS、SCSS 和 Less 的静态代码检查，默认为开启状态。

```json
{
  "css.validate": true,
  "scss.validate": true,
  "less.validate": true
}
```

#### 6.2.6 跳转到 CSS 符号

使用 `Ctrl + Shift + O` 快捷键，可以快速对当前文件中的所有 CSS 符号进行搜索。

#### 6.2.7 悬停预览

把鼠标放到 CSS 选择器上，可以预览匹配 CSS 选择器的 HTML 代码片段。

#### 6.2.8 自定义 CSS 数据格式

VSCode 可以自定义额外的 CSS 数据格式。自定义的 CSS 属性、伪类等信息可以获得自动补全、显示悬停信息等功能。

1. 创建一个名为 `css.css-data.json` 的 CSS 数据格式文件。
   例：[css.css-data.json](/.vscode/css.css-data.json)

2. 在 settings.json 文件中通过 `"css.customData"` 设置项引用相应的 CSS 数据格式文件。

### 6.3 Emmet

Emmet 是 Web 开发者必不可少的工具，为 HTML 和 CSS 提供了丰富的功能，VSCode 内置了 Emmet。

#### 6.3.1 Emmet 的支持范围

默认情况下，Emmet 缩写扩展功能会在 html、haml、jade、slim、jsx、xml、xsl、css、scss、sass、less、和 stylus 这些类型的文件中开启，此外，还会在继承于上述的文件的语言(如:Handlebars 和 php)中开启。

#### 6.3.2 在 HTML 中使用 Emmet

在 HTML 文件中输入以下 [Emmet](/frontend/常用工具/Emmet.md) 缩写：`#page>div.log+ul#navigation>li\*5>a{Item $}`

在输入 Emmet 缩写的过程中，Emmet 缩写会出现在建议列表中，并且会有相应的 HTML 预览。按下 `Tab` 键或 `Enter` 键，VSCode 会在 HTML 文件中插入代码。

#### 6.3.3 在 CSS 中使用 Emmet

在 CSS 属性中输入 Emmet 的缩写，会显示相应的 CSS 预览。

#### 6.3.4 设置 Emmet

- 如果想用 Tab 键来展开 Emmet 缩写，可以通过下面的设置项来设置:

  - `"emmet.triggerExpansionOnTab": true`

- 通过以下设置，可以在建议列表中禁用 Emmet 缩写:

  - `"emmet.showExpandedAbbreviation": "never"`

- 通过以下设置项，可以把 Emmet 缩写始终放在建议列表的顶部:

  - `"emmet.showSuggestionsAsSnippets": true`
  - `"editor.snippetSuggestions": "top"`

- 在其他文件中启用 Emmet 缩写
  通过对 `"emmet.includeLanguages"` 进行设置，把文件类型绑定到其他支持 Emmet 的文件上，就能启用相应的文件。

  此外，还可以通过以下设置，使 Emmet 缩写只在与 HTML/CSS 相关的文件中启用：

  - `"emmet.showExpandedAbbreviation": "isMarkupAndStyleSheetFilesOnly"`

#### 6.3.5 Emmet 设置项

可以通过 `"emmet.*"` 的设置项，对 Emmet 进行设置。

#### 6.3.6 自定义 Emmet 片段

创建 `snippets.json` 文件，通过 `"emmet.extensionsPath"` 设置文件位置，到文件夹，不写文件名。

> **例**：[snippets.json](/.vscode/snippets.json)

### 6.4 Vue

Vue 是一个用于构建 Web 应用用户界面的 JS 库。VSCode 内置了对 HTML、CSS 和 JS 的支持，可以安装 Vetur 插件，为 Vue 开发提供更丰富的支持。

#### 6.4.1 快速开始

开始进行 Vue 开发之前，需要安装 Vue CLI，用于生成 Vue 应用。

1. 安装 Vue CLI
   在命令行中输入 `npm install -g @vue/cli` 命令来安装 Vue CLI

2. 创建 Vue 项目
   在命令行中输入 `vue create my-app` 命令来创建 Vue 应用

3. 运行 Vue 应用
   在 VSCode 中打开集成终端，并输入 `npm run serve` 命令，可以运行 Vue 应用，本地端口默认为 8080

#### 6.4.2 调试 Vue

1. 添加断点

2. 配置调试文件：

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "chrome",
         "request": "launch",
         "name": "vuejs: chrome",
         "url": "http://localhost:7878",
         "webRoot": "${workspaceFolder}"
       },
       {
         "name": "vuejs: attach chrome",
         "type": "chrome",
         "request": "attach",
         "port": 9222,
         "webRoot": "${workspaceFolder}",
         "url": "http://localhost:7878"
       }
     ]
   }
   ```

3. 配置 Webpack

   需要为 Webpack 配置源代码映射的设置项。在 Vue 项目的根目录中创建一个 `vue.config.js` 文件，然后在文件中填入以下配置：

   ```js
   module.exports = {
     configureWebpack: {
       devtool: 'source-map'
     }
   };
   ```

4. 使用 `npm run dev` 运行 Vue

5. 启动调试

   启动调试之前，要确保 Vue 的程序 `http://localhost:8080` 已经运行，有三种方式启动调试：

   - 在顶部的菜单栏中选择 `Debug-Start Debugging`
   - 使用 `F5` 快捷键
   - 通过左侧的活动栏切换到调试视图，然后单击绿色的调试按钮

#### 6.4.3 Vue 设置 VSCode 识别别名

安装 Path intellisense，打开 `setting.json` 文件添加以下代码：

```json
"path-intellisense.mappings" : {
  "@" : "${workspaceFolder}/src"
}
```

在项目 `package.json` 所在同级目录下创建文件 `jsconfig.json`：

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

**注意**：`jsconfig.json` 中配置的别名要与 `vue.config.js` 中的别名对应。

## 七. 远程开发

2019 年 5 月 3 日，在 PyCon2019 大会上，微软发布了 Visual Studio Code Remote Development，开启了远程开发的新时代。

![Visual Studio Code Remote Development 的整体架构](./image/Visual%20Studio%20Code%20Remote%20Development%20的整体架构.jpg)

### 7.1 远程开发插件

VSCode 提供了 Remote Development 开发插件包，包含了以下 3 种类型的远程开发插件：

- `Remote-SSH`：通过 SSH 打开远程机器或虚拟机上的文件夹，以连接到任何位置的源代码。
- `Remote-Containers`：基于容器技术，把 Docker 作为开发环境。
- `Remote-WSL`：在 Windows 上打开 WSL 的文件夹，可以获得犹如 Linux 般的开发体验。

#### 7.1.1 SSH

通过 Remote - SSH 可以获得以下体验：

- 在不同的远程开发环境之间快速切换，安全的进行更新。
- 调试在其他位置运行的应用程序。
