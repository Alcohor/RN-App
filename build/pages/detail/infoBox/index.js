var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject, observer } from 'mobx-react';
import styles from './styles';
let InfoBox = class InfoBox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let arr = Object.keys(this.props.store.DetailData.goodsDetail);
        if (!arr.length)
            return false;
        let { goodsDetail } = this.props.store.DetailData.goodsDetail;
        return (React.createElement(View, { style: styles.wrap },
            React.createElement(Text, null, goodsDetail.description)));
    }
};
InfoBox = __decorate([
    inject('store'),
    observer
], InfoBox);
export default InfoBox;
//# sourceMappingURL=index.js.map