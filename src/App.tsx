import React , { Component } from 'react'
import MainContainer from './pages/main/MainContainer'
import DetailContainer from './pages/detail/DetailContainer'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'mobx-react'
import store from './store' 

const AppNavigator = createStackNavigator({
    Home : { screen : MainContainer },
    Detail : { screen : DetailContainer},
    initialRouteName: 'Home'  
})



export default class App extends Component {
    render(){
        return(
            <Provider store = {store}>
                <AppNavigator></AppNavigator>    
            </Provider>
        )
    }
}