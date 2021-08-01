export type TourCommentaryStackParamList = {
  LanguageSelection: undefined;
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