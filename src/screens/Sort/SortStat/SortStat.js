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

const {width, height} = Dimensions.get("window")

const SortStat = () => {

    const navigation = useNavigation();
    const route = useRoute();

    const [sortStat, setSortStat] = useState(["Gần nhất", "Đánh giá tốt", "Phổ biến"])

    const onHandleSortStatItemPressed = (item) => {
        route.params.setSortStatText(item);
        navigation.pop();
    }

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity style={styles.flatlistItemStyle} onPress={() => onHandleSortStatItemPressed(item)}>
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }

    return(
      <View style={styles.main}>
          <FlatList
            data={sortStat}
            renderItem={renderItem}
            bounces={false}
            style={styles.flatlistStyle}
            showsVerticalScrollIndicator={false}
            horizontal={false}
          />
      </View>
    )
};

const styles = StyleSheet.create({
    main:{
        flex: 1,
        backgroundColor: 'white'
    },
    flatlistStyle: {
    },
    flatlistItemStyle: {
        width: width,
        height: width / 10
    }
});

export default SortStat