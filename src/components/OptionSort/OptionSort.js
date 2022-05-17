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

import DownArrow from '../../assets/icons/arrow-down-2-svgrepo-com.svg'

const {width, height} = Dimensions.get('window')

const OptionSort = ({setSortOption, setKindOption}) => {
  const navigation = useNavigation()
  const route = useRoute()
  const [sortStatText, setSortStatText] = useState('Sắp xếp')
  const [title, setTitle] = useState('Sắp xếp')
  const [sortKindText, setSortKindText] = useState('Danh mục & cửa hàng')
  const [kindTitle, setKindTitle] = useState('Danh mục & cửa hàng')
  const [optionPressed, setOptionPressed] = useState(Array(3).fill(false))

  const [filterItemName, setFilterItemName] = useState([
    'Khuyến mãi',
    'Đang mở cửa',
    'Đối tác',
  ])

  const onHandleSortStatPressed = () => {
    navigation.push('SortStat', {title, sortStatText, setSortStatText})
  }

  const onHandleSortKindPressed = () => {
    navigation.push('SortKind', {kindTitle, sortKindText, setSortKindText})
  }

  const onHandleOptionPressed = index => {
    const tmp = !optionPressed[index]
    setOptionPressed([
      ...optionPressed.slice(0, index),
      tmp,
      ...optionPressed.slice(index + 1, optionPressed.length),
    ])
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={
          optionPressed[index] == false
            ? styles.filterFlatlistItemStyle
            : [styles.filterFlatlistItemStyle, {backgroundColor: '#D5D5D5'}]
        }
        activeOpacity={0.5}
        onPress={() => onHandleOptionPressed(index)}
      >
        <Text
          style={
            sortStatText == title
              ? styles.textStyle
              : [styles.textStyle, {color: 'black'}]
          }
        >
          {item}
        </Text>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    setSortOption(sortStatText)
  }, [sortStatText])

  useEffect(() => {
    setKindOption(sortKindText)
  }, [sortKindText])

  return (
    <ScrollView
      style={styles.main}
      horizontal={true}
      contentContainerStyle={styles.contentContainerStyle}
      bounces={false}
    >
      <TouchableOpacity
        style={
          sortStatText == title
            ? styles.sortButtonStyle
            : [styles.sortButtonStyle, {backgroundColor: '#D5D5D5'}]
        }
        activeOpacity={0.5}
        onPress={() => onHandleSortStatPressed()}
      >
        <Text
          style={
            sortStatText == title
              ? styles.textStyle
              : [styles.textStyle, {color: 'black'}]
          }
        >
          {' '}
          {sortStatText}{' '}
        </Text>
        <DownArrow width={10} height={10} />
      </TouchableOpacity>
      <Text style={[styles.filterTextStyle, styles.textStyle]}>Lọc :</Text>
      <TouchableOpacity
        style={styles.filterItemStyle}
        activeOpacity={0.5}
        onPress={() => onHandleSortKindPressed()}
      >
        <Text style={styles.textStyle}> {sortKindText} </Text>
        <DownArrow width={10} height={10} />
      </TouchableOpacity>
      <FlatList
        data={filterItemName}
        renderItem={renderItem}
        horizontal={true}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
    height: width / 6,
    paddingVertical: 5,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  sortButtonStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#D5D5D5',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: width / 12,
    backgroundColor: '#ffffff',
  },
  filterTextStyle: {
    paddingHorizontal: 5,
  },
  filterItemStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#D5D5D5',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: width / 12,
  },
  filterFlatlistItemStyle: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#D5D5D5',
    paddingHorizontal: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: width / 12,
  },
  textStyle: {
    color: '#A5A5A5',
    fontWeight: '500',
    fontSize: 14,
  },
})

export default OptionSort
