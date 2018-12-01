import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import uuid from 'uuid';
import TabNavigator from 'react-native-tab-navigator';
import styles from './styles';
const cart = require('../../../assets/images/cart.png');
const cartActive = require('../../../assets/images/cart-active.png');
const found = require('../../../assets/images/found.png');
const foundActive = require('../../../assets/images/found-active.png');
const home = require('../../../assets/images/home.png');
const homeActive = require('../../../assets/images/home-active.png');
const mine = require('../../../assets/images/mine.png');
const mineActive = require('../../../assets/images/mine-active.png');
const more = require('../../../assets/images/more.png');
const moreActive = require('../../../assets/images/more-active.png');
import HomeContainer from '../home/HomeContainer';
export default class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            navs: [
                { id: uuid(), name: "home", title: "首页", icon: home, iconActive: homeActive, Component: React.createElement(HomeContainer, null) },
                { id: uuid(), name: "classify", title: "分类", icon: more, iconActive: moreActive, Component: React.createElement(Text, null, "\u5206\u7C7B") },
                { id: uuid(), name: "found", title: "发现", icon: found, iconActive: foundActive, Component: React.createElement(Text, null, "\u53D1\u73B0") },
                { id: uuid(), name: "cart", title: "购物车", icon: cart, iconActive: cartActive, Component: React.createElement(Text, null, "\u8D2D\u7269\u8F66") },
                { id: uuid(), name: "mine", title: "我的", icon: mine, iconActive: mineActive, Component: React.createElement(Text, null, "\u6211\u7684") },
            ]
        };
    }
    renderNavItem() {
        let { navs } = this.state;
        return (navs.map(val => (React.createElement(TabNavigator.Item, { key: val.id, selected: this.state.selectedTab === val.name, title: val.title, selectedTitleStyle: { color: "#FF4683" }, renderIcon: () => React.createElement(Image, { style: styles.icon, source: val.icon }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: val.iconActive }), onPress: () => this.setState({ selectedTab: val.name }) }, val.Component))));
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(TabNavigator, null, this.renderNavItem())));
    }
}
//# sourceMappingURL=MainContainer.js.map