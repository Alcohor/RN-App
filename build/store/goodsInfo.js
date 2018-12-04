var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action, runInAction } from 'mobx';
import { Fetch } from '../util';
class GoodsInfo {
    constructor() {
        this.goodsInfo = [];
    }
    getGoodsInfo() {
        Fetch('https://shop.m.yinyuetai.com/api/goods/findNewGoods.json?num=1')
            .then((result) => {
            runInAction(() => {
                this.goodsInfo = result.data;
            });
        });
    }
}
__decorate([
    observable
], GoodsInfo.prototype, "goodsInfo", void 0);
__decorate([
    action.bound
], GoodsInfo.prototype, "getGoodsInfo", null);
export default new GoodsInfo();
//# sourceMappingURL=goodsInfo.js.map