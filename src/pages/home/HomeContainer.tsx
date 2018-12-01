import React , {Component} from 'react'
import { View,ScrollView } from 'react-native'
import Swiper from './swiper/Swiper'
import GoodsClassifyContainer from './goodsClassify/goodsClassifyContainer'
import Styles from './styles'

class HomeContainer extends  Component{
    render(){
        return (
            <ScrollView style={Styles.homeContainer}> 
                <Swiper></Swiper>
                <GoodsClassifyContainer></GoodsClassifyContainer>
            </ScrollView>
            
        )
    }
}

export default HomeContainer