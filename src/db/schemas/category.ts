import {Document, Schema} from 'mongoose';

export interface ICategory extends Document {
    category: string;
    alias: string;
}

export const CategorySchema: Schema = new Schema({
    category: {
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
