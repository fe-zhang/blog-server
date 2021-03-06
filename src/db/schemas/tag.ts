import {Document, Schema} from 'mongoose';

export interface ITag extends Document {
    tag: string;
    alias: string;
}

export const TagSchema: Schema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true
    },
    alias: {
        type: String,
        required: true,
        unique: true
    }
});
