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

const {width, height} = Dimensions.get('window')

const SortKind = () => {
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <View style={styles.main}>
      <Text>abc</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {},
})

export default SortKind
