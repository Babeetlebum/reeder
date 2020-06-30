import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { NavToolbarComponent } from './nav-toolbar.component';
import { MaterialModule } from '@shared/material.module';
import * as fromAuth from '@core/auth/store/auth.reducers';
import * as fromLayout from '@core/layout/store/layout.reducers';
import { selectConnectedUserName, selectIsUserConnected } from '@core/auth/store/auth.selectors';

const initialState = { auth: fromAuth.initialState, layout: fromLayout.initialState };

describe('NavToolbarComponent', () => {
  let debugElement: DebugElement;
  let fixture: ComponentFixture<NavToolbarComponent>;
  let mockStore: MockStore<fromAuth.State>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavToolbarComponent],
      imports: [MaterialModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(NavToolbarComponent);
    debugElement = fixture.debugElement;
    mockStore = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  describe('when a user is connected', () => {
    beforeEach(() => {
      mockStore.overrideSelector(selectConnectedUserName, 'John');
      mockStore.overrideSelector(selectIsUserConnected, true);
      mockStore.refreshState();
      fixture.detectChanges();
    });

    it(`should show the connected user's name`, () => {
      expect(debugElement.query(By.css('.connected-user-name')).nativeElement.innerText).toContain('John');
    });

    it(`should show the disconnect button`, () => {
      expect(debugElement.query(By.css('.disconnect'))).toBeTruthy();
    });
  });

  describe('when no users are connected', () => {
    beforeEach(() => {
      mockStore.overrideSelector(selectConnectedUserName, '');
      mockStore.overrideSelector(selectIsUserConnected, false);
      mockStore.refreshState();
      fixture.detectChanges();
    });

    it(`should show an empty connected user's name`, () => {
      expect(debugElement.query(By.css('.connected-user-name'))).toBeFalsy();
    });

    it(`should hide the disconnect button`, () => {
      expect(debugElement.query(By.css('.disconnect'))).toBeFalsy();
    });
  });
});
