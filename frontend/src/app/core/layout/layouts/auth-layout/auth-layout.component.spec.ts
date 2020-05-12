import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout.component';
import { FooterComponent, NavToolbarComponent } from '@core/layout/components';
import { MaterialModule } from '@shared/material.module';

fdescribe('AuthLayoutComponent', () => {
  let component: AuthLayoutComponent;
  let fixture: ComponentFixture<AuthLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLayoutComponent, FooterComponent, NavToolbarComponent],
      imports: [MaterialModule, RouterModule.forChild([])],
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
