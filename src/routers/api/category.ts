/**
 * 分类路由
 */

import Router from 'koa-router';
import {
    create
} from '../../controller/category';

const user = new Router();
user.prefix('/category');

user.post('/', create);

// user.delete('/', del);

export default user;
