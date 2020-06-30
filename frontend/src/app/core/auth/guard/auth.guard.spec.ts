import { TestBed, inject } from '@angular/core/testing';
import { DefaultUrlSerializer, Router, RouterModule } from '@angular/router';
// import {} from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AuthGuard } from './auth.guard';
import * as fromAuth from '@core/auth/store/auth.reducers';
import { selectIsUserConnected } from '@core/auth/store/auth.selectors';
import { AppRoutes } from '@app/routes';
import { DeepPartial } from '@app/test-helpers';

import { cold } from 'jasmine-marbles';

const initialState = { auth: fromAuth.initialState };

describe('AuthGuard', () => {
  let mockStore: MockStore<DeepPartial<{ auth: fromAuth.State }>>;
  let mockRouter: Router;
  let serializer: DefaultUrlSerializer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      providers: [AuthGuard, DefaultUrlSerializer, provideMockStore({ initialState })],
    }).compileComponents();
    mockStore = TestBed.inject(MockStore);
    mockRouter = TestBed.inject(Router);
    serializer = TestBed.inject(DefaultUrlSerializer);
  });

  describe('when user is connected', () => {
    beforeEach(() => {
      mockStore.setState({ auth: { ...fromAuth.initialState, user: {} } });
      mockStore.refreshState();
    });

    it('should activate', inject([AuthGuard], (guard: AuthGuard) => {
      const expected = cold('a', { a: true });
      expect(guard.canActivate()).toBeObservable(expected);
    }));
  });

  describe('when NO user is connected', () => {
    beforeEach(() => {
      spyOn(mockRouter, 'parseUrl').and.callThrough();
      mockStore.overrideSelector(selectIsUserConnected, false);
      mockStore.refreshState();
    });

    it('should redirect to the login page', inject([AuthGuard], (guard: AuthGuard) => {
      const route = `/${AppRoutes.LOGIN}`;
      // use the DefaultUrlSerializer service to generate the result of router.parseUrl
      const parsedUrl = serializer.parse(route);
      const expected = cold('a', { a: parsedUrl });
      expect(guard.canActivate()).toBeObservable(expected);
      expect(mockRouter.parseUrl).toHaveBeenCalledWith(`/${AppRoutes.LOGIN}`);
    }));
  });
});
