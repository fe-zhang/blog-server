import {model} from 'mongoose';

import {TagSchema, ITag} from '../schemas/tag';

export default model<ITag>('Tag', TagSchema);
