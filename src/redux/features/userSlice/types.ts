export interface UserRegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface UserState {
  id: string;
  username: string;
  token: string;
  isLogged: boolean;
}
