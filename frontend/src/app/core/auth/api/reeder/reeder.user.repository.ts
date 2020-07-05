import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environment';
import { ReederUserGetDto } from './reeder.user.dto';
import { ReederUserMapper } from './reeder.user.mapper';
import { LoginCredentials, User } from '@core/auth/store/auth.entities';
import { UserRepository } from '@core/auth/api/user.repository';

const baseUrl = `${environment.backUrl}/api/${environment.backVersion}`;

@Injectable({
  providedIn: 'root',
})
export class ReederUserRepository implements UserRepository {
  public constructor(private readonly http: HttpClient, private readonly reederMapper: ReederUserMapper) {}

  login(credentials: LoginCredentials): Observable<{ user: User }> {
    const loginUrl = `${baseUrl}/user/login`;

    return this.http
      .post<ReederUserGetDto>(loginUrl, credentials, { observe: 'response' })
      .pipe(
        map((response) => ({
          user: this.reederMapper.mapGetUser(response.body, response.headers.get('Authorization')),
        })),
      );
  }
}
