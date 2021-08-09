import { ITranslations, ITranslationsLocal } from '../types/tour-commentary.types'
import translations from './translations.json';

const truncate = (word: string, length: number): string => {
  if (word.length > length) {
    return word.substr(0, length) + "..."
  }
  return word
}

const translate = (phrase: keyof ITranslations, local: keyof ITranslationsLocal): string => {
  const translationOptions = translations as ITranslations;
  const translation: string = translationOptions[phrase][local];
  const englishVersion: string = translationOptions[phrase]["en"];
  return translation ? translation : englishVersion
}

export {
  truncate,
  translate
}