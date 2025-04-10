import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView } from 'react-native'

export default function ProductImagepage() {
  return (
    <View style={{flex:1,backgroundColor:"red"}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      <View>
        <Image source={{uri:"https://www.oyorooms.com/travel-guide/us/wp-content/uploads/sites/2/2022/05/Feature-Image-1.jpg"}} style={{height:800,width:300}} />
      </View>

    </ScrollView>
    </View>
  )
}
