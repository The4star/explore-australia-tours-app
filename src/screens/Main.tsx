import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { useSelector } from 'react-redux';
import MainNavigator from '../navigation/MainNavigation';
import LanguageNavigator from '../navigation/stack-navigators/LanguageNavigator';
import { ICombinedStates } from '../state/store';

const Main = () => {
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)

  if (language) {
    return (
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LanguageNavigator />
      </NavigationContainer>
    )
  }
}

export default Main
