import { Injectable } from '@angular/core';
import { HttpEvent, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromAuth from '@auth/store/auth.reducers';
import { selectUser } from '@auth/store/auth.selectors';
import { environment } from '@environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string;

  public constructor(private readonly store: Store<fromAuth.AuthState>) {
    this.store.select(selectUser).subscribe((user) => (this.token = user != null ? user.token : ''));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!shouldBeAuthed(req.url)) {
      return next.handle(req);
    }

    const authedReq = req.clone({
      headers: new HttpHeaders({ Authorization: this.token }),
    });
    return next.handle(authedReq);
  }
}

function shouldBeAuthed(url: string): boolean {
  // auth backend requests but not for the user resource
  return url.includes(environment.backUrl) && !url.includes('user');
}
