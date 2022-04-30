import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
// import onerror from 'koa-onerror';
import api from '../routers/api';

import connectDB from '../db/connect';

import config from '../config/default';

// server实例
const app = new Koa();
// 连接数据库
connectDB(config.databaseUrl);

// 中间件
// body解析
app.use(bodyParser());
// 接口路由
app.use(api.routes());

// 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

app.listen(config.port);
console.log(`app started at port ${config.port}...`);
