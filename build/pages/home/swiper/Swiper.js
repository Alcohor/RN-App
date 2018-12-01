import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Fetch } from '../../../util';
import Swiper from 'react-native-swiper';
import styles from './styles';
export default class SwiperContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    getData() {
        Fetch("https://shop.m.yinyuetai.com/api/carousel/indexList.json?equipmentName=WAP&num=5")
            .then((result) => {
            this.setState({ items: result.data });
            // Alert.alert(JSON.stringify(this.state.items))     
        });
    }
    componentDidMount() {
        this.getData();
    }
    renderSwiper() {
        let { items } = this.state;
        if (items.length === 0)
            return false;
        return (React.createElement(Swiper, null, items.map(item => (React.createElement(View, { key: item.id, style: styles.swiperItem },
            React.createElement(Image, { source: { uri: "http:" + item.img }, style: styles.swiperImg }))))));
    }
    render() {
        return (React.createElement(View, { style: styles.swiperWraper }, this.renderSwiper()));
    }
}
//# sourceMappingURL=Swiper.js.map