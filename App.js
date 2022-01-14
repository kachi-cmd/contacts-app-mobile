
//import 'react-native-gesture-handler';
import React from 'react';
import GlobalProvider from './src/context/provider';
import AppNavContainer from './src/navigation/index';


const App = () => {
 
  return (

    <GlobalProvider>

      <AppNavContainer /> 
      
    </GlobalProvider>
  );
};


export default App;
