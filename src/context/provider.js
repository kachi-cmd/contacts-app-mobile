import React, {createContext, useReducer} from 'react'
import authInitialState from './inicialState/authState'
import contactsInitialState from './inicialState/contactsInitialState'
import authReducer from './reducers/authReducer'
import contactsReducer from './reducers/contactsReducer'

export const GlobalContext = createContext({})

const GlobalProvider = ({children})=>{

   const [authState, authDispatch] = useReducer(authReducer, authInitialState)
   const [contactsState, contactsDispatch] = useReducer(contactsReducer, contactsInitialState)

  return (
      <GlobalContext.Provider value={{authDispatch, authState, contactsDispatch, contactsState}}>{children}</GlobalContext.Provider>
  )
}

export default GlobalProvider; 