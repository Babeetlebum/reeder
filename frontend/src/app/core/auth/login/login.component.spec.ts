import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { LoginComponent } from './login.component';
import * as fromAuth from '@core/auth/store/auth.reducers';
import * as AuthActions from '@core/auth/store/auth.actions';
import { MaterialModule } from '@shared/material.module';

fdescribe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let debugElement: DebugElement;
  let mockStore: MockStore<fromAuth.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserAnimationsModule, MaterialModule, ReactiveFormsModule, RouterTestingModule],
      providers: [provideMockStore({ initialState: { auth: fromAuth.initialState } })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    mockStore = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when clicking the login button', () => {
    let buttonElement: DebugElement;
    let loginSpy: jasmine.Spy;
    const expectedEmail = 'email@test.com';
    const expectedPassword = 'testpassword';

    beforeEach(async(() => {
      loginSpy = spyOn(component, 'login');
      buttonElement = debugElement.query(By.css('.login-button'));
    }));

    it(`should call the login method`, () => {
      buttonElement.nativeElement.click();
      fixture.detectChanges();
      expect(loginSpy).toHaveBeenCalled();
    });

    it(`should call the login method with credentials`, () => {
      component.loginForm.controls.email.setValue(expectedEmail);
      component.loginForm.controls.password.setValue(expectedPassword);
      buttonElement.nativeElement.click();
      fixture.detectChanges();
      expect(loginSpy).toHaveBeenCalledWith({
        email: expectedEmail,
        password: expectedPassword,
      });
    });

    it(`should dispatch a login action`, () => {
      const storeSpy = spyOn(mockStore, 'dispatch').and.callThrough();
      component.login({
        email: expectedEmail,
        password: expectedPassword,
      });
      fixture.detectChanges();
      expect(storeSpy).toHaveBeenCalled();
      // expect(storeSpy).toHaveBeenCalledWith(
      //   AuthActions.login({
      //     credentials: {
      //       email: expectedEmail,
      //       password: expectedPassword,
      //     },
      //   }),
      // );
    });

    // it(`should display a spinner`, () => {
    //   expect(debugElement.query(By.css('.disconnect'))).toBeTruthy();
    // });
  });

  // describe('when clicking the signup button', () => {
  //   let buttonElement: DebugElement;
  //   beforeEach(async(() => {
  //     buttonElement = debugElement.query(By.css('.go-to-sign-up-button'));
  //   }));
  //
  //   it(`should call the goToSignup method`, () => {
  //     expect(debugElement.query(By.css('.connected-user-name')).nativeElement.innerText).toContain('John');
  //   });
  //
  //   it(`should redirect to the signup page`, () => {
  //     expect(debugElement.query(By.css('.disconnect'))).toBeTruthy();
  //   });
  // });
});
