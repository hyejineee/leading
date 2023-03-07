import { UserEntity } from '../../common/entities/user';

export type UseLogin = (email: string, password: string) => Promise<void>;
export type UseFetchCurrentUser = (token: string) => Promise<UserEntity>;
