/**
 * 路由中间件
 */

import Router from 'koa-router';
import user from './user';
import tag from './tag';
import category from './category';
import errorHandler from '../../middleware/errorHandler';

const router = new Router();
router.prefix('/api');

// api统一错误处理中间件
router.use(errorHandler());

router.use(user.routes());
router.use(tag.routes());
router.use(category.routes());

export default router;
