/**
 * 用户方法
 */

import {Context, Next} from 'koa';
import User from '../db/models/user';
import md5Password from '../untils/md5Password';
import {
    validatorUsername,
    validatorPassword
} from '../untils/validator';

export async function create(ctx: Context, next: Next) {
    try {
        const body = {
            ...ctx.request.body,
            createTime: +new Date()
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
        const user = new User(body);
        await user.save();
        ctx.body = {
            username: user.username,
            password: user.password
        }
    }
    catch (e: any) {
        if (e?.code === 11000) {
            throw new Error('用户名已经存在！');
        }
        else {
            throw e.message;
        }
    }
}

export async function del(ctx: Context, next: Next) {
    try {
        const uid = ctx.request.body.uid;
        if (!uid) {
            throw new Error('缺少必要参数用户uid');
        }
        await User.deleteOne({_id: uid});
        ctx.status = 204;
    }
    catch (e: any) {
        throw e.message;
    }
}
