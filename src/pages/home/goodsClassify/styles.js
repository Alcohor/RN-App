import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    classifyWrap:{
        backgroundColor:"#fff",
        width:"100%",
        height:210,
        marginTop:10,
        marginBottom:10, 
        flexWrap:"wrap",
        
    },
    classifyItem:{
        width:207, 
        height:70,   
        borderWidth:1,
        borderColor:"#f3f3f3",  
    },
    classifyBox:{
        width:160, 
        marginLeft:40, 
        height:70,
        flexDirection:"row", 
        alignItems:"center", 
        flexWrap:"nowrap" 
    },
    classifyImg:{
        width:60,
        height:60, 
        marginRight:10, 
    }
})