import React, { Component } from 'react'
import {
    View, Text, Image
} from 'react-native'
import uuid from 'uuid'
import TabNavigator from 'react-native-tab-navigator';
import styles from './styles'
import {inject} from 'mobx-react'

const cart = require('../../../assets/images/cart.png')
const cartActive = require('../../../assets/images/cart-active.png')
const found = require('../../../assets/images/found.png')
const foundActive = require('../../../assets/images/found-active.png')
const home = require('../../../assets/images/home.png')
const homeActive = require('../../../assets/images/home-active.png')
const mine = require('../../../assets/images/mine.png')
const mineActive = require('../../../assets/images/mine-active.png')
const more = require('../../../assets/images/more.png')
const moreActive = require('../../../assets/images/more-active.png')

import HomeContainer from '../home/HomeContainer'
import Navigation from '../../store/Navigation';


interface Props {
    name: string,
    navigation:any,
    store?:any
}

interface State {
     selectedTab: string,
     navs:Array<any> 
}
@inject('store')
export default class MainContainer extends Component<Props, State> { 
   
   static navigationOptions = {
       title:"首页"
   }
   
   
    constructor (props: any) {
        super(props)

        this.state = {
            selectedTab: 'home',
            navs:[
                {id:uuid(), name:"home", title:"首页", icon:home, iconActive:homeActive, Component:<HomeContainer></HomeContainer>}, 
                {id:uuid(), name:"classify", title:"分类", icon:more, iconActive:moreActive, Component:<Text>分类</Text>},
                {id:uuid(), name:"found", title:"发现", icon:found, iconActive:foundActive, Component:<Text>发现</Text>},
                {id:uuid(), name:"cart", title:"购物车", icon:cart, iconActive:cartActive, Component:<Text>购物车</Text>},
                {id:uuid(), name:"mine", title:"我的", icon:mine, iconActive:mineActive, Component:<Text>我的</Text>},
            ]
        }
    }

    renderNavItem(){
        let { navs } = this.state
        return(navs.map(val=>(
            <TabNavigator.Item
                key={val.id} 
                selected={this.state.selectedTab === val.name} 
                title={val.title}
                selectedTitleStyle={{color:"#FF4683"}} 
                renderIcon={() => <Image style = { styles.icon } source={val.icon} />} 
                renderSelectedIcon={() => <Image  style = { styles.icon } source={val.iconActive} />}
                onPress={() => this.setState({ selectedTab: val.name })}>
                {val.Component} 
            </TabNavigator.Item>
        )))
    }

    componentWillMount(){
        this.props.store.navigation.setNavigation(this.props.navigation) 
    }


    render () {
        return (
            <View style = {{flex: 1}}> 
                <TabNavigator>
                    {this.renderNavItem()}
                </TabNavigator>
            </View>
        )
    }

}