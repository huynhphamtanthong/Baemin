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
} from 'react-native'

import {useNavigation} from '@react-navigation/native'
import {useRoute} from '@react-navigation/native'
import {ToolbarSort} from '../../../components/Toolbar'

const {width, height} = Dimensions.get('window')

const SortStat = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const [sortStat, setSortStat] = useState([
    'Gần nhất',
    'Đánh giá tốt',
    'Phổ biến',
  ])

  const onHandleSortStatItemPressed = item => {
    if (route.params.sortStatText == item) {
      route.params.setSortStatText('Sắp xếp')
    } else route.params.setSortStatText(item)
    navigation.pop()
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.flatlistItemStyle}
        onPress={() => onHandleSortStatItemPressed(item)}
      >
        <Text style={styles.flatlistItemTextStyle}>{item}</Text>
        {route.params.sortStatText == item ? (
          <View style={styles.flatlistItemTickButtonChoiceStyle}>
            <View style={styles.picker_button_icon_left}></View>
            <View style={styles.picker_button_icon_right}></View>
          </View>
        ) : (
          <View style={styles.flatlistItemTickButtonStyle}></View>
        )}
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={sortStat}
        renderItem={renderItem}
        bounces={false}
        style={styles.flatlistStyle}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        ListHeaderComponent={<ToolbarSort />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlistStyle: {},
  flatlistItemStyle: {
    width: width,
    height: width / 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  flatlistItemTextStyle: {
    fontWeight: '400',
  },
  flatlistItemTickButtonStyle: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'grey',
    width: 23,
    height: 23,
  },
  flatlistItemTickButtonChoiceStyle: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#4CD7D0',
    width: 23,
    height: 23,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CD7D0',
  },
  picker_button_icon_left: {
    borderWidth: 0.3,
    width: 2,
    height: 5,
    transform: [{rotate: '-45deg'}],
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: 7,
    marginRight: 3,
    marginLeft: -2,
  },
  picker_button_icon_right: {
    borderRadius: 0,
    borderWidth: 0.3,
    width: 2,
    height: 12,
    transform: [{rotate: '45deg'}],
    borderColor: 'white',
    backgroundColor: 'white',
    marginTop: 1.5,
  },
})

export default SortStat
