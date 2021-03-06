import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Swiper from './swiper/Swiper';
import GoodsClassifyContainer from './goodsClassify/goodsClassifyContainer';
import Styles from './styles';
import GoodsBox from './goodsBox/GoodsContainer';
class HomeContainer extends Component {
    render() {
        return (React.createElement(ScrollView, { style: Styles.homeContainer },
            React.createElement(Swiper, null),
            React.createElement(GoodsClassifyContainer, null),
            React.createElement(GoodsBox, null)));
    }
}
export default HomeContainer;
//# sourceMappingURL=HomeContainer.js.map