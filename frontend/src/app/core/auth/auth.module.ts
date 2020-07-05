import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from '@core/auth/auth-routing.module';
import { LoginComponent } from '@core/auth/login/login.component';
import { SignUpComponent } from '@core/auth/sign-up/sign-up.component';
import { MaterialModule } from '@shared/material.module';
import { AuthEffects } from '@core/auth/store/auth.effects';
import { AUTH_STATE, reducer } from '@core/auth/store/auth.reducers';
import { USER_REPOSITORY_TOKEN } from '@core/auth/api/user.repository';
import { ReederUserRepository } from '@core/auth/api/reeder';

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
  providers: [{ provide: USER_REPOSITORY_TOKEN, useClass: ReederUserRepository }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
