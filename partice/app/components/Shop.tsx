import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text, View ,Image, ScrollView, StyleSheet,TextInput } from 'react-native'

export default function Shop() {
  return (
       <View style={{marginTop:20}}>
         <View style={{ flexDirection:"row", justifyContent:"space-between",  alignItems:"center"}}>
          <Text style={{fontSize:35, fontWeight:800, marginLeft:10}}>Shop</Text>
         <View style={{flexDirection:"row", width:250,borderWidth:0.5, borderRadius:20, marginRight:10,height:30, justifyContent:"space-between", alignItems:"center"}}>
         <TextInput placeholder='Search' style={{width:"80%", paddingLeft:10, paddingTop:1, marginTop:10,  height:30, borderStyle:"none"}}/>
         <View style={{paddingRight:10 }}>
         <AntDesign size={20} color={"blue"} name='camerao'  />
         </View>
         </View>
         </View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            [1,2,3,4].map((e)=>{return(
              <View style={{ borderRadius:20, justifyContent:'center', alignItems:"center", paddingHorizontal:15, marginTop:30 }}>
            <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6FJM5C0-kDtM5KYpn91CkETTjM2uexzD9w&s"}} style={{width:380, height:200, borderRadius:20}} resizeMode='cover'  /> 
          </View>
            )})
          }
         </ScrollView>
         <View style={styles.dots}>
                  <View style={styles.dotInactive} />
                  <View style={styles.dotInactive} />
                  <View style={styles.dotActive} />
                </View>
         </View>
        
  )
}
const styles = StyleSheet.create({
   
   

    dots: {
      flexDirection: 'row',
      marginTop:20,
      justifyContent: 'center',
    },
    dotInactive: {
      width: 10,
      height: 10,
      backgroundColor: '#ccc',
      borderRadius: 5,
      margin: 5,
    },
    dotActive: {
      width: 10,
      height: 10,
      backgroundColor: '#0066FF',
      borderRadius: 5,
      margin: 5,
    },
  });
