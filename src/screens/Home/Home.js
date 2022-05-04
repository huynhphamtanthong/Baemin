import React, {useState, useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import {Toolbar} from './components/Toolbar'
import {Banner} from './components/Banner'
import {HomecookOption} from './components/HomecookOption'
import {Category} from './components/Category'
import {GreyStraightLine} from './components/GreyStraightLine'
import {Coupon} from './components/Coupon'
import {RestaurantCoupon} from './components/RestaurantCoupon'

import {VoucherListItem} from './dataTest'
import {DrinkPartnerBannerItem} from './dataTest'
import {DrinkPartnerBanner} from './components/DrinkPartnerBanner'
import {NearestRestaurantDeal} from './dataTest'
import {OnlinePaymentVoucher} from './components/OnlinePaymentVoucher'
import {RestaurantFlatlist} from '../../components/RestaurantFlatlist'
import {SpecialDishesAround} from './components/SpecialDishesAround'
import {LastOrders} from './components/LastOrders'

const {width, height} = Dimensions.get('window')

const Home = () => {
  const navigation = useNavigation()

  const [isFlashSale, setIsFlashSale] = useState(false)

  return (
    <View style={styles.main}>
      <Toolbar />
      <ScrollView
        style={styles.scrollView_main}
        showsVerticalScrollIndicator={false}
      >
        <Banner />
        <HomecookOption />
        <Category />
        <GreyStraightLine />

        {isFlashSale ? <DishesList /> : <></>}

        <Coupon />
        <GreyStraightLine />
        {VoucherListItem.items.map((item, index) => {
          return (
            <View>
              <RestaurantCoupon item={item} />
              <GreyStraightLine />
            </View>
          )
        })}
        <DrinkPartnerBanner listItem={DrinkPartnerBannerItem.items} />
        <GreyStraightLine />
        <RestaurantCoupon item={NearestRestaurantDeal.items[0]} />
        <GreyStraightLine />
        <OnlinePaymentVoucher />
        <GreyStraightLine />
        <LastOrders />
        <GreyStraightLine />
        <SpecialDishesAround listItem={VoucherListItem.items[0]} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
  toolBar: {},
  scrollView_main: {
    marginTop: 40,
  },
  contentContainerStyle: {
    paddingTop: 30,
  },
})

export default Home
