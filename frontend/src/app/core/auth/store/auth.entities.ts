export interface User {
  username: string;
  email: string;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignUpCredentials {
  email: string;
  username: string;
  password: string;
}

export const TEST_USER: User = {
  username: 'joe',
  email: 'joe@joe.com',
  token: 'JOETOKEN',
};
export const TEST_PASSWORD = 'joejoe';
