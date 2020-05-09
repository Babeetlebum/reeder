import { Component } from '@angular/core';

import { ThemeService } from '@shared/services';

@Component({
  selector: 'reed-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public readonly themeService: ThemeService) {}
}
