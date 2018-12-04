import React , { Component } from 'react'
import MainContainer from './pages/main/MainContainer'
import { Provider } from 'mobx-react'
import store from './store' 
export default class App extends Component {
    render(){
        return(
            <Provider store = {store}>
                <MainContainer name='ergouzi'></MainContainer>   
            </Provider>
        )
    }
}