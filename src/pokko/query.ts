import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AboutPage = PokEntry & IAboutPage & {
  __typename?: 'AboutPage';
  id: Scalars['String'];
  pokko: Pokko;
  contentTranslations: Array<Maybe<GeneralTranslation>>;
  heroImage: PokMedia;
  content: PokRichText;
  promoVideoLink?: Maybe<Scalars['String']>;
  brochureLink?: Maybe<Scalars['String']>;
};

export type AboutPageCollection = {
  __typename?: 'AboutPageCollection';
  nodes: Array<Maybe<IAboutPage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AboutPageCondition = {
  content?: Maybe<Scalars['String']>;
  promoVideoLink?: Maybe<Scalars['String']>;
  brochureLink?: Maybe<Scalars['String']>;
};

export type AboutPageFilter = {
  promoVideoLink?: Maybe<ScalarStringFilter>;
  brochureLink?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<AboutPageFilter>>;
  or?: Maybe<Array<AboutPageFilter>>;
};

export enum AboutPageOrderBy {
  BrochureLinkAsc = 'BROCHURE_LINK_ASC',
  BrochureLinkDesc = 'BROCHURE_LINK_DESC',
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  PromoVideoLinkAsc = 'PROMO_VIDEO_LINK_ASC',
  PromoVideoLinkDesc = 'PROMO_VIDEO_LINK_DESC'
}

export type ChapterContent = PokValue & IChapterContent & {
  __typename?: 'ChapterContent';
  id: Scalars['String'];
  language: Language;
  audioFile?: Maybe<PokMedia>;
  text?: Maybe<PokRichText>;
};

export type ChapterContentCollection = {
  __typename?: 'ChapterContentCollection';
  nodes: Array<Maybe<IChapterContent>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ChapterContentCondition = {
  language?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ChapterContentFilter = {
  language?: Maybe<ScalarIdFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<ChapterContentFilter>>;
  or?: Maybe<Array<ChapterContentFilter>>;
};

export enum ChapterContentOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TextAsc = 'TEXT_ASC',
  TextDesc = 'TEXT_DESC'
}

export type Entries = {
  __typename?: 'Entries';
  tourChapter?: Maybe<TourChapter>;
  chapterContent?: Maybe<ChapterContent>;
  titleTranslation?: Maybe<TitleTranslation>;
  tour?: Maybe<Tour>;
  generalTranslation?: Maybe<GeneralTranslation>;
  language?: Maybe<Language>;
  aboutPage?: Maybe<AboutPage>;
  allTourChapter?: Maybe<TourChapterCollection>;
  allChapterContent?: Maybe<ChapterContentCollection>;
  allTitleTranslation?: Maybe<TitleTranslationCollection>;
  allTour?: Maybe<TourCollection>;
  allGeneralTranslation?: Maybe<GeneralTranslationCollection>;
  allLanguage?: Maybe<LanguageCollection>;
  allAboutPage?: Maybe<AboutPageCollection>;
};


export type EntriesTourChapterArgs = {
  id: Scalars['String'];
};


export type EntriesChapterContentArgs = {
  id: Scalars['String'];
};


export type EntriesTitleTranslationArgs = {
  id: Scalars['String'];
};


export type EntriesTourArgs = {
  id: Scalars['String'];
};


export type EntriesGeneralTranslationArgs = {
  id: Scalars['String'];
};


export type EntriesLanguageArgs = {
  id: Scalars['String'];
};


export type EntriesAboutPageArgs = {
  id: Scalars['String'];
};


export type EntriesAllTourChapterArgs = {
  filter?: Maybe<TourChapterFilter>;
  orderBy?: Maybe<Array<Maybe<TourChapterOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  inherit?: Scalars['Boolean'];
};


export type EntriesAllChapterContentArgs = {
  filter?: Maybe<ChapterContentFilter>;
  orderBy?: Maybe<Array<Maybe<ChapterContentOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  inherit?: Scalars['Boolean'];
};


export type EntriesAllTitleTranslationArgs = {
  filter?: Maybe<TitleTranslationFilter>;
  orderBy?: Maybe<Array<Maybe<TitleTranslationOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  inherit?: Scalars['Boolean'];
};


export type EntriesAllTourArgs = {
  filter?: Maybe<TourFilter>;
  orderBy?: Maybe<Array<Maybe<TourOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  inherit?: Scalars['Boolean'];
};


export type EntriesAllGeneralTranslationArgs = {
  filter?: Maybe<GeneralTranslationFilter>;
  orderBy?: Maybe<Array<Maybe<GeneralTranslationOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  inherit?: Scalars['Boolean'];
};


export type EntriesAllLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
  orderBy?: Maybe<Array<Maybe<LanguageOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  inherit?: Scalars['Boolean'];
};


export type EntriesAllAboutPageArgs = {
  filter?: Maybe<AboutPageFilter>;
  orderBy?: Maybe<Array<Maybe<AboutPageOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  inherit?: Scalars['Boolean'];
};

export type GeneralTranslation = PokValue & IGeneralTranslation & {
  __typename?: 'GeneralTranslation';
  id: Scalars['String'];
  language?: Maybe<Language>;
  content: PokRichText;
};

export type GeneralTranslationCollection = {
  __typename?: 'GeneralTranslationCollection';
  nodes: Array<Maybe<IGeneralTranslation>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type GeneralTranslationCondition = {
  language?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type GeneralTranslationFilter = {
  language?: Maybe<ScalarIdFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<GeneralTranslationFilter>>;
  or?: Maybe<Array<GeneralTranslationFilter>>;
};

export enum GeneralTranslationOrderBy {
  ContentAsc = 'CONTENT_ASC',
  ContentDesc = 'CONTENT_DESC',
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC'
}

export type IAboutPage = {
  id: Scalars['String'];
  pokko: Pokko;
  contentTranslations: Array<Maybe<GeneralTranslation>>;
  heroImage: PokMedia;
  content: PokRichText;
  promoVideoLink?: Maybe<Scalars['String']>;
  brochureLink?: Maybe<Scalars['String']>;
};

export type IChapterContent = {
  id: Scalars['String'];
  language: Language;
  audioFile?: Maybe<PokMedia>;
  text?: Maybe<PokRichText>;
};

export type IGeneralTranslation = {
  id: Scalars['String'];
  language?: Maybe<Language>;
  content: PokRichText;
};

export type ILanguage = {
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  localisation: Scalars['String'];
  flagImage?: Maybe<PokMedia>;
};

export type ITitleTranslation = {
  id: Scalars['String'];
  language: Language;
  titleTranslation: Scalars['String'];
};

export type ITour = {
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  titleTranslations: Array<Maybe<TitleTranslation>>;
  heroImage: PokMedia;
  chapters: Array<Maybe<TourChapter>>;
};

export type ITourChapter = {
  id: Scalars['String'];
  titleTranslations?: Maybe<Array<Maybe<TitleTranslation>>>;
  name: Scalars['String'];
  heroImage: PokMedia;
  content: Array<Maybe<ChapterContent>>;
};


export type Language = PokEntry & ILanguage & {
  __typename?: 'Language';
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  localisation: Scalars['String'];
  flagImage?: Maybe<PokMedia>;
};

export type LanguageCollection = {
  __typename?: 'LanguageCollection';
  nodes: Array<Maybe<ILanguage>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LanguageCondition = {
  name?: Maybe<Scalars['String']>;
  localisation?: Maybe<Scalars['String']>;
};

export type LanguageFilter = {
  name?: Maybe<ScalarStringFilter>;
  localisation?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<LanguageFilter>>;
  or?: Maybe<Array<LanguageFilter>>;
};

export enum LanguageOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  LocalisationAsc = 'LOCALISATION_ASC',
  LocalisationDesc = 'LOCALISATION_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type Page = {
  __typename?: 'Page';
  fullPath?: Maybe<Array<Maybe<Scalars['String']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  entry?: Maybe<PokEntry>;
  type?: Maybe<Scalars['String']>;
  entryId?: Maybe<Scalars['String']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  nodes: Array<Maybe<Page>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPrevPage: Scalars['Boolean'];
};

export type PagesCondition = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathExact?: Maybe<Scalars['Boolean']>;
};

export type PokEntry = {
  id: Scalars['String'];
  pokko: Pokko;
};

export type PokMedia = {
  __typename?: 'PokMedia';
  id: Scalars['String'];
  contentType: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  size: Scalars['Int'];
  url: Scalars['String'];
};


export type PokMediaUrlArgs = {
  process?: Maybe<PokMediaProcess>;
};

export enum PokMediaFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum PokMediaPosition {
  Centre = 'CENTRE',
  Top = 'TOP',
  RightTop = 'RIGHT_TOP',
  Right = 'RIGHT',
  RightBottom = 'RIGHT_BOTTOM',
  Bottom = 'BOTTOM',
  LeftBottom = 'LEFT_BOTTOM',
  Left = 'LEFT',
  LeftTop = 'LEFT_TOP'
}

export type PokMediaProcess = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
  fit?: Maybe<PokMediaFit>;
  position?: Maybe<PokMediaPosition>;
};

export type PokRichText = {
  __typename?: 'PokRichText';
  body?: Maybe<Scalars['JSON']>;
  embeds?: Maybe<Array<Maybe<PokValue>>>;
};

export type PokValue = {
  id?: Maybe<Scalars['String']>;
};

export type Pokko = {
  __typename?: 'Pokko';
  id: Scalars['String'];
  model: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['String'];
  modified: Scalars['String'];
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  entries?: Maybe<Entries>;
  entry?: Maybe<PokEntry>;
  sync?: Maybe<SyncCollection>;
  taxonomy?: Maybe<PageCollection>;
};


export type QueryEntryArgs = {
  path?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['String']>;
};


export type QuerySyncArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<SyncCondition>;
};


export type QueryTaxonomyArgs = {
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
  filter?: Maybe<PagesCondition>;
};

export type ScalarIdFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ScalarStringFilter = {
  isNull?: Maybe<Scalars['Boolean']>;
  equalTo?: Maybe<Scalars['String']>;
  notEqualTo?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sync = {
  __typename?: 'Sync';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  modifiedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  payload?: Maybe<Scalars['JSON']>;
};

export type SyncCollection = {
  __typename?: 'SyncCollection';
  nodes: Array<Maybe<Sync>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type SyncCondition = {
  after?: Maybe<Scalars['String']>;
};

export type TitleTranslation = PokValue & ITitleTranslation & {
  __typename?: 'TitleTranslation';
  id: Scalars['String'];
  language: Language;
  titleTranslation: Scalars['String'];
};

export type TitleTranslationCollection = {
  __typename?: 'TitleTranslationCollection';
  nodes: Array<Maybe<ITitleTranslation>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TitleTranslationCondition = {
  language?: Maybe<Scalars['String']>;
  titleTranslation?: Maybe<Scalars['String']>;
};

export type TitleTranslationFilter = {
  language?: Maybe<ScalarIdFilter>;
  titleTranslation?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<TitleTranslationFilter>>;
  or?: Maybe<Array<TitleTranslationFilter>>;
};

export enum TitleTranslationOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  TitleTranslationAsc = 'TITLE_TRANSLATION_ASC',
  TitleTranslationDesc = 'TITLE_TRANSLATION_DESC'
}

export type Tour = PokEntry & ITour & {
  __typename?: 'Tour';
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  titleTranslations: Array<Maybe<TitleTranslation>>;
  heroImage: PokMedia;
  chapters: Array<Maybe<TourChapter>>;
};

export type TourChapter = PokValue & ITourChapter & {
  __typename?: 'TourChapter';
  id: Scalars['String'];
  titleTranslations?: Maybe<Array<Maybe<TitleTranslation>>>;
  name: Scalars['String'];
  heroImage: PokMedia;
  content: Array<Maybe<ChapterContent>>;
};

export type TourChapterCollection = {
  __typename?: 'TourChapterCollection';
  nodes: Array<Maybe<ITourChapter>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TourChapterCondition = {
  name?: Maybe<Scalars['String']>;
};

export type TourChapterFilter = {
  name?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<TourChapterFilter>>;
  or?: Maybe<Array<TourChapterFilter>>;
};

export enum TourChapterOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type TourCollection = {
  __typename?: 'TourCollection';
  nodes: Array<Maybe<ITour>>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TourCondition = {
  name?: Maybe<Scalars['String']>;
};

export type TourFilter = {
  name?: Maybe<ScalarStringFilter>;
  id?: Maybe<ScalarIdFilter>;
  and?: Maybe<Array<TourFilter>>;
  or?: Maybe<Array<TourFilter>>;
};

export enum TourOrderBy {
  CreatedAsc = 'CREATED_ASC',
  CreatedDesc = 'CREATED_DESC',
  ModifiedAsc = 'MODIFIED_ASC',
  ModifiedDesc = 'MODIFIED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = (
  { __typename?: 'Query' }
  & { entries?: Maybe<(
    { __typename?: 'Entries' }
    & { aboutPage?: Maybe<(
      { __typename?: 'AboutPage' }
      & Pick<AboutPage, 'id' | 'brochureLink' | 'promoVideoLink'>
      & { heroImage: (
        { __typename?: 'PokMedia' }
        & Pick<PokMedia, 'id' | 'url'>
      ), content: (
        { __typename?: 'PokRichText' }
        & Pick<PokRichText, 'body'>
      ), contentTranslations: Array<Maybe<(
        { __typename?: 'GeneralTranslation' }
        & Pick<GeneralTranslation, 'id'>
        & { language?: Maybe<(
          { __typename?: 'Language' }
          & Pick<Language, 'localisation'>
        )>, content: (
          { __typename?: 'PokRichText' }
          & Pick<PokRichText, 'body'>
        ) }
      )>> }
    )> }
  )> }
);

export type LanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type LanguagesQuery = (
  { __typename?: 'Query' }
  & { entries?: Maybe<(
    { __typename?: 'Entries' }
    & { allLanguage?: Maybe<(
      { __typename?: 'LanguageCollection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'Language' }
        & Pick<Language, 'id' | 'name' | 'localisation'>
        & { flagImage?: Maybe<(
          { __typename?: 'PokMedia' }
          & Pick<PokMedia, 'url'>
        )> }
      )>> }
    )> }
  )> }
);

export type TourContentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type TourContentQuery = (
  { __typename?: 'Query' }
  & { entry?: Maybe<{ __typename?: 'AboutPage' } | { __typename?: 'Language' } | (
    { __typename?: 'Tour' }
    & Pick<Tour, 'id' | 'name'>
    & { heroImage: (
      { __typename?: 'PokMedia' }
      & Pick<PokMedia, 'url'>
    ), chapters: Array<Maybe<(
      { __typename?: 'TourChapter' }
      & Pick<TourChapter, 'id' | 'name'>
      & { titleTranslations?: Maybe<Array<Maybe<(
        { __typename?: 'TitleTranslation' }
        & Pick<TitleTranslation, 'titleTranslation'>
        & { language: (
          { __typename?: 'Language' }
          & Pick<Language, 'localisation'>
        ) }
      )>>>, heroImage: (
        { __typename?: 'PokMedia' }
        & Pick<PokMedia, 'url'>
      ), content: Array<Maybe<(
        { __typename?: 'ChapterContent' }
        & Pick<ChapterContent, 'id'>
        & { language: (
          { __typename?: 'Language' }
          & Pick<Language, 'localisation'>
        ), text?: Maybe<(
          { __typename?: 'PokRichText' }
          & Pick<PokRichText, 'body'>
        )>, audioFile?: Maybe<(
          { __typename?: 'PokMedia' }
          & Pick<PokMedia, 'url'>
        )> }
      )>> }
    )>> }
  )> }
);

export type ToursListQueryVariables = Exact<{ [key: string]: never; }>;


export type ToursListQuery = (
  { __typename?: 'Query' }
  & { entries?: Maybe<(
    { __typename?: 'Entries' }
    & { allTour?: Maybe<(
      { __typename?: 'TourCollection' }
      & { nodes: Array<Maybe<(
        { __typename?: 'Tour' }
        & Pick<Tour, 'id' | 'name'>
        & { titleTranslations: Array<Maybe<(
          { __typename?: 'TitleTranslation' }
          & Pick<TitleTranslation, 'id' | 'titleTranslation'>
          & { language: (
            { __typename?: 'Language' }
            & Pick<Language, 'id' | 'localisation'>
          ) }
        )>>, heroImage: (
          { __typename?: 'PokMedia' }
          & Pick<PokMedia, 'url'>
        ) }
      )>> }
    )> }
  )> }
);


export const AboutPageDocument = gql`
    query AboutPage {
  entries {
    aboutPage(id: "895463b6-568b-49b4-ad61-e0b43516763a") {
      id
      heroImage {
        id
        url
      }
      content {
        body
      }
      contentTranslations {
        ... on GeneralTranslation {
          id
          language {
            localisation
          }
          content {
            body
          }
        }
      }
      brochureLink
      promoVideoLink
    }
  }
}
    `;

/**
 * __useAboutPageQuery__
 *
 * To run a query within a React component, call `useAboutPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useAboutPageQuery(baseOptions?: Apollo.QueryHookOptions<AboutPageQuery, AboutPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AboutPageQuery, AboutPageQueryVariables>(AboutPageDocument, options);
      }
export function useAboutPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AboutPageQuery, AboutPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AboutPageQuery, AboutPageQueryVariables>(AboutPageDocument, options);
        }
export type AboutPageQueryHookResult = ReturnType<typeof useAboutPageQuery>;
export type AboutPageLazyQueryHookResult = ReturnType<typeof useAboutPageLazyQuery>;
export type AboutPageQueryResult = Apollo.QueryResult<AboutPageQuery, AboutPageQueryVariables>;
export const LanguagesDocument = gql`
    query Languages {
  entries {
    allLanguage(skip: 0, take: 100) {
      nodes {
        id
        name
        localisation
        flagImage {
          url
        }
      }
    }
  }
}
    `;

/**
 * __useLanguagesQuery__
 *
 * To run a query within a React component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
      }
export function useLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
        }
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesLazyQueryHookResult = ReturnType<typeof useLanguagesLazyQuery>;
export type LanguagesQueryResult = Apollo.QueryResult<LanguagesQuery, LanguagesQueryVariables>;
export const TourContentDocument = gql`
    query TourContent($id: String!) {
  entry(id: $id) {
    ... on Tour {
      id
      name
      heroImage {
        url
      }
      chapters {
        ... on TourChapter {
          id
          name
          titleTranslations {
            language {
              localisation
            }
            titleTranslation
          }
          heroImage {
            url
          }
          content {
            ... on ChapterContent {
              id
              language {
                localisation
              }
              text {
                body
              }
              audioFile {
                url
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useTourContentQuery__
 *
 * To run a query within a React component, call `useTourContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useTourContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTourContentQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTourContentQuery(baseOptions: Apollo.QueryHookOptions<TourContentQuery, TourContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TourContentQuery, TourContentQueryVariables>(TourContentDocument, options);
      }
export function useTourContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TourContentQuery, TourContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TourContentQuery, TourContentQueryVariables>(TourContentDocument, options);
        }
export type TourContentQueryHookResult = ReturnType<typeof useTourContentQuery>;
export type TourContentLazyQueryHookResult = ReturnType<typeof useTourContentLazyQuery>;
export type TourContentQueryResult = Apollo.QueryResult<TourContentQuery, TourContentQueryVariables>;
export const ToursListDocument = gql`
    query ToursList {
  entries {
    allTour(skip: 0, take: 100) {
      nodes {
        id
        name
        titleTranslations {
          id
          language {
            id
            localisation
          }
          titleTranslation
        }
        heroImage {
          url
        }
      }
    }
  }
}
    `;

/**
 * __useToursListQuery__
 *
 * To run a query within a React component, call `useToursListQuery` and pass it any options that fit your needs.
 * When your component renders, `useToursListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useToursListQuery({
 *   variables: {
 *   },
 * });
 */
export function useToursListQuery(baseOptions?: Apollo.QueryHookOptions<ToursListQuery, ToursListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ToursListQuery, ToursListQueryVariables>(ToursListDocument, options);
      }
export function useToursListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ToursListQuery, ToursListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ToursListQuery, ToursListQueryVariables>(ToursListDocument, options);
        }
export type ToursListQueryHookResult = ReturnType<typeof useToursListQuery>;
export type ToursListLazyQueryHookResult = ReturnType<typeof useToursListLazyQuery>;
export type ToursListQueryResult = Apollo.QueryResult<ToursListQuery, ToursListQueryVariables>;