type ActionBody<T> = {
  message?: string;
  data?: T;
};

export default class Action<K, T> {
  name: K;
  message?: string;

  data?: T;

  constructor(name: K, { message, data }: ActionBody<T> = {}) {
    this.name = name;
    this.message = message;
    this.data = data;
  }
}
