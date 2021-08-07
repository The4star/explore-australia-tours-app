export type LanguageStackParamList = {
  LanguageSelection: undefined;
}

export type TourCommentaryStackParamList = {
  TourSelection: undefined;
  ChapterSelection: IChapterSelectionParams;
  TourCommentary: ITourCommentaryParams;
}

export type IChapterSelectionParams = {
  tourId: string,
  tourName: string
}

export type ITourCommentaryParams = {
  chapterName: string
}

export type AboutStackParamList = {
  About: undefined
}

export type MainNavigationParamList = {
  TourCommentary: TourCommentaryStackParamList
  About: AboutStackParamList
}