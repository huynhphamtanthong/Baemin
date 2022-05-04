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

const {width, height} = Dimensions.get('window')

const Kitchen = () => {
  const navigation = useNavigation()
  const route = useRoute()

  return (
    <View style={styles.main}>
      <Text>This function is ongoing developed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Kitchen
