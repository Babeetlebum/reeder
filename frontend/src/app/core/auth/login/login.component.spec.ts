import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';

import { LoginComponent } from './login.component';
import * as fromAuth from '@core/auth/store/auth.reducers';
import * as AuthActions from '@core/auth/store/auth.actions';
import { MaterialModule } from '@shared/material.module';

fdescribe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let debugElement: DebugElement;
  let store: Store<fromAuth.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot({ auth: fromAuth.reducer }),
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    store = TestBed.get(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when clicking the login button', () => {
    let buttonElement: DebugElement;
    const expectedEmail = 'email@test.com';
    const expectedPassword = 'testpassword';

    beforeEach(async(() => {
      spyOn(component, 'login').and.callThrough();
      spyOn(store, 'dispatch').and.callThrough();
      buttonElement = debugElement.query(By.css('.login-button'));
    }));

    it(`should call the login method`, () => {
      buttonElement.nativeElement.click();
      fixture.detectChanges();
      expect(component.login).toHaveBeenCalled();
    });

    it(`should call the login method with credentials`, () => {
      component.loginForm.controls.email.setValue(expectedEmail);
      component.loginForm.controls.password.setValue(expectedPassword);
      buttonElement.nativeElement.click();
      fixture.detectChanges();
      expect(component.login).toHaveBeenCalledWith({
        email: expectedEmail,
        password: expectedPassword,
      });
    });

    it(`should dispatch a login action`, () => {
      component.login({
        email: expectedEmail,
        password: expectedPassword,
      });
      fixture.detectChanges();
      expect(store.dispatch).toHaveBeenCalledWith(
        AuthActions.login({
          credentials: {
            email: expectedEmail,
            password: expectedPassword,
          },
        }),
      );
    });
  });

  // describe('when loading', () => {
  //   beforeEach(async(() => {
  //     store.setState({
  //
  //     })
  //   }));
  //
  //   it(`should display a spinner`, () => {
  //     const spinnerElement = expect(debugElement.query(By.css('mat-spinner'))).toBeTruthy();
  //   });
  // });

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
