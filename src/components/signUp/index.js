import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';
import Container from '../common/container';
import CustomButton from '../common/customButton';
import Input from '../common/inputs';
import { LOGIN } from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = ({onChange, onSubmit, form, errors, loading, error})=>{

    const {navigate} = useNavigation()

    return (
        <Container>
            <Image 
                source={require('../../assets/images/logo.png')}
                style={styles.logoImage} 
            />

            <View>
                <Text style={styles.title}>Welcome To K-Contaxts</Text>
                <Text  style={styles.subTitle}>Create a free account</Text> 
                
                    <View>
                        {error &&<Text>{errors.error}</Text>}
                    <Input
                            label="User Name"
                            onChangeText={(value)=>onChange({name:'userName', value})}
                            errors={errors.userName || error?.username?.[0]}
                            // errors="This field is required"
                            placeholder='Enter First Name'
                        />
                        <Input
                            label="First Name"
                            onChangeText={(value)=>onChange({name:'firstName', value})}
                            errors={errors.firstName || error?.first_name?.[0]}
                            // errors="This field is required"
                            placeholder='Enter First Name'
                        />
                        <Input
                            label="Last Name"
                            onChangeText={(value)=>onChange({name:'lastName', value})}
                            errors={errors.lastName || error?.last_name?.[0]}
                            // errors="This field is required"
                            placeholder='Enter Last Name'
                        />
                        <Input
                            label="Email"
                            onChangeText={(value)=>onChange({name:'email', value})}
                            errors={errors.email || error?.email?.[0]}
                            // errors="This field is required"
                            placeholder='Enter Email'
                        />

                        <Input
                            label="Password"
                            onChangeText={(value)=>onChange({name:'password', value})}
                            errors={errors.password || error?.password?.[0]}
                            icon={<Text>Show</Text>}
                            iconPosition="right"
                            placeholder='Enter Password'
                            secureTextEntry={true}
                        />
                    </View>
                
                    <CustomButton 
                        secondary
                        title="Submit"
                        onPress={onSubmit}
                        loading={loading}
                        disabled={loading}
                    />

                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Already have an account?</Text>
                        <TouchableOpacity onPress={()=>navigate(LOGIN)}>
                        <Text style={styles.linkButton}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    
            </View>
           
        </Container>
    )
}

export default RegisterComponent