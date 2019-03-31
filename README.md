## 1.目录结构

|———— app.js

|———— controllers

|———— models

|———— node_modules            第三方包

|———— package.json                包描述文件

|———— package - lock.json      第三方包版本锁定文件（npm 5 以后才有）

|———— public                             公共资源··

|———— README.md                  项目说明文档

|———— routers                            路由设计

|———— views                               存储视图文档

## 2.模板页

## 3.路由设计

| 路径      | 方法 | get参数 | post参数                  | 是否需要权限 | 备注         |
| --------- | ---- | ------- | ------------------------- | ------------ | ------------ |
| /         | GET  |         |                           |              | 渲染首页     |
| /register | GET  |         |                           |              | 渲染注册界面 |
| /register | POST |         | email、nickname、password |              | 处理注册请求 |
| /login    | GET  |         |                           |              | 渲染登陆页面 |
| /login    | POST |         | email、password           |              | 处理登陆请求 |
| /logout   | GET  |         |                           |              | 处理退出请求 |