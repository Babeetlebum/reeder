import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthLayoutComponent } from './auth-layout.component';
import * as fromAuth from '@auth/store/auth.reducers';
import { FooterComponent, NavToolbarComponent } from '@core/layout/components';
import { MaterialModule } from '@shared/material.module';

describe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent;
  let fixture: ComponentFixture<AuthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLayoutComponent, FooterComponent, NavToolbarComponent],
      imports: [MaterialModule, RouterModule.forRoot([])],
      providers: [provideMockStore({ initialState: { auth: fromAuth.initialState } })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
