import { Fetch } from '../util'
import { resolve } from 'url';

export const getGoodsInfoAsync = () =>{
    Fetch('https://shop.m.yinyuetai.com/api/goods/findNewGoods.json?num=1')
        .then(result=>result)
}