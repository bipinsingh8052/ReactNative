import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Profile from '../components/Profile'
import NewItems from '../components/NewItems'
import Mostpopular from '../components/Mostpopular'
import Categories from '../components/Categories'
import FlashSale from '../components/FlashSale'
import TopProduct from '../components/TopProduct'
import JustForYou from '../components/JustForYou'
import Shop from '../components/Shop'

export default function index() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Profile/> */}
        <Shop/>
        {/* <NewItems/>
        <Mostpopular/> */}
        <Categories/>
        <TopProduct/>
        <FlashSale/>
        <NewItems/>
        <FlashSale/>
        <Mostpopular/>
        <JustForYou/>

      </ScrollView>
    </SafeAreaView>
  )
}
