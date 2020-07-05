import { Injectable } from '@angular/core';

import { ReederUserGetDto } from './reeder.user.dto';
import { User } from '@core/auth/store/auth.entities';

@Injectable({
  providedIn: 'root',
})
export class ReederUserMapper {
  mapGetUser(userDto: ReederUserGetDto, token: string): User {
    return {
      ...userDto,
      token,
    };
  }
}
