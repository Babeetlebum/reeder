import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { MaterialModule } from '@shared/material.module';

import { LoginComponent } from '@auth/login/login.component';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, FlexLayoutModule, ReactiveFormsModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
