/**
 * 头像获取
 */

import gravatar from 'gravatar';

export default (email: string) => {
    const reg = /[1-9][0-9]{4,}@qq.com/;
    // 如果是纯数字qq邮箱获取qq头像
    if (reg.test(email)) {
        const qq = email.split('@')[0];
        return `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=168`;
    }
    return gravatar.url(email, {
        protocol: 'https',
        cdn: 'https://gravatar.loli.net',
        s: '168',
        r: 'g',
        d: 'mm'
    });
}
