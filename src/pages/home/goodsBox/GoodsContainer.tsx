import React, { Component, Fragment } from 'react'
import { View, Image, Text, Alert,TouchableWithoutFeedback } from 'react-native'
import { inject, observer } from 'mobx-react'
import { any } from 'prop-types';
import style from './styles'

interface Props {
    store?: any
}
interface State {

}

@inject('store')
@observer
class GoodsContainer extends Component<Props, State>{
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
        let { getGoodsInfo } = this.props.store.goodsInfo//去除MobX中异步获取商品数据的方法
        getGoodsInfo()//执行一下
    }

    render() {
        return (
            <Fragment>
                <View style={style.Title}>
                    <Text style={style.titleBar}>新品首发</Text>
                    <Text style={style.BackBar}>MORE></Text>
                </View>
                <View style={style.Container}>

                    {this.renderItem()}
                </View>
            </Fragment>
        )
    }

    renderItem() {
        if (!this.props.store.goodsInfo.goodsInfo.goodsMap) return false
        let { goodsMap } = this.props.store.goodsInfo.goodsInfo
        let temp: Array<any> = []
        for (let key in goodsMap) {
            goodsMap[key].forEach((element: any) => {
                let tempWords = element.headImg.split("//")[1] //字符串处理， 有两张图地址没有写http://
                element.headImg = "http://" + tempWords
                temp.push(element)
            });
        }

        return (
            temp.map(val => (
                <View key={val.id} style={style.Card}>
                    <Image source={{ uri: val.headImg }} style={style.PosterImg}></Image>
                    <TouchableWithoutFeedback onPress={()=>{this.props.store.Navigation.navigation.navigate("Detail")}}>  
                        <Text >{val.title}</Text>
                    </TouchableWithoutFeedback>
                    
                </View>
            )
            )
        )

    }


}
export default GoodsContainer 