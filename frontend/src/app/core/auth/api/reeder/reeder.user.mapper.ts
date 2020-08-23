import { Injectable } from '@angular/core';

import { ReederUserGetDto } from './reeder.user.dto';
import { User } from '@auth/store/auth.entities';

@Injectable({
  providedIn: 'root',
})
export class ReederUserMapper {
  mapGetUser(userDto: ReederUserGetDto, token: string): User {
    const { name, ...user } = userDto;
    return {
      ...user,
      username: name,
      token,
    };
  }
}
