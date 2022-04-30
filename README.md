后台管理系统

使用koa + mongodb + react + antd搭建的博客后台管理系统。



## 启动

本地调试：`yarn dev`



## 数据

### user

Methods：

+ `GET` read
+ `POST` create
+ `PUT` update
+ `DELETE` delete

| Key        | Type    | required |
| ---------- | ------- | -------- |
| username   | String  | true     |
| password   | String  | true     |
| name       | String  | true     |
| email      | String  | true     |
| createTime | Number  | auto     |
| isAdmin    | Boolean | auto     |

