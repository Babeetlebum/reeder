import { Injectable } from '@angular/core';

import { BookContent } from '@read/store/read.entities';
import { ReederItemDto } from './reeder.dto';

@Injectable({ providedIn: 'root' })
export class ReederMapper {
  mapFromApi = (reederItem: ReederItemDto): BookContent => {
    return {
      ...reederItem,
    };
  };
}
