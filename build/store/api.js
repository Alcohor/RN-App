import { Fetch } from '../util';
export const getGoodsInfoAsync = () => {
    Fetch('https://shop.m.yinyuetai.com/api/goods/findNewGoods.json?num=1')
        .then(result => result);
};
//# sourceMappingURL=api.js.map