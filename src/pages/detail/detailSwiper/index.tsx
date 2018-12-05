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
class DetailSwiper extends Component<Props,State>{
  constructor(props:any){
    super(props)
  }
 
  render(){ 
    let arr = Object.keys(this.props.store.DetailData.goodsDetail)     
    if(!arr.length) return false      
    let { descImages } = this.props.store.DetailData.goodsDetail.goodsDetail
    return( 
      <View style={styles.swiperWraper}> 
        <Swiper>
            {descImages.map((item:any)=>(   
                <View key={item} style={styles.swiperItem}>
                    <Image source={{uri:"https:"+item.thumbUrl}} style={styles.swiperImg}/>   
                </View>
            ))}
        </Swiper>  
      </View> 
      
    // return( 
    //   <View> 
    //     <Text>{JSON.stringify(descImages)}</Text>   
    //   </View> 
    )
     
    
  }
}

export default DetailSwiper 