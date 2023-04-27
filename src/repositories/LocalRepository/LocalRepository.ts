import ILocalRepository from './LocalRepository.interface';

export default class LocalRepository implements ILocalRepository {
  set<T>(key: string, value: T): void {
    if (typeof window === 'undefined')
      throw Error('데이터 저장에 실패했습니다.');
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  get<T>(key: string): T {
    if (typeof window === 'undefined')
      throw Error('데이터 불러오기에 실패했습니다.');

    return JSON.parse(window.localStorage.getItem(key) || '') as T;
  }
}
