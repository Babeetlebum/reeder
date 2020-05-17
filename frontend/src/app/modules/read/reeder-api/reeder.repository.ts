import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { BookContent } from '@read/store/read.entities';
import { ReederResponseDto } from './reeder.dto';
import { ReederMapper } from './reeder.mapper';

@Injectable({ providedIn: 'root' })
export class ReederRepository {
  constructor(private http: HttpClient, private reederMapper: ReederMapper) {}

  getBook(bookId: number): Observable<BookContent> {
    // mocked api for now
    return this.http.get<ReederResponseDto>(`./mocks/reeder_book_${bookId}.json`).pipe(
      delay(1500),
      map(this.reederMapper.mapFromApi),
      catchError((error) => {
        console.error(error);

        return of(null);
      }),
    );
  }
}
