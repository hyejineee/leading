import { IArticleRepository } from 'src/repositories/ArticleRepository/ArticleRepository.interface';
import FetchGlobalFeedUseCase from 'src/useCases/FetchGlobalFeedUseCase';
import { Container } from 'inversify';
import LocalRepository from 'src/repositories/LocalRepository/LocalRepository';
import IAuthRepository from 'src/repositories/AuthReoository/AuthRepository.interface';
import ArticleRepository from 'src/repositories/ArticleRepository/ArticleRepository';
import AuthRepository from 'src/repositories/AuthReoository/AuthRepository';
import RegisterUserUseCase from 'src/useCases/RegisterUserUseCase/RegisterUserUseCase';
import ILocalRepository from 'src/repositories/LocalRepository/LocalRepository.interface';
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
