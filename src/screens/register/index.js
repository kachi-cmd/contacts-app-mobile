import React from 'react';
import Container from '../../components/common/container';
import RegisterComponent from '../../components/signUp';
import envs from '../../config/env'
import register from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/provider';
import axiosInstanace from '../../helpers/axiosintercepter';

  const SignUp = ()=>{
    const [form, setForm] = React.useState({});
    const [errors, setErrors] = React.useState({})
    const {authDispatch, authState:{error, loading, data} }= React.useContext(GlobalContext)
    
    // React.useEffect(()=>{
    //   axiosInstanace.get('/contacts').catch((err)=>{console.log('err', err.response)})
    // }, [])

    console.log('form...', form)

    const onChange = ({name, value})=>{
        setForm({...form, [name]:value})

        if (value !==''){
          if(name === 'password'){
            if(value.length < 6){
                setErrors((prev)=>{
                  return {...prev, [name]:'this field requires 6 characters'}
                  }) 
             }else{
                setErrors((prev)=>{
                  return {...prev, [name]:null}
                  })
              }
          }else{
            setErrors((prev)=>{
              return {...prev, [name]:null}
           })
          }
        }else {
          setErrors((prev)=>{
            return {...prev, [name]:'this field is required'}
         }) 
        }
    }

    const onSubmit = ()=>{
      // validations 
      if (!form.userName){
        setErrors((prev)=>{
           return {...prev, userName:'please add a user name'}
        })
      }
      if (!form.firstName){
        setErrors((prev)=>{
           return {...prev, firstName:'please add a first name'}
        })
      }
      if (!form.lastName){
        setErrors((prev)=>{
           return {...prev, lastName:'please add a last name'}
        })
      }
      if (!form.email){
        setErrors((prev)=>{
           return {...prev, email:'please add an email'}
        })
      }
      if (!form.password){
        setErrors((prev)=>{
           return {...prev, password:'please add a password'}
        })
      }
      if(
        Object.values(form).length === 5 &&
        Object.values(form).every((item)=>item.trim().length > 0) &&
        Object.values(errors).every((item)=>!item)
      ) {
           register(form)(authDispatch)
      }

    }
    

    return (
        <Container>
          <RegisterComponent 
              onChange={onChange}
              onSubmit={onSubmit}
              form={form}
              errors={errors}
              error={error}
              loading={loading}
          />
        </Container>   
     )
}

export default SignUp