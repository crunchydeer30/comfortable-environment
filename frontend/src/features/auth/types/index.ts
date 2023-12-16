import { Role } from "../../../types";

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  password: string;
  username: string;
  profileImage?: string;
}

export interface TokenData {
  id: string;
  username: string;
  role: Role;
}

export interface AuthResponse extends TokenData {
  token: string;
}
