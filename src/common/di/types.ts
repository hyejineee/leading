const HTTP_CLIENT_TYPES = {
  IHttpClient: Symbol.for('IHttpClient'),
};

const REPOSITORY_TYPES = {
  IAuthRepository: Symbol.for('IAuthRepository'),
  ILocalRepository: Symbol.for('ILocalRepository'),
};

const USE_CASE_TYPES = {
  LoginUseCase: Symbol.for('LoginUseCase'),
  RegisterUserUseCase: Symbol.for('RegisterUserUseCase'),
};

const APP_TYPES = {
  HTTP_CLIENT_TYPES,
  REPOSITORY_TYPES,
  USE_CASE_TYPES,
};

export default APP_TYPES;
