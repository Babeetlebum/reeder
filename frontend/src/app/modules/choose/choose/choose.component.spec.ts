import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MaterialModule } from '@shared/material.module';
import * as fromChoose from '@choose/store/choose.reducers';

import { ChooseComponent } from './choose.component';

describe('ChooseComponent', () => {
  let component: ChooseComponent;
  let fixture: ComponentFixture<ChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseComponent],
      imports: [MaterialModule],
      providers: [provideMockStore({ initialState: { choose: fromChoose.initialState } })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
