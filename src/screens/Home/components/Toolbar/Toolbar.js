import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UpToolbar } from './components/UpToolbar';
import { FindRestaurantToolbar } from './components/FindRestaurantToolbar';

const {width, height} = Dimensions.get("window")

const Toolbar = () => {

    const navigation = useNavigation();

    return(
      <View style={styles.main}>
          <UpToolbar/>
          <FindRestaurantToolbar/>
      </View>
    )
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        width: width,
        paddingVertical: 10,
    }
});

export default Toolbar