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

import RightArrowIcon from '../../../../assets/icons/right-arrow-svgrepo-com.svg'
import {Title} from './component/Title'
import {RestaurantList} from './component/RestaurantList'

const {width, height} = Dimensions.get('window')

const RestaurantCoupon = ({item}) => {
  const navigation = useNavigation()
  const route = useRoute()

  const [listItem, setListItem] = useState(item)

  return (
    <View style={styles.main}>
      <Title listItem={listItem} />
      <RestaurantList listItem={listItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
    height: width - 100,
    paddingLeft: 5,
    flexDirection: 'column',
  },
})

export default RestaurantCoupon
