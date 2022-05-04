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
import LeftArrow from '../../assets/icons/arrow-left-svgrepo-com.svg'

const {width, height} = Dimensions.get('window')

const ToolbarSort = () => {
  const navigation = useNavigation()
  const route = useRoute()

  const onHistoryBackPressed = () => {
    navigation.pop()
  }

  return (
    <View style={styles.main}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => onHistoryBackPressed()}
      >
        <LeftArrow width={30} height={30} style={styles.leftArrowStyle} />
      </TouchableOpacity>
      <Text style={styles.titleTextStyle}>{route.params.title}</Text>
      <LeftArrow
        width={30}
        height={30}
        style={[styles.leftArrowStyle, {opacity: 0}]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width,
    height: width / 8,
  },
  leftArrowStyle: {
    color: 'black',
  },
  titleTextStyle: {
    fontWeight: '600',
    fontSize: 15,
  },
})

export default ToolbarSort
