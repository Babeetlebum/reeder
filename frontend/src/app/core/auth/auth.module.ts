import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { LoginComponent } from '@auth/login/login.component';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';
import { MaterialModule } from '@shared/material.module';
import { AuthEffects } from '@auth/store/auth.effects';
import { AUTH_STATE, reducer } from '@auth/store/auth.reducers';
import { USER_REPOSITORY_TOKEN } from '@auth/api/user.repository';
import { ReederUserRepository } from '@auth/api/reeder';
import { AuthInterceptor } from '@auth/api/auth.interceptor';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
    MaterialModule,
    StoreModule.forFeature(AUTH_STATE, reducer),
  ],
  providers: [
    { provide: USER_REPOSITORY_TOKEN, useClass: ReederUserRepository },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
