import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MaterialModule } from '@shared/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  providers: [],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SharedModule {}
