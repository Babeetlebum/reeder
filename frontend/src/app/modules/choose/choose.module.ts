import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ChooseRoutingModule } from '@choose/choose-routing.module';
import { ChooseComponent } from '@choose/choose/choose.component';
import { ChooseEffects } from '@choose/store/choose.effects';
import { CHOOSE_STATE, reducer } from '@choose/store/choose.reducers';
import { MaterialModule } from '@shared/material.module';

@NgModule({
  declarations: [ChooseComponent],
  imports: [
    CommonModule,
    ChooseRoutingModule,
    EffectsModule.forFeature([ChooseEffects]),
    MaterialModule,
    StoreModule.forFeature(CHOOSE_STATE, reducer),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChooseModule {}
