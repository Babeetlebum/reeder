import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { ReederResponseDto } from './reeder.dto';
import { ReederContent, ReederMapper } from './reeder.mapper';

@Injectable({ providedIn: 'root' })
export class ReederRepository {
  constructor(private http: HttpClient, private reederMapper: ReederMapper) {}

  getBook(bookId: number): Observable<ReederContent> {
    // mocked api for now
    return this.http.get<ReederResponseDto>(`./mocks/reeder_book_${bookId}.json`).pipe(
      delay(1500),
      map((reederItemDto) => this.reederMapper.mapFromApi(reederItemDto)),
      catchError<ReederContent, Observable<null>>((error) => {
        console.error(`ReederRepository: ${error.message}`);
        return of(null);
      }),
    );
  }
}
