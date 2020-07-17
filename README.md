### 如何运行

1. clone 项目到本地
2. npm i
3. node index.js
4. open index.html

### cases

#### case.1 本地直接调用 http(s) 接口

本地 file://some-path/index.html

调用 http://some-path/some-service

协议不同, 发生跨域。

#### case.2 本地发布到线上 http 后, 调用 http(s) 接口跨域

线上页面与接口协议不同, 或域名/端口不匹配 http(s) 接口规则。

接口调用跨域。

#### case.3 加入 node 层做一次中转

本地 file://some-path/index.html -> 调用 node 接口。

node 配置跨域白名单, 包含本地即项目各环境运行地址域名, 接收请求。

根据请求参数, 由 node 向最终的 http(s) 接口发送请求 (服务端无跨域限制).

得到响应后, 将返回体返回给前端页面, 解决跨域。
