import React, {useState, useEffect, useRef} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import SpecialIcon from '../../../../assets/icons/bread-svgrepo-com.svg'
import FastfoodIcon from '../../../../assets/icons/chicken-svgrepo-com.svg'
import DrinkIcon from '../../../../assets/icons/drink-soda-svgrepo-com.svg'
import GlobalDishIcon from '../../../../assets/icons/globe-svgrepo-com.svg'
import HotpotAndGrilledIcon from '../../../../assets/icons/grill-bbq-svgrepo-com.svg'
import TakeawayIcon from '../../../../assets/icons/hand-bag-svgrepo-com.svg'
import BMPicksIcon from '../../../../assets/icons/in-love-svgrepo-com.svg'
import NoodleIcon from '../../../../assets/icons/ramen-box-noodle-svgrepo-com.svg'
import RiceIcon from '../../../../assets/icons/rice-svgrepo-com.svg'
import HealthyIcon from '../../../../assets/icons/salad-svgrepo-com.svg'
import SnackIcon from '../../../../assets/icons/snack-svgrepo-com.svg'
import TrumcuoiIcon from '../../../../assets/icons/coupon-svgrepo-com.svg'
import Easing from 'react-native/Libraries/Animated/Easing'
import {transform} from '@babel/core'

const dataCategory = {
  items: [
    {
      id: 1,
      name: 'Trùm Cuối',
      source: TrumcuoiIcon,
      condition: 'Áp dụng cho đơn hàng từ 50k',
      shortDescription: 'Trùm Cuối BAEMIN chỉ có Deal Khủng',
    },
    {
      id: 2,
      name: 'Cơm',
      source: RiceIcon,
      condition: '',
      shortDescription: 'Cơm / Rice',
    },
    {
      id: 3,
      name: 'Bún/Phở',
      source: NoodleIcon,
      condition: '',
      shortDescription: 'Bún - Phở - Cháo / Noodles',
      description: '',
    },
    {
      id: 4,
      name: 'Đồ Uống',
      source: DrinkIcon,
      condition: '',
      shortDescription: 'Đồ Uống / Drinks',
      description: '',
    },
    {
      id: 5,
      name: 'BM Picks',
      source: BMPicksIcon,
      condition: '',
      shortDescription: 'BM Picks',
      description: '',
    },
    {
      id: 6,
      name: 'Đồ Ăn Nhanh',
      source: FastfoodIcon,
      condition: '',
      shortDescription: 'Đồ Ăn Nhanh / Fast Food',
      description: '',
    },
    {
      id: 7,
      name: 'Ăn Vặt',
      source: SnackIcon,
      condition: '',
      shortDescription: 'Ăn Vặt / Snacks',
      description: '',
    },
    {
      id: 8,
      name: 'Món Quốc Tế',
      source: GlobalDishIcon,
      condition: '',
      shortDescription: 'Món quốc tế / International Food',
      description: '',
    },
    {
      id: 9,
      name: 'Đơn Tự Lấy',
      source: TakeawayIcon,
      condition: '',
      shortDescription: 'Đơn Tự Lấy',
      description: '',
    },
    {
      id: 10,
      name: 'Đặc Sản',
      source: SpecialIcon,
      condition: '',
      shortDescription: 'Đặc Sản / Specialities',
      description: '',
    },
    {
      id: 11,
      name: 'Healthy',
      source: HealthyIcon,
      condition: '',
      shortDescription: 'Healthy / Headlthy',
      description: '',
    },
    {
      id: 12,
      name: 'Lẩu/Nướng',
      source: HotpotAndGrilledIcon,
      condition: '',
      shortDescription: 'Lẩu-Nướng / BBQ-HotPot',
      description: '',
    },
  ],
}

const {width, height} = Dimensions.get('window')

const formatData = (data, numColumns) => {
  const number0fFullRows = Math.floor(data.length / numColumns)
  let number0fElementsLastRow = data.length - number0fFullRows * numColumns
  while (
    number0fElementsLastRow !== numColumns &&
    number0fElementsLastRow != 0
  ) {
    data.push({key: `blank-${number0fElementsLastRow}`, empty: true})
    number0fElementsLastRow = number0fElementsLastRow + 1
  }
  return data
}

const Category = () => {
  const navigation = useNavigation()
  const [couponRotation, setCouponRotation] = useState(false)

  useEffect(() => {
    let timer1 = setTimeout(() => {
      setCouponRotation(i => !i)
    }, 1500)
    return () => {
      clearTimeout(timer1)
    }
  })

  const onHandleCategoryItemPressed = item => {
    navigation.push('RestaurantList', item)
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onHandleCategoryItemPressed(item)}
      >
        <View style={styles.categoryItem}>
          {index == 0 && couponRotation ? (
            <item.source
              width={40}
              height={40}
              style={styles.categoryItemRotationImage}
            />
          ) : (
            <item.source width={40} height={40} />
          )}
          <Text style={styles.categoryItemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={dataCategory.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatlistCategory}
        horizontal={false}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}
        numColumns={4}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  flatlistCategory: {
    width: width,
    height: width - 90,
  },
  contentContainerStyle: {},
  categoryItem: {
    width: (width - 20) / 4,
    flexDirection: 'column',
    borderWidth: 0.25,
    borderStyle: 'dashed',
    borderColor: '#C5C5C5',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 15,
  },
  categoryItemText: {
    paddingTop: 10,
    fontWeight: 'bold',
  },
  categoryItemRotationImage: {
    transform: [
      {
        rotate: '15deg',
      },
    ],
  },
})

export default Category
