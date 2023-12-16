import { Submission, User, Role } from '@prisma/client';


export interface TokenData {
  id: string;
  username: string;
  role: Role;
}

export interface AuthResponse extends TokenData {
  token: string;
}

export type UserInfo = Omit<User, 'password'>;

export interface SubmissionItem extends Submission {
  user: UserInfo;
}