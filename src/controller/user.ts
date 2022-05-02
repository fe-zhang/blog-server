/**
 * 用户方法
 */

import {Context, Next} from 'koa';
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

export async function create(ctx: Context, next: Next) {
    const body = {
        ...ctx.request.body,
        avatar: getAvatar(ctx.request.body.email)
    };
    validatorUsername(body.username);
    validatorPassword(body.password);
    const total = await User.find().count();

    // 没有用户初次创建是管理员账户
    if (!total) {
        body.isAdmin = true;
    }
    // 密码加密
    body.password = md5Password(body.password);
    ctx.body = await createUser(User, body);
}

export async function del(ctx: Context, next: Next) {
    await delData(User, ctx.request.body.id);
    ctx.status = 204;
}
