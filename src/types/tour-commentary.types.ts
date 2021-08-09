export interface IChapterReadyContent {
  text: IPokkoContent[];
  audioUrl: string | null
  heroImage: string | null
}

export interface IPokkoContent {
  children: IPokkoContentChild[];
  type: string;
}

export interface IPokkoContentChild {
  text: string;
  bold?: boolean;
}

export interface ITranslations {
  [key: string]: ITranslationsLocal
}

export interface ITranslationsLocal {
  [key: string]: string
}