import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import stateStore from './src/state/store';
import Main from './src/screens/Main';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./src/assets/fonts/OpenSans-Bold.ttf')
  })
}

const App = () => {
  const [fontLoaded, setFontLoaded] = useState<boolean>(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={() => fetchFonts()}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }
  return (
    <Provider store={stateStore}>
      <Main />
    </Provider>
  );
}

export default App;