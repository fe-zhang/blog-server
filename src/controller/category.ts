import {Context, Next} from 'koa';
import Category from '../db/models/category';
import SubCategory from '../db/models/subCategory';
import {
    create as createCategory
} from '../untils/crud';

export async function create(ctx: Context, next: Next) {
    const body = ctx.request.body;
    if (body.parent) {
        const findParent = await Category.findById(body.parent);
        if (!findParent) {
            throw new Error('没有找到新增子类对应的父类');
        }
        ctx.body = await createCategory(SubCategory, body);
    }
    else {
        await createCategory(Category, body);
    }
}
