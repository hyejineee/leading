import { IArticleRepository } from '@article/repository/ArticleRepository.interface';
import APP_TYPES from '@common/di/types';
import { inject, injectable } from 'inversify';

@injectable()
export default class FetchGlobalFeedUseCase {
  private articleRepository: IArticleRepository;

  constructor(
    @inject(APP_TYPES.REPOSITORY_TYPES.IArticleRepository)
    articleRepository: IArticleRepository | any,
  ) {
    this.articleRepository = articleRepository;
  }

  async execute() {
    return (await this.articleRepository.fetchGlobalFeed()).data;
  }
}
