import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnRoutingModule } from './learn-routing.module';
import { ChooseComponent } from './choose/choose.component';

@NgModule({
  declarations: [ChooseComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LearnModule { }
