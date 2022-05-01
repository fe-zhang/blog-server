/**
 * 数据库工具
 */

import {Model} from 'mongoose';

/**
 * 数据分页查询
 */
export const pageQuery = async (
    Model: Model<any>,
    pageNum: number = 1,
    pageSize: number = 10,
    populate: string = '',
    queryParams: object = {},
    sortParams: object = {}
) => {
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
