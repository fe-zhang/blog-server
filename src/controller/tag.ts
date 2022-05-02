/**
 * 标签
 */

import {Context, Next} from 'koa';
import Tag from '../db/models/tag';
import {
    create as createData,
    query as queryData,
    del as delData,
    update as updateData
} from '../untils/crud';

export async function create(ctx: Context) {
    const body = ctx.request.body;
    ctx.body = await createData(Tag, {
        ...body,
        alias: body.alias ?? body.tag
    });
}

export async function del(ctx: Context) {
    await delData(Tag, ctx.request.body.id);
    ctx.status = 204;
}

export async function update(ctx: Context) {
    const id = ctx.request.body.id;
    const body = {
        tag: ctx.request.body.tag,
        alias: ctx.request.body.alias
    };
    await updateData(
        Tag,
        id,
        body
    );
    ctx.body = 204;
}

export async function query(ctx: Context) {
    ctx.body = await queryData(Tag, ctx.request.query);
}

