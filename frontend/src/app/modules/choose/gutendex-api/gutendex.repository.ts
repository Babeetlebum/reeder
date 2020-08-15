import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '@environment';
import { Book } from '@store/models';
import { GutendexResponseDto } from './gutendex.dto';
import { GutendexMapper } from './gutendex.mapper';

const BASE_URL = `${environment.gutendexApiUrl}/books/`;

@Injectable({ providedIn: 'root' })
export class GutendexRepository {
  constructor(private http: HttpClient, private gutendexMapper: GutendexMapper) {}

  getPopularBooks(): Observable<Book[]> {
    return this.handleResponse(this.http.get<GutendexResponseDto>(BASE_URL));
  }

  search(search: string): Observable<Book[]> {
    const params = search == null || search === '' ? '' : `?${new URLSearchParams(`search=${search}`).toString()}`;

    return this.handleResponse(this.http.get<GutendexResponseDto>(`${BASE_URL}${params}`));
  }

  handleResponse(response: Observable<GutendexResponseDto>): Observable<Book[]> {
    return response.pipe(
      map((gutendexResponse) => gutendexResponse.results),
      map((gutendexResults) => gutendexResults.map(this.gutendexMapper.mapFromApi)),
      catchError((error) => {
        console.error(error);

        return of([]);
      }),
    );
  }
}
