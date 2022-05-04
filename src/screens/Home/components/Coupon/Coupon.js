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
  TouchableOpacity,
  FlatList,
} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import {useRoute} from '@react-navigation/native'

import CouponIcon from '../../../../assets/icons/coupon1-svgrepo-com.svg'
import RightArrowIcon from '../../../../assets/icons/right-arrow-svgrepo-com.svg'

const {width, height} = Dimensions.get('window')

const Coupon = () => {
  const [numberCoupon, setNumberCoupon] = useState(60)

  const navigation = useNavigation()
  const route = useRoute()

  const onHandleCouponTotalPressed = () => {
    navigation.push('CouponWallet')
  }

  return (
    <TouchableOpacity
      style={styles.main}
      activeOpacity={0.5}
      onPress={() => onHandleCouponTotalPressed()}
    >
      <CouponIcon width={60} height={40} style={styles.couponIconStyle} />
      <Text style={styles.couponTextStyle}>
        Bạn ơi, {numberCoupon} mã giảm giá đang vẫy gọi nè
      </Text>
      <RightArrowIcon
        width={10}
        height={10}
        style={styles.rightArrowIconStyle}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
    height: width / 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponIconStyle: {
    color: '#4CD7D0',
  },
  couponTextStyle: {
    color: '#4CD7D0',
    fontWeight: 'bold',
    fontSize: 13.5,
    width: width - 90,
    paddingHorizontal: 10,
  },
  rightArrowIconStyle: {
    color: '#4CD7D0',
  },
})

export default Coupon
