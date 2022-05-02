/**
 * 标签
 */

import {Context} from 'koa';
import Tag from '../db/models/tag';
import {
    create as createTag,
    query as queryTag,
    del as delTag,
    update as updateTag
} from '../untils/crud';

export async function create(ctx: Context) {
    const body = ctx.request.body;
    ctx.body = await createTag(Tag, {
        ...body,
        alias: body.alias ?? body.tag
    });
}

export async function del(ctx: Context) {
    await delTag(Tag, ctx.request.body.id);
    ctx.status = 204;
}

export async function update(ctx: Context) {
    const id = ctx.request.body.id;
    const body = {
        tag: ctx.request.body.tag,
        alias: ctx.request.body.alias
    };
    await updateTag(
        Tag,
        id,
        body
    );
    ctx.body = 204;
}

export async function query(ctx: Context) {
    ctx.body = await queryTag(Tag, ctx.request.query);
}

