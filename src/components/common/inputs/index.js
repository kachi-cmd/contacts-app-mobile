import React from 'react';
import { Text,View,TextInput } from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

const Input = ({
    onChangeText,
    value,
    iconPosition,
    icon, 
    label, 
    style,
    error,
    ...props
      })=>{

    const [focused, setFocus] = React.useState(false)  

    const getFlexDirection = ()=>{
        if( icon && iconPosition){
            if(iconPosition === 'left') {
               return 'row'
            }else if(iconPosition === 'right') {
               return 'row-reverse'
        }
    }
   }

   const getBoarderColor = ()=>{
    if(error){
        return colors.danger
    } 
    if(focused){
         return colors.primary
     }else {
           return colors.grey
       }
   }


    return(
    <View style={styles.inputContainer}>

        {label && <Text>{label}</Text>}

        <View style={[styles.wrapper,
                     {alignItems: icon? 'center' : 'baseline'},
                     {borderColor: getBoarderColor(),flexDirection: getFlexDirection()}]}>
            <View>{icon && icon}</View>

            <TextInput
                style={[styles.textInput,style]}
                onChangeText={onChangeText}
                value={value}
                onFocus={()=>setFocus(true)}
                onBlur={()=>setFocus(false)}
                {...props}
      />
        </View>
       
       {error && <Text style={styles.error}>{error}</Text>}

    </View>
   
   )
}

export default Input