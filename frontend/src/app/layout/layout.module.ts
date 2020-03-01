import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules and components used in layouts
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatToolbarModule, MatSidenavModule } from '@angular/material';
import { FooterComponent, NavToolbarComponent } from '@layout/components';
import { AuthLayoutComponent, PageLayoutComponent } from '@layout/layouts';

@NgModule({
  declarations: [AuthLayoutComponent, PageLayoutComponent, FooterComponent, NavToolbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forChild([]),
  ],
  exports: [AuthLayoutComponent, PageLayoutComponent],
  providers: [],
})
export class LayoutModule {}
