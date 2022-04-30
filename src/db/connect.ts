/**
 * 数据库
 */
import mongoose from 'mongoose';

export default (db: string) => {
    const connect = async () => {
        try {
            await mongoose.connect(db, {});
            console.log(`数据库连接成功，${db}`);
        }
        catch (e) {
            console.log(`数据库连接失败，${e}`);
        }
    }
    connect().catch(() => {});
    // 数据库断开重新连接
    mongoose.connection.on('disconnected', connect);
}
