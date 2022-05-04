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
import {Toolbar} from '../../components/Toolbar'

const {width, height} = Dimensions.get('window')

const DishesList = () => {
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <View style={styles.main}>
      <Toolbar />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex: 1,
  },
})

export default DishesList
