---
title: VSCode Editor
keyword: VSCode operation
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [VSCode 编辑器](#vscode-编辑器)
  - [一. 常用命令](#一-常用命令)
    - [1.1 通用快捷键](#11-通用快捷键)
    - [1.2 跳转](#12-跳转)
    - [1.3 基本编辑](#13-基本编辑)
    - [1.4 编程语言编辑](#14-编程语言编辑)
    - [1.5 搜索与替换](#15-搜索与替换)
    - [1.6 多光标与选择](#16-多光标与选择)
    - [1.7 窗口显示](#17-窗口显示)
    - [1.8 编辑器管理](#18-编辑器管理)
    - [1.9 文件管理](#19-文件管理)
  - [二. 常用设置](#二-常用设置)
  - [三. 常用知识](#三-常用知识)
    - [3.1 全部搜索-高级搜索选项](#31-全部搜索-高级搜索选项)
    - [3.2 编程语言定义代码块的起始和结束区域的 标记](#32-编程语言定义代码块的起始和结束区域的-标记)
    - [3.3 自动检测代码缩进](#33-自动检测代码缩进)
    - [3.4 命令行打开](#34-命令行打开)
    - [3.5 打开结果视图查看一个符号的所有引用](#35-打开结果视图查看一个符号的所有引用)
    - [3.6 跳转符号按类型进行分组](#36-跳转符号按类型进行分组)
    - [3.7 配置语言的文件关联](#37-配置语言的文件关联)
  - [四. 常用功能](#四-常用功能)
    - [4.1 代码片段](#41-代码片段)
      - [4.1.1 插入代码片段](#411-插入代码片段)
      - [4.1.2 自定义代码片段](#412-自定义代码片段)
      - [4.1.3 代码片段的语法](#413-代码片段的语法)
      - [4.1.4 定义代码片段快捷键](#414-定义代码片段快捷键)
    - [4.2 Git 版本控制插件](#42-git-版本控制插件)
      - [4.2.1 Git 分支](#421-git-分支)
      - [4.2.2 合并冲突](#422-合并冲突)
      - [4.2.3 设置 Git 默认编辑器](#423-设置-git-默认编辑器)
    - [4.3 Task 自动化任务](#43-task-自动化任务)
      - [4.3.1 配置 Task](#431-配置-task)
        - [4.3.1.1 配置 Task 的属性](#4311-配置-task-的属性)
        - [4.3.1.2 问题匹配器](#4312-问题匹配器)
        - [4.3.1.3 命令参数](#4313-命令参数)
        - [4.3.1.4 输出行为](#4314-输出行为)
        - [4.3.1.5 运行行为](#4315-运行行为)
        - [4.3.1.6 变量替换](#4316-变量替换)
      - [4.3.2 操作系统的相关属性](#432-操作系统的相关属性)
      - [4.3.3 后台运行的 Task](#433-后台运行的-task)
    - [4.4 多项目工作区(multi-root Workspaces)](#44-多项目工作区multi-root-workspaces)
      - [4.4.1 添加多文件夹](#441-添加多文件夹)
      - [4.4.2 工作区文件](#442-工作区文件)
      - [4.4.3 用户界面](#443-用户界面)
      - [4.4.4 源代码管理](#444-源代码管理)
    - [4.5 调试与运行](#45-调试与运行)
      - [4.5.1 插件调试器](#451-插件调试器)
      - [4.5.2 调试模式与运行模式](#452-调试模式与运行模式)
      - [4.5.3 launch.json 调试配置](#453-launchjson-调试配置)
      - [4.5.4 launch.json 属性](#454-launchjson-属性)
      - [4.5.5 全局的 launch.json 配置](#455-全局的-launchjson-配置)
      - [4.5.6 多目标调试](#456-多目标调试)
  - [五. 插件](#五-插件)
    - [5.1 插件市场](#51-插件市场)
    - [5.2 优秀的插件](#52-优秀的插件)
      - [5.2.1 REST Client](#521-rest-client)
      - [5.2.2 Code Runner](#522-code-runner)
      - [5.2.3 Bracket Pair Colorizer 2](#523-bracket-pair-colorizer-2)
      - [5.2.4 indent-rainbow](#524-indent-rainbow)
      - [5.2.5 Peacock](#525-peacock)
      - [5.2.6 Git 集成](#526-git-集成)
      - [5.2.7 Web 开发利器](#527-web-开发利器)
      - [5.2.8 提高开发性能](#528-提高开发性能)
      - [5.2.9 好用的工具类插件](#529-好用的工具类插件)
      - [5.2.10 容器开发](#5210-容器开发)
      - [5.2.11 移动开发](#5211-移动开发)
  - [六. 语言深入](#六-语言深入)
    - [6.1 JavaScript](#61-javascript)
    - [6.2 代码编辑](#62-代码编辑)
      - [6.2.1 IntelliSense](#621-intellisense)
      - [6.2.2 JSDoc](#622-jsdoc)
      - [6.2.3 自动导入](#623-自动导入)
      - [6.2.4 JSX](#624-jsx)
      - [6.2.5 代码导航](#625-代码导航)
      - [6.2.6 重构](#626-重构)
      - [6.2.7 移除无用的代码和变量](#627-移除无用的代码和变量)
      - [6.2.8 整理导入语句](#628-整理导入语句)
      - [6.2.9 文件移动时更新导入语句](#629-文件移动时更新导入语句)
      - [6.2.10 引用的 CodeLens](#6210-引用的-codelens)
      - [6.2.11 类型检查](#6211-类型检查)
      - [6.2.12 调试](#6212-调试)
        - [6.2.12.1 服务器端调试](#62121-服务器端调试)
          - [6.2.12.1.1 一键调试](#621211-一键调试)
          - [6.2.12.1.2 创建调试配置](#621212-创建调试配置)
          - [6.2.12.1.3 调试配置属性](#621213-调试配置属性)
          - [6.2.12.1.4 附加到 Node.js 程序](#621214-附加到-nodejs-程序)
          - [6.2.12.1.5 远程调试](#621215-远程调试)
        - [6.2.12.1.6 客户端调试](#621216-客户端调试)
  - [七. 前端开发](#七-前端开发)
    - [7.1 HTML](#71-html)
      - [7.1.1 IntelliSense](#711-intellisense)
      - [7.1.2 自动闭合标签](#712-自动闭合标签)
      - [7.1.3 颜色选择器](#713-颜色选择器)
      - [7.1.4 验证嵌入的 JS 和 CSS](#714-验证嵌入的-js-和-css)
      - [7.1.5 代码折叠](#715-代码折叠)
      - [7.1.6 代码格式化](#716-代码格式化)
      - [7.1.7 自定义 HTML 数据格式](#717-自定义-html-数据格式)
      - [7.1.8 HTML 插件推荐](#718-html-插件推荐)
    - [7.2 CSS、SCSS 和 Less](#72-css-scss-和-less)
      - [7.2.1 IntelliSense](#721-intellisense)
      - [7.2.2 颜色预览](#722-颜色预览)
      - [7.2.3 颜色选择器](#723-颜色选择器)
      - [7.2.4 代码折叠](#724-代码折叠)
      - [7.2.5 静态代码检查](#725-静态代码检查)
      - [7.2.6 跳转到 CSS 符号](#726-跳转到-css-符号)
      - [7.2.7 悬停预览](#727-悬停预览)
      - [7.2.8 自定义 CSS 数据格式](#728-自定义-css-数据格式)
      - [7.2.9 CSS 插件提示](#729-css-插件提示)
    - [7.3 Emmet](#73-emmet)
      - [7.3.1 Emmet 的支持范围](#731-emmet-的支持范围)
      - [7.3.2 在 HTML 中使用 Emmet](#732-在-html-中使用-emmet)
      - [7.3.3 在 CSS 中使用 Emmet](#733-在-css-中使用-emmet)
      - [7.3.4 设置 Emmet](#734-设置-emmet)
      - [7.3.5 Emmet 设置项](#735-emmet-设置项)
      - [7.3.6 自定义 Emmet 片段](#736-自定义-emmet-片段)
    - [7.4 .Vue](#74-vue)
      - [7.4.1 快速开始](#741-快速开始)
      - [7.4.2 Vetur 插件](#742-vetur-插件)
      - [7.4.3 调试 Vue](#743-调试-vue)
      - [7.4.4 启动调试](#744-启动调试)
      - [7.4.5 静态代码检查](#745-静态代码检查)
  - [八. 远程开发](#八-远程开发)

<!-- /code_chunk_output -->

# VSCode 编辑器

---------------

## 一. 常用命令

### 1.1 通用快捷键

- `Ctrl + Shift + P` 或 `F1` : 打开命令面板
- `Ctrl + K Ctrl + S` : 打开快捷键编辑器
- `Ctrl + W` : 关闭当前窗口
- `Ctrl + ,` : 打开用户设置
- Ctrl + ` : 打开集成终端
- `Shift + Alt + 鼠标左键` : 列选择

### 1.2 跳转

- `Ctrl + P` : 跳转到最近打开的文件
- `Ctrl + Shift + Tab / Ctrl + Tab` : 在已打开的文件中跳转
- `Ctrl + Shift + O` : 跳转到文件中的符号
- `Ctrl + G` : 跳转到文件中的某一行
- `Home/end` : 光标移动到当前行的起始/结尾
- `Ctrl + Home/end` : 光标移动到当前文档的起始/结尾

### 1.3 基本编辑

- `Ctrl + Shift + [ / ]` : 折叠或展开当前代码块
- `Alt + ← / →` : 向前/向编辑位置后跳转
- `Ctrl + Shift + K` : 删除当前行
- `Alt + ↑ / ↓` : 把当前行内容向上/下移动
- `Shift + Alt + ↑ / ↓` : 把当前行内容向上/下复制
- `Ctrl + /` : 添加或删除当前行的注释

### 1.4 编程语言编辑

- `Ctrl + Shift + I` : 格式化文档
- `Ctrl + K Ctrl + F` : 格式化选定内容
- `F12` : 跳转到定义
- `Alt + F12` : 在当前页查看定义
- `Shift + F12` : 查看引用
- `F2` : 重命名符号
- `Ctrl + .` : 快速修复
- `Ctrl + Shift + \` : 在匹配的括号之间跳转

### 1.5 搜索与替换

- `Ctrl + F` : 搜索
- `Ctrl + H` : 替换
- `Ctrl + Shift + F` : 全局搜索
- `Ctrl + Shift + H` : 全局替换

### 1.6 多光标与选择

- `Alt + 鼠标左键` : 插入一个新的光标
- `Ctrl + Alt + ↑ / ↓` : 在上/下方添加一个光标
- `Ctrl + D` : 第一次按下快捷键会选择当前光标处的单词，再次按下快捷键，会在下一个相同单词的位置添加一个新光标
- `Ctrl + Shift + L` : 会在当前光标处单词所有出现的位置，都添加光标
- `Ctrl + L` : 选中当前行
- `Shift + Alt + ← / →` : 缩小/扩大选中的范围

### 1.7 窗口显示

- `Ctrl + =/-` : 窗口放大/缩小

### 1.8 编辑器管理

- `Ctrl + \` : 向右分割编辑器
- `Ctrl +1/2/3` : 把焦点移动到不同的编辑器组

### 1.9 文件管理

- `Ctrl + N` : 新建文件
- `Ctrl + Shift + N` : 新建编辑器
- `Ctrl + O` : 打开文件
- `Ctrl + Tab` : 向前在已打开的文件中选择一个
- `Ctrl + Shift + Tab` : 向后在已打开的文件中选择一个

## 二. 常用设置

- "editor.minimap.enabled":false 控制缩略图显隐
- "workbench.editor.showTabs":false 控制 TAB 显隐
- "workbench.editor.openPositioning":"left" 设置新 TAB 的出现位置
- "terminal.integrated.shell.\*" 配置 Shell
- "terminal.integrated.cwd": "/hone/user" 配置终端的打开路径，终端默认在当前文件夹下打开

## 三. 常用知识

### 3.1 全部搜索-高级搜索选项

单击全部搜索输入框下方的省略号或使用 `Ctrl+Shift+J` 快捷键，可以调出高级搜索选项: **要包含的文件** 和 **排除的文件** ，需要以 **"."** 开头并且全拼，文件后缀名用 **","** 分隔

### 3.2 编程语言定义代码块的起始和结束区域的 标记

| 编程语言      | 起始区域                    | 结束区域                        |
| ------------- | --------------------------- | ------------------------------- |
| CSS/Less/SCSS | /\*#region\*/               | /\*#endregion\*/                |
| CSS/Less/SCSS | /\*#region\*/               | /\*#endregion\*/                |
| C/C++         | #pragma region              | #pragma endregion               |
| Java          | //#region 或//<editor-fold> | //#endregion 或//</editor-fold> |
| Python        | #region                     | #endregion                      |
| TypeScript/JS | //#region 或//region        | //#endregion 或//endregion\     |
| Markdown      | \<!--#region-->             | \<!--endregion-->               |

### 3.3 自动检测代码缩进

VSCode 会自动检测打开的文档来确定所使用的代码缩进，通过自动检测所得出的缩进配置，会覆盖默认配置。

### 3.4 命令行打开

在命令行中输入 `code .` ，可以启动 VSCode 并直接打开当前文件夹

### 3.5 打开结果视图查看一个符号的所有引用

`Shift + Alt + F12` 快捷键或编辑菜单中的 Find All Reference，可以打开结果视图查看一个符号的所有引用。

### 3.6 跳转符号按类型进行分组

`Ctrl +Shift + O` 可以跳转到当前文件中的不同符号，通过输入":"，所有的符号都会按类型进行分组

### 3.7 配置语言的文件关联

通过 `files.associations` 设置项，可以把一个新的文件扩展名添加到已有的编程语言中。

## 四. 常用功能

### 4.1 代码片段

#### 4.1.1 插入代码片段

1. 通过 `Ctrl + Shift + P` 快捷键打开命令面板，输入并执行`Insert Snippet` 命令，会显示适合当前语言的所有代码片段的列表。
2. 在编辑器中编写代码时，VSCode 会提供智能提示功能，通过智能提示即可插入代码片段。

#### 4.1.2 自定义代码片段

1. 在哪里
   文件 -> 首选项 -> 用户片段，或 命令面板的 Preferences:Configure User Snippets
   代码片段的定义文件是 JSON 格式的，并且支持 C 语言风格的注释.
2. 创建
   "For Loop": { // 代码片段名称
   "prefix": ["for", "for-const"], // 定义了代码片段在 IntelliSense 中触发的单词。字符串的子串也可以作为触发条件。fc 也会匹配 for-const
   // body 包含了三个占位符 ${2:element} ${1:array} 和 $0，在插入代码片段后，可以通过 Tab 键在占位符之间按顺序进行跳转，冒号后面是默认的文本，前面的数字是出现的顺序，0 是最终的位置
   "body": ["for (const ${2:element} of ${1:array}) {", "\t$0", "}"], // 定义了要被插入的代码片段，它使用了数组，每一个元素表示一行独立的内容。这里有 3 行代码片段
   "description": "A for loop." // 可选项，定义了在 IntelliSense 中显示的描述性文本
   }
3. 代码片段的生效范围
   1. **语言维度** : 定义代码对于哪些语言生效，每一个代码片段都可以在一种、多种或所有语言的范围内生效。
      1. 一种语言的代码片段会被定义在对应语言的代码片段定义文件中
         例: JavaScript 的代码片段被定义在 javascript.json 中
      2. 多语言的代码片段被定义在以 `.code-snippets` 为结尾的 JSON 文件中，这个文件中有一个 `scope` 属性，它会包含一个或多个语言 ID，从而定义当前的代码片段对哪些语言生效，如果没有 scope 属性，当前的代码片段会对所有语言生效。
   2. **项目维度** : 定义代码片段实在当前项目中生效还是在全局范围内生效
      创建代码片段时的，**New Snippets file for '...'** 选项创建的是当前项目的代码片段，当前项目的代码片段的定义文件位于 **.vscode** 文件夹下的 **.code-snippets** 结尾的 JSON 文件中。对于多人协同开发的项目，当前项目维度的代码片段会十分有用。

#### 4.1.3 代码片段的语法

**Tabstops**
: 通过 **Tabstops**，可以使光标在代码片段中跳转。可以使用 `$1`、`$2`、`$3`等代码片段中的字符来指定光标的位置。光标会根据指定的位置对`$1`、`$2`、`$3`等依次进行遍历。比较特殊的字符是 `$0`，它是光标抵达的最后一个字符。对于 **数字一样** 的 Tabstops，在编辑代码片段时，Tabstops 中的文本内容也会 **随之更新**。

**占位符**
: 占位符是**包含默认**的 Tabstops，如: `${1:foo}`。占位符的文本会被默认地添加到相应 Tabstops 的位置。

**选择**
: 占位符可以把多个值作为文本内容。多个值以逗号分隔，并且用管道字符包围，如: `${1|noe,two,three|}`。当代码片段被插入后，跳转到对应的占位符时，会出现下拉列表，以便选择对应的文本。

**变量** (variable)
: 通过 `$variable` 或 `${variable:default}` 可以插入变量的值。当变量为空时，会插入默认值或空字符串。
可以使用的变量，如下所示:

- `TM_SELECTED_TEXT` : 当前被选中的文本
- `TM_CURRENT_LINE` : 当前光标所在行的文本
- `TM_CURRENT_WORD` : 当前光标所在的单词
- `TM_LINE_INDEX` : 从 0 开始计数的行号
- `TM_LINE_NUMBER` : 从 1 开始计数的行号
- `TM_FILENAME` : 当前文件的文件名
- `TM_FILENAME_BASE`: 当前文件的文件名(不包含扩展名)
- `TM_DIRECTORY` : 当前文件的目录名
- `CLIPBOARD` : 当前粘贴板的文本内容
- `WORKSPACE_NAME` : -当前工作区的目录名

下面的变量可以用来插入 **日期** 和 **时间** :

- `CURRENT_YEAR` : 当前的年份
- `CURRENT_YEAR_SHORT` : 当前年份的后两位数字
- `CURRENT_MONTH` : 当前月份的两位数字(如‘02’)
- `CURRENT_MONTH_NAME` : 当前月份的全称(如‘July’)
- `CURRENT_MONTH_NAME_SHORT` : 当前月份的简称(如‘Jul’)
- `CURRENT_DATE` : 当前月份的今天(如‘25’)
- `CURRENT_DAY_NAME` : 当前是星期几(如‘Monday’)
- `CURRENT_DAY_NAME_SHORT` : 当前是星期几(简称，如‘Mon’)
- `CURRENT_HOUR` : 当前的小时数(24 小时制)
- `CURRENT_MINUTE` : 当前的分钟数
- `CURRENT_SECOND` : 当前的秒数
- `CURRENT_SECONDS_UNIX` : UNIX 时间(从 UTC1970 年 1 月 1 日 0:0:0 开始到现在的总秒数)

下面的变量可以用来插入注释，并且会根据不同的语言插入相应的注释:

- `BLOCK_COMMENT_START` : 块注释的开始字符。比如，HTML 是 `<!--`
- `BLOCK_COMMENT_END` : 块注释的结束符。比如，HTML 是 `-->`
- `LINE_COMMENT` : 行注释，比如，HTML 是 `<!-- -->`

#### 4.1.4 定义代码片段快捷键

打开命令面板，输入并执行 **Preferences:Open Keyboard Shortcuts(JSON)** 命令，可以打开定义快捷键的 **keybindings.json** 文件

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

> 注: 有的语言默认不开启快速提示，可以在 `settings.json` 文件中针对语言设置 **"editor.quickSuggestions": true**

### 4.2 Git 版本控制插件

#### 4.2.1 Git 分支

左下角的状态栏会显示当前所在的 Git 分支。
当对本地 Git 仓库的文件进行更改时，在编辑器的行号与源代码之间的沟槽中会有相应的提示，对于 **增删改**，有以下三种不同的提示:

- **蓝色条** : 表明这些行的代码有更改
- **绿色条** : 表明新增了代码
- **红色小三角** : 表明当前位置删除了代码

#### 4.2.2 合并冲突

当 VSCode 检测到 Git 合并冲突时，冲突的部分会被高亮显示，还会有不同的内联操作帮助快速解决冲突，如下所示:

- `Accept Current Change` : 保留当前的更改
- `Accept Incoming Change` : 保留新进来的更改
- `Accept Both Changes` : 保留所有的更改
- `Compare Changes` : 在 diff 视图中比较更改

#### 4.2.3 设置 Git 默认编辑器

1. 命令行中运行 `git config --global core.editor "code --wait"`，把 VSCode 设为 Git 的默认编辑器
2. 命令行中运行 `git config --global -e`，会调出 VSCode 来打开全局的 `.gitconfig` 文件，以配置 Git
3. 在 **.gitconfig** 文件中添加以下配置，把 VSCode 设置成 Git 的比较及合并工具

```json
[diff]
  tool = default-difftool
[difftool "default-difftool"]
  cmd = code --wait --diff $LOCAL $REMOTE
[merge]
  tool = code
```

### 4.3 Task 自动化任务

许多工具都可以把重复的任务自动化，包括代码静态检查、编译、打包、测试、部署等。如:

- **编译** : TypeScript 编译器、Java 编译器等
- **静态检查** : ESLint、TSLint 等
- **代码构建** : Make、Ant、Gulp 等

Task(任务)可以被用来 **运行脚本** 或 **启动一个进程**。因此，许多工具都可以通过 Task 直接在 VSCode 中运行，而不需要额外再命令行中输入命令。Task 被配置在 `.vscode` 文件夹的 `tasks.json` 文件中。

> 注: Task 只能配置在有文件夹打开的项目中。

#### 4.3.1 配置 Task

**位置** : 终端 -> 配置任务
**运行** : 点击 终端 -> 运行任务，会显示出所有可以运行的 Task，选择一个 Task 后，会选择要针对何种错误和警告扫描 Task 的输出。选择后，一个新的终端被创建，echo Hello 命令在终端中执行。按下任意键，终端会被关闭。

##### 4.3.1.1 配置 Task 的属性

- **label** : 在用户界面上展示的 Task 标签
- **type** : Task 的类型，分为 `shell` 和 `process` 两种，具体如下所示:
  - **shell** : 作为 Shell 命令运行(如 bash、cmd、PowerShell 等)
  - **process** : 作为一个进程运行
- **command** : 真正执行的命令
- **windows** : Windows 中的特定属性。相应的属性会在 Windows 系统 中覆盖默认的属性定义。
- **group** : 定义 Task 属于哪一个组。分为 **test** 和 **build** 、 **none**。
- **presentation** : 定义用户界面如何处理 Task 的输出。
- **options** : 定义 cwd(当前工作目录)、env(环境变量)和 shell 的值。
- **runOptions** : 定义 Task 何时运行及如何运行

##### 4.3.1.2 问题匹配器

通过问题匹配器，可以对 **Task** 的输出进行扫描，找到对应的错误和警告。VSCode 中内置了一系列的问题匹配器，可以在 **tasks.json** 中使用 `problemMatcher` 属性来定义对应相应的问题匹配器。不同语言的 `problemMatcher` 属性如下所示:

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

##### 4.3.1.3 命令参数

对于复杂的命令可以在 `tasks.json` 中使用 `args` 属性来定义命令的参数。

```json
{                          {
  "label": "dir",            "label": "dir",
  "type": "shell",           "type": "shell",
  "command": "dir",   ==     "command": "dir /b",
  "args": ["/b"]
}                          }
```

##### 4.3.1.4 输出行为

控制集成终端的输出行为，所有与输出相关的行为，都可以通过 `tasks.json` 中的 `presentation` 属性来定义，主要包含以下属性:

- **reveal** : 控制集成终端是否显示。
  - **always** : 集成终端总是会在 Task 启动时显示。默认设置
  - **never** : 集成终端不会主动显示
  - **silent** : 当输出是错误和警告时，集成终端才会显示
- **focus** : 控制集成终端在显示时是否取得焦点。默认值是 false
- **echo** : 控制被执行的命令是否在集成终端中输出。默认值是 true
- **showReuseMessage**:控制是否显示"终端将被任务重用，按任意键关闭"提示信息。默认值是 true
- **panel** : 控制不同的 Task 在运行时是否共享同一个集成终端。其设置包含以下三种:
  - **shared** : 共享集成终端。其他 Task 的运行输出结果也显示在相同的集成终端中。默认设置
  - **dedicated** : Task 会有一个专用的集成终端。如果相应的 Task 再次运行，集成终端就会被复用。但是，其他 Task 的运行输出结果会显示在不同的集成终端中
  - **new** : 每次运行 Task 都会创建一个新的集成终端
- **clear** : 控制在 Task 运行前，是否清除集成终端的输出。默认值是 false
- **group** : 控制 Task 是否在同一个集成终端中运行。如果不同 Task 的 group 属性相同，那么它们会复用同一个集成终端。

##### 4.3.1.5 运行行为

通过 `tasks.json` 中的 `runOptions` 属性可以定义 Task 的运行行为，`runOptions` 属性主要包含以下属性:

- **reevaluateOnRerun** : 在执行 `Rerun Last Task` 命令时，控制是否重新计算变量。默认值是 true
- **runOn** : 指定何时运行 Task。
  - **default**:只有在运行 `Run Task` 命令时，才会触发运行
  - **folderOpen**:当包含这个 `tasks.json` 的文件夹被打开时，便会触发运行。在运行前，VSCode 会询问是否要运行。

##### 4.3.1.6 变量替换

在 tasks.json 中，VSCode 可以进行变量替换。

1. 预定义的变量
   - ${workspaceFolder} : 在 VSCode 中打开的文件夹的完整路径
   - ${workspaceFolderBasename} : 在 VSCode 中打开的文件夹名
   - ${fileWorkspaceFolder} : VSCode 中打开的文件的工作区文件夹路径
   - ${fileDirnameBasename} : VSCode 中打开的文件所在的文件夹的名称
   - ${pathSeparator} : 操作系统用于分隔文件路径中的组件的字符
   - ${file} : 当前打开文件的完整路径
   - ${relativeFile} : 当前打开的文件的相对 workspaceFolder 的路径
   - ${relativeFileDirname} : 当前打开的文件的文件夹的相对 workspaceFolder 路径
   - ${fileBasename} : 当前打开的文件的文件名
   - ${fileBasenameNoExtension} : 当前打开的文件的文件名，不包含扩展名
   - ${fileDirname} : 当前打开的文件的文件夹的完整路径
   - ${fileExtname} :当前打开的文件的扩展名
   - ${cwd} : Task 启动时的工作目录
   - ${lineNumber} : 当前光标所在的行号
   - ${selectedText} :当前 打开的文件中选中的文本
   - ${execPath} : VSCode 可执行文件的完整路径
   - ${defaultBuildTask} : 默认的 Build Task 的名字
2. 环境变量
   通过 `${env:Name}` 的语法，可以引用环境变量。
3. 配置变量
   通过 `${config:Name}` 的语法，可以引用 VSCode 的设置项。
   例: `${config:editor.fontSize}` 会得到编辑器的字体大小
4. 输入变量
   有些时候，在运行 Task 时，每次都需要传入不同的变量，通过输入变量，可以轻松地对 Task 进行定制化。输入变量的语法是 `${input:variableID}`，variableID 引用了 tasks.json 中的 inputs 部分的配置内容。
   VSCode 支持以下三种类型的输入变量:
   - promptString : 展示输入框，并获得用户的输入字符串
     - description : 在文本输入框中展示的描述信息
     - default : 输入的默认值
   - pickString : 展示一个下拉列表，让用户选择其中一个选项
     - description : 在下拉列表的输入框中展示的描述信息
     - options : 选项数组，使用户可以在下拉列表中进行选择
     - default : 输入的默认值。其值必须为下拉列表选项中的一个
   - command : 运行任意的命令
     - command : 要运行的命令
     - args : 运行命令的参数(可选)

#### 4.3.2 操作系统的相关属性

不同操作系统中的 Task 命令也可能不同。在 Windows 上使用 `windows` 属性，在 Linux 上使用 `linux` 属性，在 macOS 上使用 `osx` 属性。
Task 的属性被定义在全局范围。除非具体的某一个 Task 定义了相应的属性，否则就使用全局属性。

#### 4.3.3 后台运行的 Task

一些工具可以在后台运行，当文件更新时，便会触发相应的操作。

> **例**: TypeScript 的编译器 **tsc** 通过 **--watch** 参数对此功能提供了内置的支持。

### 4.4 多项目工作区(multi-root Workspaces)

在 VSCode 中，可以方便地管理多个文件夹。

#### 4.4.1 添加多文件夹

1. 添加文件夹
   文件 -> 将文件夹添加到工作区，选择要添加的文件夹。
2. 拖拽
   可以通过拖拽把文件夹添加到工作区，可以同时选择多个文件夹拖拽。
3. 选择多个文件夹并打开
   文件 -> 打开文件夹，可以选择多个文件夹打开。
4. 通过命令行添加文件夹
   通过命令行的 **--add** 参数，可以把多个文件夹添加到最近活跃的 VSCode 窗口中
   例: `code --add folder1 folder2`

#### 4.4.2 工作区文件

在工作区添加多个文件后，工作区会被命名为 **无标题(工作区)**。在关闭多文件夹窗口时，会询问是否要保存工作区文件，选择保存工作区文件，VSCode 会创建一个扩展名为 `.code-workspace` 的文件。

文件 -> 将工作区另存为，可以把当前工作区的信息保存到 `*.code-workspace` 工作区文件中。

1. 打开工作区文件
   - 双击 .code-workspace 工作区文件
   - 文件 -> 打开工作区
   - 文件 -> 打开最近的文件
2. `*.code-workspace` 工作区文件的属性
   - path : 文件夹的路径，可以是绝对路径，也可以是相对路径
   - name : 文件的显示名
   - settings : 为了避免各个文件设置的冲突，可以通过设置全局的工作区配置，对当前工作区的所有文件夹进行设置
   - extensions : 插件推荐，可以为当前的工作区项目推荐相应的插件。通过在 `extensions.recommendations` 数组中添加插件的 ID({publisherName}.{extensionName})实现插件推荐

#### 4.4.3 用户界面

与单文件夹界面的区别:

- 显示相对路径和符号
- 面包屑导航会显示多文件夹的文件夹名
- **Ctrl+P** 快速打开文件时，文件列表会显示文件夹名
- 搜索时，搜索结果会按照文件夹来分组显示

#### 4.4.4 源代码管理

多文件夹项目如果有多个 git 的文件夹，那么在源代码管理视图中会显示 **SOURCE CONTROL PROVIDERS** ，在 **SOURCE CONTROL PROVIDERS** 中点击代码仓库，可以在下方看到代码更改的详情。

### 4.5 调试与运行

#### 4.5.1 插件调试器

VSCode 内置了对 **Node.js 运行时** 的调试支持，无须安装额外的插件就能调试 JS 和 TS。其他编程语言，需要额外安装相应的调试器插件。

#### 4.5.2 调试模式与运行模式

在 VSCode 中，内置的 **Node.js** 调试器及其他调试器插件支持以下两种模式:

- **调试**模式 : 快捷键为 F5，命令为 Start Debugging
- **运行**模式 : 快捷键为 Ctrl+F5，命令为 Run Without Debugging

#### 4.5.3 launch.json 调试配置

对于一些更加复杂的调试场景，需要创建调试配置，以便后续进行定制化调试。VSCode 的调试配置被存储在 `.vscode` 文件夹的 `launch.json` 文件中。可以通过以下步骤来创建一个调试配置:

1. 运行 -> 添加配置
2. VSCode 会在 **.vscode** 文件夹中创建并打开一个 **launch.json** 文件，文件中定义了调试所需要的的配置。

#### 4.5.4 launch.json 属性

- **必要属性**
  - type : 调试器的类型。例如:内置的 Node.js 调试器是 node
  - request : 调试的模式，有以下两种模式:
    launch : 启动程序(该程序定义在 program 设置项中)并调试
    attach : 将程序附加到一个正在运行的进程中进行调试。
  - name : 调试配置的名字
- **可选项**
  - presentation : 使用 order、group 和 hidden 属性来定义调试配置的显示
  - preLaunchTask : 定义在调试前要运行的任务
  - postDebugTask : 定义在调试结束时要运行的任务
  - internalConsoleOptions : 定义调试控制台的显示
  - serverReadyAction : 设置在调试时自动在浏览器中打开 URL
- 大多数调试器插件还支持以下属性
  - program : 要运行的可执行文件或源代码的路径
  - args : 要传递给 program 的参数
  - env : 环境变量
  - cwd : 调试器的工作目录，默认值是${workspaceFolder}
  - port : 要附加到进程的端口
  - stopOnEntry : 是否在程序入口进行断点
  - console : 指定程序输出的位置
    - internalConsole : VSCode 的调试控制台
    - integratedTerminal : VSCode 的集成终端
    - externalTerminal : 系统的终端

#### 4.5.5 全局的 launch.json 配置

VSCode 支持添加全局的 **launch.json** 配置。
可以在全局的 **settings.json** 文件中使用 **"launch"** 属性设置全局的的调试配置。

#### 4.5.6 多目标调试

VSCode 的多目标调试支持同时调试多个应用程序的代码。
在 **launch.json** 文件中，通过 `compound` 属性，可以配置多目标调试。

## 五. 插件

### 5.1 插件市场

[插件市场](https://marketplace.visualstudio.com/vscode)，首页有四个分组

- Featured : 推荐插件
- Trending : 每日插件安装数量榜
- Most Popular : 插件总安装量榜
- Recently Added : 最新发布的插件

### 5.2 优秀的插件

#### 5.2.1 REST Client

测试 **REST API** 的工具。REST API 是前后端分离最佳实践，是开发的一套标准或者说是一套规范。
REST Client 支持 `cURL` 和 `RFC2616` 这两种业界标准来调用 REST API。

> 例: [test.http](./test.http)

- HTTP 语言
  REST Client 插件添加了 HTTP 语言的定义，支持把以 `.http` 或 `.rest` 结尾的文件中的代码当作 **HTTP** 语言进行处理，提供了语法高亮、代码智能提示、代码注释等功能。通过 ### 分隔符，同一个 http 文件中可以涵盖多个 HTTP 请求。
- 代码生成
  在 HTTP 语言文件的右键菜单中，可以通过 `Generate Code Snippet` 命令来将 HTTP 请求生成不同编程语言的代码。
- 高阶功能
  - **身份认证** : REST Client 支持 Basic Auth、SSL Client Certificates、Azure Active Directory 等多种验证机制。
  - 支持 **Cookies**
  - 支持 **HTTP3xx** 的重定向
  - **支持多种变量** : 环境变量、文件变量、预定义的系统变量等

#### 5.2.2 Code Runner

代码一键运行，支持 40 多种语言

- 代码一键运行
  - 通过快捷键 `Ctrl+Alt+N`
  - 打开命令面板，输入并执行 Run Code
  - 在编辑区域的右键菜单中单击 Run Code
  - 在左侧的文件管理器中找到要运行的文件，在其右键菜单中单击 Run Code
  - 单击文件右上角的"运行"小三角按钮

> **注** : Code Runner 插件并不包含各个编程语言的编译器。需要自行安装相应编程语言的编译器，并且把路径添加到 PATH 环境变量中。

- 停止代码运行

  - 通过 `Ctrl+Alt+M` 快捷键
  - 命令面板，输入并执行 Stop Code Run
  - 在输出面板的右键菜单中单击 Stop Code Run

- 在集成终端中运行代码
  默认情况下，Code Runner 会把运行输出结果打印在输出面板中。在 Code Runner 插件的 GitHub 上，用户最多的问题是如何解决乱码问题和怎样支持输入。通过 `Run Code configuration: Run In Terminal` 设置，把代码放到 VSCode 内置的集成终端来运行，就可以解决上面的两个问题。

- 自定义运行逻辑
  在 settings.json 文件中，添加 `code-runner.executorMap` 设置，然后就可以对不同的语言设置自定义的运行逻辑了。

#### 5.2.3 Bracket Pair Colorizer 2

它为代码中的各种结对的括号提供了颜色高亮等功能。
转到另一个括号的快捷键 : `Ctrl + Shift + \`

- 常用设置项
  - **bracket-pair-colorizer-2.forceUniqueOpeningColor** : 颜色的唯一性设置
  - **bracket-pair-colorizer-2.colorMode** : 颜色的模式
    - **Consecutive** : 所有的括号共享一个颜色集合
    - **Independent** : 不同类型的括号使用自己的颜色集合
  - **bracket-pair-colorizer-2.highlightActiveScope** : 是否对当前范围的括号进行高亮显示。
  - **bracket-pair-colorizer-2.activeScopeCSS** : 设置颜色高亮显示的括号的 CSS

#### 5.2.4 indent-rainbow

缩进颜色支持

#### 5.2.5 Peacock

为 VSCode 窗口配置颜色。
命令面板 -> Peacock : Change to a Favorite Color 选择颜色
设置 -> peacock.surpriseMeOnStartup 是否为新开的 VSCode 窗口随机选择一个颜色

#### 5.2.6 Git 集成

1. GitHub Pull requests
   GitHub 的代码审查插件
2. GitLens
   功能非常丰富的 git 插件

#### 5.2.7 Web 开发利器

1. **Web Template Studio**
   可以在 VSCode 中基于图形用户界面的向导快速创建 Web 应用。
   打开命令面板，输入并执行 Web Template Studio:launch，创建 Web 项目
   打开命令面板，输入并执行 Web Template Studio:Deploy App，部署 Web 项目
   该插件支持 3 个前端框架: React、Vue、Angular，支持的后端框架有选择 Node 的 Express、Flask、Molecular

2. **Debugger for Chrome**
   Debugger for Chrome 插件除了可以调试运行在 Google Chrome 浏览器中的 JS 代码，还可以调试运行在支持 Chrome DevTools Protocol 的浏览器中的 JS 代码，如:Chromium 浏览器和其他基于 Blink 渲染引擎的浏览器。
   在调试视图选择 launch.json 文件中的 `Launch chrome Current File` 选项，然后按 F5 快捷键，VSCode 就会启动 Chrome 浏览器。
   例 : launch.json -> "Launch chrome Current File"
   如果想要将 VSCode 附加到 Chrome 浏览器，需要在远程调试模式下启动 Chrome 浏览器，针对不同系统，在命令行输入不同的命令来启动 Chrome 浏览器。
   在 Windows 下 : `<path to chrome>/chrome.exe --remote-debugging-port-9222`
   在 macOS 下 : `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote--debugging-port=9222`
   在 Linux 下 : `google-chrome --remote-debugging-port=9222`
   例 : launch -> "Attach to url with files served from ./out"
3. **Debugger for Firefox**
   Debugger for Firefox 插件除了可以调试运行在 Firefox 浏览器中的 JS 代码，还可以调试 Firefox 浏览器插件。需要设置 Firefox 浏览器启动文件的绝对路径。
   在调试视图中选择 Launch firefox Current File，然后按 F5，VSCode 就会启动 Firefox 浏览器
   例子:launch.json -> "Launch firefox Current File"

4. **SQL Server(mssql)**
   支持连接到 Microsoft SQL Server，还支持连接到 Azure SQL Database 和 Azure Synapse Analytics。
   插件主要包含以下几个功能:
   - 创建和管理数据库连接，以及最近使用的数据库连接
   - T-SQL 的编辑支持，包括智能提示、代码片段、语法高亮、错误检测等
   - 执行 SQL 脚本，并且以表格的形式展示结果
   - 把 SQL 脚本运行的运行结果以 JSON 或 CSV 格式保存

#### 5.2.8 提高开发性能

- **Code Spell Checker**
  可以对代码进行拼写检查，并且提供了自动修复的功能

- **Better Comments**
  为数十种语言提供了更好的代码注释功能。插件把注释分为警告、高亮、待办事项等分类，并提供了不同的颜色显示。

- **Image Preview**
  通过这个插件，可以方便快捷的预览图片，支持 SVG、PNG、JPG、GIF 等多种图片格式。

- **Output Colorizer**
  插件为 .log 日志文件和 VSCode 的输出面板提供了语法高亮功能。方便进行日志分析。

- **Debug Visualizer**
  插件提供了实时的可视化调试方式，可以一键解析代码结构，并支持多种主流的编程语言。打开命令面板输入并执行 Debug Visualizer

- **EditorConfig for VSCode**
  可以在不同的编辑器和 IDE 之间定义和维护一致的编码样式。通过一个名为 **.editorconfig** 的文件，可以定义统一的编码样式。
  在安装了 EditorConfig for VSCode 插件后，打开任何一个文件时，插件都会从当前文件夹开始向它的父文件夹寻找.editorconfig 文件，直到找到一个最上层的.editorconfig 文件，或者找到一个包含 `root=true` 的 .editorconfig 文件。
  .editorconfig 文件的匹配规则是从上往下的，即先定义的规则优先级比后定义的要高。

  EditorConfig for VSCode 插件支持以下设置项:

  - indent_style : 设置缩进分割，可以设置为 tab 或 space
  - indent_size : 设置缩进的大小
  - tab_width : 设置 tab 的大小，默认情况下与 indent_size 的值相同
  - end_of_line : 设置结尾换行符，可设置为 If、cr 或 crIf
  - insert_final_newline : 保存文件时，是否在文件末尾添加换行符
  - trim_trailing_whitespace : 保存文件时，是否删除多余的空白字符

#### 5.2.9 好用的工具类插件

- **Polacode**
  插件可以把选中的代码导出为图片格式，并且完全保留代码在 VSCode 中原本的字体和颜色主题。在命令面板中，输入 Polacode 并执行。

- **TODO Tree**
  插件可以把当前工作区中所有代码的 TODO 标签的内容显示在树状视图中。可以方便的通过树状视图在不同的 TODO 标签中跳转。

- **Bookmarks**
  可以为任何一行代码添加书签，并跳转到不同的书签。

- **Paste JSON as code**
  可以把 JSON 或 TS 转换成其他编程语言，包括 TS、Python、GO、Ruby、Java、Swift、C++、JS 等。

#### 5.2.10 容器开发

- **Docker**
  为 **Docker** 和 Docker Compare 提供了语法高亮、静态代码检查、智能代码提示等语言功能。此外，插件还提供了 Docker 资源管理器，可以方便地查看和管理 Docker 容器、镜像、网络等。

- **Kubernetes**
  插件为 Kubernetes 开发提供了极为丰富的功能，可以在 VSCode 中开发、部署和调试 Kubernetes 应用程序。

#### 5.2.11 移动开发

- **Flutter**
  可以让开发者高效地编辑、运行并调试 Flutter 应用程序，并支持 Dart 语言。

- **Cordova tools**
  为 Apache Cordova 开发提供了代码提示、调试、集成命令等功能。

- **Ionic Snippets**
  为加速 Ionic 开发提供了丰富的代码片段

## 六. 语言深入

### 6.1 JavaScript

**ECMAScript** 是一种在 **ECMA-262** 标准中定义的脚本语言规范。而 JavaScript 是一种编程语言，它实现了 ECMAScript 所定义的规范。
一般来说，JS 包含以下几部分:

- **ECMAScript** : 描述了该语言的语法和基本对象
- **文档对象模型** (DOM): 描述处理网页内容的方法和接口
- **浏览器对象模型** (BOM): 描述与浏览器进行交互的方法和接口

**Node.js** 和 **JS** 的区别和联系:

- Node.js 是一个 JS 运行时。JS 可以运行在 浏览器 或 Node.js 中
- 在浏览器运行时中，JS 可以访问 document、window 等浏览器对象
- 在 Node.js 运行时中，JS 可以访问与操作系统、文件系统等相关的 API

### 6.2 代码编辑

#### 6.2.1 IntelliSense

IntelliSense 提供了代码补全功能，可以显示悬停信息、参数信息、快速信息等。

- 自动类型获取
  JS 库和框架的 IntelliSense 由 TS 的类型声明文件(.d.ts 文件)驱动。许多 JS 的 npm 软件包会包含.d.ts 文件，这样在 VSCode 中就能直接获得 IntelliSense 功能。
  如果 JS 的 npm 软件包中没有包含.d.ts 文件，那么 VSCode 的自动类型获取就会自动下载社区维护的.d.ts 文件，进而获取 IntelliSense 功能。

#### 6.2.2 JSDoc

除了可以通过类型推断和自动类型获取提供 IntelliSense 功能，VSCode 还可以通过 JSDoc 来提供。
在函数上方输入/\*\*，就能触发代码片段提示，自动生成以下的 JSDoc。

```JS
/**
*
* @param {*} a
* @param {*} b
*/
```

可以根据函数定义添加对应的详细 **JSDoc** 描述。这样在其他地方引用对应函数时，就能显示详细的函数提示了。
通过设置 `"javascript.suggest.completeJSDocs:false"`，可以禁用 JSDoc 的提示。

#### 6.2.3 自动导入

自动导入可以在你编写代码时提示变量及相应的依赖。当你选择了其中某一个建议的选项后，VSCode 会在文件的顶部自动导入相应的依赖。
通过 `"javascript.suggest.autoImports:false"`，可以禁用自动导入。

#### 6.2.4 JSX

在 JSX 文件中，也可以使用 JS 的完整功能。在*.js 和*.jsx 文件中，都能使用 JSX 的语法。VSCode 也支持自动添加闭标签。
通过 `"javascript.autoClosingTags:false"` ，可以禁用闭标签的自动补全。

#### 6.2.5 代码导航

对于 JS 代码，在编辑区域的右键菜单中可以看到以下几种主要的代码导航方式:

- **Go to Definition** (转到定义) : 跳转到定义当前符号的代码，快捷键为 F12。
- **Peek Definition** (查看定义) : 与 **Go to Definition** 类似，但会直接在内联编辑器中展示定义的代码，快捷键为 Alt+F12。
- **Go to References** (转到引用) : 跳转到引用当前符号的代码，快捷键为 Shift+F12。
- **Go to Definition** (转到类型定义) : 跳转到当前符号的类型定义。

#### 6.2.6 重构

VSCode 对 JS 支持以下几种重构命令:

- 提取到函数
- 提取到变量
- 在命名的导入与名字空间的导入之间切换
- 移动到新的文件

#### 6.2.7 移除无用的代码和变量

如果 VSCode 发现有不可达的代码，相应的代码颜色就会变浅，而且可以通过命令快速移除。
通过 `"editor.showUnused:false"` ，可以禁用使不可达代码颜色变浅。此外，还可以根据语言来进行设置:

```json
"[javascript]" : {
  "editor.showUnused" :false
}
```

#### 6.2.8 整理导入语句

通过 Organize Imports 源代码操作，可以对 JS 的 import 语句进行排序，并且移除没有使用的导入语句，操作步骤:

1. 右键菜单选择 **Source Action** 选项，然后选择 **Organize Imports** 命令
2. 快捷键 `Shift + Alt + O`

通过以下设置，还可以在保存文件时自动触发导入语句的整理

```json
"editor.codeActionsOnSave": {
  "source.organizeImport" : true
}
```

#### 6.2.9 文件移动时更新导入语句

在 JS 项目中，如果一个文件被其他文件引用，那么当它被移动或改名时，VSCode 可以自动更新所有相关的导入语句的文件路径。
通过 `"javascript.updateImportsOnFileMove.enabled"` 设置项可以进行进一步配置，该配置项的可选值如下:

- prompt : 默认值。在更新前会弹窗询问是否要更新路径
- always : 自动更新路径
- never : 不更新路径

#### 6.2.10 引用的 CodeLens

JS 代码支持会在类、函数、属性等上方的 **CodeLes** 上显示代码被引用的数量。
默认情况下，在 JS 代码中不会显示 CodeLens。可以通过设置 `"javascript.referencesCodeLens.enabled:true"` ，来启用 CodeLens。

#### 6.2.11 类型检查

对于普通的 JS 文件，可以使用 **TS 的高级功能** 来进行类型检查。这可以在代码编译和运行之前 **发现潜在的代码错误**。同时，这些类型检查的功能还为 JS 提供了 **快速修复** 的功能，如: 添加缺失的导入语句、添加缺失的属性等。
与.ts 文件一样，TS 可以对.js 文件进行类型推断。如果无法进行类型推断、那么会尝试使用 JSDoc。
VSCode 自带的类型检查工具可以与其他 JS 检测工具(如:ESlint、JSHint)并存。可以通过以下方式启用:

1. 按文件启用
   启用类型检查最简单的方式就是在 JS 文件的顶部添加 `//@ts-check`
2. 通过设置项启用
   通过设置 `"javascript.implicitProjectConfig.checkJs:true"` ，可以从 **全局范围** 内启用类型检查，而且不用改变任何一行代码。优先级比 **jsconfig.json** 或 **tsconfig.json** 低。
   在 JS 文件的顶部添加 `// @ts-nocheck`，可以针对某一个文件禁用类型检查。此外，在代码的前一行添加 `//@ts-ignore` 可以禁用当前行的类型检查。
3. 使用 **jsconfig.json** 或 **tsconfig.json** 启用
   如果项目中包含 jsconfig.json 或 tsconfig.json 文件，那么可以在编辑器选项中添加 `"checkJs":true`，如下:

```json
// 在 jsconfig.json 文件中添加 "checkJs":true
{
  "compilerOptions": { "checkJs":true },
  "exclude": {"node_modules", "**/node_modules/*"}
}
// 在 tsconfig.json 文件中添加 "checkJs":true
{
  "compilerOptions" : {
    "allowJs":true,
    "checkJs":true
  },
  "exclude": {"node_modules", "**/node_modules/*"}
}
```

#### 6.2.12 调试

通过 VSCode 内置的调试器，即可调试 **Node.js** 的应用。

##### 6.2.12.1 服务器端调试

###### 6.2.12.1.1 一键调试

在相应的代码行按下 **F9** 快捷键添加断点，或者单击编辑区域左侧的边槽。添加断点后，左侧的边槽会出现一个红色圆点。然后，切换到调试视图，启动 JS 调试器。可以打开调试控制台，对 JS 变量和表达式直接进行计算。

###### 6.2.12.1.2 创建调试配置

对于一些复杂的项目，需要创建调试配置，以便后续进行定制化操作。
VSCode 的调试配置会被存储在 .vscode 文件夹的 **launch.json** 文件中，可以通过下面的步骤来创建一个调试配置:

1. 切换到视图，点击添加配置
2. VSCode 会在 .vscode 文件夹中创建并打开一个 launch.json 文件，该文件中定义了调试所需的配置。

###### 6.2.12.1.3 调试配置属性

对于调试 Node.js 应用，VSCode 支持两种调试模式: **launch** (启动) 和 **attach** (附加)。
在 **launch.json** 文件中，除了基本的调试属性(如:type、request、name 等)，Node.js 调试器还有一些特殊的属性:
可以被定义在 **launch** 和 **attach** 的调试配置中:

| 属性                                 | 作用                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| **protocol**                         | 调试协议                                                                             |
| **port**                             | 调试端口                                                                             |
| **address**                          | 调试端口的 TCP/IP 地址。                                                             |
| **sourceMaps**                       | 是否启用源代码映射。默认值为 true                                                    |
| **outFiles**                         | 定义生成的 JS 文件的位置                                                             |
| **restart**                          | 在调试会话结束后，是否重启 Node.js 调试器。默认值为 false                            |
| **timeout**                          | 定义何时重启一个调试会话。单位为毫秒                                                 |
| **stopOnEntry**                      | 是否在程序入口设置断点                                                               |
| **localRoot**                        | 定义本地的根目录。在远程调试中使用                                                   |
| **remoteRoot**                       | 定义远程的根目录。在远程调试中使用                                                   |
| **smartStep**                        | 在调试过程中，是否智能地忽略没有定义在源代码映射中的文件                             |
| **skipFiles**                        | 定义在调试过程中需要忽略的文件                                                       |
| **trace**                            | 是否输出诊断信息                                                                     |
| 只能被定义在 **launch** 的调试配置中 |
| **program**                          | Node.js 应用程序的绝对路径                                                           |
| **args**                             | 传给 Node.js 应用程序的参数                                                          |
| **cwd**                              | 指定调试器的工作目录。默认值是${workspaceFolder}(在 VSCode 中打开的文件夹的完整路径) |
| **runtimeExecutable**                | Node.js 运行时的绝对路径。默认值为 node                                              |
| **runtimeArgs**                      | 传给 Node.js 运行时的参数。                                                          |
| **runtimeVersion**                   | 定义 Node.js 运行时的版本                                                            |
| **env**                              | 设置环境变量                                                                         |
| **envFile**                          | 设置.env 文件的路径                                                                  |
| **console**                          | 设置程序输出在哪里。该属性的可选值如下:                                              |

| **internalConsole** : 在 VSCode 的调试控制台输出，该值为默认值
| **integratedTerminal** : 在 VSCode 的集成终端输出
| **externalTerminal** : 在系统的终端输出
**outputCapture** | 如果设置为 std，那么 Node.js 进程的 stdout(标准输出)和 stderr(标准错误)就会显示在调试控制台中。
**autoAttachChildProcesses** | 是否自动附加被调试进程中的所有子进程。默认值为 false。
只能被定义在 **attach** 的调试配置中 |
**processId** | 可以定义附加的进程 ID，如果被设置为${command:PickProcess}，那么可以在调试器启动时显示的进程列表中选择需要调试的进程。

###### 6.2.12.1.4 附加到 Node.js 程序

如果想把 VSCode 的 Node.js 调试器附加到 Node.js 应用程序，就需要在调试模式下启动 Node.js 应用程序，在 VSCode 的集成终端运行以下命令:

> `node --inspect program.js`

如果需要让 Node.js 应用程序等待调试而不运行，则在 VSCode 的集成终端运行以下命令:

> `node --inspect-brk program.js`

VSCode 提供了 3 种方式可以使调试器 **附加** 到 Node.js 应用程序 :

- 自动附加
  打开命令面板，输入并执行 `Toggle Auto Attach` 命令。
  在启动 Node.js 应用程序时，只要添加了 **--inspect、--inspect-brk、--inspect-port、--debug、--debug-brk、--debug-port** 中的任何一个参数，Node.js 调试器就可以自动附加到该应用程序。
- `Attach to Node Process` 命令
  打开命令面板，然后输入并执行 `Attach to Node Process` 命令。
  会显示所有的 Node.js 进程列表。选择要调试的进程，Node.js 调试器就会附加到相应的进程。
- 创建"附加"调试配置
  如果一个 Node.js 进程没有在调试模式下启动，那么通过指定进程 **ID(processId)** ，Node.js 调试器依旧可以附加到相应的进程。
  通过把 processId 属性设置为 `${command:PickProcess}`，可以使调试器在启动时动态地显示 Node.js 进程列表，可以方便地选择需要调试的 Node.js 进程。
  例子: `launch.json -> "Attach to Process"`

###### 6.2.12.1.5 远程调试

VSCode 内置的 Node.js 调试器支持远程调试，只需要在 launch.json 文件中添加一个 `address` 属性即可。
例子: launch.json -> "Attach to remote"

> 默认情况下，VSCode 会把远程 Node.js 程序文件中的源代码展示在本地，但这些文件都是只读的。可以对文件中的源代码进行单步调试，但不可以修改它。
> 如果想在 VSCode 中打开可编辑的源代码，那么就需要 **设置远程文件夹与本地文件夹的映射**。在 launch.json 文件中。可以通过添加 **localRoot** 和 **remoteRoot** 属性来进行映射。
> localRoot 用于定义本地文件夹的根目录，remoteRoot 则用于定义远程文件夹的根目录。
> **例** : launch.js -> "Attach to remote Edit Source code"

##### 6.2.12.1.6 客户端调试

[调试与运行](#45-调试与运行)

(12)静态代码检查
静态代码检查工具能够在编写代码时，提前发现代码中的问题。
① ESLint
通过 npm install eslint 或者 npm install -g eslint 在当前工作区或全局安装 ESLint，然后创建一个.eslintrc 配置文件。通过 eslint.run 设置项，可以设定是保存时(onSave)还是在输入时(onType)运行 ESlint 静态检查。
(13)测试
① Mocha Test Explorer
Mocha 是常用的 JS 测试框架之一。Mocha Test Explorer 支持 Mocha 测试框架，支持的功能包括: - 单元测试的树状图单独显示在专有的测试资源管理器中。 - 运行或调试单元测试 - 测试覆盖率报告 - 并行的运行测试 - 保存文件时自动运行测试
(14)JS 插件推荐
① Path IntelliSense
在 JS 文件中，通过 Path IntelliSense 插件可以对文件路径进行自动补全。此外，该插件也支持在 HTML 和 CSS 文件中对文件路径进行自动补全。
② Import Cost
在 JS 和 TS 文件中，通过 Import Cost 插件可以内联地显示导入的 npm 包的大小。通过以下格式的代码可计算出 npm 包的大小。 - import Func from "utils"; - import \* as Utils from "utils"; - import {Func} from "utils"; - import {orig as alias} from "utils"; - import Func from "utils/Func"; - const Func = require('utils').Func;
③ CodeMetrics
插件可以计算代码的复杂度，对于复杂度高的代码给出详细的信息。开发者可以根据复杂度的提示来优化代码。插件支持 JS、TS、和 Lua 三种语言的代码复杂度计算。
④ JavaScript Booster
提供了数十种代码操作，可以帮助开发者轻松重构并优化 JS 代码。
⑤ Turbo Console Log
Turbo Console Log 插件可以根据 JS 代码的上下文自动生成有意义的 console.log(); 代码，以便以后进行运行和调试。

3.TypeScript
TypeScript 是 JavaScript 的超集，可以编译成 JavaScript。与 JavaScript 类似，不需要安装额外的插件，VSCode 为 TypeScript 提供了开箱即用的支持，包括但不限于:IntelliSense、调试、代码格式化、代码导航、代码重构、以及其他高级功能。
(1)安装 TypeScript 编译器
安装 Node.js，安装完成后，需要确保 Node.js 已经被添加到 PATH 环境变量中。
通过 npm 包管理工具安装 TypeScript，npm install -g typescript
在命令行输入 tsc --version，来验证 TypeScript 是否安装成功。
(2)编译 TypeScript 文件
TS 文件需要先编译成 JS 文件后才能运行。打开 VSCode 的集成终端，在终端集成中输入 tsc file.ts。TS 的编译器(tsc)会对 file.ts 进行编译，并在同一目录下生成一个 file.js 的 JS 文件。
(3)一键运行 TypeScript
在 VSCode 中使用 Code Runner 插件，可以一键运行 TypeScript 代码。但是，需要安装 ts-node，ts-node 是一个基于 Node.js 的 TS 执行器。
安装 ts-node，需要 Node.js 运行时及 TypeScript 编译器，在命令行输入以下命令，安装 ts-node
npm install -g ts-node
在安装了 Code Runner 插件后，可以使用以下几种方式快捷的运行代码: - 输入快捷键 Ctrl+Alt+N - 通过 Ctrl+Shift+P 快捷键打开命令面板，输入并执行 Run Code - 在编辑区域的右侧菜单中选择 Run Code - 在右侧的文件管理器中找到要运行的文件，在其右键菜单中选择 Run Code - 单击右上角的运行小三角按钮
(4)编译
TS 提供了丰富的项目设置和编译设置，以便后续进行项目管理及代码调试。
① tsconfig.json
tsconfig.json 文件定义了 TS 的项目设置及编译设置。
例子:Compiler tools\tsconfig.json
打开集成终端，只需要输入 tsc(注意:tsconfig.json 文件需要在根目录)，TS 编译器就会根据 tsconfig.json 文件的配置对当前的 TS 项目进行编译。
② 源代码映射
如果需要调试 TS 文件，则需要把 TS 文件与生成的 JS 文件进行映射。有两种方式可以生成映射文件。
❶ 在 tsc 命令中添加--sourcemap 参数，如下:
tsc hello.ts --sourcemap
❷ 在 tsconfig.json 文件中添加 sourceMap 属性，并将该属性设置为 true，然后在集成终端中输入 tsc 并执行。
例子:Compiler tools\tsconfig.json
通过以上任意一种方式，都会生成一个 file.js.map 的源代码映射文件。
③ 生成文件的位置
默认情况下，生成的 JS 文件会和 TS 文件在同一个文件夹中。如果项目很大，则会产生很多 JS 文件，不便于管理。可以在 tsconfig.json 文件中添加 outDir 属性，来指定 JS 文件的目录。
例子:Compiler tools\tsconfig.json
(5)调试
① 快速调试
VSCode 依赖于 TS 的映射文件将原始的 TS 文件与生成的 JS 文件进行映射。
❶ 在 tsconfig.json 文件中需要添加 sourceMap 属性，并将其设置为 true。
❷ 在集成终端中输入并执行 tsc。这条命令执行完毕后会在"outDir"属性定义的目录中生成一个 file.js.map 的源代码映射文件和一个 file.js 文件。
❸ 在需要的 TS 文件处添加断点，然后切换到调试视图，选择预设的调试任务(launch.json -> TS Launch Node)，就可以进行调试。在左侧的调试视图中可以看到与当前代码相关的变量信息，在调试控制台，可以对 TS 变量和表达式直接进行运算。
② 调试配置
TS 文件在调试前，需要编译，所以使用了一下两个属性: - preLaunchTask : 定义了在调试前要运行的任务(在 tasks.json 文件中设置)，在调试 TS 之前，需要先编译 TS 文件 - outFiles : 定义了 JS 文件的输出路径，优先级小于 tsconfig.json 中的定义。
(6)代码编辑
在 VSCode 中的代码编辑功能方面，TS 和 JS 非常相似，具体功能使用参考 行:512。
① 代码编辑的配置
在代码编辑方面，TS 和 JS 主要的不同之处就是设置项的不同。
功能 TS 的设置项 JS 的设置项
启用 JSDoc typescript.suggest.completeJSDocs javascript.suggest.completeJSDocs
启用自动导入 typescript.autoImportSuggestions.enabled javascript.suggest.autoImports
启用代码格式化 typescript.format.enable javascript.format.enable
启用闭标签的自动补全 typescript.autoClosingTags javascript.autoClosingTags
设置文件移动时如何更新导入 typescript.updateImportsOnFileMove.enabled javascript.updateImportsOnFileMove.enabled
是否显示 CodeLens typescript.referencesCodeLens.enabled javascript.referencesCodeLens.enabled
② 隐藏 JS 文件
打开命令面板，输入并执行 Preferences : Oen Settings(JSON)，打开 settings.json 文件，在该文件下添加以下以下配置:
"files.exclude": {
"\*_/_.js":{
"when": "$(basename).ts"
}
}
通过上面的配置，可以把与 TS 同名同级的 JS 文件隐藏。
③ 使用不同版本的 TS
有两种方式: - 点击 TS 文件底部状态栏的 TS 的版本号，单击版本号选择切换 - 在 TS 文件中，打开命令面板，输入并执行 TypeScript : Select TypeScript Version

## 七. 前端开发

VSCode 使用前端技术栈(HTML、CSS 和 TS)开发而成。同时 VSCode 对于前端开发也提供了极佳的支持。

### 7.1 HTML

VSCode 内置了对 HTML 的支持，包括 **语法高亮**、**代码补全**、**代码格式化**等各类功能。

#### 7.1.1 IntelliSense

在 HTML 中编写代码时，VSCode 提供了强大的智能提示。还可以通过 `Ctrl + Space` 快捷键触发智能提示。

#### 7.1.2 自动闭合标签

- 在输入 `>` 字符后，VSCode 会自动插入闭合标签。
- 在输入 `/` 字符后，VSCode 会自动插入闭合标签。
  可以通过以下设置来禁用自动闭合标签的功能:
  `"html.autoClosingTags": false`

#### 7.1.3 颜色选择器

对于嵌入 HTML 文件的 CSS 样式，VSCode 也会支持颜色选择器。把鼠标悬停在颜色定义上，会显示颜色选择器。单击颜色选择器顶部的颜色字符串，可以切换不同的颜色模式: #203AAD、rgb(32,58,173) 及 hsl(229,69%,40%)

#### 7.1.4 验证嵌入的 JS 和 CSS

VSCode 支持对嵌入 HTML 文件的 JS 脚本和 CSS 样式进行 **语法验证**。
可以通过以下设置来禁用或启用验证功能，默认为启用状态:
`"html.validate.scripts":true` // 是否对嵌入的脚本进行验证
`"html.validate.styles":true` // 是否对嵌入的样式进行验证

#### 7.1.5 代码折叠

代码折叠有以下三种方式:

- 通过单击行号与代码之间的折叠图标，可以对 HTML 代码进行代码折叠
- 通过区域标记(\<!--#region-->)和(\<!--endregion-->)来定义代码折叠的范围
- 快捷键 `Ctrl + Shift + [\]` 折叠打开代码

可以通过以下设置来切换折叠的策略:

```json
"[html]":{
  "editor.foldingStrategy": "indentation"
}
```

#### 7.1.6 代码格式化

VSCode 为 HTML 语言提供了代码格式化的支持，代码格式化的操作有以下两种:

- 格式化文档(Shift + Alt + F): 格式化当前的整个文件
- 格式化选定文件(Ctrl+K -> Ctrl+F): 格式当前文件所选定的文本

HTML 代码格式化是基于 **js-beautify** npm 库进行的，通过 `"html.format.\*"` 中的设置可以对 HTML 代码格式化进行定制。

#### 7.1.7 自定义 HTML 数据格式

VSCode 可以自定义额外的 HTML 数据格式。自定义的 HTML 标签、属性及属性的值可以获得自动补全、显示悬停信息等功能。

1. 创建一个名为 `html.html-data.json` 的 HTML 数据格式文件
  例 : [html.html-data.json](/.vscode/html.html-data.json)
2. 在 **.vscode/settings.json** 文件中通过 `html.customData` 设置项引入相应的 HTML 数据格式文件，然后，重启 VSCode。

> 注: 仅能设置工作区文件夹

#### 7.1.8 HTML 插件推荐

1. lit-html
  lit-html 基于 lit-html 模板库，为嵌入 JS 和 TS 模板字符串中的 HTML 提供了完善的功能。

### 7.2 CSS、SCSS 和 Less

#### 7.2.1 IntelliSense

输入 CSS 属性时，会有相应的提示列表。通过 `Ctrl + Space` 快捷键可以触发智能提示。

#### 7.2.2 颜色预览

在颜色定义的左侧有一个小方块，显示了 CSS 定义的颜色预览。
可以通过以下设置来隐藏颜色预览:
`"editor.colorDecorators": false`

#### 7.2.3 颜色选择器

把鼠标悬停在颜色定义上，会显示颜色选择器。单击颜色选择器顶部的颜色字符串，可以切换不同的颜色模式。

#### 7.2.4 代码折叠

- 通过单击行号与代码之间的折叠图标，VSCode 支持对 CSS 代码进行代码折叠。
- 使用 Ctrl + Shift + [/] 来折叠展开代码
- 可以通过区域标记来定义代码折叠的范围:
  CSS/SCSS/Less : /\_#region\_/ 和 /\_#endregion\_/
  SCSS/Less : //#region 和 //#endregion
  可以通过以下设置来切换折叠的策略:

```json
"[CSS]": {
  "editor.foldingStrategy": "indentation"
}
```

#### 7.2.5 静态代码检查

VSCode 支持对 CSS、SCSS 和 Less 进行代码检查。
通过设置可以分别禁用或启用对 CSS、SCSS 和 Less 的静态代码检查，默认为开启状态。

```json
{
  "css.validate": true,
  "scss.validate": true,
  "less.validate": true,
}
```

#### 7.2.6 跳转到 CSS 符号

使用 `Ctrl + Shift + O` 快捷键，可以快速对当前文件中的所有 CSS 符号进行搜索。

#### 7.2.7 悬停预览

把鼠标放到 CSS 选择器上，可以预览匹配 CSS 选择器的 HTML 代码片段。

#### 7.2.8 自定义 CSS 数据格式

VSCode 可以自定义额外的 CSS 数据格式。自定义的 CSS 属性、伪类等信息可以获得自动补全、显示悬停信息等功能。

1. 创建一个名为 css.css-data.json 的 CSS 数据格式文件。
  例: [css.css-data.json](/.vscode/css.css-data.json)
2. 在 settings.json 文件中通过 `"css.customData"` 设置项引用相应的 CSS 数据格式文件。

#### 7.2.9 CSS 插件提示

1. HTML CSS Support
  这个插件为多种 HTML 相关语言提供了 CSS 的自动补全功能。支持的语言 ID 如下:
  html、laravel-blade、razor、vue、pug、jade、handlebars、php、twig、md、nunjucks、javascript、javascriptreact、typescript、typescriptreact
2. SCSS IntelliSense
  这个插件为 SCSS 语言提供了丰富的支持
3. Easy LESS
  每次保存 LESS 文件后，这个插件都会自动编译 Less 文件，然后生成 CSS 文件。还可以通过 `Ctrl + Shift + P` 快捷键打开命令面板，然后输入并执行 `Compile LESS to CSS` 命令。

### 7.3 Emmet

Emmet 是 Web 开发者必不可少的工具，为 HTML 和 CSS 提供了丰富的功能，VSCode 内置了 Emmet。

#### 7.3.1 Emmet 的支持范围

默认情况下，Emmet 缩写扩展功能会在 html、haml、jade、slim、jsx、xml、xsl、css、scss、sass、less、和 stylus 这些类型的文件中开启，此外，还会在继承于上述的文件的语言(如:Handlebars 和 php)中开启。

#### 7.3.2 在 HTML 中使用 Emmet

在 HTML 文件中输入以下 Emmet 缩写:
> **#page>div.log+ul#navigation>li*5>a{Item $}**

在输入 Emmet 缩写的过程中，Emmet 缩写会出现在建议列表中，并且会有相应的 HTML 预览。按下 `Tab` 键或 `Enter` 键，VSCode 会在 HTML 文件中插入代码。

#### 7.3.3 在 CSS 中使用 Emmet

在 CSS 属性中输入 Emmet 的缩写，会显示相应的 CSS 预览。

#### 7.3.4 设置 Emmet

- 如果想用 Tab 键来展开 Emmet 缩写，可以通过下面的设置项来设置:
  `"emmet.triggerExpansionOnTab": true`
- 通过以下设置，可以在建议列表中禁用 Emmet 缩写:
  `"emmet.showExpandedAbbreviation": "never"`
- 通过以下设置项，可以把 Emmet 缩写始终放在建议列表的顶部:
  `"emmet.showSuggestionsAsSnippets": true`
  `"editor.snippetSuggestions": "top"`
- 在其他文件中启用 Emmet 缩写
  通过对 `"emmet.includeLanguages"` 进行设置，把文件类型绑定到其他支持 Emmet 的文件上，就能启用相应的文件。
  此外，还可以通过以下设置，使 Emmet 缩写只在与 HTML/CSS 相关的文件中启用:
  `"emmet.showExpandedAbbreviation": "isMarkupAndStyleSheetFilesOnly"`

#### 7.3.5 Emmet 设置项

可以通过 `"emmet.*"` 的设置项，对 Emmet 进行设置。

#### 7.3.6 自定义 Emmet 片段

创建 `snippets.json` 文件，通过 `"emmet.extensionsPath"` 设置文件位置，到文件夹，不写文件名。
> **例** : [snippets.json](/.vscode/snippets.json)

### 7.4 .Vue

Vue 是一个用于构建 Web 应用用户界面的 JS 库。VSCode 内置了对 HTML、CSS 和 JS 的支持，可以安装 Vetur 插件，为 Vue 开发提供更丰富的支持。

#### 7.4.1 快速开始

开始进行 Vue 开发之前，需要安装 Vue CLI，用于生成 Vue 应用。

1. 安装 Vue CLI
  在命令行中输入以下命令来安装 Vue CLI
  `npm install -g @vue/cli`
2. 创建 Vue 项目
  在命令行中输入以下命令来创建 Vue 应用
  `vue create my-app`
3. 运行 Vue 应用
  在 VSCode 中打开集成终端，并输入以下命令，可以运行 Vue 应用，本地端口默认为 8080
  `npm run serve`

#### 7.4.2 Vetur 插件

  Vetur 插件为 Vue 开发提供了极为丰富的支持，功能包括但不限于: - 语法高亮 - 代码片段提示 - Emmet 缩写 - 静态代码检查 - 代码格式化 - 自动补全 - 调试

#### 7.4.3 调试 Vue

1. 添加断点
  打开需要调试的 Vue 文件，在相应的代码处添加断点。
2. 配置调试文件
  例 : launch.json -> "Launch Chrome Vue"
3. 配置 webpack
  需要为 Webpack 配置源代码映射的设置项。在 Vue 项目的根目录中创建一个 `vue.config.js` 文件，然后在文件中填入以下配置

  ```json
  module.exports = {
    configureWebpack : {
      devtool : 'source-map'
    }
  }
  ```

#### 7.4.4 启动调试

有三种方式启动调试:

- 在顶部的菜单栏中选择 `Debug-Start Debugging`
- 使用 `F5` 快捷键
- 通过左侧的活动栏切换到调试视图，然后单击绿色的调试按钮

#### 7.4.5 静态代码检查

Vetur 插件总内置了 **Vue ESLint** 插件(eslint-plugin-vue)，为 Vue 提供了强大的静态代码检查功能。对于检查出的错误或警告，会在代码下方显示波浪线，把鼠标悬停在代码上，会显示详细的错误提示信息。

## 八. 远程开发
