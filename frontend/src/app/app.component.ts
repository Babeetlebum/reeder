import { Component } from '@angular/core';

import { Theme, ThemeService } from '@app/shared/services';

@Component({
  selector: 'reed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Theme = Theme;

  constructor(public themeService: ThemeService) {}
}
