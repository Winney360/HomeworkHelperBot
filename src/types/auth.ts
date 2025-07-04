export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'payper' | 'family' | 'school';
  credits?: number;
  children?: Child[];
  createdAt: Date;
}

export interface Child {
  id: string;
  name: string;
  grade: number;
  subjects: string[];
}

export interface AuthFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}