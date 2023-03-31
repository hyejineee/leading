export {};

type PromiseStatus = 'pending' | 'success' | 'error';

const wrapPromise = <T>(promise: Promise<T>) => {
  let status: PromiseStatus = 'pending';
  let result: T | null;

  const suspender = promise.then(
    res => {
      status = 'success';
      result = res;
    },
    error => {
      status = 'error';
      result = error;
    },
  );

  return {
    read() {
      switch (status) {
        case 'pending':
          throw suspender;
        case 'error':
          throw result;
        default:
          return result;
      }
    },
  };
};

export default wrapPromise;
