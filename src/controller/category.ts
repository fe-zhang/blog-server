import {Context} from 'koa';
import Category from '../db/models/category';
import {
    create as createCategory
} from '../untils/crud';

export async function create(ctx: Context) {
    const body = ctx.request.body;
    ctx.body = await createCategory(Category, {
        ...body,
        alias: body.alias ?? body.category
    });
}
