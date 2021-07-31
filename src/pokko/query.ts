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

export type AboutPage = PokEntry & PokValue & IAboutPage & {
  __typename?: 'AboutPage';
  id: Scalars['String'];
  pokko: Pokko;
  heroImage: PokMedia;
  content: PokRichText;
  promoVideoLink?: Maybe<Scalars['String']>;
  brochureLink?: Maybe<Scalars['String']>;
};

export type AboutPageCollection = {
  __typename?: 'AboutPageCollection';
  nodes: Array<Maybe<AboutPage>>;
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

export type ChapterContent = PokEntry & PokValue & IChapterContent & {
  __typename?: 'ChapterContent';
  id: Scalars['String'];
  pokko: Pokko;
  language: Language;
  audioFile?: Maybe<PokMedia>;
  text?: Maybe<PokRichText>;
};

export type ChapterContentCollection = {
  __typename?: 'ChapterContentCollection';
  nodes: Array<Maybe<ChapterContent>>;
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
  tour?: Maybe<Tour>;
  language?: Maybe<Language>;
  aboutPage?: Maybe<AboutPage>;
  allTourChapter?: Maybe<TourChapterCollection>;
  allChapterContent?: Maybe<ChapterContentCollection>;
  allTour?: Maybe<TourCollection>;
  allLanguage?: Maybe<LanguageCollection>;
  allAboutPage?: Maybe<AboutPageCollection>;
};


export type EntriesTourChapterArgs = {
  id: Scalars['String'];
};


export type EntriesChapterContentArgs = {
  id: Scalars['String'];
};


export type EntriesTourArgs = {
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
};


export type EntriesAllChapterContentArgs = {
  filter?: Maybe<ChapterContentFilter>;
  orderBy?: Maybe<Array<Maybe<ChapterContentOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllTourArgs = {
  filter?: Maybe<TourFilter>;
  orderBy?: Maybe<Array<Maybe<TourOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
  orderBy?: Maybe<Array<Maybe<LanguageOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};


export type EntriesAllAboutPageArgs = {
  filter?: Maybe<AboutPageFilter>;
  orderBy?: Maybe<Array<Maybe<AboutPageOrderBy>>>;
  skip?: Scalars['Int'];
  take?: Scalars['Int'];
};

export type IAboutPage = {
  id: Scalars['String'];
  pokko: Pokko;
  heroImage: PokMedia;
  content: PokRichText;
  promoVideoLink?: Maybe<Scalars['String']>;
  brochureLink?: Maybe<Scalars['String']>;
};

export type IChapterContent = {
  id: Scalars['String'];
  pokko: Pokko;
  language: Language;
  audioFile?: Maybe<PokMedia>;
  text?: Maybe<PokRichText>;
};

export type ILanguage = {
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  localisation: Scalars['String'];
  flagImage?: Maybe<PokMedia>;
};

export type ITour = {
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  heroImage: PokMedia;
  chapters: Array<Maybe<TourChapter>>;
};

export type ITourChapter = {
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  heroImage: PokMedia;
  content: Array<Maybe<ChapterContent>>;
};


export type Language = PokEntry & PokValue & ILanguage & {
  __typename?: 'Language';
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  localisation: Scalars['String'];
  flagImage?: Maybe<PokMedia>;
};

export type LanguageCollection = {
  __typename?: 'LanguageCollection';
  nodes: Array<Maybe<Language>>;
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

export type Tour = PokEntry & PokValue & ITour & {
  __typename?: 'Tour';
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  heroImage: PokMedia;
  chapters: Array<Maybe<TourChapter>>;
};

export type TourChapter = PokEntry & PokValue & ITourChapter & {
  __typename?: 'TourChapter';
  id: Scalars['String'];
  pokko: Pokko;
  name: Scalars['String'];
  heroImage: PokMedia;
  content: Array<Maybe<ChapterContent>>;
};

export type TourChapterCollection = {
  __typename?: 'TourChapterCollection';
  nodes: Array<Maybe<TourChapter>>;
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
  nodes: Array<Maybe<Tour>>;
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