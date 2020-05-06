import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Theme, ThemeService } from '@app/shared/services';

export const APP_TITLE = 'Reeder';
export const DARK_THEME_CLASS = 'dark-theme';

@Component({
  selector: 'reed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  Theme = Theme;
  DARK_THEME_CLASS = DARK_THEME_CLASS;

  constructor(public themeService: ThemeService, private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(APP_TITLE);
  }
}
