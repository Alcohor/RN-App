import { observable, action, runInAction } from 'mobx'
import { Fetch } from '../util'

class DetailData {
  @observable goodsDetail:Object={}  

  @action.bound getDetail(id:any) {
    Fetch('https://shop.m.yinyuetai.com/details?goodsId='+id) 
      .then((result: any) => {
        runInAction(() => {
          this.goodsDetail = result 
        })
      }) 
  }
}

export default new DetailData()