/**
 * 标签路由
 */

import Router from 'koa-router';
import {
    create,
    del,
    update,
    getData
} from '../../controller/tag';

const tag = new Router();
tag.prefix('/tag');

tag.post('/', create);

tag.delete('/', del);

tag.put('/', update);

tag.get('/', getData);

export default tag;
