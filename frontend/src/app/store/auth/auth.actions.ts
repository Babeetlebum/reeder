import { createAction, props } from '@ngrx/store';

import { LoginCredentials, User } from '@store/models';

export const login = createAction('[Auth Login Component] Login', props<{ credentials: LoginCredentials }>());
export const logout = createAction('[Navbar Component] Logout');
export const signUp = createAction('[Auth SignUp Component] SignUp');

export const loginSuccess = createAction('[Auth Api Service] Login Success', props<{ user: User }>());
export const loginFailure = createAction('[Auth Api Service] Login Failure', props<{ error: Error }>());

export const signUpSuccess = createAction('[Auth Api Service] SignUp Success', props<{ user: User }>());
export const signUpFailure = createAction('[Auth Api Service] SignUp Failure', props<{ error: Error }>());
