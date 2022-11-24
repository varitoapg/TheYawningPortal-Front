import { JwtPayload } from "jwt-decode";

export interface AxiosResponseBody {
  error: string;
}

export interface UserLoginCredentials {
  username: string;
  password: string;
}

export interface CustomTokenPayload extends JwtPayload {
  username: string;
  id: string;
}
