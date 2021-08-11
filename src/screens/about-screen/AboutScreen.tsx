import React, { useState } from 'react'
import { View, Text, ActivityIndicator, Image, ScrollView, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import * as Linking from 'expo-linking';
import colors from '../../constants/colors';
import { parsePokkoContent } from '../../helpers/pokko';
import { client } from '../../pokko/pokko-config'
import { useAboutPageQuery } from '../../pokko/query';
import { IPokkoContent } from '../../types/tour-commentary.types';
import styles from './AboutScreen.styles';
import { useSelector } from 'react-redux';
import { ICombinedStates } from '../../state/store';
import { translate } from '../../helpers/general';

const AboutScreen = () => {
  const { loading, data } = useAboutPageQuery({ client });
  const [loadingImage, setLoadingImage] = useState<boolean>(false);
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)
  const heroImage = data?.entries?.aboutPage?.heroImage.url;
  const brochureLink = data?.entries?.aboutPage?.brochureLink as string;
  const promoVideoLink = data?.entries?.aboutPage?.promoVideoLink as string;

  const getContent = () => {
    const defaultContent = data?.entries?.aboutPage?.content.body as IPokkoContent[];
    if (language === 'en') {
      return defaultContent
    } else {
      const translatedContent = data?.entries?.aboutPage?.contentTranslations.find(translation => translation?.language?.localisation === language)?.content.body;
      return translatedContent ? translatedContent : defaultContent
    }
  }

  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  if (loading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={colors.purple} />
      </View>
    )
  }

  return (
    <View style={styles.screen} >
      <View style={styles.imageContainer}>
        {
          loadingImage ?
            <ActivityIndicator size="small" color={colors.purple} />
            : null
        }
        < Image
          style={{ ...styles.image, ...loadingImage ? { height: 0 } : { height: '100%' } }}
          source={{ uri: heroImage }}
          onLoadStart={() => setLoadingImage(true)}
          onLoadEnd={() => setLoadingImage(false)}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        {parsePokkoContent(getContent() as IPokkoContent[])}
      </ScrollView>
      <View style={styles.plButton}>
        <TouchableComponent onPress={() => Linking.openURL(brochureLink)} >
          <Text style={styles.plButtonText}>
            {translate('viewBrochure', language!)}
          </Text>
        </TouchableComponent>
      </View>
      <View style={styles.plButton}>
        <TouchableComponent onPress={() => Linking.openURL(promoVideoLink)} >
          <Text style={styles.plButtonText}>
            {translate('viewVideo', language!)}
          </Text>
        </TouchableComponent>
      </View>
    </View>
  )
}

export default AboutScreen
