/*
 * @Description:
 * @Autor: weipengfei
 * @Date: 2021-06-23 11:29:59
 * @LastEditors: weipengfei
 * @LastEditTime: 2021-06-23 11:30:27
 */
module.exports = {
    plugins: {
        "postcss-pxtorem": {
            rootValue: 75,
            propList: ["*"],
            selectorBlackList: [".norem"],
        },
    },
};
