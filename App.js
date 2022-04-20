import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font'
import ContextProvider from './Context/state'
import RootNav from './AppNav/index';

export default App = () => {

  const [load, setLoad] = useState(false)

  useEffect(async () => {
    initApp()
  }, [])

  const initApp = async () => {
    await loadFont();
    setTimeout(() => {
      setLoad(true)
    }, 1000)
  }


  const loadFont = async () => {
    await Font.loadAsync({
      'promptFont': require('./assets/fonts/Prompt-Regular.ttf'),
    })
    await Font.loadAsync({
      'promptFontBold': require('./assets/fonts/Prompt-SemiBold.ttf'),
    })
  }

  return (
    <>
      {
        load ?
          <ContextProvider>
            <RootNav />
          </ContextProvider >
          :
          <View style={styles.container} />
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
