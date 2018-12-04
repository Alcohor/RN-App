import React, { Component } from 'react';
import MainContainer from './pages/main/MainContainer';
import { Provider } from 'mobx-react';
import store from './store';
export default class App extends Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(MainContainer, { name: 'ergouzi' })));
    }
}
//# sourceMappingURL=App.js.map