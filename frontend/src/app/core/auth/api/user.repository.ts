import { Observable } from 'rxjs';
import { LoginCredentials, User } from '@core/auth/store/auth.entities';
import { InjectionToken } from '@angular/core';

// this interface + injection token allows to easily change which api is injected
export interface UserRepository {
  login(credentials: LoginCredentials): Observable<{ user: User }>;
}

export const USER_REPOSITORY_TOKEN = new InjectionToken<UserRepository>('UserRepository');
