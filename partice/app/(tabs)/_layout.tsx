import { View } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen name='accountpage' options={{title:"Account" ,headerShown:false , TabBarIcon: ({ color,size }) => { return(
          <MaterialCommunityIcons size={28} color="black" name='account' />
        )
        }}}/>
        <Tabs.Screen name='categories' options={{title:"Categories",headerShown:false ,TabBarIcon:({color,size})=>{return(
          <FontAwesome size={28} color="black" name='opencart'/>
        )}}} />
        <Tabs.Screen name='index' options={{title:"Home" ,headerShown:false,TabBarIcon:({color,size})=>{return(
          <View style={{height:60, width:60, borderRadius:50, bottom:20, backgroundColor:"white", borderWidth:0.5, justifyContent:'center', alignItems:"center", borderColor:"red"}}> <AntDesign size={28} color={color} name='home' /></View>
        )}}} />
        {/* <Tabs.Screen name=''/> */}
        <Tabs.Screen name='explorepage' options={{title:"Explore" ,headerShown:false,TabBarIcon:({color,size})=>{return(
          <MaterialIcons size={28} color="black" name="explore" />
        )}}}/>
        <Tabs.Screen name='cartpage' options={{title:"Cart",headerShown:false, TabBarIcon:({color,size})=>{return(
          <Feather size={28} color="black" name="shopping-cart"/>
        )}}} />
    </Tabs>
  )
}
