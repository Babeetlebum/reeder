import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockDeclaration } from 'ng-mocks';

import { LoginComponent } from './login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import * as fromAuth from '@auth/store/auth.reducers';
import * as AuthActions from '@auth/store/auth.actions';
import { MaterialModule } from '@shared/material.module';
import { AppRoutes } from '@app/routes';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let debugElement: DebugElement;
  let store: Store<fromAuth.AuthState>;

  describe('Integration testing', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [LoginComponent, MockDeclaration(SignUpComponent)],
        imports: [
          BrowserAnimationsModule,
          MaterialModule,
          ReactiveFormsModule,
          RouterTestingModule.withRoutes([]),
          StoreModule.forRoot(
            { auth: fromAuth.reducer },
            {
              runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
              },
            },
          ),
        ],
        providers: [],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      store = TestBed.inject(Store);
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

    describe('when clicking the signup button', () => {
      it(`should redirect to the signup page`, () => {
        const router = TestBed.inject(Router);
        spyOn(router, 'navigateByUrl');
        const buttonElement = debugElement.query(By.css('.go-to-sign-up-button'));
        buttonElement.nativeElement.click();
        fixture.detectChanges();

        expect(router.navigateByUrl).toHaveBeenCalledWith(`${AppRoutes.SIGNUP}`);
      });
    });
  });

  describe('State testing', () => {
    let mockStore: MockStore<{ auth: fromAuth.AuthState }>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [BrowserAnimationsModule, MaterialModule, ReactiveFormsModule, RouterTestingModule],
        providers: [MockStore, provideMockStore({ initialState: { auth: fromAuth.initialState } })],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      mockStore = TestBed.inject(MockStore);
    });

    describe('when auth is loading', () => {
      it(`should display a spinner`, () => {
        mockStore.setState({ auth: { ...fromAuth.initialState, authLoading: true } });
        fixture.detectChanges();
        const spinnerElement = debugElement.query(By.css('mat-spinner'));
        expect(spinnerElement.styles.visibility).toBe('visible');
      });
    });

    describe('when auth is not loading', () => {
      it(`should not display a spinner`, () => {
        mockStore.setState({ auth: { ...fromAuth.initialState, authLoading: false } });
        fixture.detectChanges();
        const spinnerElement = debugElement.query(By.css('mat-spinner'));
        expect(spinnerElement.styles.visibility).toBe('hidden');
      });
    });
  });
});
