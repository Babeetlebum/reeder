import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { PageLayoutComponent } from './page-layout.component';
import * as fromAuth from '@auth/store/auth.reducers';
import { FooterComponent, NavToolbarComponent } from '@core/layout/components';
import { MaterialModule } from '@shared/material.module';

describe('PageLayoutComponent', () => {
  let component: PageLayoutComponent;
  let fixture: ComponentFixture<PageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutComponent, FooterComponent, NavToolbarComponent],
      imports: [MaterialModule, RouterModule.forRoot([])],
      providers: [provideMockStore({ initialState: { auth: fromAuth.initialState } })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
