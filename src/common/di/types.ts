const HTTP_CLIENT_TYPES = {
  IHttpClient: Symbol.for('IHttpClient'),
};

const REPOSITORY_TYPES = {
  IAuthRepository: Symbol.for('IAuthRepository'),
  ILocalRepository: Symbol.for('ILocalRepository'),
  IArticleRepository: Symbol.for('IArticleRepository'),
};

const USE_CASE_TYPES = {
  LoginUseCase: Symbol.for('LoginUseCase'),
  RegisterUserUseCase: Symbol.for('RegisterUserUseCase'),
  FetchGlobalFeedUseCase: Symbol.for('FetchGlobalFeedUseCase'),
};

const APP_TYPES = {
  HTTP_CLIENT_TYPES,
  REPOSITORY_TYPES,
  USE_CASE_TYPES,
};

export default APP_TYPES;
