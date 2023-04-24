import { IArticleRepository } from 'src/repositories/ArticleRepository/ArticleRepository.interface';
import APP_TYPES from '@common/di/types';
import { inject, injectable } from 'inversify';

@injectable()
export default class FetchPersonalFeedUseCase {
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
