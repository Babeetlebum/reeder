import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReadRoutingModule } from '@read/read-routing.module';
import { ReadComponent } from '@read/read/read.component';
import { ReadEffects } from '@read/store/read.effects';
import { CHOOSE_STATE, reducer } from '@read/store/read.reducers';
import { MaterialModule } from '@shared/material.module';

@NgModule({
  declarations: [ReadComponent],
  imports: [
    CommonModule,
    ReadRoutingModule,
    EffectsModule.forFeature([ReadEffects]),
    MaterialModule,
    StoreModule.forFeature(CHOOSE_STATE, reducer),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReadModule {}
