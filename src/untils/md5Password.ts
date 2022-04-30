/**
 * 加密密码
 */

import crypto from 'crypto';

export default (password: string): string => {
    const md5 = crypto.createHash('md5');
    return md5.update((password)).digest('hex'); // hex表示拿到最终为十六进制
}
