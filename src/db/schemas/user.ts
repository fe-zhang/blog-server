import mongoose, {Document, Schema} from 'mongoose';

export interface IUser extends Document {
    username: string;
    password: string;
    name: string,
    email: string,
    createTime: number,
    // 权限 1 最高权限 2 普通用户
    auth: number,
    avatar: string
}


export const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createTime: {
        type: Number,
        default: Date.now()
    },
    auth: {
        type: Number,
        default: 2
    },
    avatar: {
        type: String
    }
});
