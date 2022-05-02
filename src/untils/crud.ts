/**
 * 数据库工具
 */

import {Model} from 'mongoose';

export interface IQueryOpt {
    pageNum?: number;
    pageSize?: number;
    populate?: string;
    queryParams?: object;
    sortParams?: object;
}

/**
 * 新增
 */
export async function create<T> (Model: Model<T>, params: any) {
    try {
        const model = new Model(params);
        return await model.save();
    }
    catch (e: any) {
        if (e?.code === 11000) {
            console.log(e)
            throw new Error('参数重复');
            return ;
        }
        throw e.message ?? e;
    }
}

/**
 * 删除
 */
export async function del<T> (Model: Model<T>, id: string) {
    try {
        if (!id) {
            throw new Error('缺少必要参数id');
        }
        const res = await Model.findByIdAndDelete(id);
        if (!res) {
            throw new Error('未找到对应数据');
        }
    }
    catch (e: any) {
        throw e.message ?? e;
    }
}

/**
 * 更新
 */
export async function update<T> (Model: Model<T>, id: string, params: any) {
    try {
        if (!id) {
            throw new Error('缺少必要参数id');
        }
        // 没有判断是否有有该id数据，没有的话也没什么影响
        await Model.findOneAndUpdate(
            {_id: id},
            {
                $set: params
            }
        );
    }
    catch (e: any) {
        throw e.message ?? e;
    }
}


/**
 * 数据分页查询
 */
export async function query<T> (Model: Model<T>, options: IQueryOpt) {
    const {
        pageNum = 1,
        pageSize = 10,
        queryParams = {},
        populate = '',
        sortParams = {}
    } = options;
    const start = (pageNum - 1) *  pageSize;
    try {
        const total = await Model.count(queryParams);
        const results = await Model.find(queryParams).skip(start).limit(pageSize).populate(populate).sort(sortParams);
        return {
            pageNum,
            pageSize,
            total,
            results
        }
    }
    catch (e) {
        throw e;
    }
}
