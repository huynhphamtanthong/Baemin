import React from 'react'
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
  Image,
  Dimensions,
} from 'react-native'

import {useNavigation} from '@react-navigation/native'

const BannerItems = {
  items: [
    {
      id: 1,
      name: 'aaa',
      source: require('../../../../assets/images/banner/baemin-discount-40-banner.jpeg'),
    },
    {
      id: 2,
      name: 'bbb',
      source: require('../../../../assets/images/banner/firsttime-baemin-discount-banner.jpeg'),
    },
    {
      id: 3,
      name: 'ccc',
      source: require('../../../../assets/images/banner/momo-baemin-discount-banner.jpeg'),
    },
    {
      id: 4,
      name: 'ddd',
      source: require('../../../../assets/images/banner/vpbank-baemin-discount-banner.jpeg'),
    },
  ],
}

const {width, height} = Dimensions.get('window')

const Banner = () => {
  const navigation = useNavigation()

  const onHandleBannerItemPressed = item => {
    navigation.push('BannerItem', item)
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onHandleBannerItemPressed(item)}
      >
        <Image style={styles.bannerItems} source={item.source} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={BannerItems.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        style={styles.flatlistBanner}
        scrollEnabled={true}
        pagingEnabled={true}
        ListHeaderComponent={<View style={{width: 30}} />}
        ListFooterComponent={<View style={{width: 15}} />}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 45}
        decelerationRate='fast'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: width,
  },
  flatlistBanner: {
    flex: 1,
    width: width,
    height: width / 2 - 20,
  },
  bannerItems: {
    width: width - 60,
    height: (width - 60) / 2,
    marginRight: 15,
    borderRadius: 5,
  },
})

export default Banner
