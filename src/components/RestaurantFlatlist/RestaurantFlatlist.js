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
  Image,
  TouchableHighlight,
} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import {useRoute} from '@react-navigation/native'
import {VoucherListItem} from '../../screens/Home/dataTest'
import TickIcon from '../../assets/icons/tick-svgrepo-com.svg'
import StarIcon from '../../assets/icons/star-svgrepo-com.svg'
const {width, height} = Dimensions.get('window')

const RestaurantFlatlist = item => {
  const navigation = useNavigation()
  const route = useRoute()

  const [listItem, setListItem] = useState(VoucherListItem.items[0])

  const roundNumberOrder = numOrder => {
    if (numOrder >= 999) return 999
    if (numOrder <= 100) return numOrder
    return Math.floor(numOrder / 100) * 100
  }

  const onHandleRestaurantItemPressed = (item, index) => {
    navigation.push('DishesList', item)
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        activeOpacity={0.9}
        underlayColor={'#F5F5F5'}
        onPress={() => onHandleRestaurantItemPressed(item, index)}
      >
        <View style={styles.flatlistItemStyle} activeOpacity={0.5}>
          <Image style={styles.flatlistImageStyle} source={item.source} />
          <View style={styles.flatlistStatStyle}>
            {item.isPartner ? (
              <Text numberOfLines={2} style={styles.flatlistTextItem}>
                <TickIcon
                  width={12}
                  height={12}
                  style={styles.flatlistTickIcon}
                />{' '}
                {item.name} - {item.address}
              </Text>
            ) : (
              <Text numberOfLines={2} style={styles.flatlistTextItem}>
                {item.name} - {item.address}
              </Text>
            )}
            <View style={styles.flatlistItemStat}>
              <StarIcon
                width={12}
                height={12}
                style={styles.flatlistStarIcon}
              />
              <Text style={styles.flatlistRateTextItem}>
                {item.rate.toFixed(1)}
              </Text>
              <Text style={styles.flatlistNumberOrderItem}>
                ({roundNumberOrder(item.numOrder)}
                {item.numOrder > 100 ? '+' : ''})
              </Text>
              <Text> {'\u00B7'} </Text>
              <Text style={styles.flatlistDistanceTextItem}>
                {item.distance}km
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={listItem.listItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.flatlistStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
  },
  flatlistStyle: {},
  flatlistItemStyle: {
    height: width / 3,
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 2,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  flatlistImageStyle: {
    width: width / 4,
    height: width / 4,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  flatlistStatStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: width / 2 + 30,
  },
  flatlistTextItem: {},
  flatlistTitleItem: {
    flexDirection: 'column',
  },
  flatlistTickIcon: {
    color: '#4CD7D0',
  },
  flatlistStarIcon: {
    color: 'orange',
  },
  flatlistItemStat: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatlistRateTextItem: {
    paddingHorizontal: 5,
    fontSize: 13,
  },
  flatlistNumberOrderItem: {
    fontSize: 11,
    color: 'grey',
  },
  flatlistDistanceTextItem: {
    fontSize: 13,
    color: 'grey',
  },
})

export default RestaurantFlatlist
