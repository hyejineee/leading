export type SuccessResponse<T> = {
  status: 'success';
  data: T;
};

export type FailResponse = {
  status: 'error';
  error: Error;
};

export type ApiResponse<T> = SuccessResponse<T> | FailResponse;
