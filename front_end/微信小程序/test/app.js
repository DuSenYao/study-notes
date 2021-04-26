//app.js
import { compareVersion } from './utils/util';

App({
  // 小程序启动后 触发
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(res);
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            }
          });
        }
      }
    });

    // 提示新版本更新
    const updateManager = wx.getUpdateManager(function (res) {
      // 请求完新版本信息的回调
      console.log(res);
    });

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        }
      });
    });

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
      console.log('新版本下载失败，请检查网络！');
    });
  },
  onShow: function (options) {
    console.log(options);

    const version = wx.getSystemInfoSync().SDKVersion;

    if (compareVersion(version, '2.10.4') >= 0) {
      wx.setStorage({
        key: 'key',
        data: 'value'
      });
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('确定');
          }
        }
      });
    }
  },
  onError: function (msg) {
    console.log(msg);
  },
  globalData: {
    userInfo: null
  }
});
