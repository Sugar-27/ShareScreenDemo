# 基于WebRTC的1v1屏幕共享Demo展示

## 使用前置条件：
### 浏览器插件
请安装以下浏览器插件：
> Chrome 插件：desktopCaptureExtension
> 
> 获取地址：https://github.com/webrtc/samples/tree/gh-pages/release ，下载其中的zip压缩包即可
>
> 或者直接执行命令：wget https://github.com/webrtc/samples/blob/gh-pages/release/desktopCaptureExtension.zip
> 
> 使用时需要先解压压缩包，然后在**manifest.json**文件中的`content_scripts.matches`以及`permissions`字段中分别添加上自己的服务器域名，最后浏览器安装该插件即可

## 开发环境：
### GO
go version go1.19.3 linux/amd64

## 文件目录
### src文件
源代码
### conf文件
https证书文件，使用时需要将自己的证书添加到该文件中
### static
静态网站文件，包括html以及相对应的js代码
### build.sh
编译生成服务器二进制执行文件
