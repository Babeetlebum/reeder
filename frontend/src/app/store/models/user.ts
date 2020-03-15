export interface UserConfig {
  id: number;
  username: string;
  email: string;
}

export class User {
  id: number;
  username: string;
  email: string;

  public constructor(userConfig: UserConfig) {
    this.id = userConfig.id;
    this.username = userConfig.username;
    this.email = userConfig.email;
  }
}

export const TEST_USER = new User({ id: 1, username: 'Alfred Test', email: 'test@example.com' });
export const TEST_PASSWORD = 'testtest';
