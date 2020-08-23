import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environment';
import { ReederResponseDto } from './reeder.dto';
import { ReederContent, ReederMapper } from './reeder.mapper';

const BASE_URL = `${environment.backUrl}/api/${environment.backVersion}/book/`;

@Injectable({ providedIn: 'root' })
export class ReederRepository {
  token: string;

  constructor(private http: HttpClient, private reederMapper: ReederMapper) {}

  getBook(bookId: number): Observable<ReederContent> {
    return this.handleResponse(this.http.get<ReederResponseDto>(`${BASE_URL}${bookId}`));
  }

  handleResponse(response: Observable<ReederResponseDto>): Observable<ReederContent | null> {
    return response.pipe(
      map(this.reederMapper.mapFromApi),
      catchError<ReederContent, Observable<null>>((error) => {
        console.error(error.message);
        // bubble the error to ngrx
        throw error;
      }),
    );
  }
}
