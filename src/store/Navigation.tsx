import {observable,action,runInAction} from 'mobx'

class Navigation {
  @observable navigation :Object

  @action setNavigation (navigation:any){
      this.navigation = navigation
  }
}

export default new Navigation()