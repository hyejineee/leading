import { ILocalRepository } from '@common/types/interfaces';
import LocalRepository from '@common/utils/LocalRepository';
import { Container } from 'inversify';
import AuthRepository from '../../auth/repositories/AuthRepository';
import { IAuthRepository } from '../../auth/types';
import LoginUseCase from '../../auth/usecases/LoginUseCase/LoginUseCase';
import AxiosHttpClient from '../network/AxiosHttpClient';
import { IHttpClient } from '../network/types/HttpClient.interface';
import APP_TYPES from './types';

const appContainer = new Container();

// http client
appContainer
  .bind<IHttpClient>(APP_TYPES.HTTP_CLIENT_TYPES.IHttpClient)
  .toConstantValue(new AxiosHttpClient('https://api.realworld.io/api'));

// repository
appContainer
  .bind<IAuthRepository>(APP_TYPES.REPOSITORY_TYPES.IAuthRepository)
  .to(AuthRepository);

appContainer
  .bind<ILocalRepository>(APP_TYPES.REPOSITORY_TYPES.ILocalRepository)
  .toConstantValue(new LocalRepository());

// usecase
appContainer.bind(APP_TYPES.USE_CASE_TYPES.LoginUseCase).to(LoginUseCase);

export default appContainer;
