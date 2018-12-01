import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { Fetch } from '../../../util'
import styles from './styles';

interface Props {

}
interface State {
    items: Array<any>
}

class GoodsClassifyContainer extends Component<Props, State>{
    constructor(props: any) {
        super(props)
        this.state = {
            items: []
        }
    }

    getDataAsync() { //异步获取数据
        Fetch('https://shop.m.yinyuetai.com/api/hotKeyword/indexList.json?equipmentName=WAP&num=6')
            .then((result: any) => {
                this.setState({
                    items: result.data
                })
            })
    }

    componentDidMount() { //组件完成渲染后  开始加载异步数据
        this.getDataAsync()
    }

    renderItem() {
        if (this.state.items.length === 0) return false
        let { items } = this.state
        return (
            items.map(item => (
                <View key={item.id} style={styles.classifyItem}>
                    <View style={styles.classifyBox}>
                        <Image style={styles.classifyImg} source={{ uri: item.img }}></Image>
                        <Text>{item.name}</Text>
                    </View>
                </View>
            ))
        )
    }

    render() {
        return (
            <View style={styles.classifyWrap}>
                {this.renderItem()}
            </View>
        )
    }
}




export default GoodsClassifyContainer
