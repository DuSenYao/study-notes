---
title: 微信小程序API
---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [微信小程序 API](#微信小程序api)
  - [一. 基础](#一-基础)
    - [1.1 系统](#11-系统)
      - [1.1.1 系统信息](#111-系统信息)
    - [1.2 更新](#12-更新)
      - [1.2.1 UpdateManager](#121-updatemanager)
    - [1.3 小程序](#13-小程序)
      - [1.3.1 生命周期](#131-生命周期)
      - [1.3.2 应用级事件](#132-应用级事件)
    - [1.4 调试](#14-调试)
      - [1.4.1 console](#141-console)
      - [1.4.2 LogManager](#142-logmanager)
      - [1.4.3 RealtimeLogManager](#143-realtimelogmanager)
    - [1.5 定时器](#15-定时器)
    - [1.6 环境变量](#16-环境变量)
  - [二. 路由](#二-路由)
    - [2.1 EventChannel](#21-eventchannel)
  - [三. 界面](#三-界面)
    - [3.1 交互](#31-交互)
    - [3.2 导航栏](#32-导航栏)
    - [3.3 背景](#33-背景)
    - [3.4 Tab Bar](#34-tab-bar)
    - [3.5 字体](#35-字体)
    - [3.6 下拉刷新](#36-下拉刷新)
    - [3.7 滚动](#37-滚动)
    - [3.8 动画](#38-动画)
      - [3.8.1 Animation](#381-animation)
    - [3.9 置顶](#39-置顶)
    - [3.10 自定义组件](#310-自定义组件)
    - [3.11 菜单](#311-菜单)
    - [3.12 窗口](#312-窗口)
    - [3.13 键盘](#313-键盘)
  - [四. 网络](#四-网络)
    - [4.1 发起请求](#41-发起请求)
      - [4.1.1 RequestTask](#411-requesttask)
    - [4.2 下载](#42-下载)
      - [4.2.1 DownloadTask](#421-downloadtask)
    - [4.3 上传](#43-上传)
      - [4.3.1 UploadTask](#431-uploadtask)
    - [4.4 WebSocket](#44-websocket)
      - [4.4.1 SocketTask](#441-sockettask)
    - [4.5 mDNS](#45-mdns)
    - [4.6 UDP 通信](#46-udp-通信)
      - [4.6.1 UDPSocket](#461-udpsocket)
    - [4.7 数据缓存](#47-数据缓存)
      - [4.7.1 周期性更新](#471-周期性更新)
  - [五. 媒体](#五-媒体)
    - [5.1 地图](#51-地图)
      - [5.1.1 MapContext](#511-mapcontext)
    - [5.2 图片](#52-图片)
    - [5.3 视频](#53-视频)
    - [5.3.1 VideoContext](#531-videocontext)
    - [5.4 音频](#54-音频)
      - [5.4.1 AudioContext](#541-audiocontext)
      - [5.4.2 InnerAudioContext](#542-inneraudiocontext)
      - [5.4.3 MediaAudioPlayer](#543-mediaaudioplayer)
    - [5.5 背景音频](#55-背景音频)
      - [5.5.1 BackgroundAudioManager](#551-backgroundaudiomanager)
    - [5.6 实时音视频](#56-实时音视频)
      - [5.6.1 LivePlayerContext](#561-liveplayercontext)
      - [5.6.2 LivePusherContext](#562-livepushercontext)
    - [5.7 录音](#57-录音)
      - [5.7.1 RecorderManager](#571-recordermanager)
    - [5.8 相机](#58-相机)
      - [5.8.1 CameraContext](#581-cameracontext)
      - [5.8.2 CameraFrameListener](#582-cameraframelistener)
    - [5.9 富文本](#59-富文本)
      - [5.9.1 EditorContext](#591-editorcontext)
    - [5.10 音视频合成](#510-音视频合成)
      - [5.10.1 MediaContainer](#5101-mediacontainer)
    - [5.11 实时语音](#511-实时语音)
    - [5.12 画面录制器](#512-画面录制器)
      - [5.12.1 MediaRecorder](#5121-mediarecorder)
    - [5.13 视频解码器](#513-视频解码器)
      - [5.13.1 VideoDecoder](#5131-videodecoder)
  - [六. 位置](#六-位置)
  - [七. 转发](#七-转发)
  - [八. 画布](#八-画布)
    - [8.1 Canvas](#81-canvas)
    - [8.2 CanvasContext](#82-canvascontext)
    - [8.3 CanvasGradient](#83-canvasgradient)
    - [8.4 OffscreenCanvas](#84-offscreencanvas)
  - [九. 文件](#九-文件)
    - [9.1 FileSystemManager](#91-filesystemmanager)
    - [9.2 Stats](#92-stats)
  - [十. 开放接口](#十-开放接口)
    - [10.1 登录](#101-登录)
    - [10.2 小程序跳转](#102-小程序跳转)
    - [10.3 帐号信息](#103-帐号信息)
    - [10.4 用户信息](#104-用户信息)
    - [10.5 数据上报](#105-数据上报)
    - [10.6 数据分析](#106-数据分析)
    - [10.7 支付](#107-支付)
    - [10.8 授权](#108-授权)
    - [10.9 设置](#109-设置)
    - [10.10 收货地址](#1010-收货地址)
    - [10.11 卡券](#1011-卡券)
    - [10.12 发票](#1012-发票)
    - [10.13 生物认证](#1013-生物认证)
    - [10.14 微信运动](#1014-微信运动)
    - [10.15 性能](#1015-性能)
      - [10.15.1 EntryList](#10151-entrylist)
      - [10.15.2 Performance](#10152-performance)
      - [10.15.3 PerformanceObserver](#10153-performanceobserver)
    - [10.16 订阅消息](#1016-订阅消息)
    - [10.17 微信红包](#1017-微信红包)
    - [10.18 群工具](#1018-群工具)
  - [十一. 设备](#十一-设备)
    - [11.1 外围设备](#111-外围设备)
      - [11.1.1 BLEPeripheralServer](#1111-bleperipheralserver)
    - [11.2 iBeacon](#112-ibeacon)
    - [11.3 NFC](#113-nfc)
      - [11.3.1 IsoDep](#1131-isodep)
      - [11.3.2 MifareClassic](#1132-mifareclassic)
      - [11.3.3 MifareUltralight](#1133-mifareultralight)
      - [11.3.4 Ndef](#1134-ndef)
      - [11.3.5 NfcA](#1135-nfca)
      - [11.3.6 NFCAdapter](#1136-nfcadapter)
      - [11.3.7 NfcB](#1137-nfcb)
      - [11.3.8 NfcF](#1138-nfcf)
      - [11.3.9 NfcV](#1139-nfcv)
    - [11.4 Wi-Fi](#114-wi-fi)
    - [11.5 联系人](#115-联系人)
    - [11.6 无障碍](#116-无障碍)
    - [11.7 低功耗蓝牙](#117-低功耗蓝牙)
    - [11.8 蓝牙](#118-蓝牙)
    - [11.9 电量](#119-电量)
    - [11.10 剪贴板](#1110-剪贴板)
    - [11.11 网络](#1111-网络)
    - [11.12 屏幕](#1112-屏幕)
    - [11.13 电话](#1113-电话)
    - [11.14 加速计](#1114-加速计)
    - [11.15 罗盘](#1115-罗盘)
    - [11.16 设备方向](#1116-设备方向)
    - [11.17 陀螺仪](#1117-陀螺仪)
    - [11.18 性能](#1118-性能)
    - [11.19 扫码](#1119-扫码)
    - [11.20 振动](#1120-振动)
  - [十二. Worker](#十二-worker)
    - [12.1 Worker](#121-worker)
  - [十三. 第三方平台](#十三-第三方平台)
  - [十四. WXML](#十四-wxml)
    - [14.1 IntersectionObserver](#141-intersectionobserver)
    - [14.2 MediaQueryObserver](#142-mediaqueryobserver)
    - [14.3 NodesRef](#143-nodesref)
    - [14.4 SelectorQuery](#144-selectorquery)
  - [十五. 广告](#十五-广告)
    - [15.1 InterstitialAd](#151-interstitialad)
    - [15.2 RewardedVideoAd](#152-rewardedvideoad)

<!-- /code_chunk_output -->

# 微信小程序 API

## 一. 基础

| 名称                   | 功能说明                                               |
| ---------------------- | ------------------------------------------------------ |
| wx.canIUse             | 判断小程序的 API，回调，参数，组件等是否在当前版本可用 |
| wx.base64ToArrayBuffer | 将 Base64 字符串转成 ArrayBuffer 对象                  |
| wx.arrayBufferToBase64 | 将 ArrayBuffer 对象转成 Base64 字符串                  |

### 1.1 系统

#### 1.1.1 系统信息

| 名称                  | 功能说明                    |
| --------------------- | --------------------------- |
| wx.getSystemInfoSync  | wx.getSystemInfo 的同步版本 |
| wx.getSystemInfoAsync | 异步获取系统信息            |
| wx.getSystemInfo      | 获取系统信息                |

### 1.2 更新

| 名称                | 功能说明                                         |
| ------------------- | ------------------------------------------------ |
| wx.updateWeChatApp  | 更新客户端版本                                   |
| wx.getUpdateManager | 获取全局唯一的版本更新管理器，用于管理小程序更新 |

#### 1.2.1 UpdateManager

| 名称                           | 功能说明                           |
| ------------------------------ | ---------------------------------- |
| UpdateManager.applyUpdate      | 强制小程序重启并使用新版本         |
| UpdateManager.onCheckForUpdate | 监听向微信后台请求检查更新结果事件 |
| UpdateManager.onUpdateFailed   | 监听小程序更新失败事件             |
| UpdateManager.onUpdateReady    | 监听小程序有版本更新事件           |

### 1.3 小程序

#### 1.3.1 生命周期

| 名称                    | 功能说明                   |
| ----------------------- | -------------------------- |
| wx.getLaunchOptionsSync | 获取小程序启动时的参数     |
| wx.getEnterOptionsSync  | 获取本次小程序启动时的参数 |

#### 1.3.2 应用级事件

| 名称                         | 功能说明                                     |
| ---------------------------- | -------------------------------------------- |
| wx.onUnhandledRejection      | 监听未处理的 Promise 拒绝事件                |
| wx.onThemeChange             | 监听系统主题改变事件                         |
| wx.onPageNotFound            | 监听小程序要打开的页面不存在事件             |
| wx.onError                   | 监听小程序错误事件                           |
| wx.onAudioInterruptionEnd    | 监听音频中断结束事件                         |
| wx.onAudioInterruptionBegin  | 监听音频因为受到系统占用而被中断开始事件     |
| wx.onAppShow                 | 监听小程序切前台事件                         |
| wx.onAppHide                 | 监听小程序切后台事件                         |
| wx.offUnhandledRejection     | 取消监听未处理的 Promise 拒绝事件            |
| wx.offThemeChange            | 取消监听系统主题改变事件                     |
| wx.offPageNotFound           | 取消监听小程序要打开的页面不存在事件         |
| wx.offError                  | 取消监听小程序错误事件                       |
| wx.offAudioInterruptionEnd   | 取消监听音频中断结束事件                     |
| wx.offAudioInterruptionBegin | 取消监听音频因为受到系统占用而被中断开始事件 |
| wx.offAppShow                | 取消监听小程序切前台事件                     |
| wx.offAppHide                | 取消监听小程序切后台事件                     |

### 1.4 调试

| 名称                     | 功能说明               |
| ------------------------ | ---------------------- |
| wx.setEnableDebug        | 设置是否打开调试开关   |
| wx.getRealtimeLogManager | 获取实时日志管理器对象 |
| wx.getLogManager         | 获取日志管理器对象     |

#### 1.4.1 console

| 名称             | 功能说明                        |
| ---------------- | ------------------------------- |
| console.debug    | 向调试面板中打印 debug 日志     |
| console.error    | 向调试面板中打印 error 日志     |
| console.group    | 在调试面板中创建一个新的分组    |
| console.groupEnd | 结束由 console.group 创建的分组 |
| console.info     | 向调试面板中打印 info 日志      |
| console.log      | 向调试面板中打印 log 日志       |
| console.warn     | 向调试面板中打印 warn 日志      |

#### 1.4.2 LogManager

| 名称             | 功能说明      |
| ---------------- | ------------- |
| LogManager.debug | 写 debug 日志 |
| LogManager.info  | 写 info 日志  |
| LogManager.log   | 写 log 日志   |
| LogManager.warn  | 写 warn 日志  |

#### 1.4.3 RealtimeLogManager

| 名称                            | 功能说明                         |
| ------------------------------- | -------------------------------- |
| RealtimeLogManager.addFilterMsg | 添加过滤关键字                   |
| RealtimeLogManager.error        | 写 error 日志                    |
| RealtimeLogManager.in           | 设置实时日志 page 参数所在的页面 |
| RealtimeLogManager.info         | 写 info 日志                     |
| RealtimeLogManager.setFilterMsg | 设置过滤关键字                   |
| RealtimeLogManager.warn         | 写 warn 日志                     |

### 1.5 定时器

| 名称          | 功能说明                        |
| ------------- | ------------------------------- |
| clearInterval | 取消由 setInterval 设置的定时器 |
| clearTimeout  | 取消由 setTimeout 设置的定时器  |
| setInterval   | 设定一个定时器                  |
| setTimeout    | 设定一个定时器                  |

### 1.6 环境变量

| 名称 | 功能说明 |
| ---- | -------- |
| env  | 环境变量 |

## 二. 路由

| 名称            | 功能说明                                         |
| --------------- | ------------------------------------------------ |
| wx.switchTab    | 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面 |
| wx.reLaunch     | 关闭所有页面，打开到应用内的某个页面             |
| wx.redirectTo   | 关闭当前页面，跳转到应用内的某个页面             |
| wx.navigateTo   | 保留当前页面，跳转到应用内的某个页面             |
| wx.navigateBack | 关闭当前页面，返回上一页面或多级页面             |

### 2.1 EventChannel

| 名称              | 功能说明                     |
| ----------------- | ---------------------------- |
| EventChannel.emit | 触发一个事件                 |
| EventChannel.off  | 取消监听一个事件             |
| EventChannel.on   | 持续监听一个事件             |
| EventChannel.once | 监听一个事件一次，触发后失效 |

## 三. 界面

### 3.1 交互

| 名称                        | 功能说明                     |
| --------------------------- | ---------------------------- |
| wx.showToast                | 显示消息提示框               |
| wx.showModal                | 显示模态对话框               |
| wx.showLoading              | 显示 loading 提示框          |
| wx.showActionSheet          | 显示操作菜单                 |
| wx.hideToast                | 隐藏消息提示框               |
| wx.hideLoading              | 隐藏 loading 提示框          |
| wx.enableAlertBeforeUnload  | 开启小程序页面返回询问对话框 |
| wx.disableAlertBeforeUnload | 关闭小程序页面返回询问对话框 |

### 3.2 导航栏

| 名称                        | 功能说明                     |
| --------------------------- | ---------------------------- |
| wx.showNavigationBarLoading | 在当前页面显示导航条加载动画 |
| wx.setNavigationBarTitle    | 动态设置当前页面的标题       |
| wx.setNavigationBarColor    | 设置页面导航条颜色           |
| wx.hideNavigationBarLoading | 在当前页面隐藏导航条加载动画 |
| wx.hideHomeButton           | 隐藏返回首页按钮             |

### 3.3 背景

| 名称                      | 功能说明                               |
| ------------------------- | -------------------------------------- |
| wx.setBackgroundTextStyle | 动态设置下拉背景字体、loading 图的样式 |
| wx.setBackgroundColor     | 动态设置窗口的背景色                   |

### 3.4 Tab Bar

| 名称                 | 功能说明                                                         |
| -------------------- | ---------------------------------------------------------------- |
| wx.showTabBarRedDot  | 显示 tabBar 某一项的右上角的红点                                 |
| wx.showTabBar        | 显示 tabBar                                                      |
| wx.setTabBarStyle    | 动态设置 tabBar 的整体样式                                       |
| wx.setTabBarItem     | 动态设置 tabBar 某一项的内容，2.7.0 起图片支持临时文件和网络文件 |
| wx.setTabBarBadge    | 为 tabBar 某一项的右上角添加文本                                 |
| wx.removeTabBarBadge | 移除 tabBar 某一项右上角的文本                                   |
| wx.hideTabBarRedDot  | 隐藏 tabBar 某一项的右上角的红点                                 |
| wx.hideTabBar        | 隐藏 tabBar                                                      |

### 3.5 字体

| 名称            | 功能说明                               |
| --------------- | -------------------------------------- |
| wx.loadFontFace | 动态加载网络字体，文件地址需为下载类型 |

### 3.6 下拉刷新

| 名称                    | 功能说明             |
| ----------------------- | -------------------- |
| wx.stopPullDownRefresh  | 停止当前页面下拉刷新 |
| wx.startPullDownRefresh | 开始下拉刷新         |

### 3.7 滚动

| 名称            | 功能说明                                               |
| --------------- | ------------------------------------------------------ |
| wx.pageScrollTo | 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位 |

### 3.8 动画

| 名称               | 功能说明                   |
| ------------------ | -------------------------- |
| wx.createAnimation | 创建一个动画实例 animation |

#### 3.8.1 Animation

| 名称                      | 功能说明                       |
| ------------------------- | ------------------------------ |
| Animation.backgroundColor | 设置背景色                     |
| Animation.bottom          | 设置 bottom 值                 |
| Animation.export          | 导出动画队列                   |
| Animation.height          | 设置高度                       |
| Animation.left            | 设置 left 值                   |
| Animation.matrix          | 同 transform-function matrix   |
| Animation.matrix3d        | 同 transform-function matrix3d |
| Animation.opacity         | 设置透明度                     |
| Animation.right           | 设置 right 值                  |
| Animation.rotate          | 从原点顺时针旋转一个角度       |
| Animation.rotate3d        | 从 固定 轴顺时针旋转一个角度   |
| Animation.rotateX         | 从 X 轴顺时针旋转一个角度      |
| Animation.rotateY         | 从 Y 轴顺时针旋转一个角度      |
| Animation.rotateZ         | 从 Z 轴顺时针旋转一个角度      |
| Animation.scale           | 缩放                           |
| Animation.scale3d         | 缩放                           |
| Animation.scaleX          | 缩放 X 轴                      |
| Animation.scaleY          | 缩放 Y 轴                      |
| Animation.scaleZ          | 缩放 Z 轴                      |
| Animation.skew            | 对 X、Y 轴坐标进行倾斜         |
| Animation.skewX           | 对 X 轴坐标进行倾斜            |
| Animation.skewY           | 对 Y 轴坐标进行倾斜            |
| Animation.step            | 表示一组动画完成               |
| Animation.top             | 设置 top 值                    |
| Animation.translate       | 平移变换                       |
| Animation.translate3d     | 对 xyz 坐标进行平移变换        |
| Animation.translateX      | 对 X 轴平移                    |
| Animation.translateY      | 对 Y 轴平移                    |
| Animation.translateZ      | 对 Z 轴平移                    |
| Animation.width           | 设置宽度                       |

### 3.9 置顶

| 名称             | 功能说明               |
| ---------------- | ---------------------- |
| wx.setTopBarText | 动态设置置顶栏文字内容 |

### 3.10 自定义组件

| 名称        | 功能说明                           |
| ----------- | ---------------------------------- |
| wx.nextTick | 延迟一部分操作到下一个时间片再执行 |

### 3.11 菜单

| 名称                               | 功能说明                                     |
| ---------------------------------- | -------------------------------------------- |
| wx.getMenuButtonBoundingClientRect | 获取菜单按钮（右上角胶囊按钮）的布局位置信息 |

### 3.12 窗口

| 名称               | 功能说明                                                 |
| ------------------ | -------------------------------------------------------- |
| wx.setWindowSize   | 设置窗口大小，该接口仅适用于 PC 平台，使用细则请参见指南 |
| wx.onWindowResize  | 监听窗口尺寸变化事件                                     |
| wx.offWindowResize | 取消监听窗口尺寸变化事件                                 |

### 3.13 键盘

| 名称                       | 功能说明                                                         |
| -------------------------- | ---------------------------------------------------------------- |
| wx.onKeyboardHeightChange  | 监听键盘高度变化                                                 |
| wx.offKeyboardHeightChange | 取消监听键盘高度变化事件                                         |
| wx.hideKeyboard            | 在 input、textarea 等 focus 拉起键盘之后，手动调用此接口收起键盘 |
| wx.getSelectedTextRange    | 在 input、textarea 等 focus 之后，获取输入框的光标位置           |

## 四. 网络

### 4.1 发起请求

| 名称       | 功能说明            |
| ---------- | ------------------- |
| wx.request | 发起 HTTPS 网络请求 |

#### 4.1.1 RequestTask

| 名称                           | 功能说明                           |
| ------------------------------ | ---------------------------------- |
| RequestTask.abort              | 中断请求任务                       |
| RequestTask.offHeadersReceived | 取消监听 HTTP Response Header 事件 |
| RequestTask.onHeadersReceived  | 监听 HTTP Response Header 事件     |

### 4.2 下载

| 名称            | 功能说明           |
| --------------- | ------------------ |
| wx.downloadFile | 下载文件资源到本地 |

#### 4.2.1 DownloadTask

| 名称                            | 功能说明                           |
| ------------------------------- | ---------------------------------- |
| DownloadTask.abort              | 中断下载任务                       |
| DownloadTask.offHeadersReceived | 取消监听 HTTP Response Header 事件 |
| DownloadTask.offProgressUpdate  | 取消监听下载进度变化事件           |
| DownloadTask.onHeadersReceived  | 监听 HTTP Response Header 事件     |
| DownloadTask.onProgressUpdate   | 监听下载进度变化事件               |

### 4.3 上传

| 名称          | 功能说明               |
| ------------- | ---------------------- |
| wx.uploadFile | 将本地资源上传到服务器 |

#### 4.3.1 UploadTask

| 名称                          | 功能说明                           |
| ----------------------------- | ---------------------------------- |
| UploadTask.abort              | 中断上传任务                       |
| UploadTask.offHeadersReceived | 取消监听 HTTP Response Header 事件 |
| UploadTask.offProgressUpdate  | 取消监听上传进度变化事件           |
| UploadTask.onHeadersReceived  | 监听 HTTP Response Header 事件     |
| UploadTask.onProgressUpdate   | 监听上传进度变化事件               |

### 4.4 WebSocket

| 名称                 | 功能说明                              |
| -------------------- | ------------------------------------- |
| wx.sendSocketMessage | 通过 WebSocket 连接发送数据           |
| wx.onSocketOpen      | 监听 WebSocket 连接打开事件           |
| wx.onSocketMessage   | 监听 WebSocket 接受到服务器的消息事件 |
| wx.onSocketError     | 监听 WebSocket 错误事件               |
| wx.onSocketClose     | 监听 WebSocket 连接关闭事件           |
| wx.connectSocket     | 创建一个 WebSocket 连接               |
| wx.closeSocket       | 关闭 WebSocket 连接                   |

#### 4.4.1 SocketTask

| 名称                 | 功能说明                              |
| -------------------- | ------------------------------------- |
| SocketTask.close     | 关闭 WebSocket 连接                   |
| SocketTask.onClose   | 监听 WebSocket 连接关闭事件           |
| SocketTask.onError   | 监听 WebSocket 错误事件               |
| SocketTask.onMessage | 监听 WebSocket 接受到服务器的消息事件 |
| SocketTask.onOpen    | 监听 WebSocket 连接打开事件           |
| SocketTask.send      | 通过 WebSocket 连接发送数据           |

### 4.5 mDNS

| 名称                            | 功能说明                         |
| ------------------------------- | -------------------------------- |
| wx.stopLocalServiceDiscovery    | 停止搜索 mDNS 服务               |
| wx.startLocalServiceDiscovery   | 开始搜索局域网下的 mDNS 服务     |
| wx.onLocalServiceResolveFail    | 监听 mDNS 服务解析失败的事件     |
| wx.onLocalServiceLost           | 监听 mDNS 服务离开的事件         |
| wx.onLocalServiceFound          | 监听 mDNS 服务发现的事件         |
| wx.onLocalServiceDiscoveryStop  | 监听 mDNS 服务停止搜索的事件     |
| wx.offLocalServiceResolveFail   | 取消监听 mDNS 服务解析失败的事件 |
| wx.offLocalServiceLost          | 取消监听 mDNS 服务离开的事件     |
| wx.offLocalServiceFound         | 取消监听 mDNS 服务发现的事件     |
| wx.offLocalServiceDiscoveryStop | 取消监听 mDNS 服务停止搜索的事件 |

### 4.6 UDP 通信

| 名称               | 功能说明                 |
| ------------------ | ------------------------ |
| wx.createUDPSocket | 创建一个 UDP Socket 实例 |

#### 4.6.1 UDPSocket

| 名称                   | 功能说明                                               |
| ---------------------- | ------------------------------------------------------ |
| UDPSocket.bind         | 绑定一个系统随机分配的可用端口，或绑定一个指定的端口号 |
| UDPSocket.close        | 关闭 UDP Socket 实例，相当于销毁                       |
| UDPSocket.offClose     | 取消监听关闭事件                                       |
| UDPSocket.offError     | 取消监听错误事件                                       |
| UDPSocket.offListening | 取消监听开始监听数据包消息的事件                       |
| UDPSocket.offMessage   | 取消监听收到消息的事件                                 |
| UDPSocket.onClose      | 监听关闭事件                                           |
| UDPSocket.onError      | 监听错误事件                                           |
| UDPSocket.onListening  | 监听开始监听数据包消息的事件                           |
| UDPSocket.onMessage    | 监听收到消息的事件                                     |
| UDPSocket.send         | 向指定的 IP 和 port 发送消息                           |

### 4.7 数据缓存

| 名称                  | 功能说明                            |
| --------------------- | ----------------------------------- |
| wx.setStorageSync     | wx.setStorage 的同步版本            |
| wx.setStorage         | 将数据存储在本地缓存中指定的 key 中 |
| wx.removeStorageSync  | wx.removeStorage 的同步版本         |
| wx.removeStorage      | 从本地缓存中移除指定 key            |
| wx.getStorageSync     | wx.getStorage 的同步版本            |
| wx.getStorageInfoSync | wx.getStorageInfo 的同步版本        |
| wx.getStorageInfo     | 异步获取当前 storage 的相关信息     |
| wx.getStorage         | 从本地缓存中异步获取指定 key 的内容 |
| wx.clearStorageSync   | wx.clearStorage 的同步版本          |
| wx.clearStorage       | 清理本地数据缓存                    |

#### 4.7.1 周期性更新

| 名称                       | 功能说明                                                                 |
| -------------------------- | ------------------------------------------------------------------------ |
| wx.setBackgroundFetchToken | 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性 |
| wx.onBackgroundFetchData   | 监听收到 backgroundFetch 数据时的回调                                    |
| wx.getBackgroundFetchToken | 获取设置过的自定义登录态                                                 |
| wx.getBackgroundFetchData  | 拉取 backgroundFetch 客户端缓存数据                                      |

## 五. 媒体

### 5.1 地图

| 名称                | 功能说明                        |
| ------------------- | ------------------------------- |
| wx.createMapContext | 创建 map 上下文 MapContext 对象 |

#### 5.1.1 MapContext

| 名称                           | 功能说明                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------- |
| MapContext.addCustomLayer      | 添加个性化图层                                                                    |
| MapContext.addGroundOverlay    | 创建自定义图片图层，图片会随着地图缩放而缩放                                      |
| MapContext.addMarkers          | 添加 marker                                                                       |
| MapContext.fromScreenLocation  | 获取屏幕上的点对应的经纬度，坐标原点为地图左上角                                  |
| MapContext.getCenterLocation   | 获取当前地图中心的经纬度                                                          |
| MapContext.getRegion           | 获取当前地图的视野范围                                                            |
| MapContext.getRotate           | 获取当前地图的旋转角                                                              |
| MapContext.getScale            | 获取当前地图的缩放级别                                                            |
| MapContext.getSkew             | 获取当前地图的倾斜角                                                              |
| MapContext.includePoints       | 缩放视野展示所有经纬度                                                            |
| MapContext.initMarkerCluster   | 初始化点聚合的配置，未调用时采用默认配置                                          |
| MapContext.moveAlong           | 沿指定路径移动 marker，用于轨迹回放等场景                                         |
| MapContext.moveToLocation      | 将地图中心移置当前定位点，此时需设置地图组件 show-location 为 true                |
| MapContext.on                  | 监听地图事件                                                                      |
| MapContext.openMapApp          | 拉起地图 APP 选择导航                                                             |
| MapContext.removeCustomLayer   | 移除个性化图层                                                                    |
| MapContext.removeGroundOverlay | 移除自定义图片图层                                                                |
| MapContext.removeMarkers       | 移除 marker                                                                       |
| MapContext.setCenterOffset     | 设置地图中心点偏移，向后向下为增长，屏幕比例范围(0.25~0.75)，默认偏移为[0.5, 0.5] |
| MapContext.toScreenLocation    | 获取经纬度对应的屏幕坐标，坐标原点为地图左上角                                    |
| MapContext.translateMarker     | 平移 marker，带动画                                                               |
| MapContext.updateGroundOverlay | 更新自定义图片图层                                                                |

### 5.2 图片

| 名称                      | 功能说明                         |
| ------------------------- | -------------------------------- |
| wx.saveImageToPhotosAlbum | 保存图片到系统相册               |
| wx.previewMedia           | 预览图片和视频                   |
| wx.previewImage           | 在新页面中全屏预览图片           |
| wx.getImageInfo           | 获取图片信息                     |
| wx.compressImage          | 压缩图片接口，可选压缩质量       |
| wx.chooseMessageFile      | 从客户端会话选择文件             |
| wx.chooseImage            | 从本地相册选择图片或使用相机拍照 |

### 5.3 视频

| 名称                      | 功能说明                            |
| ------------------------- | ----------------------------------- |
| wx.saveVideoToPhotosAlbum | 保存视频到系统相册                  |
| wx.openVideoEditor        | 打开视频编辑器                      |
| wx.getVideoInfo           | 获取视频详细信息                    |
| wx.createVideoContext     | 创建 video 上下文 VideoContext 对象 |
| wx.compressVideo          | 压缩视频接口                        |
| wx.chooseVideo            | 拍摄视频或从手机相册中选视频        |
| wx.chooseMedia            | 拍摄或从手机相册中选择图片或视频    |

### 5.3.1 VideoContext

| 名称                              | 功能说明                         |
| --------------------------------- | -------------------------------- |
| VideoContext.exitFullScreen       | 退出全屏                         |
| VideoContext.exitPictureInPicture | 退出小窗，该方法可在任意页面调用 |
| VideoContext.hideStatusBar        | 隐藏状态栏，仅在 iOS 全屏下有效  |
| VideoContext.pause                | 暂停视频                         |
| VideoContext.play                 | 播放视频                         |
| VideoContext.playbackRate         | 设置倍速播放                     |
| VideoContext.requestFullScreen    | 进入全屏                         |
| VideoContext.seek                 | 跳转到指定位置                   |
| VideoContext.sendDanmu            | 发送弹幕                         |
| VideoContext.showStatusBar        | 显示状态栏，仅在 iOS 全屏下有效  |
| VideoContext.stop                 | 停止视频                         |

### 5.4 音频

| 名称                        | 功能说明                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| wx.stopVoice                | 结束播放语音                                                                               |
| wx.setInnerAudioOption      | 设置 InnerAudioContext 的播放选项                                                          |
| wx.playVoice                | 开始播放语音                                                                               |
| wx.pauseVoice               | 暂停正在播放的语音                                                                         |
| wx.getAvailableAudioSources | 获取当前支持的音频输入源                                                                   |
| wx.createMediaAudioPlayer   | 创建媒体音频播放器对象 MediaAudioPlayer 对象，可用于播放视频解码器 VideoDecoder 输出的音频 |
| wx.createInnerAudioContext  | 创建内部 audio 上下文 InnerAudioContext 对象                                               |
| wx.createAudioContext       | 创建 audio 上下文 AudioContext 对象                                                        |

#### 5.4.1 AudioContext

| 名称                | 功能说明       |
| ------------------- | -------------- |
| AudioContext.pause  | 暂停音频       |
| AudioContext.play   | 播放音频       |
| AudioContext.seek   | 跳转到指定位置 |
| AudioContext.setSrc | 设置音频地址   |

#### 5.4.2 InnerAudioContext

| 名称                            | 功能说明                           |
| ------------------------------- | ---------------------------------- |
| InnerAudioContext.destroy       | 销毁当前实例                       |
| InnerAudioContext.offCanplay    | 取消监听音频进入可以播放状态的事件 |
| InnerAudioContext.offEnded      | 取消监听音频自然播放至结束的事件   |
| InnerAudioContext.offError      | 取消监听音频播放错误事件           |
| InnerAudioContext.offPause      | 取消监听音频暂停事件               |
| InnerAudioContext.offPlay       | 取消监听音频播放事件               |
| InnerAudioContext.offSeeked     | 取消监听音频完成跳转操作的事件     |
| InnerAudioContext.offSeeking    | 取消监听音频进行跳转操作的事件     |
| InnerAudioContext.offStop       | 取消监听音频停止事件               |
| InnerAudioContext.offTimeUpdate | 取消监听音频播放进度更新事件       |
| InnerAudioContext.offWaiting    | 取消监听音频加载中事件             |
| InnerAudioContext.onCanplay     | 监听音频进入可以播放状态的事件     |
| InnerAudioContext.onEnded       | 监听音频自然播放至结束的事件       |
| InnerAudioContext.onError       | 监听音频播放错误事件               |
| InnerAudioContext.onPause       | 监听音频暂停事件                   |
| InnerAudioContext.onPlay        | 监听音频播放事件                   |
| InnerAudioContext.onSeeked      | 监听音频完成跳转操作的事件         |
| InnerAudioContext.onSeeking     | 监听音频进行跳转操作的事件         |
| InnerAudioContext.onStop        | 监听音频停止事件                   |
| InnerAudioContext.onTimeUpdate  | 监听音频播放进度更新事件           |
| InnerAudioContext.onWaiting     | 监听音频加载中事件                 |
| InnerAudioContext.pause         | 暂停                               |
| InnerAudioContext.play          | 播放                               |
| InnerAudioContext.seek          | 跳转到指定位置                     |
| InnerAudioContext.stop          | 停止                               |

#### 5.4.3 MediaAudioPlayer

| 名称                               | 功能说明   |
| ---------------------------------- | ---------- |
| MediaAudioPlayer.addAudioSource    | 添加音频源 |
| MediaAudioPlayer.destroy           | 销毁播放器 |
| MediaAudioPlayer.removeAudioSource | 移除音频源 |
| MediaAudioPlayer.start             | 启动播放器 |
| MediaAudioPlayer.stop              | 停止播放器 |

### 5.5 背景音频

| 名称                             | 功能说明                     |
| -------------------------------- | ---------------------------- |
| wx.stopBackgroundAudio           | 停止播放音乐                 |
| wx.seekBackgroundAudio           | 控制音乐播放进度             |
| wx.playBackgroundAudio           | 使用后台播放器播放音乐       |
| wx.pauseBackgroundAudio          | 暂停播放音乐                 |
| wx.onBackgroundAudioStop         | 监听音乐停止事件             |
| wx.onBackgroundAudioPlay         | 监听音乐播放事件             |
| wx.onBackgroundAudioPause        | 监听音乐暂停事件             |
| wx.getBackgroundAudioPlayerState | 获取后台音乐播放状态         |
| wx.getBackgroundAudioManager     | 获取全局唯一的背景音频管理器 |

#### 5.5.1 BackgroundAudioManager

| 名称                                | 功能说明                                               |
| ----------------------------------- | ------------------------------------------------------ |
| BackgroundAudioManager.onCanplay    | 监听背景音频进入可播放状态事件                         |
| BackgroundAudioManager.onEnded      | 监听背景音频自然播放结束事件                           |
| BackgroundAudioManager.onError      | 监听背景音频播放错误事件                               |
| BackgroundAudioManager.onNext       | 监听用户在系统音乐播放面板点击下一曲事件（仅 iOS）     |
| BackgroundAudioManager.onPause      | 监听背景音频暂停事件                                   |
| BackgroundAudioManager.onPlay       | 监听背景音频播放事件                                   |
| BackgroundAudioManager.onPrev       | 监听用户在系统音乐播放面板点击上一曲事件（仅 iOS）     |
| BackgroundAudioManager.onSeeked     | 监听背景音频完成跳转操作事件                           |
| BackgroundAudioManager.onSeeking    | 监听背景音频开始跳转操作事件                           |
| BackgroundAudioManager.onStop       | 监听背景音频停止事件                                   |
| BackgroundAudioManager.onTimeUpdate | 监听背景音频播放进度更新事件，只有小程序在前台时会回调 |
| BackgroundAudioManager.onWaiting    | 监听音频加载中事件                                     |
| BackgroundAudioManager.pause        | 暂停音乐                                               |
| BackgroundAudioManager.play         | 播放音乐                                               |
| BackgroundAudioManager.seek         | 跳转到指定位置                                         |
| BackgroundAudioManager.stop         | 停止音乐                                               |

### 5.6 实时音视频

| 名称                       | 功能说明                                       |
| -------------------------- | ---------------------------------------------- |
| wx.createLivePusherContext | 创建 live-pusher 上下文 LivePusherContext 对象 |
| wx.createLivePlayerContext | 创建 live-player 上下文 LivePlayerContext 对象 |

#### 5.6.1 LivePlayerContext

| 名称                                   | 功能说明                         |
| -------------------------------------- | -------------------------------- |
| LivePlayerContext.exitFullScreen       | 退出全屏                         |
| LivePlayerContext.exitPictureInPicture | 退出小窗，该方法可在任意页面调用 |
| LivePlayerContext.mute                 | 静音                             |
| LivePlayerContext.pause                | 暂停                             |
| LivePlayerContext.play                 | 播放                             |
| LivePlayerContext.requestFullScreen    | 进入全屏                         |
| LivePlayerContext.resume               | 恢复                             |
| LivePlayerContext.snapshot             | 截图                             |
| LivePlayerContext.stop                 | 停止                             |

#### 5.6.2 LivePusherContext

| 名称                           | 功能说明                     |
| ------------------------------ | ---------------------------- |
| LivePusherContext.pause        | 暂停推流                     |
| LivePusherContext.pauseBGM     | 暂停背景音                   |
| LivePusherContext.playBGM      | 播放背景音                   |
| LivePusherContext.resume       | 恢复推流                     |
| LivePusherContext.resumeBGM    | 恢复背景音                   |
| LivePusherContext.setBGMVolume | 设置背景音音量               |
| LivePusherContext.setMICVolume | 设置麦克风音量               |
| LivePusherContext.snapshot     | 快照                         |
| LivePusherContext.start        | 开始推流，同时开启摄像头预览 |
| LivePusherContext.startPreview | 开启摄像头预览               |
| LivePusherContext.stop         | 停止推流，同时停止摄像头预览 |
| LivePusherContext.stopBGM      | 停止背景音                   |
| LivePusherContext.stopPreview  | 关闭摄像头预览               |
| LivePusherContext.switchCamera | 切换前后摄像头               |
| LivePusherContext.toggleTorch  | 切换手电筒                   |

### 5.7 录音

| 名称                  | 功能说明                                 |
| --------------------- | ---------------------------------------- |
| wx.stopRecord         | 停止录音                                 |
| wx.startRecord        | 开始录音                                 |
| wx.getRecorderManager | 获取全局唯一的录音管理器 RecorderManager |

#### 5.7.1 RecorderManager

| 名称                                | 功能说明                                 |
| ----------------------------------- | ---------------------------------------- |
| RecorderManager.onError             | 监听录音错误事件                         |
| RecorderManager.onFrameRecorded     | 监听已录制完指定帧大小的文件事件         |
| RecorderManager.onInterruptionBegin | 监听录音因为受到系统占用而被中断开始事件 |
| RecorderManager.onInterruptionEnd   | 监听录音中断结束事件                     |
| RecorderManager.onPause             | 监听录音暂停事件                         |
| RecorderManager.onResume            | 监听录音继续事件                         |
| RecorderManager.onStart             | 监听录音开始事件                         |
| RecorderManager.onStop              | 监听录音结束事件                         |
| RecorderManager.pause               | 暂停录音                                 |
| RecorderManager.resume              | 继续录音                                 |
| RecorderManager.start               | 开始录音                                 |
| RecorderManager.stop                | 停止录音                                 |

### 5.8 相机

| 名称                   | 功能说明                              |
| ---------------------- | ------------------------------------- |
| wx.createCameraContext | 创建 camera 上下文 CameraContext 对象 |

#### 5.8.1 CameraContext

| 名称                        | 功能说明               |
| --------------------------- | ---------------------- |
| CameraContext.onCameraFrame | 获取 Camera 实时帧数据 |
| CameraContext.setZoom       | 设置缩放级别           |
| CameraContext.startRecord   | 开始录像               |
| CameraContext.stopRecord    | 结束录像               |
| CameraContext.takePhoto     | 拍摄照片               |

#### 5.8.2 CameraFrameListener

| 名称                      | 功能说明       |
| ------------------------- | -------------- |
| CameraFrameListener.start | 开始监听帧数据 |
| CameraFrameListener.stop  | 停止监听帧数据 |

### 5.9 富文本

| 名称 | 功能说明 |
| ---- | -------- |

#### 5.9.1 EditorContext

| 名称                           | 功能说明                                                |
| ------------------------------ | ------------------------------------------------------- |
| EditorContext.blur             | 编辑器失焦，同时收起键盘                                |
| EditorContext.clear            | 清空编辑器内容                                          |
| EditorContext.format           | 修改样式                                                |
| EditorContext.getContents      | 获取编辑器内容                                          |
| EditorContext.getSelectionText | 获取编辑器已选区域内的纯文本内容                        |
| EditorContext.insertDivider    | 插入分割线                                              |
| EditorContext.insertImage      | 插入图片                                                |
| EditorContext.insertText       | 覆盖当前选区，设置一段文本                              |
| EditorContext.redo             | 恢复                                                    |
| EditorContext.removeFormat     | 清除当前选区的样式                                      |
| EditorContext.scrollIntoView   | 使得编辑器光标处滚动到窗口可视区域内                    |
| EditorContext.setContents      | 初始化编辑器内容，html 和 delta 同时存在时仅 delta 生效 |
| EditorContext.undo             | 撤销                                                    |

### 5.10 音视频合成

| 名称                    | 功能说明                                             |
| ----------------------- | ---------------------------------------------------- |
| wx.createMediaContainer | 创建音视频处理容器，最终可将容器中的轨道合成一个视频 |

#### 5.10.1 MediaContainer

| 名称                             | 功能说明                                     |
| -------------------------------- | -------------------------------------------- |
| MediaContainer.addTrack          | 将音频或视频轨道添加到容器                   |
| MediaContainer.destroy           | 将容器销毁，释放资源                         |
| MediaContainer.export            | 将容器内的轨道合并并导出视频文件             |
| MediaContainer.extractDataSource | 将传入的视频源分离轨道                       |
| MediaContainer.removeTrack       | 将音频或视频轨道从容器中移除                 |
| MediaTrack                       | 可通过 MediaContainer.extractDataSource 返回 |

### 5.11 实时语音

| 名称                          | 功能说明                                            |
| ----------------------------- | --------------------------------------------------- |
| wx.updateVoIPChatMuteConfig   | 更新实时语音静音设置                                |
| wx.subscribeVoIPVideoMembers  | 订阅视频画面成员                                    |
| wx.onVoIPVideoMembersChanged  | 监听实时语音通话成员视频状态变化事件                |
| wx.onVoIPChatSpeakersChanged  | 监听实时语音通话成员通话状态变化事件                |
| wx.onVoIPChatMembersChanged   | 监听实时语音通话成员在线状态变化事件                |
| wx.onVoIPChatInterrupted      | 监听被动断开实时语音通话事件                        |
| wx.offVoIPVideoMembersChanged | 取消监听实时语音通话成员视频状态变化事件            |
| wx.offVoIPChatMembersChanged  | 取消监听实时语音通话成员在线状态变化事件            |
| wx.offVoIPChatInterrupted     | 取消监听被动断开实时语音通话事件                    |
| wx.joinVoIPChat               | 加入 (创建) 实时语音通话，更多信息可见 实时语音指南 |
| wx.exitVoIPChat               | 退出（销毁）实时语音通话                            |

### 5.12 画面录制器

| 名称                   | 功能说明                                                             |
| ---------------------- | -------------------------------------------------------------------- |
| wx.createMediaRecorder | 创建 WebGL 画面录制器，可逐帧录制在 WebGL 上渲染的画面并导出视频文件 |

#### 5.12.1 MediaRecorder

| 名称                       | 功能说明                                                   |
| -------------------------- | ---------------------------------------------------------- |
| MediaRecorder.destroy      | 销毁录制器                                                 |
| MediaRecorder.off          | 取消监听录制事件                                           |
| MediaRecorder.on           | 注册监听录制事件的回调函数                                 |
| MediaRecorder.pause        | 暂停录制                                                   |
| MediaRecorder.requestFrame | 请求下一帧录制，在 callback 里完成一帧渲染后开始录制当前帧 |
| MediaRecorder.resume       | 恢复录制                                                   |
| MediaRecorder.start        | 开始录制                                                   |
| MediaRecorder.stop         | 结束录制                                                   |

### 5.13 视频解码器

| 名称                  | 功能说明                               |
| --------------------- | -------------------------------------- |
| wx.createVideoDecoder | 创建视频解码器，可逐帧获取解码后的数据 |

#### 5.13.1 VideoDecoder

| 名称                      | 功能说明                   |
| ------------------------- | -------------------------- |
| VideoDecoder.getFrameData | 获取下一帧的解码数据       |
| VideoDecoder.off          | 取消监听录制事件           |
| VideoDecoder.on           | 注册监听录制事件的回调函数 |
| VideoDecoder.remove       | 移除解码器                 |
| VideoDecoder.seek         | 跳到某个时间点解码         |
| VideoDecoder.start        | 开始解码                   |
| VideoDecoder.stop         | 停止解码                   |

## 六. 位置

| 名称                             | 功能说明                                                                                       |
| -------------------------------- | ---------------------------------------------------------------------------------------------- |
| wx.stopLocationUpdate            | 关闭监听实时位置变化，前后台都停止消息接收                                                     |
| wx.startLocationUpdateBackground | 开启小程序进入前后台时均接收位置消息，需引导用户开启授权                                       |
| wx.startLocationUpdate           | 开启小程序进入前台时接收位置消息                                                               |
| wx.openLocation                  | 使用微信内置地图查看位置                                                                       |
| wx.onLocationChange              | 监听实时地理位置变化事件，需结合 wx.startLocationUpdateBackground、wx.startLocationUpdate 使用 |
| wx.offLocationChange             | 取消监听实时地理位置变化事件                                                                   |
| wx.getLocation                   | 获取当前的地理位置、速度                                                                       |
| wx.chooseLocation                | 打开地图选择位置                                                                               |

## 七. 转发

| 名称                  | 功能说明               |
| --------------------- | ---------------------- |
| wx.updateShareMenu    | 更新转发属性           |
| wx.showShareMenu      | 显示当前页面的转发按钮 |
| wx.hideShareMenu      | 隐藏当前页面的转发按钮 |
| wx.getShareInfo       | 获取转发详细信息       |
| wx.authPrivateMessage | 验证私密消息           |

## 八. 画布

| 名称                     | 功能说明                                       |
| ------------------------ | ---------------------------------------------- |
| wx.createOffscreenCanvas | 创建离屏 canvas 实例                           |
| wx.createCanvasContext   | 创建 canvas 的绘图上下文 CanvasContext 对象    |
| wx.canvasToTempFilePath  | 把当前画布指定区域的内容导出生成指定大小的图片 |
| wx.canvasPutImageData    | 将像素数据绘制到画布                           |
| wx.canvasGetImageData    | 获取 canvas 区域隐含的像素数据                 |

### 8.1 Canvas

| 名称                         | 功能说明                                              |
| ---------------------------- | ----------------------------------------------------- |
| Canvas.cancelAnimationFrame  | 取消由 requestAnimationFrame 添加到计划中的动画帧请求 |
| Canvas.createImage           | 创建一个图片对象                                      |
| Canvas.createImageData       | 创建一个 ImageData 对象                               |
| Canvas.createPath2D          | 创建 Path2D 对象                                      |
| Canvas.getContext            | 该方法返回 Canvas 的绘图上下文                        |
| Canvas.requestAnimationFrame | 在下次进行重绘时执行                                  |
| Canvas.toDataURL             | 返回一个包含图片展示的 data URI                       |

### 8.2 CanvasContext

| 名称                                 | 功能说明                                                     |
| ------------------------------------ | ------------------------------------------------------------ |
| CanvasContext.arc                    | 创建一条弧线                                                 |
| CanvasContext.arcTo                  | 根据控制点和半径绘制圆弧路径                                 |
| CanvasContext.beginPath              | 开始创建一个路径                                             |
| CanvasContext.bezierCurveTo          | 创建三次方贝塞尔曲线路径                                     |
| CanvasContext.clearRect              | 清除画布上在该矩形区域内的内容                               |
| CanvasContext.clip                   | 从原始画布中剪切任意形状和尺寸                               |
| CanvasContext.closePath              | 关闭一个路径                                                 |
| CanvasContext.createCircularGradient | 创建一个圆形的渐变颜色                                       |
| CanvasContext.createLinearGradient   | 创建一个线性的渐变颜色                                       |
| CanvasContext.createPattern          | 对指定的图像创建模式的方法，可在指定的方向上重复元图像       |
| CanvasContext.draw                   | 将之前在绘图上下文中的描述（路径、变形、样式）画到 canvas 中 |
| CanvasContext.drawImage              | 绘制图像到画布                                               |
| CanvasContext.fill                   | 对当前路径中的内容进行填充                                   |
| CanvasContext.fillRect               | 填充一个矩形                                                 |
| CanvasContext.fillText               | 在画布上绘制被填充的文本                                     |
| CanvasContext.lineTo                 | 增加一个新点，然后创建一条从上次指定点到目标点的线           |
| CanvasContext.measureText            | 测量文本尺寸信息                                             |
| CanvasContext.moveTo                 | 把路径移动到画布中的指定点，不创建线条                       |
| CanvasContext.quadraticCurveTo       | 创建二次贝塞尔曲线路径                                       |
| CanvasContext.rect                   | 创建一个矩形路径                                             |
| CanvasContext.restore                | 恢复之前保存的绘图上下文                                     |
| CanvasContext.rotate                 | 以原点为中心顺时针旋转当前坐标轴                             |
| CanvasContext.save                   | 保存绘图上下文                                               |
| CanvasContext.scale                  | 在调用后，之后创建的路径其横纵坐标会被缩放                   |
| CanvasContext.setFillStyle           | 设置填充色                                                   |
| CanvasContext.setFontSize            | 设置字体的字号                                               |
| CanvasContext.setGlobalAlpha         | 设置全局画笔透明度                                           |
| CanvasContext.setLineCap             | 设置线条的端点样式                                           |
| CanvasContext.setLineDash            | 设置虚线样式                                                 |
| CanvasContext.setLineJoin            | 设置线条的交点样式                                           |
| CanvasContext.setLineWidth           | 设置线条的宽度                                               |
| CanvasContext.setMiterLimit          | 设置最大斜接长度                                             |
| CanvasContext.setShadow              | 设定阴影样式                                                 |
| CanvasContext.setStrokeStyle         | 设置描边颜色                                                 |
| CanvasContext.setTextAlign           | 设置文字的对齐                                               |
| CanvasContext.setTextBaseline        | 设置文字的竖直对齐                                           |
| CanvasContext.setTransform           | 使用矩阵重新设置（覆盖）当前变换的方法                       |
| CanvasContext.stroke                 | 画出当前路径的边框                                           |
| CanvasContext.strokeRect             | 画一个矩形(非填充)                                           |
| CanvasContext.strokeText             | 给定的 (x, y) 位置绘制文本描边的方法                         |
| CanvasContext.transform              | 使用矩阵多次叠加当前变换的方法                               |
| CanvasContext.translate              | 对当前坐标系的原点 (0, 0) 进行变换                           |

### 8.3 CanvasGradient

| 名称                        | 功能说明         |
| --------------------------- | ---------------- |
| CanvasGradient.addColorStop | 添加颜色的渐变点 |
| Color                       | 颜色             |
| Image                       | 图片对象         |
| ImageData                   | ImageData 对象   |

### 8.4 OffscreenCanvas

| 名称                       | 功能说明                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| OffscreenCanvas.getContext | 该方法返回 OffscreenCanvas 的绘图上下文                                                    |
| Path2D                     | Canvas 2D API 的接口 Path2D 用来声明路径，此路径稍后会被 CanvasRenderingContext2D 对象使用 |
| RenderingContext           | Canvas 绘图上下文                                                                          |

## 九. 文件

| 名称                    | 功能说明                                     |
| ----------------------- | -------------------------------------------- |
| wx.saveFileToDisk       | 保存文件系统的文件到用户磁盘，仅在 PC 端支持 |
| wx.saveFile             | 保存文件到本地                               |
| wx.removeSavedFile      | 删除本地缓存文件                             |
| wx.openDocument         | 新开页面打开文档                             |
| wx.getSavedFileList     | 获取该小程序下已保存的本地缓存文件列表       |
| wx.getSavedFileInfo     | 获取本地文件的文件信息                       |
| wx.getFileSystemManager | 获取全局唯一的文件管理器                     |
| wx.getFileInfo          | 获取文件信息                                 |

### 9.1 FileSystemManager

| 名称                               | 功能说明                                           |
| ---------------------------------- | -------------------------------------------------- |
| FileSystemManager.access           | 判断文件/目录是否存在                              |
| FileSystemManager.accessSync       | FileSystemManager.access 的同步版本                |
| FileSystemManager.appendFile       | 在文件结尾追加内容                                 |
| FileSystemManager.appendFileSync   | FileSystemManager.appendFile 的同步版本            |
| FileSystemManager.copyFile         | 复制文件                                           |
| FileSystemManager.copyFileSync     | FileSystemManager.copyFile 的同步版本              |
| FileSystemManager.getFileInfo      | 获取该小程序下的 本地临时文件 或 本地缓存文件 信息 |
| FileSystemManager.getSavedFileList | 获取该小程序下已保存的本地缓存文件列表             |
| FileSystemManager.mkdir            | 创建目录                                           |
| FileSystemManager.mkdirSync        | FileSystemManager.mkdir 的同步版本                 |
| FileSystemManager.readdir          | 读取目录内文件列表                                 |
| FileSystemManager.readdirSync      | FileSystemManager.readdir 的同步版本               |
| FileSystemManager.readFile         | 读取本地文件内容                                   |
| FileSystemManager.readFileSync     | FileSystemManager.readFile 的同步版本              |
| FileSystemManager.removeSavedFile  | 删除该小程序下已保存的本地缓存文件                 |
| FileSystemManager.rename           | 重命名文件                                         |
| FileSystemManager.renameSync       | FileSystemManager.rename 的同步版本                |
| FileSystemManager.rmdir            | 删除目录                                           |
| FileSystemManager.rmdirSync        | FileSystemManager.rmdir 的同步版本                 |
| FileSystemManager.saveFile         | 保存临时文件到本地                                 |
| FileSystemManager.saveFileSync     | FileSystemManager.saveFile 的同步版本              |
| FileSystemManager.stat             | 获取文件 Stats 对象                                |
| FileSystemManager.statSync         | FileSystemManager.stat 的同步版本                  |
| FileSystemManager.unlink           | 删除文件                                           |
| FileSystemManager.unlinkSync       | FileSystemManager.unlink 的同步版本                |
| FileSystemManager.unzip            | 解压文件                                           |
| FileSystemManager.writeFile        | 写文件                                             |
| FileSystemManager.writeFileSync    | FileSystemManager.writeFile 的同步版本             |

### 9.2 Stats

| 名称              | 功能说明                     |
| ----------------- | ---------------------------- |
| Stats.isDirectory | 判断当前文件是否一个目录     |
| Stats.isFile      | 判断当前文件是否一个普通文件 |

## 十. 开放接口

### 10.1 登录

| 名称            | 功能说明                     |
| --------------- | ---------------------------- |
| wx.login        | 调用接口获取登录凭证（code） |
| wx.checkSession | 检查登录态是否过期           |

### 10.2 小程序跳转

| 名称                       | 功能说明           |
| -------------------------- | ------------------ |
| wx.navigateToMiniProgram   | 打开另一个小程序   |
| wx.navigateBackMiniProgram | 返回到上一个小程序 |

### 10.3 帐号信息

| 名称                  | 功能说明         |
| --------------------- | ---------------- |
| wx.getAccountInfoSync | 获取当前帐号信息 |

### 10.4 用户信息

| 名称           | 功能说明     |
| -------------- | ------------ |
| wx.getUserInfo | 获取用户信息 |
| UserInfo       | 用户信息     |

### 10.5 数据上报

| 名称             | 功能说明                   |
| ---------------- | -------------------------- |
| wx.reportMonitor | 自定义业务数据监控上报接口 |

### 10.6 数据分析

| 名称               | 功能说明               |
| ------------------ | ---------------------- |
| wx.reportAnalytics | 自定义分析数据上报接口 |

### 10.7 支付

| 名称              | 功能说明     |
| ----------------- | ------------ |
| wx.requestPayment | 发起微信支付 |

### 10.8 授权

| 名称         | 功能说明               |
| ------------ | ---------------------- |
| wx.authorize | 提前向用户发起授权请求 |

### 10.9 设置

| 名称                 | 功能说明                                         |
| -------------------- | ------------------------------------------------ |
| wx.openSetting       | 调起客户端小程序设置界面，返回用户设置的操作结果 |
| wx.getSetting        | 获取用户的当前设置                               |
| AuthSetting          | 用户授权设置信息，详情参考权限                   |
| SubscriptionsSetting | 订阅消息设置                                     |

### 10.10 收货地址

| 名称             | 功能说明         |
| ---------------- | ---------------- |
| wx.chooseAddress | 获取用户收货地址 |

### 10.11 卡券

| 名称        | 功能说明             |
| ----------- | -------------------- |
| wx.openCard | 查看微信卡包中的卡券 |
| wx.addCard  | 批量添加卡券         |

### 10.12 发票

| 名称                  | 功能说明           |
| --------------------- | ------------------ |
| wx.chooseInvoiceTitle | 选择用户的发票抬头 |
| wx.chooseInvoice      | 选择用户已有的发票 |

### 10.13 生物认证

| 名称                                 | 功能说明                                 |
| ------------------------------------ | ---------------------------------------- |
| wx.startSoterAuthentication          | 开始 SOTER 生物认证                      |
| wx.checkIsSupportSoterAuthentication | 获取本机支持的 SOTER 生物认证方式        |
| wx.checkIsSoterEnrolledInDevice      | 获取设备内是否录入如指纹等生物信息的接口 |

### 10.14 微信运动

| 名称            | 功能说明                       |
| --------------- | ------------------------------ |
| wx.getWeRunData | 获取用户过去三十天微信运动步数 |

### 10.15 性能

| 名称                 | 功能说明                     |
| -------------------- | ---------------------------- |
| wx.reportPerformance | 小程序测速上报               |
| wx.getPerformance    | 获取当前小程序性能相关的信息 |

#### 10.15.1 EntryList

| 名称                       | 功能说明                                                        |
| -------------------------- | --------------------------------------------------------------- |
| EntryList.getEntries       | 该方法返回当前列表中的所有性能数据                              |
| EntryList.getEntriesByName | 获取当前列表中所有名称为 [name] 且类型为 [entryType] 的性能数据 |
| EntryList.getEntriesByType | 获取当前列表中所有类型为 [entryType] 的性能数据                 |

#### 10.15.2 Performance

| 名称                         | 功能说明                                                          |
| ---------------------------- | ----------------------------------------------------------------- |
| Performance.createObserver   | 创建全局性能事件监听器                                            |
| Performance.getEntries       | 该方法返回当前缓冲区中的所有性能数据                              |
| Performance.getEntriesByName | 获取当前缓冲区中所有名称为 [name] 且类型为 [entryType] 的性能数据 |
| Performance.getEntriesByType | 获取当前缓冲区中所有类型为 [entryType] 的性能数据                 |
| Performance.setBufferSize    | 设置缓冲区大小， 默认缓冲 30 条性能数据                           |

#### 10.15.3 PerformanceObserver

| 名称                           | 功能说明 |
| ------------------------------ | -------- |
| PerformanceObserver.disconnect | 停止监听 |
| PerformanceObserver.observe    | 开始监听 |

### 10.16 订阅消息

| 名称                       | 功能说明                                                 |
| -------------------------- | -------------------------------------------------------- |
| wx.requestSubscribeMessage | 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果 |

### 10.17 微信红包

| 名称              | 功能说明               |
| ----------------- | ---------------------- |
| wx.showRedPackage | 拉取 h5 领取红包封面页 |

### 10.18 群工具

| 名称                 | 功能说明                 |
| -------------------- | ------------------------ |
| wx.getGroupEnterInfo | 获取群工具小程序启动信息 |

## 十一. 设备

### 11.1 外围设备

| 名称                                      | 功能说明                                 |
| ----------------------------------------- | ---------------------------------------- |
| wx.onBLEPeripheralConnectionStateChanged  | 监听当前外围设备被连接或断开连接事件     |
| wx.offBLEPeripheralConnectionStateChanged | 取消监听当前外围设备被连接或断开连接事件 |
| wx.createBLEPeripheralServer              | 建立本地作为外围设备的服务端，可创建多个 |

#### 11.1.1 BLEPeripheralServer

| 名称                                              | 功能说明                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| BLEPeripheralServer.addService                    | 添加服务                                                                                         |
| BLEPeripheralServer.close                         | 关闭当前服务端                                                                                   |
| BLEPeripheralServer.offCharacteristicReadRequest  | 取消监听已连接的设备请求读当前外围设备的特征值事件                                               |
| BLEPeripheralServer.offCharacteristicSubscribed   | 取消监听特征值订阅事件                                                                           |
| BLEPeripheralServer.offCharacteristicUnsubscribed | 取消监听取消特征值订阅事件                                                                       |
| BLEPeripheralServer.offCharacteristicWriteRequest | 取消监听已连接的设备请求写当前外围设备的特征值事件                                               |
| BLEPeripheralServer.onCharacteristicReadRequest   | 监听已连接的设备请求读当前外围设备的特征值事件                                                   |
| BLEPeripheralServer.onCharacteristicSubscribed    | 监听特征值订阅事件，仅 iOS 支持                                                                  |
| BLEPeripheralServer.onCharacteristicUnsubscribed  | 监听取消特征值订阅事件，仅 iOS 支持                                                              |
| BLEPeripheralServer.onCharacteristicWriteRequest  | 监听已连接的设备请求写当前外围设备的特征值事件                                                   |
| BLEPeripheralServer.removeService                 | 移除服务                                                                                         |
| BLEPeripheralServer.startAdvertising              | 开始广播本地创建的外围设备                                                                       |
| BLEPeripheralServer.stopAdvertising               | 停止广播                                                                                         |
| BLEPeripheralServer.writeCharacteristicValue      | 往指定特征值写入数据，并通知已连接的主机，从机的特征值已发生变化，该接口会处理是走回包还是走订阅 |

### 11.2 iBeacon

| 名称                      | 功能说明                                        |
| ------------------------- | ----------------------------------------------- |
| wx.stopBeaconDiscovery    | 停止搜索附近的 iBeacon 设备                     |
| wx.startBeaconDiscovery   | 开始搜索附近的 iBeacon 设备                     |
| wx.onBeaconUpdate         | 监听 iBeacon 设备更新事件，仅能注册一个监听     |
| wx.onBeaconServiceChange  | 监听 iBeacon 服务状态变化事件，仅能注册一个监听 |
| wx.offBeaconUpdate        | 取消监听 iBeacon 设备更新事件                   |
| wx.offBeaconServiceChange | 取消监听 iBeacon 服务状态变化事件               |
| wx.getBeacons             | 获取所有已搜索到的 iBeacon 设备                 |

[IBeaconInfo](https://developers.weixin.qq.com/miniprogram/dev/api/device/ibeacon/IBeaconInfo.html)

### 11.3 NFC

| 名称              | 功能说明                                    |
| ----------------- | ------------------------------------------- |
| wx.stopHCE        | 关闭 NFC 模块                               |
| wx.startHCE       | 初始化 NFC 模块                             |
| wx.sendHCEMessage | 发送 NFC 消息                               |
| wx.onHCEMessage   | 监听接收 NFC 设备消息事件，仅能注册一个监听 |
| wx.offHCEMessage  | 接收 NFC 设备消息事件，取消事件监听         |
| wx.getNFCAdapter  | 获取 NFC 实例                               |
| wx.getHCEState    | 判断当前设备是否支持 HCE 能力               |

#### 11.3.1 IsoDep

| 名称                          | 功能说明         |
| ----------------------------- | ---------------- |
| IsoDep.close                  | 断开连接         |
| IsoDep.connect                | 连接 NFC 标签    |
| IsoDep.getHistoricalBytes     | 获取复位信息     |
| IsoDep.getMaxTransceiveLength | 获取最大传输长度 |
| IsoDep.isConnected            | 检查是否已连接   |
| IsoDep.setTimeout             | 设置超时时间     |
| IsoDep.transceive             | 发送数据         |

#### 11.3.2 MifareClassic

| 名称                                 | 功能说明         |
| ------------------------------------ | ---------------- |
| MifareClassic.close                  | 断开连接         |
| MifareClassic.connect                | 连接 NFC 标签    |
| MifareClassic.getMaxTransceiveLength | 获取最大传输长度 |
| MifareClassic.isConnected            | 检查是否已连接   |
| MifareClassic.setTimeout             | 设置超时时间     |
| MifareClassic.transceive             | 发送数据         |

#### 11.3.3 MifareUltralight

| 名称                                    | 功能说明         |
| --------------------------------------- | ---------------- |
| MifareUltralight.close                  | 断开连接         |
| MifareUltralight.connect                | 连接 NFC 标签    |
| MifareUltralight.getMaxTransceiveLength | 获取最大传输长度 |
| MifareUltralight.isConnected            | 检查是否已连接   |
| MifareUltralight.setTimeout             | 设置超时时间     |
| MifareUltralight.transceive             | 发送数据         |

#### 11.3.4 Ndef

| 名称                  | 功能说明           |
| --------------------- | ------------------ |
| Ndef.close            | 断开连接           |
| Ndef.connect          | 连接 NFC 标签      |
| Ndef.isConnected      | 检查是否已连接     |
| Ndef.offNdefMessage   | 取消监听 Ndef 消息 |
| Ndef.onNdefMessage    | 监听 Ndef 消息     |
| Ndef.setTimeout       | 设置超时时间       |
| Ndef.writeNdefMessage | 重写 Ndef 标签内容 |

#### 11.3.5 NfcA

| 名称                        | 功能说明         |
| --------------------------- | ---------------- |
| NfcA.close                  | 断开连接         |
| NfcA.connect                | 连接 NFC 标签    |
| NfcA.getAtqa                | 获取 ATQA 信息   |
| NfcA.getMaxTransceiveLength | 获取最大传输长度 |
| NfcA.getSak                 | 获取 SAK 信息    |
| NfcA.isConnected            | 检查是否已连接   |
| NfcA.setTimeout             | 设置超时时间     |
| NfcA.transceive             | 发送数据         |

#### 11.3.6 NFCAdapter

| 名称                           | 功能说明                                                            |
| ------------------------------ | ------------------------------------------------------------------- |
| NFCAdapter.getIsoDep           | 获取 IsoDep 实例，实例支持 ISO-DEP (ISO 14443-4)标准的读写          |
| NFCAdapter.getMifareClassic    | 获取 MifareClassic 实例，实例支持 MIFARE Classic 标签的读写         |
| NFCAdapter.getMifareUltralight | 获取 MifareUltralight 实例，实例支持 MIFARE Ultralight 标签的读写   |
| NFCAdapter.getNdef             | 获取 Ndef 实例，实例支持对 NDEF 格式的 NFC 标签上的 NDEF 数据的读写 |
| NFCAdapter.getNfcA             | 获取 NfcA 实例，实例支持 NFC-A (ISO 14443-3A)标准的读写             |
| NFCAdapter.getNfcB             | 获取 NfcB 实例，实例支持 NFC-B (ISO 14443-3B)标准的读写             |
| NFCAdapter.getNfcF             | 获取 NfcF 实例，实例支持 NFC-F (JIS 6319-4)标准的读写               |
| NFCAdapter.getNfcV             | 获取 NfcV 实例，实例支持 NFC-V (ISO 15693)标准的读写                |
| NFCAdapter.offDiscovered       | 取消监听 NFC Tag                                                    |
| NFCAdapter.onDiscovered        | 监听 NFC Tag                                                        |

NFCAdapter.startDiscovery
NFCAdapter.stopDiscovery

#### 11.3.7 NfcB

| 名称                        | 功能说明         |
| --------------------------- | ---------------- |
| NfcB.close                  | 断开连接         |
| NfcB.connect                | 连接 NFC 标签    |
| NfcB.getMaxTransceiveLength | 获取最大传输长度 |
| NfcB.isConnected            | 检查是否已连接   |
| NfcB.setTimeout             | 设置超时时间     |
| NfcB.transceive             | 发送数据         |

#### 11.3.8 NfcF

| 名称                        | 功能说明         |
| --------------------------- | ---------------- |
| NfcF.close                  | 断开连接         |
| NfcF.connect                | 连接 NFC 标签    |
| NfcF.getMaxTransceiveLength | 获取最大传输长度 |
| NfcF.isConnected            | 检查是否已连接   |
| NfcF.setTimeout             | 设置超时时间     |
| NfcF.transceive             | 发送数据         |

#### 11.3.9 NfcV

| 名称                        | 功能说明         |
| --------------------------- | ---------------- |
| NfcV.close                  | 断开连接         |
| NfcV.connect                | 连接 NFC 标签    |
| NfcV.getMaxTransceiveLength | 获取最大传输长度 |
| NfcV.isConnected            | 检查是否已连接   |
| NfcV.setTimeout             | 设置超时时间     |
| NfcV.transceive             | 发送数据         |

### 11.4 Wi-Fi

| 名称                | 功能说明                          |
| ------------------- | --------------------------------- |
| wx.stopWifi         | 关闭 Wi-Fi 模块                   |
| wx.startWifi        | 初始化 Wi-Fi 模块                 |
| wx.setWifiList      | 设置 wifiList 中 AP 的相关信息    |
| wx.onWifiConnected  | 监听连接上 Wi-Fi 的事件           |
| wx.onGetWifiList    | 监听获取到 Wi-Fi 列表数据事件     |
| wx.offWifiConnected | 取消监听连接上 Wi-Fi 的事件       |
| wx.offGetWifiList   | 取消监听获取到 Wi-Fi 列表数据事件 |
| wx.getWifiList      | 请求获取 Wi-Fi 列表               |
| wx.getConnectedWifi | 获取已连接中的 Wi-Fi 信息         |
| wx.connectWifi      | 连接 Wi-Fi                        |
| WifiInfo            | Wifi 信息                         |

### 11.5 联系人

| 名称               | 功能说明             |
| ------------------ | -------------------- |
| wx.addPhoneContact | 添加手机通讯录联系人 |

### 11.6 无障碍

| 名称                        | 功能说明                   |
| --------------------------- | -------------------------- |
| wx.checkIsOpenAccessibility | 检测是否开启视觉无障碍功能 |

### 11.7 低功耗蓝牙

| 名称                                  | 功能说明                                                 |
| ------------------------------------- | -------------------------------------------------------- |
| wx.writeBLECharacteristicValue        | 向低功耗蓝牙设备特征值中写入二进制数据                   |
| wx.setBLEMTU                          | 设置蓝牙最大传输单元                                     |
| wx.readBLECharacteristicValue         | 读取低功耗蓝牙设备的特征值的二进制数据值                 |
| wx.onBLEConnectionStateChange         | 监听低功耗蓝牙连接状态的改变事件                         |
| wx.onBLECharacteristicValueChange     | 监听低功耗蓝牙设备的特征值变化事件                       |
| wx.offBLEConnectionStateChange        | 取消监听低功耗蓝牙连接状态的改变事件                     |
| wx.offBLECharacteristicValueChange    | 取消监听低功耗蓝牙设备的特征值变化事件                   |
| wx.notifyBLECharacteristicValueChange | 启用低功耗蓝牙设备特征值变化时的 notify 功能，订阅特征值 |
| wx.makeBluetoothPair                  | 蓝牙配对接口，仅安卓支持                                 |
| wx.getBLEDeviceServices               | 获取蓝牙设备所有服务(service)                            |
| wx.getBLEDeviceRSSI                   | 获取蓝牙设备的信号强度                                   |
| wx.getBLEDeviceCharacteristics        | 获取蓝牙设备某个服务中所有特征值(characteristic)         |
| wx.createBLEConnection                | 连接低功耗蓝牙设备                                       |
| wx.closeBLEConnection                 | 断开与低功耗蓝牙设备的连接                               |

### 11.8 蓝牙

| 名称                              | 功能说明                                   |
| --------------------------------- | ------------------------------------------ |
| wx.stopBluetoothDevicesDiscovery  | 停止搜寻附近的蓝牙外围设备                 |
| wx.startBluetoothDevicesDiscovery | 开始搜寻附近的蓝牙外围设备                 |
| wx.openBluetoothAdapter           | 初始化蓝牙模块                             |
| wx.onBluetoothDeviceFound         | 监听寻找到新设备的事件                     |
| wx.onBluetoothAdapterStateChange  | 监听蓝牙适配器状态变化事件                 |
| wx.offBluetoothDeviceFound        | 取消监听寻找到新设备的事件                 |
| wx.offBluetoothAdapterStateChange | 取消监听蓝牙适配器状态变化事件             |
| wx.getConnectedBluetoothDevices   | 根据 uuid 获取处于已连接状态的设备         |
| wx.getBluetoothDevices            | 获取在蓝牙模块生效期间所有已发现的蓝牙设备 |
| wx.getBluetoothAdapterState       | 获取本机蓝牙适配器状态                     |
| wx.closeBluetoothAdapter          | 关闭蓝牙模块                               |

### 11.9 电量

| 名称                  | 功能说明                     |
| --------------------- | ---------------------------- |
| wx.getBatteryInfoSync | wx.getBatteryInfo 的同步版本 |
| wx.getBatteryInfo     | 获取设备电量                 |

### 11.10 剪贴板

| 名称                | 功能说明             |
| ------------------- | -------------------- |
| wx.setClipboardData | 设置系统剪贴板的内容 |
| wx.getClipboardData | 获取系统剪贴板的内容 |

### 11.11 网络

| 名称                      | 功能说明                                                 |
| ------------------------- | -------------------------------------------------------- |
| wx.onNetworkStatusChange  | 监听网络状态变化事件                                     |
| wx.offNetworkStatusChange | 取消监听网络状态变化事件，参数为空，则取消所有的事件监听 |
| wx.getNetworkType         | 获取网络类型                                             |

### 11.12 屏幕

| 名称                    | 功能说明             |
| ----------------------- | -------------------- |
| wx.setScreenBrightness  | 设置屏幕亮度         |
| wx.setKeepScreenOn      | 设置是否保持常亮状态 |
| wx.onUserCaptureScreen  | 监听用户主动截屏事件 |
| wx.offUserCaptureScreen | 用户主动截屏事件     |
| wx.getScreenBrightness  | 获取屏幕亮度         |

### 11.13 电话

| 名称             | 功能说明 |
| ---------------- | -------- |
| wx.makePhoneCall | 拨打电话 |

### 11.14 加速计

| 名称                      | 功能说明                                               |
| ------------------------- | ------------------------------------------------------ |
| wx.stopAccelerometer      | 停止监听加速度数据                                     |
| wx.startAccelerometer     | 开始监听加速度数据                                     |
| wx.onAccelerometerChange  | 监听加速度数据事件                                     |
| wx.offAccelerometerChange | 取消监听加速度数据事件，参数为空，则取消所有的事件监听 |

### 11.15 罗盘

| 名称                | 功能说明                                                 |
| ------------------- | -------------------------------------------------------- |
| wx.stopCompass      | 停止监听罗盘数据                                         |
| wx.startCompass     | 开始监听罗盘数据                                         |
| wx.onCompassChange  | 监听罗盘数据变化事件                                     |
| wx.offCompassChange | 取消监听罗盘数据变化事件，参数为空，则取消所有的事件监听 |

### 11.16 设备方向

| 名称                          | 功能说明                                                 |
| ----------------------------- | -------------------------------------------------------- |
| wx.stopDeviceMotionListening  | 停止监听设备方向的变化                                   |
| wx.startDeviceMotionListening | 开始监听设备方向的变化                                   |
| wx.onDeviceMotionChange       | 监听设备方向变化事件                                     |
| wx.offDeviceMotionChange      | 取消监听设备方向变化事件，参数为空，则取消所有的事件监听 |

### 11.17 陀螺仪

| 名称                  | 功能说明                   |
| --------------------- | -------------------------- |
| wx.stopGyroscope      | 停止监听陀螺仪数据         |
| wx.startGyroscope     | 开始监听陀螺仪数据         |
| wx.onGyroscopeChange  | 监听陀螺仪数据变化事件     |
| wx.offGyroscopeChange | 取消监听陀螺仪数据变化事件 |

### 11.18 性能

| 名称                | 功能说明                 |
| ------------------- | ------------------------ |
| wx.onMemoryWarning  | 监听内存不足告警事件     |
| wx.offMemoryWarning | 取消监听内存不足告警事件 |

### 11.19 扫码

| 名称        | 功能说明                   |
| ----------- | -------------------------- |
| wx.scanCode | 调起客户端扫码界面进行扫码 |

### 11.20 振动

| 名称            | 功能说明                          |
| --------------- | --------------------------------- |
| wx.vibrateShort | 使手机发生较短时间的振动 (15 ms)  |
| wx.vibrateLong  | 使手机发生较长时间的振动 (400 ms) |

## 十二. Worker

| 名称            | 功能说明             |
| --------------- | -------------------- |
| wx.createWorker | 创建一个 Worker 线程 |

### 12.1 Worker

| 名称               | 功能说明                                         |
| ------------------ | ------------------------------------------------ |
| Worker.onMessage   | 监听主线程/Worker 线程向当前线程发送的消息的事件 |
| Worker.postMessage | 向主线程/Worker 线程发送的消息                   |
| Worker.terminate   | 结束当前 Worker 线程                             |

## 十三. 第三方平台

| 名称                | 功能说明                       |
| ------------------- | ------------------------------ |
| wx.getExtConfigSync | wx.getExtConfig 的同步版本     |
| wx.getExtConfig     | 获取第三方平台自定义的数据字段 |

## 十四. WXML

| 名称                          | 功能说明                                     |
| ----------------------------- | -------------------------------------------- |
| wx.createSelectorQuery        | 返回一个 SelectorQuery 对象实例              |
| wx.createIntersectionObserver | 创建并返回一个 IntersectionObserver 对象实例 |

### 14.1 IntersectionObserver

| 名称                                    | 功能说明                                 |
| --------------------------------------- | ---------------------------------------- |
| IntersectionObserver.disconnect         | 停止监听                                 |
| IntersectionObserver.observe            | 指定目标节点并开始监听相交状态变化情况   |
| IntersectionObserver.relativeTo         | 使用选择器指定一个节点，作为参照区域之一 |
| IntersectionObserver.relativeToViewport | 指定页面显示区域作为参照区域之一         |

### 14.2 MediaQueryObserver

| 名称                          | 功能说明                          |
| ----------------------------- | --------------------------------- |
| MediaQueryObserver.disconnect | 停止监听                          |
| MediaQueryObserver.observe    | 开始监听页面 media query 变化情况 |

### 14.3 NodesRef

| 名称                        | 功能说明                        |
| --------------------------- | ------------------------------- |
| NodesRef.boundingClientRect | 添加节点的布局位置的查询请求    |
| NodesRef.context            | 添加节点的 Context 对象查询请求 |
| NodesRef.fields             | 获取节点的相关信息              |
| NodesRef.node               | 获取 Node 节点实例              |
| NodesRef.scrollOffset       | 添加节点的滚动位置查询请求      |

### 14.4 SelectorQuery

| 名称                         | 功能说明                                         |
| ---------------------------- | ------------------------------------------------ |
| SelectorQuery.exec           | 执行所有的请求                                   |
| SelectorQuery.in             | 将选择器的选取范围更改为自定义组件 component 内  |
| SelectorQuery.select         | 在当前页面下选择第一个匹配选择器 selector 的节点 |
| SelectorQuery.selectAll      | 在当前页面下选择匹配选择器 selector 的所有节点   |
| SelectorQuery.selectViewport | 选择显示区域                                     |

## 十五. 广告

| 名称                     | 功能说明             |
| ------------------------ | -------------------- |
| wx.createRewardedVideoAd | 创建激励视频广告组件 |
| wx.createInterstitialAd  | 创建插屏广告组件     |

### 15.1 InterstitialAd

| 名称                    | 功能说明                 |
| ----------------------- | ------------------------ |
| InterstitialAd.destroy  | 销毁插屏广告实例         |
| InterstitialAd.load     | 加载插屏广告             |
| InterstitialAd.offClose | 取消监听插屏广告关闭事件 |
| InterstitialAd.offError | 取消监听插屏错误事件     |
| InterstitialAd.offLoad  | 取消监听插屏广告加载事件 |
| InterstitialAd.onClose  | 监听插屏广告关闭事件     |
| InterstitialAd.onError  | 监听插屏错误事件         |
| InterstitialAd.onLoad   | 监听插屏广告加载事件     |
| InterstitialAd.show     | 显示插屏广告             |

### 15.2 RewardedVideoAd

| 名称                     | 功能说明                             |
| ------------------------ | ------------------------------------ |
| RewardedVideoAd.destroy  | 销毁激励视频广告实例                 |
| RewardedVideoAd.load     | 加载激励视频广告                     |
| RewardedVideoAd.offClose | 取消监听用户点击 关闭广告 按钮的事件 |
| RewardedVideoAd.offError | 取消监听激励视频错误事件             |
| RewardedVideoAd.offLoad  | 取消监听激励视频广告加载事件         |
| RewardedVideoAd.onClose  | 监听用户点击 关闭广告 按钮的事件     |
| RewardedVideoAd.onError  | 监听激励视频错误事件                 |
| RewardedVideoAd.onLoad   | 监听激励视频广告加载事件             |
| RewardedVideoAd.show     | 显示激励视频广告                     |
