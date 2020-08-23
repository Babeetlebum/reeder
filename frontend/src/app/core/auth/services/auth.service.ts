import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { USER_REPOSITORY_TOKEN, UserRepository } from '@auth/api/user.repository';

import { LoginCredentials, User } from '@auth/store/auth.entities';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(@Inject(USER_REPOSITORY_TOKEN) private readonly userRepository: UserRepository) {}

  login(credentials: LoginCredentials): Observable<{ user: User }> {
    return this.userRepository.login(credentials);
  }
}
