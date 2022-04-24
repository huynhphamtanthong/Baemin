import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/storage/reducers';
const store = createStore(allReducers);

// import screens
import { Home } from './src/screens/Home';
import { Address } from './src/screens/Address';
import { FindRestaurant } from './src/screens/FindRestaurant';
import { Information } from './src/screens/Information';
import { Mail } from './src/screens/Mail';
import { Coupon } from './src/screens/Coupon';
import { CouponWallet } from './src/screens/CouponWallet';
import { DishesList } from './src/screens/DishesList';
import { RestaurantList } from './src/screens/RestaurantList';
import { DishOption } from './src/screens/DishOption';
import { MyOrder } from './src/screens/MyOrder';
import { FavRestaurant } from './src/screens/FavRestaurant';
import { PaymentManagement } from './src/screens/PaymentManagement';
import { SavedAddress } from './src/screens/SavedAddress';
import { InfoSharing } from './src/screens/InfoSharing';
import { Support } from './src/screens/Support';
import { RulesAndConditions } from './src/screens/RulesAndConditions';
import { BannerItem } from './src/screens/BannerItem';
import { Mart } from './src/screens/Mart';
import { Kitchen } from './src/screens/Kitchen';
import { SortKind } from './src/screens/Sort/SortKind';
import { SortStat } from './src/screens/Sort/SortStat';


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: true}}>
            <Stack.Screen name='Home' component={Home}></Stack.Screen>
            <Stack.Screen name='Mail' component={Mail} ></Stack.Screen>
            <Stack.Screen name='Address' component={Address} ></Stack.Screen>
            <Stack.Screen name='FindRestaurant' component={FindRestaurant} ></Stack.Screen>
            <Stack.Screen name='Information' component={Information} ></Stack.Screen>
            <Stack.Screen name='CouponWallet' component={CouponWallet} ></Stack.Screen>
            <Stack.Screen name='RestaurantList' component={RestaurantList} ></Stack.Screen>
            <Stack.Screen name='DishesList' component={DishesList} ></Stack.Screen>
            <Stack.Screen name='DishOption' component={DishOption} ></Stack.Screen>
            <Stack.Screen name='MyOrder' component={MyOrder} ></Stack.Screen>
            <Stack.Screen name='FavRestaurant' component={FavRestaurant} ></Stack.Screen>
            <Stack.Screen name='PaymentManagement' component={PaymentManagement} ></Stack.Screen>
            <Stack.Screen name='SavedAddress' component={SavedAddress} ></Stack.Screen>
            <Stack.Screen name='InfoSharing' component={InfoSharing} ></Stack.Screen>
            <Stack.Screen name='Support' component={Support} ></Stack.Screen>
            <Stack.Screen name='RulesAndConditions' component={RulesAndConditions} ></Stack.Screen>
            <Stack.Screen name='Coupon' component={Coupon} ></Stack.Screen>
            <Stack.Screen name='BannerItem' component={BannerItem} ></Stack.Screen>
            <Stack.Screen name='Mart' component={Mart} ></Stack.Screen>
            <Stack.Screen name='Kitchen' component={Kitchen} ></Stack.Screen>
            <Stack.Screen name='SortKind' component={SortKind} ></Stack.Screen>
            <Stack.Screen name='SortStat' component={SortStat} ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
