import React from 'react';
import { Text,View,TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

const CustomButton = ({
    title,
    loading,
    disabled,
    primary,
    secondary, 
    danger,
    onPress
      })=>{

   const getByColor = ()=>{
    if(disabled){
        return colors.grey
    }
     if(primary){
         return colors.primary
     }  
     if(danger){
           return colors.danger
       }
    if(secondary) {
           return colors.secondary
       }
   }

    return(
    <TouchableOpacity 
    disabled={disabled} 
    onPress={onPress}
    style={[styles.wrapper,{backgroundColor:getByColor()}]}>
        <View style={[styles.loaderSection]}>
            {loading && <ActivityIndicator color={colors.primary} />}
            {title && <Text style={{color: disabled? 'black' : colors.white, padding: loading? 5:0 }}>{title}</Text>}
        </View>
    </TouchableOpacity>
   )
}

export default CustomButton