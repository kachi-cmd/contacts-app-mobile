import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';
import Contacts from '../screens/contacts';
import ContactDetails from '../screens/contact details';
import CreateContact from '../screens/create contacts';
import Settings from '../screens/settings';


const HomeNavigator = ()=>{
  const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>

          <HomeStack.Screen name={CONTACT_LIST} component= {Contacts} /> 
          <HomeStack.Screen name={CONTACT_DETAILS} component= {ContactDetails} /> 
          <HomeStack.Screen name={CREATE_CONTACT} component= {CreateContact} /> 
          <HomeStack.Screen name={SETTINGS} component= {Settings} />
           
        </HomeStack.Navigator>
    )
}

export default HomeNavigator;