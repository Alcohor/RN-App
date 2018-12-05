import React,{Component} from 'react'
import {View,Image, Alert} from 'react-native'
import {Fetch} from '../../../util'
import { any } from 'prop-types';
import Swiper from 'react-native-swiper';
import styles from './styles'

interface Props{
    
}

interface State{
    items:Array<any>
}

export default class SwiperContainer extends Component <Props,State>{
    constructor(props:any){
        super(props)
        this.state={
            items:[]
        }
    }

    getData(){
        Fetch("https://shop.m.yinyuetai.com/api/carousel/indexList.json?equipmentName=WAP&num=5")
            .then( (result:any) => {    
                this.setState({ items:result.data })    
            })
    }

    componentDidMount(){
        this.getData()
    }

    renderSwiper(){
        let { items } = this.state
        if ( items.length===0 ) return false  
        return(
        <Swiper>
            {items.map(item=>(
                <View key={item.id} style={styles.swiperItem}>
                    <Image source={{uri:"http:"+item.img}} style={styles.swiperImg}/>   
                </View>
            ))}
        </Swiper>   
        )
    }
    render(){
        return(
            <View style={styles.swiperWraper}>
                {this.renderSwiper()}  
            </View>
        )
    }
}