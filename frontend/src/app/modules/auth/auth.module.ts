import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from '@auth/auth-routing.module';
import { MaterialModule } from '@shared/material.module';

import { LoginComponent } from '@auth/login/login.component';
import { SignUpComponent } from '@auth/sign-up/sign-up.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
