import { Injectable } from '@angular/core';

import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { LoginCredentials, TEST_USER, TEST_PASSWORD, User } from '@store/models';

@Injectable()
export class AuthService {
  login(credentials: LoginCredentials): Observable<{ user: User }> {
    // fake API for now
    return timer(3000).pipe(
      map(() => {
        if (credentials.email !== TEST_USER.email || credentials.password !== TEST_PASSWORD) {
          throw new Error('Wrong credentials');
        }
        return { user: TEST_USER };
      }),
    );
  }
}
