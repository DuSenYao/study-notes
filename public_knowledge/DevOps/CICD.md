---
title: CI/CD
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [CI/CD](#cicd)
  - [一. 简介](#一-简介)
    - [1.1 整体架构设计](#11-整体架构设计)
    - [1.2 服务器搭配方案](#12-服务器搭配方案)

<!-- /code_chunk_output -->

# CI/CD

## 一. 简介

`CI`
: **持续构建**。负责拉取代码库中的代码后，执行用户预置定义好的操作脚本，通过一系列编译操作构建出一个**制品**，并将制品推送至到制品库里面。常用工具有 Gitlab CI、Github CI、Jenkins 等。这个环节不参与部署，**只负责构建代码**，然后保存构建物。构建物被称为制品，保存制品的地方被称为 “制品库”。

`CD` 有 2 层含义：

- **持续交付**（Continuous Delivery）：将制品库的制品拿出后，部署在测试环境/交付给客户提前测试。
- **持续部署**（Continuous Deployment）：将制品部署在生产环境。可以进行持续部署的工具也有很多：Ansible 批量部署，Docker 直接推拉镜像等等。也包括 Kubernetes 集群部署。

### 1.1 整体架构设计

1. 写完了代码，提交到了 Git 代码库。
2. 随后，代码库配置的 WebHook 钩子或人工手动启动了 Jenkins 的构建流程。
3. Jenkins 启动构建流程。按照之前配置好的构建脚本，将代码编译成功。
4. 编译成功后，将编译后的文件打包为 docker 镜像，并将镜像上传到私有镜像库。
5. 随后，使用 kubectl 指定远程的 k8s 集群，发送镜像版本更新指令。
6. 远程的 k8s 集群接收到指令后，去镜像库拉取新镜像。
7. 镜像拉取成功，按照升级策略（滚动升级）进行升级，此时不会停机。
8. 升级完毕。

### 1.2 服务器搭配方案

系统选用 [CentOS 7](https://link.juejin.cn/?target=https%3A%2F%2Fmirrors.aliyun.com%2Fcentos%2F7.9.2009%2Fisos%2Fx86_64%2FCentOS-7-x86_64-Minimal-2009.iso)

| 配置    | 技术栈                   | 类型               | 标签              |
| ------- | ------------------------ | ------------------ | ----------------- |
| 2 核 4G | Jenkins + Nexus + Docker | 本地虚拟机 / Cloud | 构建机            |
| 2 核 4G | Docker + Kubernetes      | 本地虚拟机 / Cloud | Kubernetes Master |
| 1 核 1G | Docker + Kubernetes      | 本地虚拟机 / Cloud | Kubernetes Node   |
