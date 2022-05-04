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
import {RestaurantFlatlist} from '../../../../components/RestaurantFlatlist'

const {width, height} = Dimensions.get('window')

const SpecialDishesAround = ({listItem}) => {
  const navigation = useNavigation()
  const route = useRoute()

  const [headerText, setHeaderText] = useState('Quanh đây có gì ngon?')

  return (
    <View style={styles.main}>
      <Text style={styles.headerTextStyle}>{headerText}</Text>
      <RestaurantFlatlist listItem={listItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {},
  headerTextStyle: {
    paddingTop: 20,
    paddingBottom: 5,
    fontWeight: '700',
    fontSize: 17,
    paddingHorizontal: 20,
  },
})

export default SpecialDishesAround
