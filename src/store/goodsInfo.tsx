import { observable, action, computed, runInAction, flow} from 'mobx'
import { async } from 'rxjs/internal/scheduler/async';  
import { Fetch } from '../util'


class GoodsInfo{
    @observable goodsInfo:Array<any> =[]

    @action.bound getGoodsInfo(){
        Fetch('https://shop.m.yinyuetai.com/api/goods/findNewGoods.json?num=1')
            .then((result:any)=>{
                runInAction(()=>{
                    this.goodsInfo = result.data
                })
        })
    }
}

export default new GoodsInfo() 