import React, { Component } from 'react';
import { View } from 'react-native';
import style from './styles';
import DetailSwiper from './detailSwiper';
import InfoBox from './infoBox';
class DetailContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(View, { style: style.wrap },
            React.createElement(DetailSwiper, null),
            React.createElement(InfoBox, null)));
    }
}
export default DetailContainer;
//# sourceMappingURL=DetailContainer.js.map