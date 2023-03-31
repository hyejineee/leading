import END_POINT from '@common/constants/endPoint';
import APP_TYPES from '@common/di/types';
import { ArticleEntity, ArticleResponse } from '@common/entities/article';
import { SuccessResponse } from '@common/network/types/apiResponse';
import type { IHttpClient } from '@common/network/types/HttpClient.interface';
import { inject, injectable } from 'inversify';
import { IArticleRepository } from './ArticleRepository.interface';

@injectable()
export default class ArticleRepository implements IArticleRepository {
  private httpClient: IHttpClient;

  constructor(
    @inject(APP_TYPES.HTTP_CLIENT_TYPES.IHttpClient)
    httpClient: IHttpClient | any,
  ) {
    this.httpClient = httpClient;
  }

  fetchGlobalFeed(): Promise<SuccessResponse<ArticleResponse>> {
    return this.httpClient.get<ArticleResponse>(
      END_POINT.FETCH_GLOBAL_ARTICLES,
    );
  }

  fetchPersonalFeed(): Promise<SuccessResponse<ArticleResponse>> {
    return this.httpClient.get(END_POINT.FETCH_PERSONAL_ARTICLES);
  }
}
