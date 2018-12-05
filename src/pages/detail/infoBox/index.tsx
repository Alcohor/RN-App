import Swiper from 'react-native-swiper';
import React, {Component} from 'react'
import { View, Image, Text }  from 'react-native'
import {inject, observer} from 'mobx-react'
import styles from './styles' 

interface State{

}
interface Props{
  store?:any
}

@inject('store')
@observer 
class InfoBox extends Component<Props,State>{
  constructor(props:any){
    super(props)
  }
 
  render(){ 
    let arr = Object.keys(this.props.store.DetailData.goodsDetail)     
    if(!arr.length) return false      
    let { goodsDetail } = this.props.store.DetailData.goodsDetail
    return( 
      <View style={styles.wrap}>
        <Text>{goodsDetail.description}</Text>
      </View>  
    )
  }
}

export default InfoBox 