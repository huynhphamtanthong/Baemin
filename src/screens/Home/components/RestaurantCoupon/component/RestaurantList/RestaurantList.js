import React, {useState, useEffect} from 'react';
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
  Image
} from 'react-native';

import TickIcon from '../../../../../../assets/icons/tick-svgrepo-com.svg'
import StarIcon from '../../../../../../assets/icons/star-svgrepo-com.svg'


import { useNavigation, useRoute } from '@react-navigation/native';

const {width, height} = Dimensions.get("window") 

const RestaurantList = ({listItem}) => {

    const navigation = useNavigation();
    const route = useRoute();

    const roundNumberOrder = (numOrder) => {
        if(numOrder >= 999) return 999;
        if(numOrder <= 100) return numOrder;
        return Math.floor(numOrder / 100) * 100
    }

    const onHandleRestaurantPressed = (item) => {
        navigation.push('DishesList', item);
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const renderItem = ({item, index}) => {
        return(
            <TouchableOpacity style={styles.flatlistItem} activeOpacity={0.25} onPress={() => onHandleRestaurantPressed(item)}>
                <Image source={item.source} style={styles.flatlistImageItem}/>
                <View style={styles.flatlistTitleItem}>
                    {item.isPartner 
                    ?
                    <Text numberOfLines={2} style={styles.flatlistTextItem}>
                        <TickIcon width={12} height={12} style={styles.flatlistTickIcon}/> {item.name} - {item.address} 
                    </Text>
                    :
                    <Text numberOfLines={2} style={styles.flatlistTextItem}>
                        {item.name} - {item.address} 
                    </Text>
                    }
                    <View style={styles.flatlistItemStat}>
                        <StarIcon width={12} height={12} style={styles.flatlistStarIcon}/>
                        <Text style={styles.flatlistRateTextItem}>{item.rate.toFixed(1)}</Text>
                        <Text style={styles.flatlistNumberOrderItem}>({roundNumberOrder(item.numOrder)}{item.numOrder > 100? "+" : ""})</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    return(
      <View style={styles.main}>
          <FlatList
          data={shuffleArray(listItem.listItem)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatlistStyle}
          horizontal={true}
          contentContainerStyle={styles.contentContainerStyle}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          />
      </View>
    )
};

const styles = StyleSheet.create({
    main:{

    },
    flatlistStyle: {

    },
    contentContainerStyle: {
    },
    flatlistItem: {
        width: width / 2.5 + 5,
        height: width / 2 + 20,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatlistImageItem: {
        width: width / 2.5 - 10,
        height: width / 2.5 - 5,
        borderRadius: 5,
        marginVertical: 10,
    },
    flatlistTextItem: {
    },
    flatlistTitleItem: {
        flexDirection: 'column',
    },
    flatlistTickIcon: {
        color: "#4CD7D0"
    },
    flatlistStarIcon: {
        color: "orange"
    },
    flatlistItemStat: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    flatlistRateTextItem: {
        paddingHorizontal: 2,
        fontSize: 13,
    },
    flatlistNumberOrderItem: {
        fontSize: 11,
        color: "grey"
    }
});

export default RestaurantList