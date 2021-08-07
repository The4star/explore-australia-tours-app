export type LanguageStackParamList = {
  LanguageSelection: undefined;
}

export type TourCommentaryStackParamList = {
  TourSelection: undefined;
  ChapterSelection: IChapterSelectionParams;
  TourCommentary: undefined;
}

export type IChapterSelectionParams = {
  tourId: string,
  tourName: string
}

export type AboutStackParamList = {
  About: undefined
}

export type MainNavigationParamList = {
  TourCommentary: TourCommentaryStackParamList
  About: AboutStackParamList
}