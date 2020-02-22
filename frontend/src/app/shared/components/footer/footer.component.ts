import { Component } from '@angular/core';

import { ThemeService } from '@app/shared/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    public readonly themeService: ThemeService,
  ) {}

}
