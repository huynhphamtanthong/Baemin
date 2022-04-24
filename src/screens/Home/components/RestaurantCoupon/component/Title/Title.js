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
  FlatList
} from 'react-native';

import RightArrowIcon from '../../../../../../assets/icons/right-arrow-svgrepo-com.svg'
import { useNavigation, useRoute } from '@react-navigation/native';

const {width, height} = Dimensions.get("window") 

const Title = ({listItem}) => {

    const navigation = useNavigation();
    const route = useRoute();

    const [name, setName] = useState(listItem.name);
    const [condition, setCondition] = useState(listItem.condition)
    const [description, setDescription] = useState(listItem.description);
    const [items, setItems] = useState(listItem.listItem);

    const onHandleDishesListItemPressed = () => {
        navigation.push('RestaurantList', listItem)
    }

    return(
    <View style={styles.main}>
        <TouchableOpacity style={styles.headerStyle} activeOpacity={0.7} onPress={() => onHandleDishesListItemPressed()}>
           <View style={styles.headerTextStyle}>
                <Text style={styles.titleNameStyle}>{name}</Text>
                <Text style={styles.titleConditionStyle}>{condition}</Text>
           </View>
           <RightArrowIcon  width={10} height={10} style={styles.rightArrowIconStyle}/>
        </TouchableOpacity>
    </View>
    )
};

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 5
    },
    headerStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    headerTextStyle:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: width * 9 / 10,
    },
    titleNameStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 5,
    },
    titleConditionStyle: {

    },
    rightArrowIconStyle: {
        color: "#808080"
    }
});

export default Title