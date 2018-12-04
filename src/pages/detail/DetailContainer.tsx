import React, { Component } from 'react'
import { View, Text } from 'react-native'

interface Props{}
  

class DetailContainer extends Component<Props>{
  constructor(props:any){
    super(props)
  }

  render(){
    return(
      <View>
        <Text>
          detail
        </Text>
      </View>
    )
  }
}

export default DetailContainer