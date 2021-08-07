import { AnyAction, Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IGeneralState {
  language: string | null
}

const initialState: IGeneralState = {
  language: null
}

enum GeneralActions {
  SET_LANGUAGE = 'SET_LANGUAGE'
}

export const setLanguage = (language: string | null): AnyAction => ({ type: GeneralActions.SET_LANGUAGE, data: language });

export const getInitialLanguage = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    const language = AsyncStorage.getItem('Language')
      .then(language => {
        if (language) {
          dispatch(setLanguage(language))
        }
      })
  }
}

const generalReducer = (state = initialState, action: AnyAction): IGeneralState => {
  const { type, data } = action
  switch (type) {
    case GeneralActions.SET_LANGUAGE:
      return {
        ...state,
        language: data
      }
    default:
      return state
  }
}

export default generalReducer;