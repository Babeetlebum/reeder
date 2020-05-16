import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { MaterialModule } from '@shared/material.module';
import * as fromRead from '@read/store/read.reducers';

import { ReadComponent } from './read.component';

describe('ReadComponent', () => {
  let component: ReadComponent;
  let fixture: ComponentFixture<ReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadComponent],
      imports: [MaterialModule],
      providers: [provideMockStore({ initialState: { read: fromRead.initialState } })],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
