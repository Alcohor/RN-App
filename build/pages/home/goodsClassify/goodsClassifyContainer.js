import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Fetch } from '../../../util';
import styles from './styles';
class GoodsClassifyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    getDataAsync() {
        Fetch('https://shop.m.yinyuetai.com/api/hotKeyword/indexList.json?equipmentName=WAP&num=6')
            .then((result) => {
            this.setState({
                items: result.data
            });
        });
    }
    componentDidMount() {
        this.getDataAsync();
    }
    renderItem() {
        if (this.state.items.length === 0)
            return false;
        let { items } = this.state;
        return (items.map(item => (React.createElement(View, { key: item.id, style: styles.classifyItem },
            React.createElement(View, { style: styles.classifyBox },
                React.createElement(Image, { style: styles.classifyImg, source: { uri: item.img } }),
                React.createElement(Text, null, item.name))))));
    }
    render() {
        return (React.createElement(View, { style: styles.classifyWrap }, this.renderItem()));
    }
}
export default GoodsClassifyContainer;
//# sourceMappingURL=goodsClassifyContainer.js.map