import ArticleRepository from '@article/repository/ArticleRepository';
import { IArticleRepository } from 'src/repositories/ArticleRepository/ArticleRepository.interface';
import FetchGlobalFeedUseCase from 'src/useCases/FetchGlobalFeedUseCase';
import RegisterUserUseCase from '@auth/usecases/RegisterUserUseCase/RegisterUserUseCase';
import { ILocalRepository } from '@common/types/interfaces';
import LocalRepository from '@common/utils/LocalRepository';
import { Container } from 'inversify';
import AuthRepository from '../../auth/repositories/AuthRepository';
import { IAuthRepository } from '../../auth/types';
import LoginUseCase from '../../useCases/LoginUseCase/LoginUseCase';
import AxiosHttpClient from '../network/AxiosHttpClient';
import { IHttpClient } from '../network/types/HttpClient.interface';
import APP_TYPES from './types';

const appContainer = new Container();

// http client
appContainer
  .bind<IHttpClient>(APP_TYPES.HTTP_CLIENT_TYPES.IHttpClient)
  .toConstantValue(
    new AxiosHttpClient('https://api.realworld.io/api', new LocalRepository()),
  );

// repository
appContainer
  .bind<IAuthRepository>(APP_TYPES.REPOSITORY_TYPES.IAuthRepository)
  .to(AuthRepository);

appContainer
  .bind<ILocalRepository>(APP_TYPES.REPOSITORY_TYPES.ILocalRepository)
  .toConstantValue(new LocalRepository());

appContainer
  .bind<IArticleRepository>(APP_TYPES.REPOSITORY_TYPES.IArticleRepository)
  .to(ArticleRepository);

// usecase
appContainer.bind(APP_TYPES.USE_CASE_TYPES.LoginUseCase).to(LoginUseCase);
appContainer
  .bind(APP_TYPES.USE_CASE_TYPES.RegisterUserUseCase)
  .to(RegisterUserUseCase);

appContainer
  .bind(APP_TYPES.USE_CASE_TYPES.FetchGlobalFeedUseCase)
  .to(FetchGlobalFeedUseCase);

export default appContainer;
