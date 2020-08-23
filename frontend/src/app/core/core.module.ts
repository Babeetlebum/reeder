import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from '@auth/auth.module';
import { LayoutModule } from '@core/layout/layout.module';

@NgModule({
  imports: [AuthModule, BrowserAnimationsModule, HttpClientModule, LayoutModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
