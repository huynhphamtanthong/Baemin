import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AddressIcon from '../../../../../../assets/icons/address-svgrepo-com.svg'
import RightArrowIcon from '../../../../../../assets/icons/right-arrow-svgrepo-com.svg'
import MailIcon from '../../../../../../assets/icons/mail-svgrepo-com.svg'
import MenuIcon from '../../../../../../assets/icons/menu-svgrepo-com.svg'

const {width, height} = Dimensions.get("window")

const UpToolbar = () => {

    const navigation = useNavigation();

    const onHandleAddressIconOnPressed = () => {
        navigation.push('Address');
    }

    const onHandleMailIconOnPressed = () => {
        navigation.push('Mail');
    }

    const onHandleMenuIconOnPressed = () => {
        navigation.push('Information')
    }

    return(
      <View style={styles.main}>
         <TouchableOpacity style={styles.address} activeOpacity={0.5} onPress={() => onHandleAddressIconOnPressed()}>
            <AddressIcon width={30} height={30} />
            <Text
            style={styles.text_address}>
                129/49A Nguyễn Trãi
            </Text>
            <RightArrowIcon 
            width={10} 
            height={10} 
            style={styles.right_arrow_icon}
            />
         </TouchableOpacity>
         <TouchableOpacity style={styles.mail} activeOpacity={0.5} onPress={() => onHandleMailIconOnPressed()}>
            <MailIcon width={20} height={20} />
         </TouchableOpacity>
         <TouchableOpacity style={styles.information} activeOpacity={0.5} onPress={() => onHandleMenuIconOnPressed()}>
            <MenuIcon width={20} height={20}/>
         </TouchableOpacity>
         
      </View>
    )
};

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 5
    },
    address: {
        width: width - 100,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text_address: {
        fontWeight: 'bold',
        fontSize: 17
    },
    mail: {
        flexGrow: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    information: {
        flexGrow: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    right_arrow_icon: {
        marginHorizontal: 5,
        color: '#000000'
    }

});

export default UpToolbar