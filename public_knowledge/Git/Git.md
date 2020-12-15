---
title: Git
date: 2020-12-14 18:22:34
author: 杜森垚
keywords: 'Git'
categories: Git
tags:
  - Git
---
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Git(分布式版本控制器)](#git分布式版本控制器)
  - [一. Git](#一-git)
    - [1.1 特点](#11-特点)
    - [1.2 Git命令](#12-git命令)
      - [1.2.1 创建仓库命令](#121-创建仓库命令)
        - [1.2.1.1 `git clone` 网址 [本地文件夹名]](#1211-git-clone-网址-本地文件夹名)
        - [1.2.1.2 `git init`](#1212-git-init)
      - [1.2.2 Git查看](#122-git查看)
        - [1.2.2.1 `git status`](#1221-git-status)
        - [1.2.2.2 `git diff [file]`](#1222-git-diff-file)
        - [1.2.2.3 `git log` [-number] [分支名]](#1223-git-log-number-分支名)
        - [1.2.2.4 `git reflog`](#1224-git-reflog)
        - [1.2.2.5 `git blame <file>`](#1225-git-blame-file)
        - [1.2.2.6 `git cat-file -[t|s|p] 哈希值`](#1226-git-cat-file-tsp-哈希值)
        - [1.2.2.7 `git config`](#1227-git-config)
      - [1.2.3 文件操作](#123-文件操作)
        - [1.2.3.1 `git add ./文件名/文件夹名`](#1231-git-add-文件名文件夹名)
        - [1.2.3.2 `git rm <file>`](#1232-git-rm-file)
        - [1.2.3.3 `git mv [file] [newFile]`](#1233-git-mv-file-newfile)
      - [1.2.4 远程操作](#124-远程操作)
        - [1.2.4.1 `git remote`](#1241-git-remote)
        - [1.2.4.2 `git fetch [alias]`](#1242-git-fetch-alias)
        - [1.2.4.3 `git pull` [<远程主机名> <远程分支名>:<本地分支名>]](#1243-git-pull-远程主机名-远程分支名本地分支名)
        - [1.2.4.4 `git push <远程主机名> <本地分支名>:<远程分支名>`](#1244-git-push-远程主机名-本地分支名远程分支名)
      - [1.2.5 分支操作](#125-分支操作)
        - [1.2.5.1 `git branch` [branchName]](#1251-git-branch-branchname)
        - [1.2.5.2 `git checkout` [分支名]](#1252-git-checkout-分支名)
        - [1.2.5.3 `git merge <branchName>`](#1253-git-merge-branchname)
      - [1.2.6 版本操作](#126-版本操作)
        - [1.2.6.1 `git commit` -m "message"](#1261-git-commit-m-message)
        - [1.2.6.2 `git reset` [--soft | --mixed | --hard] [HEAD] [-- file]](#1262-git-reset-soft-mixed-hard-head-file)
        - [1.2.6.3 `git rebase`](#1263-git-rebase)
      - [1.2.7 其他](#127-其他)
        - [1.2.7.1 gitk](#1271-gitk)
        - [1.2.7.1 `git stash`](#1271-git-stash)
    - [1.3 基础知识](#13-基础知识)
      - [1.3.1 添加文件流程](#131-添加文件流程)
      - [1.3.2 `.git`文件夹下的文件](#132-git文件夹下的文件)
      - [1.3.3 git中 commit、tree和blob三个对象的关系](#133-git中-commit-tree和blob三个对象的关系)
      - [1.3.4 git的底层运行流程](#134-git的底层运行流程)
      - [1.3.5 分离头指针情况下的注意事项](#135-分离头指针情况下的注意事项)
      - [1.3. 6 HEAD与branch](#13-6-head与branch)
      - [1.3.7 在 `.gitignore` 文件里可以指定不需要Git管理的文件](#137-在-gitignore-文件里可以指定不需要git管理的文件)
      - [1.3.8 常用的传输协议](#138-常用的传输协议)
      - [1.3.9 Git解决的问题与带来的问题](#139-git解决的问题与带来的问题)
      - [1.3.10 将Git的默认编辑器设置为VSCode](#1310-将git的默认编辑器设置为vscode)
    - [1.4 Git集成使用禁忌](#14-git集成使用禁忌)
      - [1.4.1 `git push -f`](#141-git-push-f)
      - [1.4.2 禁止向集成分支执行变更历史的操作](#142-禁止向集成分支执行变更历史的操作)
  - [二. GitHub](#二-github)
    - [2.1 GitHub基础](#21-github基础)
      - [2.1.1 配置公私钥](#211-配置公私钥)
      - [2.1.2 GitHub优点](#212-github优点)
      - [2.1.3 GitHub核心功能](#213-github核心功能)
      - [2.1.4 快速搜索到感兴趣的开源项目](#214-快速搜索到感兴趣的开源项目)
  - [三. 常见场景](#三-常见场景)
    - [3.1 不同人修改了不同文件](#31-不同人修改了不同文件)
    - [3.2 不同人修改了相同文件的不同区域](#32-不同人修改了相同文件的不同区域)
    - [3.3 不同人修改相同文件的相同区域](#33-不同人修改相同文件的相同区域)
    - [3.4 同时变更了文件名和文件内容](#34-同时变更了文件名和文件内容)
    - [3.5 同一文件改成不同的文件名](#35-同一文件改成不同的文件名)

<!-- /code_chunk_output -->
# Git(分布式版本控制器)

## 一. Git

### 1.1 特点

- 最优的存储能力
- 高性能
- 开源
- 容易备份
- 支持离线操作
- 容易定制工作流程

### 1.2 Git命令

#### 1.2.1 创建仓库命令

##### 1.2.1.1 `git clone` 网址 [本地文件夹名]

克隆Git仓库到本地

> `--bare`: 新建一个**裸仓库**，不将代码放到 `<directory>/.git` 中，而是将 `<directory>` 本身设置为仓库，无法签出工作树，此外，远程的分支头直接复制到相应的本地分支头，而不将它们映射到 `refs/remotes/origin/`。使用此选项时，既不会创建远程跟踪分支，也不会创建相关的配置变量。

##### 1.2.1.2 `git init`

创建Git仓库

把已有的项目代码纳入Git管理
> `cd` 项目代码所在的文件夹
> `git init`

新建的项目直接用Git管理
> `cd` 文件夹
> `git init 项目文件名`'
> 注: 会在当前路径下创建和项目名称同名的文件夹

#### 1.2.2 Git查看

##### 1.2.2.1 `git status`

查看仓库当前的状态，显示有变更的文件。

1. `-s` : 简短的输出

##### 1.2.2.2 `git diff [file]`

显示暂存区与工作区的差异

> **例**: `git diff HEAD` 显示工作区和暂存区与最后一次commit之间的差异

1. `[--cached|--staged] [file]` : 显示暂存区和最后一次提交(commit)的差异

2. `[first-branch]...[second-branch] [-- file]` : 显示两次提交或两个分支之间的差异，如果最后有--文件名，就是对比两次提交指定文件的差异

> **例1**: `git diff 003e2f133adc5a53f21a72ca5b62eb08566121d1`
> **例2**: `git diff 003e2f133adc5a53f21a72ca5b62eb08566121d1...e77f6c3cc85fd535c36df30813ed23e9fb8255d3`
> **例3**: `git diff temp master --Git.md`

##### 1.2.2.3 `git log` [-number] [分支名]

查看历史提交记录

> **例**: `git log -2`  // 查看最近的两次提交记录

1. `--oneline` 查看简要历史记录
2. `--graph`   查看图形化的日志
3. `--reverse` 逆向显示日志
4. `--author`  查找指定用户的提交日志

##### 1.2.2.4 `git reflog`

查看本地所有分支的所有操作记录，(包括已经被删除的commit和reset的操作)

1. `delete`: 删除指定的记录

> **例**: `git reflog delete HEAD@{270}`

##### 1.2.2.5 `git blame <file>`

以`列表形式`查看指定文件的修改记录

##### 1.2.2.6 `git cat-file -[t|s|p] 哈希值`

查看`Git对象`的`属性`

1. `t`: 查看git对象的类型
2. `s`: 查看git对象的大小
3. `p` 查看git对象的内容

> **例**: git cat-file -p 003e2f133adc5a53f21a72ca5b62eb08566121d1

##### 1.2.2.7 `git config`

查看或设置配置

- `[--local|--global|--system] [config 'message']`: 设置配置

> **例**:
> git config [--local|--global|--system] user.name 'You name'
> git config [--local|--global|--system] user.email 'You email'
  
- git config --list [--local|--global|--system]: 查看配置

>**例**: `git config --list --local`

==区别: local: 当前仓库  global: 当前用户的所有仓库  system: 本系统的所有用户==

#### 1.2.3 文件操作

##### 1.2.3.1 `git add ./文件名/文件夹名`

将文件添加到暂存区，. 表示所有文件

1. `-u`: 仅添加已被跟踪的文件

##### 1.2.3.2 `git rm <file>`

将文件从暂存区和工作区中删除

> **例**: `git rm hello.txt`

- `-f`: 强制删除选项，用于删除之前修改过并且已经放到暂存区域(**必须**)

> **例**: `git rm -f hello.txt`

- `--cached` 把文件从暂存区域移除，但仍然保留在当前工作目录中，换句话说，仅是从跟踪清单中删除

> **例**: `git rm --cached hello.txt`

- `-r` 递归删除，即如果后面跟的是一个目录做为参数，则会递归删除整个目录中的所有子目录和文件

> **例**: `git rm –r *`   #删除当前目录下的所有文件和子目录

##### 1.2.3.3 `git mv [file] [newFile]`

用于移动或重命名一个文件、目录或软连接

- `-f`: 重命名

> **例**: `git mv -f hello.txt hello.css`

#### 1.2.4 远程操作

##### 1.2.4.1 `git remote`

用于在远程仓库的操作

- `-v`: 显示所有远程仓库

> **例**: `git remote -v`

- `show [remote]`: 显示某个远程仓库的信息

> **例**: `git remote show https://github.com/1758231591/Learning-notes-and-materials.git`

- `remove name`: 删除远程仓库

- `rename old_name new_name`: 修改仓库名

- `add <name> <new url>`: :在本地仓库添加一个远程仓库

##### 1.2.4.2 `git fetch [alias]`

用于从远程获取代码库

> **例**: git fetch origin

##### 1.2.4.3 `git pull` [<远程主机名> <远程分支名>:<本地分支名>]

从远程获取代码并合并本地的版本，其实就是 `git fetch` 和 `git merge FETCH_HEAD` 的简写

> **例1**: `git pull origin master` // 如果远程分支是与当前分支合并，则冒号后面的部分可以省略
> **例2**: `git pull origin master:main` // 将远程主机 origin 的 master 分支拉取过来，与本地的 main 分支合并

##### 1.2.4.4 `git push <远程主机名> <本地分支名>:<远程分支名>`

用于从将本地的分支版本上传到远程并合并

> **例**: `git push origin master` 相当于 `git push origin master:master`

- `-f`: 本地版本与远程版本有差异时，可以使用这个参数强制推送，多人合作禁用
- `-d`: 删除远程主机的分支
- `--all`: 推送全部分支
- 使用`ssh`协议推送: `gitHub: git push  git@github.com:1758231591/Learning-notes-and-materials.git`

> **注**: 需要配置公私钥(见 2.1.1 配置公私钥)

#### 1.2.5 分支操作

##### 1.2.5.1 `git branch` [branchName]

不加name是列出本地分支，加name是创建分支

- `-r`: 查看远程分支

> **例**: `git branch -r`

- `-a`: 查看所有分支
- `-d/D <branchName>`: 删除分支，-D 是强制删除
- `-v`: 查看分支版本

##### 1.2.5.2 `git checkout` [分支名]

切换分支

- `-b`: 创建并直接切换到新分支

> **例**: `git checkout -b test`

- `-- [file]`: 将工作区文件恢复为和暂存区一样

> **例**: `git checkout -- index.html`

- `-b name origin/branchName`: 基于远程的分支创建一个本地的分支，并切换到新分支

> **例**: `git checkout -b dev origin/dev`

##### 1.2.5.3 `git merge <branchName>`

合并分支
> **例**: `git merge dev`

- `[alias]/[brach]`: 将远程的分支合并到当前分支

> **例**: `git merge origin/master`

- `--allow-unrelated-histories`: 用于合并后两个没有共同祖先的历史记录

- `--continue`: 合并由于冲突停止后，可以使用这个参数继续合并

#### 1.2.6 版本操作

##### 1.2.6.1 `git commit` -m "message"

主要是将暂存区里的改动给提交到本地的版本库，message填写摘要

- `-a`: 跳过暂存区，从工作区直接提交到本地版本库
- `--amend`: 追加提交，在不增加一个新的`commit`的情况下，将新修改的代码追加到`前一次`的commit中

##### 1.2.6.2 `git reset` [--soft | --mixed | --hard] [HEAD] [-- file]

用于回退版本，可以指定暂存区退回某一次提交的版本

- `--mixed`: 默认参数，可以不用带该参数，清空暂存区，工作区文件内容保持不变。

```txt
例1: git reset HEAD^            // 回退所有内容到上一个版本
例2: git reset HEAD^ hello.css  // 回退 hello.css 文件的版本到上一个版本
例3: git reset  052e            // 回退到指定版本
```

- `--soft`: 保留工作区和暂存区的内容，并把重置版本带来的差异放入暂存区

> **例**: `git reset --soft HEAD` 回退到当前版本

- `--hard`: 将指定版本的内容放入暂存区和工作区，也就是所有没有commit的修改都会丢失，**慎用**！

```txt
例1: git reset –hard HEAD~3            // 回退上上上一个版本  
例2: git reset –hard bae128            // 回退到某个版本回退点之前的所有信息。 
例3: git reset --hard origin/master    // 将本地的状态回退到和远程的某个分支一样
```

- `edition -- file`: 取消部分文件的更改

> **例**: `git reset HEAD -- index.html`

##### 1.2.6.3 `git rebase`

合并提交记录

```txt
使用场景:
  本地开发分支灵活管理
  · 在自己本地 git checkout -b local 创建一个本地开发分支
  · 在本地的开发分支上开发和测试
  · 阶段性开发完成后（包含功能代码和单元测试），可以准备提交代码
  · 首先切换到master分支，git pull拉取最新的分支状态
  · 然后切回local分支
  · 通过git rebase -i 将本地的多次提交合并为一个，以简化提交历史。本地有多个提交时,如果不进行这一步,在git rebase master时会多次解决冲突(最坏情况下,每一个提交都会相应解决一个冲突)
  · git rebase master 将master最新的分支同步到本地，这个过程可能需要手动解决冲突(如果进行了上一步的话,只用解决一次冲突)
  · 然后切换到master分支，git merge local 将本地的 local 分支内容合并到 master 分支
  · git push将master分支的提交上传
```

- `-i`: 打开vim编辑模式，执行会自动打开vim编辑模式，合并的记录前面都有相同的指令 pick，下面有commands，根据这些指令可以修改，修改后 `ESC -> :wq!` 保存并退出，就会进入注释界面，编辑好后退出即可。使用各种指令可以完成各种commit提交记录的合并

#### 1.2.7 其他

##### 1.2.7.1 gitk

打开 git 自带的图形界面工具

##### 1.2.7.1 `git stash`

临时保存和恢复修改，可跨分支，在 `未add` 之前才能执行

- `[save message]`: 保存修改到临时目录，并把工作区的文件还原到上一次commit
- `list`: 显示所有保存的记录列表
- `pop stash@{num}`: 恢复，num是可选值，通过 `git stash list` 查看具体值，只能恢复一次
- `apply stash@{num}`: 恢复，num是可选值，通过 `git stash list` 查看具体值，可恢复多次

> **例**: `git stash apply stash@{0}`

- `drop stash@{num}`: 删除指定保存
- `clear`: 删除所有保存

### 1.3 基础知识

#### 1.3.1 添加文件流程

```txt
git add files            工作目录 --> 暂存区
git commit -m "摘要"      暂存区   --> 本地仓库
git push 
```

#### 1.3.2 `.git`文件夹下的文件

- `HEAD`: 指向当前所在的分支
- `config`: 当前git的配置文件，这是个引用指向refs文件夹下的heads文件夹里的分支
- `refs文件夹`:

> 1. `heads`文件夹: 存放当前项目的所有分支文件，每个分支文件存放的是当前分支对应的是哪个commit(提交)
> 2. `remotes`文件夹: 存放远程分支
> 3. `tags`文件夹: 存放当前项目的所有标签

- `objects文件夹`: 存放所有的`git对象`，对象哈希值前 `2` 位作为文件夹名称，后 `38` 位作为对象文件名, 可通过 `git cat-file -p` 命令，拼接文件夹名称+文件名查看

#### 1.3.3 git中 commit、tree和blob三个对象的关系

`commit`是一个提交，它里面有一个`tree`对象对应`唯一的tree`，这个tree里面又有包含了多个tree和blob对象，每个tree对象又包含了多个tree和blob，文件的的最终形式是blob。对于blob，git会认为文件内容相同时，就使用同一个blob，这样就极大的避免了频繁提交时，git的存储空间大幅上升。
图片: public_knowledge\Git\示例文件\image\Git课件.pdf

#### 1.3.4 git的底层运行流程

添加或者修改了文件并且`add`到`Stage Area`之后，首先会根据文件内容创建不同的`blob`，当进行提交之后马上创建一个tree组件把需要的blob组件添加进去，之后再封装到一个commit组件中完成本次提交。
在将来进行reset的时候可以直接使用git reset --hard xxxxx可以恢复到某个特定的版本，在reset之后，git会根据这个commit组件的id快速的找到tree组件，然后根据tree找到blob组件，之后对仓库进行还原，整个过程都是以hash和二进制进行操作，所以git执行效率非常之高。
没有文件也就是没有blob对象的目录是不会被git管理的，因为git是对文件进行版本管理，所以没有必要对空目录生成对象。

#### 1.3.5 分离头指针情况下的注意事项

`分离头指针`是指在没有任何分支的情况下做commit。
> 优缺点: 用于实验性的更改与提交，随时可以放弃，而不影响任何分支的状态。缺点也是没有分支，意味着一旦切换分支，这些commit都会被当做垃圾丢弃。

#### 1.3. 6 HEAD与branch

`HEAD`在brach时，指代`最新的commit`，而在分离头状态时指代具体的commit。

```txt
含义与用法:
  · 一个节点，可以包含多个子节点(checkout出多个分支)
  · 一个节点可以有多个父节点(多个分支合并)
  · ^是~都是父节点，区别是跟随数字时候，^2 是第二个父节点，而~2是父节点的父节点
  · ^和~可以组合使用

  例: HEAD~2^2  最新commit的父节点的父节点的第二个父节点 
```

#### 1.3.7 在 `.gitignore` 文件里可以指定不需要Git管理的文件

> **例**: .gitignore

#### 1.3.8 常用的传输协议

- 哑协议: `path/to/repo.git`
- 智能协议: `file://path/to/repo.git`
- http/https协议: `http://git-server.com/path/to/repo.git`
- ssh协议: `user@git-server.com:path/to/repo.git` 是工作中最常用的智能协议

==哑协议与与智能协议的区别:==
> 1.哑协议传输进度不可见，智能协议传输可见
> 2.智能协议比哑协议传输速度快

#### 1.3.9 Git解决的问题与带来的问题

**解决的问题**
: 1.程序员之间进行协作编程的方式很少
: 2.即使有SVN，与开源团队合作通常也需要获得项目管理员的许可才能 fork 项目的一个分支，否则便无法编辑代码，批准时间过长
: 3.许多开源项目都受到权限问题以及一些低效率事情的困扰

**带来的问题**
: 1.无法帮助开发人员寻找开源项目
: 2.开发出的优秀开源项目，很难让他人知道

#### 1.3.10 将Git的默认编辑器设置为VSCode

> `git config --global core.editor "code -w"`

### 1.4 Git集成使用禁忌

#### 1.4.1 `git push -f`

强制推送，即使不是 `fast-forward` [^1]
[^1]: 当前分支合并到另一分支时，如果没有分歧，就会直接移动文件指针。这个过程叫做`fast-forward`。fast-forward能够保证不会强制覆盖别人的代码，确保了多人协同开发。尽量不要使用non fast forward方法提交代码。

**危害**
: 会使 commit 消失

**恢复**
: 使用 git reflog 查找历史，然后使用 git reset --hard HEAD@{n} 恢复。

#### 1.4.2 禁止向集成分支执行变更历史的操作

> 比如: 公共分支`pull`到本地做`变基`操作，会导致历史消失。

## 二. GitHub

### 2.1 GitHub基础

#### 2.1.1 配置公私钥

在本地创建 `SSH` 秘钥

> 在本地使用 `ssh-keygen -t ed25519 -C "1758231591@qq.com"`
> 在 `C:\Users\用户名\.ssh\id_rsa.pub` 文件里，就有创建出来的`公钥`，把公钥复制出来，粘贴到GitHub上。
> ssh协议需要这个，使用ssh传输协议，不需要账户密码就可以连接gitHub。

#### 2.1.2 GitHub优点

- 让 Git 更容易使用，使协作和编写代码更容易
- 不断解决用户痛点: 不仅致力于解决疑难问题，而且还致力于解决所有开发人员遇到的问题。
- 更好、更直观的版本控制系统，具有成为 轻松、安全和远程协作项目 的潜力。

#### 2.1.3 GitHub核心功能

- code review: 代码评审，人人都可以看见项目，都可以发表自己对代码的看法与改进意见
- Project management: 项目管理
- integrations: 集成
- Team management: 团队管理，对不同的仓库授予不同的权限
- social coding: 开源代码
- Documentation: 可以在GIthub上做个人网页、文档
- code hosting: 代码托管

#### 2.1.4 快速搜索到感兴趣的开源项目

> 在搜索页，语言栏左下方有高级搜索(Advanced search)

#### 2.1.5 组织类型的仓库

组织里可以管理多个仓库，加成员，设置团队，设置团队成员管理权限。
成员可以看见每个团队管理的仓库和权限，可以发起请求加入团队。

#### 2.1.6 使用 GitHub 进行团队协作

先在GitHub上，创建团队类型的仓库。

## 三. 常见场景

### 3.1 不同人修改了不同文件

**有两种方法**:

- 如果在进行 `git push` 之前发现远程又有了更新，可以将本地的提交回退掉，避免掉无用的远程merge本地分支的提交记录，使用如下命令:

> `git reset HEAD~`
> `git pull`

然后重新进行新的提交，这样就可以避免远程与本地分支的 `merge` 提交记录，让git的提交历史更加干净。

- 把本地的提交基于远端分支做 `rebase` ，在本地解决掉冲突并完成自测。

### 3.2 不同人修改了相同文件的不同区域

使用 `git merge` 远程分支名 合并分支，然后 `git push`。

### 3.3 不同人修改相同文件的相同区域

使用 `git pull`，然后手动解决冲突(与另一个提交者交流后)

### 3.4 同时变更了文件名和文件内容

**分两种情况**:

1. 没有修改相同位置，没有修改的冲突，变更文件名和变更文件内容的操作能够自动被git处理。

2. 如果一个人既变更了文件名又修改了文件，同时另一个人也修改了该文件的同一位置的内容，就会被git识别为冲突，而不能自动进行处理了。

> **原因**: git存放blob文件时是以`文件内容`来区分的，并不以文件名来区分。

### 3.5 同一文件改成不同的文件名

`git pull` 到本地分支，git会保留两个文件，手动来处理冲突，可以用 `git rm` 删除不要的文件，最后提交。
