import { Injectable } from '@angular/core';

import { NavSection } from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public navsections: NavSection[] = [];

  constructor() {
      try {
          this.navsections.push(
              new NavSection('Users', '/users').addSubsection(
                  new NavSection('Add', '/add').addSubsection(new NavSection('List', '/list')),
              ),
          );
      } catch (e) {
          console.warn(e);
      }
  }
}
