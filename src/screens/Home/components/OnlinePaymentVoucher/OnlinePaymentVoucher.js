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

import {useNavigation, useRoute} from '@react-navigation/native'

import {OnlinePaymentVoucherItem} from '../../dataTest'
import RightArrowIcon from '../../../../assets/icons/right-arrow-svgrepo-com.svg'

const {width, height} = Dimensions.get('window')

const OnlinePaymentVoucher = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          styles.flatlistItem,
          {backgroundColor: item.color, borderColor: item.color},
        ]}
        activeOpacity={0.75}
      >
        <Text numberOfLines={2} style={[styles.flatlistTextItem]}>
          {item.shortDescription} | Nhập mã {item.discountName}
        </Text>
        <RightArrowIcon
          width={20}
          height={20}
          style={styles.rightArrowIconStyle}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={OnlinePaymentVoucherItem.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        style={styles.flatlistStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
    height: width / 4,
  },
  flatlistStyle: {
    paddingHorizontal: 10,
  },
  flatlistItem: {
    borderRadius: 50,
    borderWidth: 1,
    width: width / 2 + 50,
    height: width / 6,
    marginHorizontal: 10,
    marginVertical: 17.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 55,
    paddingRight: 10,
  },
  flatlistTextItem: {
    width: width / 3 + 10,
    color: 'white',
    fontWeight: '600',
  },
  rightArrowIconStyle: {
    color: 'white',
  },
})

export default OnlinePaymentVoucher
