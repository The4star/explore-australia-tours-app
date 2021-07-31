import React from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo
} from 'react-native';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './LanguageScreen.styles'
import Logo from '../../assets/EXA.png';
import { client } from '../../pokko/pokko-config'
import { Language, useLanguagesQuery } from '../../pokko/query';
import colors from '../../constants/colors';
import LanguageOption from '../../components/language-option/LanguageOption';

const LanguageScreen = () => {
  const { loading, data } = useLanguagesQuery({ client });
  const languages = data?.entries?.allLanguage?.nodes as Language[]
  console.log(languages);

  const setLanguage = (selectedLanguage?: string) => {
    try {
      // https://www.venea.net/web/culture_code
      const languageToUse = selectedLanguage ? selectedLanguage : Localization.locale.split("-")[0];
      console.log(languageToUse);
      AsyncStorage.setItem('Language', languageToUse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View>
        <TouchableOpacity onPress={() => setLanguage()} style={styles.plButton}>
          <Text style={styles.plButtonText}>
            Use Phone Language
          </Text>
        </TouchableOpacity>
        <Text style={styles.plBelowText}>
          or select from below
        </Text>
      </View>
      {
        loading ?
          <ActivityIndicator size="large" color={colors.purple} />
          :
          <FlatList style={{ width: '90%', height: '60%' }} data={languages} numColumns={2} renderItem={(itemData: ListRenderItemInfo<Language>) => (
            <LanguageOption onPress={() => setLanguage(itemData.item.localisation)} language={itemData.item.name} imageUri={itemData.item.flagImage?.url!} />
          )} />
      }
    </View>
  )
}

export default LanguageScreen
