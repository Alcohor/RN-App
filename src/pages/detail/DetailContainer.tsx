import React, { Component } from 'react'
import { View, Text } from 'react-native'
import style from './styles'
import DetailSwiper from './detailSwiper'
import InfoBox from './infoBox'
interface Props{}
  

class DetailContainer extends Component<Props>{
  constructor(props:any){
    super(props)
  }

  render(){
    return(
      <View style={style.wrap}>
      <DetailSwiper></DetailSwiper> 
      <InfoBox></InfoBox>
      </View>
    )
  }
}

export default DetailContainer