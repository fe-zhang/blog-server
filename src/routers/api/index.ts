/**
 * 路由中间件
 */

import Router from 'koa-router';
import user from './user';
import errorHandler from '../../middleware/errorHandler';

const router = new Router();
user.prefix('/api');

// api统一错误处理中间件
router.use(errorHandler());

router.use(user.routes());

export default router;
