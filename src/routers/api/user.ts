/**
 * 用户路由
 */

import Router from 'koa-router';
import {
    create,
    del
} from '../../controller/user';

const user = new Router();
user.prefix('/user');

user.post('/', create);

user.delete('/', del);

export default user;
