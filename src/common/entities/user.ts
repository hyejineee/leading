export interface UserEntity {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export type UserResponse = {
  user: UserEntity;
};
