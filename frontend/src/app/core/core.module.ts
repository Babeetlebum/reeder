import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from '@core/auth/auth.module';
import { LayoutModule } from '@core/layout/layout.module';

import { AuthService } from '@core/auth/auth.service';

@NgModule({
  declarations: [],
  imports: [AuthModule, HttpClientModule, LayoutModule],
  exports: [],
  providers: [AuthService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
