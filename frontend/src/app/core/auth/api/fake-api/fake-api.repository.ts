import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserRepository } from '@auth/api/user.repository';
import { LoginCredentials, TEST_USER, TEST_PASSWORD, User } from '@auth/store/auth.entities';

// to use the fake-api : change the injected class in auth.module
@Injectable({
  providedIn: 'root',
})
export class FakeApiRepository implements UserRepository {
  login(credentials: LoginCredentials): Observable<{ user: User }> {
    return timer(1000).pipe(
      map(() => {
        if (credentials.email !== TEST_USER.email || credentials.password !== TEST_PASSWORD) {
          throw new Error('Wrong credentials');
        }
        return { user: TEST_USER };
      }),
    );
  }
}
