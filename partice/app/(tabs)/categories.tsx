import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Categories from '../components/Categories'

export default function categories() {
  return (
   <SafeAreaView>
    <ScrollView>
      <Categories/>
    </ScrollView>
   </SafeAreaView>
  )
}
