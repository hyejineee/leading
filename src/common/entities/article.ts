import { TagEntity } from './tag';
import { UserEntity } from './user';

export type ArticleEntity = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: TagEntity[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: boolean;
  author: UserEntity;
};

export type ArticleItem = Omit<ArticleEntity, 'updatedAt' | 'body'>;

export type ArticleResponse = {
  articles: ArticleEntity[];
  articlesCount: number;
};
