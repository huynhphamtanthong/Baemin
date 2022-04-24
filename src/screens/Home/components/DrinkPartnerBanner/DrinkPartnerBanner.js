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


import { useNavigation, useRoute } from '@react-navigation/native';

const {width, height} = Dimensions.get("window") 

const DrinkPartnerBanner = ({listItem}) => {

    const navigation = useNavigation();
    const route = useRoute();

    const renderItem = ({item, index}) => {
        return(
            <TouchableOpacity style={styles.flatlistItem} activeOpacity={0.5}>
                <Image source={item.source} style={styles.flatlistImageItem}/>
                <Text style={styles.flatlistTextItem}>Nhập mã {item.discountName}</Text>
            </TouchableOpacity>
        )
    }

    return(
      <View style={styles.main}>
          <Text style={styles.titleNameStyle}>Món ngon kèm nước Sài Gòn</Text>
          <FlatList
          data={listItem}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={styles.flatlistStyle}
          bounces={false}
          />
      </View>
    )
};

const styles = StyleSheet.create({
    main: {
        width: width,
        height: width / 2 + 10,
        flexDirection: 'column',
        paddingLeft: 5
        
    },
    titleNameStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    flatlistStyle: {
    },
    flatlistItem: {
        width: width / 1.5,
        height: width / 2,
        paddingHorizontal: 10,
    },
    flatlistImageItem: {
        width: width / 1.5 - 20,
        height: width / 3,
        borderRadius: 5
    },
    flatlistTextItem:{
        fontWeight: "600",
        paddingVertical: 10
    }
});

export default DrinkPartnerBanner