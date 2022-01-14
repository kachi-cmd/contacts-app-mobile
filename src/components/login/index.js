import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, } from 'react-native';
import Container from '../../components/common/container';
import CustomButton from '../../components/common/customButton';
import Input from '../../components/common/inputs';
import { REGISTER } from '../../constants/routeNames';
import styles from './styles';

const LogInComponent = ({onChange, onSubmit, form, error})=>{
    // const [isLoading, setIsLoading] = React.useState(true);
    
    const {navigate} = useNavigation()

    return (
        <Container>
            <Image 
                source={require('../../assets/images/logo.png')}
                style={styles.logoImage} 
            />

            <View>
                <Text style={styles.title}>Welcome To K-Contaxts</Text>
                <Text  style={styles.subTitle}>Please login here</Text> 
                
                    <View>
                        <Input
                            label="Username"
                            onChangeText={(value)=>onChange({name:'userName', value})}
                            error={error.userName}
                            placeholder='Enter Username'
                        />

                        <Input
                            label="Password"
                            onChangeText={(value)=>onChange({name:'password',value})}
                            error={error.password}
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
                        // loading={isLoading}
                        // disabled={false}
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText}>Need a new account?</Text>
                        <TouchableOpacity onPress={()=>navigate(REGISTER)}>
                        <Text style={styles.linkButton}>Click here to register</Text>
                        </TouchableOpacity>
                    </View>
                    
            </View>
           
        </Container>
    )
}

export default LogInComponent