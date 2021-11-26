import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IArticle {
  source: IArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IArticleSource {
  id: string;
  name: string;
}

export type IArticlesProps = {
  item : IArticle
};

