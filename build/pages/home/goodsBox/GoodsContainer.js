var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component, Fragment } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { inject, observer } from 'mobx-react';
import style from './styles';
let GoodsContainer = class GoodsContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { getGoodsInfo } = this.props.store.goodsInfo; //去除MobX中异步获取商品数据的方法
        getGoodsInfo(); //执行一下
    }
    render() {
        return (React.createElement(Fragment, null,
            React.createElement(View, { style: style.Title },
                React.createElement(Text, { style: style.titleBar }, "\u65B0\u54C1\u9996\u53D1"),
                React.createElement(Text, { style: style.BackBar }, "MORE>")),
            React.createElement(View, { style: style.Container }, this.renderItem())));
    }
    renderItem() {
        if (!this.props.store.goodsInfo.goodsInfo.goodsMap)
            return false;
        let { goodsMap } = this.props.store.goodsInfo.goodsInfo;
        let temp = [];
        for (let key in goodsMap) {
            goodsMap[key].forEach((element) => {
                let tempWords = element.headImg.split("//")[1]; //字符串处理， 有两张图地址没有写http://
                element.headImg = "http://" + tempWords;
                temp.push(element);
            });
        }
        return (temp.map(val => (React.createElement(View, { key: val.id, style: style.Card },
            React.createElement(Image, { source: { uri: val.headImg }, style: style.PosterImg }),
            React.createElement(TouchableWithoutFeedback, { onPress: () => { this.props.store.Navigation.navigation.navigate("Detail"); } },
                React.createElement(Text, null, val.title))))));
    }
};
GoodsContainer = __decorate([
    inject('store'),
    observer
], GoodsContainer);
export default GoodsContainer;
//# sourceMappingURL=GoodsContainer.js.map