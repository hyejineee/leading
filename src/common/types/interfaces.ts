export interface ILocalRepository {
  set<T>(key: string, value: T): void;
  get<T>(key: string): T;
}
