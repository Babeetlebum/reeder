import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { Book } from '@store/models';
import { ReederResponseDto } from './reeder.dto';
import { ReederMapper } from './reeder.mapper';

@Injectable({ providedIn: 'root' })
export class ReederRepository {
  constructor(private http: HttpClient, private reederMapper: ReederMapper) {}

  getPopularBooks(): Observable<Book[]> {
    // mocked api for now
    return this.http.get<ReederResponseDto>('./mocks/reeder-list.json').pipe(
      delay(1500),
      map((reederResponse) => reederResponse.results),
      map((reederResults) => reederResults.map(this.reederMapper.mapFromApi)),
      catchError((error) => {
        console.error(error);

        return of([]);
      }),
    );
  }
}
