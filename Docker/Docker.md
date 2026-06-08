# Docker

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Docker](#docker)
  - [一. Docker 简介](#一-docker-简介)
    - [1.1 Docker 核心概念](#11-docker-核心概念)
    - [1.2 Docker 安装](#12-docker-安装)
  - [二. Docker 基本使用](#二-docker-基本使用)
    - [2.1 构建 Docker 镜像](#21-构建-docker-镜像)
    - [2.2 运行 Docker 容器](#22-运行-docker-容器)
    - [2.3 管理 Docker 容器](#23-管理-docker-容器)
    - [2.4 Docker Compose](#24-docker-compose)
  - [三. Docker 部署到云服务器](#三-docker-部署到云服务器)
    - [3.1 华为云服务器](#31-华为云服务器)

<!-- /code_chunk_output -->

## 一. Docker 简介

Docker 是一个开源的容器化平台，允许开发者将应用程序及其依赖项打包到一个轻量级、可移植的容器中。Docker 提供了一个统一的环境，使得应用程序能够在任何地方运行，无论是在开发环境、测试环境还是生产环境。

Docker 用 Go 语言编写，利用 Linux 内核的容器化技术（如 cgroups 和 namespaces）来实现资源隔离和管理。

1. 核心特点

   | 特点     | 说明                                                   |
   | -------- | ------------------------------------------------------ |
   | 轻量级   | 容器共享宿主机的操作系统内核，相比传统虚拟机更节省资源 |
   | 可移植性 | 容器可在任何支持 Docker 的环境中运行，确保一致性       |
   | 隔离性   | 每个容器独立运行，互不干扰，提高安全性                 |
   | 快速部署 | 秒级启动和停止，适合动态扩展和微服务架构               |
   | 版本控制 | 支持镜像分层存储和版本管理，便于回滚和更新             |

2. 主要应用场景

   | 场景                      | 说明                                                   |
   | ------------------------- | ------------------------------------------------------ |
   | 微服务架构                | 将单体应用拆分为多个独立容器，提高可维护性             |
   | 持续集成/持续部署 (CI/CD) | 自动化构建、测试和发布流程                             |
   | 开发环境标准化            | 避免“在我机器上能运行”的问题，统一开发、测试和生产环境 |
   | 云原生应用                | 与 Kubernetes 等编排工具结合，实现弹性伸缩和高可用     |
   | 快速实验与测试            | 快速创建一次性环境，测试新技术或配置                   |

3. 优势

   | 优势           | 说明                                                 |
   | -------------- | ---------------------------------------------------- |
   | 资源高效       | 相比虚拟机，容器占用更少 CPU 和内存                  |
   | 跨平台支持     | 可在 Linux、Windows 和 macOS 上运行                  |
   | 丰富的生态系统 | 提供 Docker Hub 等镜像仓库，方便共享和获取预构建镜像 |
   | 简化运维       | 通过 Dockerfile 定义环境，减少手动配置错误           |

### 1.1 Docker 核心概念

- **镜像（Image）**：Docker 镜像是一个包含应用程序及其依赖项的只读模板。它是构建容器的基础，可以从 Docker Hub 等公共仓库获取，也可以自己创建。
- **容器（Container）**：Docker 容器是镜像的运行实例。它是一个独立的、可执行的软件包，包含了应用程序和运行环境。容器可以在任何支持 Docker 的平台上运行。
- **Dockerfile**：Dockerfile 是一个文本文件，包含了一系列指令，用于构建 Docker 镜像。通过编写 Dockerfile，开发者可以定义镜像的构建过程和内容。
- **Docker Hub**：Docker Hub 是一个公共的 Docker 镜像仓库，开发者可以在这里上传和分享自己的镜像，也可以从这里获取其他人创建的镜像。

### 1.2 Docker 安装

Docker 可以在各种操作系统上安装，包括 Windows、macOS 和 Linux。以下是一些常见的安装步骤：

1. **Windows 和 macOS**：
   - 访问 [Docker 官方网站](https://www.docker.com/)下载适用于 Windows 或 macOS 的 Docker Desktop。
   - 检查 wsl2 是否已安装（仅适用于 Windows），如果没有安装，按照提示安装。

     ```powershell
     wsl --status # 检查 WSL2 状态
     wsl.exe --install # 安装 WSL2
     wsl --set-default-version 2 # 设置 WSL2 为默认版本
     ```

   - 安装完成后，启动 Docker Desktop 并按照提示进行设置。

2. **Linux**：
   - 使用包管理器安装 Docker。例如，在 Ubuntu 上，可以使用以下命令：

     ```bash
     sudo apt-get update
     sudo apt-get install -y docker.io
     ```

   - 安装完成后，启动 Docker 服务：

     ```bash
     sudo systemctl start docker
     sudo systemctl enable docker
     ```

## 二. Docker 基本使用

### 2.1 构建 Docker 镜像

要构建 Docker 镜像，首先需要创建一个 Dockerfile。以下是一个简单的 Dockerfile 示例：

```Dockerfile
# 使用官方的 Node.js 镜像作为基础镜像
FROM node:14
# 设置工作目录
WORKDIR /app
# 复制 package.json 和 package-lock.json 到工作目录
COPY package*.json ./
# 安装项目依赖
RUN npm install
# 复制项目文件到工作目录
COPY . .
# 暴露应用程序运行的端口
EXPOSE 3000
# 启动应用程序
CMD ["npm", "start"]
```

在终端中运行以下命令来构建 Docker 镜像：

```bash
docker build -t my-node-app .
```

### 2.2 运行 Docker 容器

要运行 Docker 容器，可以使用以下命令：

```bash
docker run -p 3000:3000 my-node-app
```

这将启动一个容器，并将主机的 3000 端口映射到容器的 3000 端口。

### 2.3 管理 Docker 容器

- 查看正在运行的容器：

  ```bash
  docker ps
  ```

- 停止容器：

  ```bash
  docker stop <container_id>
  ```

- 删除容器：

  ```bash
  docker rm <container_id>
  ```

- 查看所有容器（包括已停止的）：

  ```bash
  docker ps -a
  ```

- 查看镜像：

  ```bash
  docker images
  ```

### 2.4 Docker Compose

Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具。通过使用 YAML 文件，开发者可以配置应用程序的服务、网络和卷等。以下是一个简单的 `docker-compose.yml` 示例：

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - '3000:3000'
  redis:
    image: 'redis:alpine'
```

这将启动 `web` 和 `redis` 两个服务，并将它们连接在一起。等价于：

```shell
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
docker run -d redis:alpine
```

在终端中运行以下命令来启动 Docker Compose：

```bash
docker-compose up
```

## 三. Docker 部署到云服务器

Docker 使得应用程序的部署变得非常简单。以下是一些常见的云服务提供商和如何在它们上部署 Docker 应用程序的步骤：

### 3.1 华为云服务器

1. 登录华为云控制台，创建一个云服务器实例。
2. 连接到云服务器实例，安装 Docker。
3. 将 Docker 镜像推送到 Docker Hub 或者使用 SCP 将镜像文件传输到云服务器。
4. 在云服务器上运行 Docker 容器。
