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

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { VoucherListItem } from '../../dataTest';
import { DishesList } from '../../../DishesList';

const {width, height} = Dimensions.get("window")

const LastOrders = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [listItem, setListItem] = useState(VoucherListItem.items[0])
    const [headerText, setHeaderText] = useState("Hôm nay thử lại nha")
    const [testDate, setTestDate] = useState("22/04 12:00")

    const onHandleRestaurantItemPressed = (item, index) => {
        navigation.push('DishesList', item)
    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.flatlistItemStyle} activeOpacity={0.75} onPress={() => onHandleRestaurantItemPressed(item, index)}>
                <View style={styles.flatlistItemContainerStyle}>
                <Image 
                style={styles.flatlistImageStyle}
                source={item.source}
                />
                <View style={styles.flatlistStatStyle}>
                    <Text numberOfLines={2} style={styles.flatlistTextItem}>
                        {item.name} - {item.address} 
                    </Text>
                    <Text style={styles.flatlistLastDateTextItem}>Đặt lần cuối ngày {testDate}</Text>
                </View>
                </View>
            </TouchableOpacity>
        )
    }

    return(
      <View style={styles.main}>
          <Text style={styles.headerTextStyle}>{headerText}</Text>
          <FlatList
          data={listItem.listItem}
          renderItem={renderItem}
          keyExtractor={(item)=>item.id}
          bounces={false}
          style={styles.flatlistStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          />
      </View>
    )
};

const styles = StyleSheet.create({
    main:{
        width: width,
        height: width / 2,
        flexDirection: 'column'
    },
    headerTextStyle: {
        paddingTop: 20,
        paddingBottom: 5,
        fontWeight: "700",
        fontSize: 17,
        paddingHorizontal: 20
    },
    flatlistStyle: {
        marginVertical: 15,
    },
    flatlistItemStyle: {
        borderWidth: 1,
        marginHorizontal: 10,
        borderRadius: 5,
        borderColor: '#F5F5F5'
    },
    flatlistItemContainerStyle: {
        flexDirection: 'row',
        padding: 10
    },
    flatlistImageStyle: {
        width: width / 4,
        height: width / 4,
        borderRadius: 5,
        marginHorizontal: 5
    },
    flatlistStatStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: width / 2,
        marginHorizontal: 10
    },
    flatlistTextItem: {
        fontWeight: "600"
    },
    flatlistLastDateTextItem: {
        fontSize: 12,
        color: 'grey'
    }
});

export default LastOrders