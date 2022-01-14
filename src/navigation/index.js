import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AuthNavigator from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import { GlobalContext } from '../context/provider';

const AppNavContainer = ()=>{
 
const {authState:{isLoggedIn}} = useContext(GlobalContext)
console.log('state-->', isLoggedIn)

    return (
        <NavigationContainer>
          { isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default AppNavContainer;