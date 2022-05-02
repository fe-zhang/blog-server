import {model} from 'mongoose';

import {CategorySchema, ICategory} from '../schemas/category';

export default model<ICategory>('Category', CategorySchema);
