/**
 * 校验正则
 */

/**
 * @param 校验username
 */
export const validatorUsername = (username: string) => {
    const reg = /^[a-zA-Z0-9_-]{4,16}$/;
    if (!reg.test(username)) {
        throw new Error('用户名仅支持4-16位，字母、数字、下划线、减号');
    }
}

/**
 * @param 校验password
 */
export const validatorPassword = (password: string) => {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/;
    if (!reg.test(password)) {
        throw new Error('密码最少8位，包括至少1个大写字母，1个小写字母，1个数字');
    }
}
