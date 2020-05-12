import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@shared/material.module';
import { FooterComponent, NavToolbarComponent } from '@core/layout/components';
import { AuthLayoutComponent, PageLayoutComponent } from '@core/layout/layouts';

@NgModule({
  declarations: [AuthLayoutComponent, PageLayoutComponent, FooterComponent, NavToolbarComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, RouterModule.forChild([])],
  exports: [AuthLayoutComponent, PageLayoutComponent],
  providers: [],
})
export class LayoutModule {}
