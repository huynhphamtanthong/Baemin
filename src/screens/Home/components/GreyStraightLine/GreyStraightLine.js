import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get("window")

const GreyStraightLine = () => {
    return(
      <View style={styles.main}>
      </View>
    )
};

const styles = StyleSheet.create({
    main: {
        width: width,
        height: width / 50,
        backgroundColor: '#F5F5F5'
    }
});

export default GreyStraightLine