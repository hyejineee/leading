export type UseLogin = (email: string, password: string) => Promise<void>;
export type UseRegisterUser = (
  email: string,
  password: string,
  username: string,
) => Promise<void>;
