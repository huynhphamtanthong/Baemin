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
  Image,
  FlatList,
  Dimensions,
} from 'react-native'

import {useNavigation} from '@react-navigation/native'

import GroceryIcon from '../../../../assets/icons/condiments-inside-a-grocery-paper-bag-svgrepo-com.svg'
import ChefIcon from '../../../../assets/icons/chef-hat-svgrepo-com.svg'

const option = {
  items: [
    {
      id: 1,
      name: 'Mart',
      source: GroceryIcon,
    },
    {
      id: 2,
      name: 'Kitchen',
      source: ChefIcon,
    },
  ],
}

const {width, height} = Dimensions.get('window')

const HomecookOption = () => {
  const navigation = useNavigation()

  const onHandleHomeCookOptionPressed = item => {
    if (item.name == 'Mart') {
      navigation.push('Mart', item)
    } else if (item.name == 'Kitchen') {
      navigation.push('Kitchen', item)
    }
  }

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.25}
        onPress={() => onHandleHomeCookOptionPressed(item)}
      >
        <View style={styles.homecookOptionItem}>
          <item.source
            width={30}
            height={30}
            style={styles.homecookOptionItemImage}
          />
          <Text style={styles.homecookOptionItemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={option.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        style={styles.flatListOptions}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: width,
  },
  flatListOptions: {
    width: width,
    height: width / 5,
  },
  homecookOptionItem: {
    borderRadius: 30,
    borderWidth: 0.5,
    flexDirection: 'row',
    marginLeft: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  homecookOptionItemImage: {
    paddingHorizontal: 30,
  },
  homecookOptionItemText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
    paddingRight: 15,
    paddingVertical: 15,
  },
})

export default HomecookOption
