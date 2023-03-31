import { ArticleResponse } from '@common/entities/article';
import { SuccessResponse } from '@common/network/types/apiResponse';

export interface IArticleRepository {
  fetchGlobalFeed(): Promise<SuccessResponse<ArticleResponse>>;
  fetchPersonalFeed(): Promise<SuccessResponse<ArticleResponse>>;
}
