/**
 * 标签方法
 */

import {Context, Next} from 'koa';
import Tag from '../db/models/tag';

export async function create(ctx: Context, next: Next) {
    try {
        const body = {
            ...ctx.request.body,
            createTime: +new Date(),
            path: ctx.request.body.path ?? ctx.request.body.name
        };
        console.log(body)
        const tag = new Tag(body);
        await tag.save();
        ctx.status = 204;
    }
    catch (e: any) {
        if (e?.code === 11000) {
            throw new Error(`参数重复，${JSON.stringify(e.keyValue)}`);
        }
        else {
            throw e.message ?? e;
        }
    }
}

export async function del(ctx: Context, next: Next) {
    try {
        const id = ctx.request.body.id;
        if (!id) {
            throw new Error('缺少必要参数标签id');
        }
        await Tag.deleteOne({_id: id});
        ctx.status = 204;
    }
    catch (e: any) {
        throw e.message;
    }
}

export async function update(ctx: Context, next: Next) {
    try {
        const id = ctx.request.body.id;
        const body = {
            name: ctx.request.body.name,
            path: ctx.request.body.path
        };
        if (!id) {
            throw new Error('缺少必要参数标签id');
        }
        const res = await Tag.findOneAndUpdate(
            {_id: id},
            {
                $set: body
            }
        );
        ctx.body = res;
    }
    catch (e: any) {
        throw e.message;
    }
}

export async function getData(ctx: Context, next: Next) {
    console.log(ctx.request.query);
    // 返回列表 ，参数有pagenum，pagesize，
    // try {
    // }
    // catch (e: any) {
    //     throw e.message;
    // }
}

