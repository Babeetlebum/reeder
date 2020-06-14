import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '@shared/material.module';
import { FooterComponent, NavToolbarComponent } from '@core/layout/components';
import { AuthLayoutComponent, PageLayoutComponent } from '@core/layout/layouts';
import { LAYOUT_STATE, reducer } from '@core/layout/store/layout.reducers';

@NgModule({
  declarations: [AuthLayoutComponent, PageLayoutComponent, FooterComponent, NavToolbarComponent],
  imports: [BrowserModule, MaterialModule, RouterModule.forChild([]), StoreModule.forFeature(LAYOUT_STATE, reducer)],
  exports: [AuthLayoutComponent, PageLayoutComponent],
  providers: [],
})
export class LayoutModule {}
