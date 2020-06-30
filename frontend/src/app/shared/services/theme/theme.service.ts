import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

export enum Theme {
  DARK = 'dark',
  DEFAULT = 'default',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme$: Observable<Theme>;
  themeSource = new BehaviorSubject<Theme>(Theme.DEFAULT);

  constructor() {
    this.theme$ = this.themeSource.asObservable();
  }

  public toggleTheme(): void {
    const newTheme = this.themeSource.value === Theme.DARK ? Theme.DEFAULT : Theme.DARK;
    this.themeSource.next(newTheme);
  }
}
