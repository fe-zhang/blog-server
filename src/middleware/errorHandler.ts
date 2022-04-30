/**
 * 接口统一错误处理中间件
 */

import {Context, Next} from 'koa';

export default () => {
    return async (ctx: Context, next: Next) => {
        try {
            await next();
        }
        catch (e: any) {
            ctx.body = {
                success: 0,
                message: e instanceof Error ? e.message : e
            }
        }
    }
}
