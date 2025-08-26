export interface User {
  fullName: string;
  email: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  body: T;
}
