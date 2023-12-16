export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  profileImage?: string;
  role: Role;
}

export interface Submission {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  pictureBefore: string;
  pictureAfter: string;
  lat: number;
  lng: number;
  likes: number;
  user: Omit<User, 'password'>
}

export interface Comment {
  id: string,
  content: string,
  createdAt: string,
  userId: string,
  submissionId: string
}

export enum Role {
  USER,
  ADMIN,
}
