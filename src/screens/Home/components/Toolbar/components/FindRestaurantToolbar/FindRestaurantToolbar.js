import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import FindIcon from '../../../../../../assets/icons/find-magnifier-search-zoom-look-svgrepo-com.svg'

const {width, height} = Dimensions.get('window')

const FindRestaurantToolbar = () => {
  const navigation = useNavigation()

  const onHandleFindIconOnPressed = () => {
    navigation.push('FindRestaurant')
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.findButton}
        activeOpacity={0.5}
        onPress={() => onHandleFindIconOnPressed()}
      >
        <FindIcon width={15} height={15} />
        <Text style={styles.textButton}> Tìm nhà hàng, món ăn</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
    height: width / 10,
    position: 'absolute',
    marginTop: 50,
    paddingHorizontal: 15,
    paddingBottom: 10,
    borderBottomColor: '#C5C5C5',
    borderBottomWidth: 0.2,
  },
  findButton: {
    backgroundColor: '#f1f1f1',
    width: width - 30,
    height: width / 14,
    borderRadius: 15,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textButton: {
    color: '#adadad',
    marginHorizontal: 5,
  },
})

export default FindRestaurantToolbar
