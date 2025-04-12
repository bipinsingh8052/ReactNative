import { View } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs>

            <Tabs.Screen  name='like' options={{title:"Like cart" ,headerShown:false}}/>
            <Tabs.Screen name='index'   options={{title:"Add to Cart",headerShown:false , TabBarIcon: ({ color,size }) => { return(
              <View style={{height:34, width:45, backgroundColor:"red"}}>
                {/* <MaterialCommunityIcons size={28} color="black" name='account' /> */}
              </View>)
            }}}/>


    </Tabs>
  )
}
