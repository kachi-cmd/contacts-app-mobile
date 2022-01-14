import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { LOGIN, REGISTER } from '../constants/routeNames';
import LogIn from '../screens/login';
import SignUp from '../screens/register';


const AuthNavigator = ()=>{
  const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator screenOptions={{headerShown:false}}>

          <AuthStack.Screen name={LOGIN} component= {LogIn} /> 
          <AuthStack.Screen name={REGISTER} component= {SignUp} />


        </AuthStack.Navigator>
    )
}

export default AuthNavigator;