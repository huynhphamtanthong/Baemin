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
import {VoucherListItem} from '../Home/dataTest'
import {Toolbar} from '../../components/Toolbar'
import {OptionSort} from '../../components/OptionSort'
import {RestaurantFlatlist} from '../../components/RestaurantFlatlist'

const {width, height} = Dimensions.get('window')

const RestaurantList = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const [sortOption, setSortOption] = useState('Sắp xếp')
  const [kindOption, setKindOption] = useState('Danh mục & cửa hàng')

  return (
    <View style={styles.main}>
      <Toolbar />
      <OptionSort setSortOption={setSortOption} setKindOption={setKindOption} />
      <ScrollView>
        <RestaurantFlatlist sortOption={sortOption} kindOption={kindOption} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1,
  },
})

export default RestaurantList
