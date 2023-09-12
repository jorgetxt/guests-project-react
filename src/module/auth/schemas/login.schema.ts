export interface LoginResponse {
  user: User;
  token: string;
}

export interface User {
  id: number;
  username: string;
  roll: string;
}

export interface LoginSend {
  username: string;
  password: string;
}
