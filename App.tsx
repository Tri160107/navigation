import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppRootScreen from './src/app-root-screen/AppRootScreen';
import Toast from 'react-native-toast-message';
import { getDataObject } from './helper/mystorage';
import { AppProvider } from './Appcontext';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => { 
  return (
    <>
 
      <AppProvider>
      <AppRootScreen></AppRootScreen>
      <Toast/>
      </AppProvider>
    
      </>
  );
}

export default App;

const styles = StyleSheet.create({
});
