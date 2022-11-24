export interface UserRegisterCredentials {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  token: string;
}
export interface UserState extends User {
  isLogged: boolean;
}

export interface UserAllInformation extends User {
  password: string;
  email: string;
}
