/**
 * 用户方法
 */

import {Context} from 'koa';
import User from '../db/models/user';
import md5Password from '../untils/md5Password';
import getAvatar from '../untils/getAvatar';
import {
    create as createUser,
    del as delData
} from '../untils/crud';
import {
    validatorUsername,
    validatorPassword
} from '../untils/validator';

export async function create(ctx: Context) {
    const body = {
        ...ctx.request.body,
        avatar: getAvatar(ctx.request.body.email)
    };
    validatorUsername(body.username);
    validatorPassword(body.password);
    const total = await User.find({auth: 1}).count();

    // 如果已经有管理账户则不允许再次添加管理账户
    if (total && body.auth) {
        body.auth = 2;
    }
    // 密码加密
    body.password = md5Password(body.password);
    ctx.body = await createUser(User, body);
}

export async function del(ctx: Context) {
    await delData(User, ctx.request.body.id);
    ctx.status = 204;
}
