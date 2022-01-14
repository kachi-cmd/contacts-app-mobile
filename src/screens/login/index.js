import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Container from '../../components/common/container';
import LogInComponent from '../../components/login';

const LogIn = ()=>{
    const [form, setForm] = React.useState({});
    const [error, setError] = React.useState({})

    const onChange = ({name, value})=>{
        setForm({...form, [name]:value})

        if(value !==''){
            setError((prev)=>{
                return{...prev, [name]:null}
            })
        }else{
            setError((prev)=>{
                return{...prev, [name]:'This field is required'}
            })
        }
    }


    const onSubmit = ()=>{
            if(!form.userName){
                setError((prev)=>{
                    return {...prev, userName:'Username is required'}
                })
                }
            if(!form.password){
                setError((prev)=>{
                    return {...prev, password:'password is required'}
                })
                }
             
        }
        

    return (
        <Container>
           <LogInComponent 
             onChange={onChange}
             onSubmit={onSubmit}
             form={form} 
             error={error}
           />
        </Container>
    )
}

export default LogIn