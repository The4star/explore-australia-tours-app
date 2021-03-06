import { AnyAction, Dispatch } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IChapterReadyContent } from '../types/tour-commentary.types';

export type ICommentaryStyle = 'read' | 'listen'
export interface IGeneralState {
  language: string | null;
  commentaryStyle: ICommentaryStyle;
  commentaryContent: IChapterReadyContent
}

const initialState: IGeneralState = {
  language: null,
  commentaryStyle: 'read',
  commentaryContent: {
    text: null,
    audioUrl: null,
    heroImage: null
  }
}

enum GeneralActions {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_COMMENTARY_STYLE = 'SET_COMMENTARY_STYLE',
  SET_COMMENTARY_CONTENT = 'SET_COMMENTARY_CONTENT'
}

export const setLanguage = (language: string | null): AnyAction => ({ type: GeneralActions.SET_LANGUAGE, data: language });
export const setCommentaryStyle = (commentaryStyle: string): AnyAction => ({ type: GeneralActions.SET_COMMENTARY_STYLE, data: commentaryStyle });
export const setCommentaryContent = (commentaryContent: IChapterReadyContent): AnyAction => ({ type: GeneralActions.SET_COMMENTARY_CONTENT, data: commentaryContent })
export const getInitialLanguage = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    const language = await AsyncStorage.getItem('Language')
    if (language) {
      dispatch(setLanguage(language))
    }
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
    case GeneralActions.SET_COMMENTARY_STYLE:
      return {
        ...state,
        commentaryStyle: data
      }
    case GeneralActions.SET_COMMENTARY_CONTENT:
      return {
        ...state,
        commentaryContent: data
      }
    default:
      return state
  }
}

export default generalReducer;