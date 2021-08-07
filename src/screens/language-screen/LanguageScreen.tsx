import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Alert,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LanguageScreen.styles'
import Logo from '../../assets/EXA.png';
import { client } from '../../pokko/pokko-config'
import { Language, useLanguagesQuery } from '../../pokko/query';
import colors from '../../constants/colors';
import LanguageOption from '../../components/language-option/LanguageOption';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../../state/general.state';

const LanguageScreen = () => {
  const dispatch = useDispatch()
  const { loading, data } = useLanguagesQuery({ client });
  const languages = data?.entries?.allLanguage?.nodes as Language[]
  const LanguageLogic = (selectedLanguage?: string) => {
    try {
      // https://www.venea.net/web/culture_code
      const availableLocales = languages.map(l => l.localisation);
      const languageToUse = selectedLanguage ? selectedLanguage : Localization.locale.split("-")[0];
      if (!availableLocales.includes(languageToUse)) {
        throw new Error("Language not available, please choose one from the list");
      }
      dispatch(setLanguage(languageToUse))
      AsyncStorage.setItem('Language', languageToUse);
    } catch (error: any) {
      Alert.alert('Language Error', error.message, [
        { text: "OK" }
      ])
    }
  }

  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View>
        <View style={styles.plButton}>
          <TouchableComponent onPress={() => LanguageLogic()} >
            <Text style={styles.plButtonText}>
              Use Phone Language
          </Text>
          </TouchableComponent>
        </View>
        <Text style={styles.plBelowText}>
          or select from below
        </Text>
      </View>
      {
        loading ?
          <ActivityIndicator size="large" color={colors.purple} />
          :
          <FlatList style={{ width: '90%', height: '60%' }} data={languages} numColumns={2} renderItem={(itemData: ListRenderItemInfo<Language>) => (
            <LanguageOption onPress={() => LanguageLogic(itemData.item.localisation)} language={itemData.item.name} imageUri={itemData.item.flagImage?.url!} />
          )} />
      }
    </View>
  )
}

export default LanguageScreen
