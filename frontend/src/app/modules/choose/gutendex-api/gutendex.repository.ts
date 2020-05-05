import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

import { Book } from '@store/models';
import { GutendexResponseDto } from './gutendex.dto';
import { GutendexMapper } from './gutendex.mapper';

@Injectable({ providedIn: 'root' })
export class GutendexRepository {
  constructor(private http: HttpClient, private gutendexMapper: GutendexMapper) {}

  getPopularBooks(): Observable<Book[]> {
    // mocked api for now
    return this.http.get<GutendexResponseDto>('./mocks/gutendex-list.json').pipe(
      delay(1500),
      map((gutendexResponse) => gutendexResponse.results),
      map((gutendexResults) => gutendexResults.map(this.gutendexMapper.mapFromApi)),
      catchError((error) => {
        console.error(error);

        return of([]);
      }),
    );
  }
}
