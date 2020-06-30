import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MaterialModule } from '@shared/material.module';
import * as fromRead from '@read/store/read.reducers';
import * as fromParagraphs from '@read/store/paragraphs.reducers';
import { Paragraph } from '@read/store/read.entities';

import { ReadComponent } from './read.component';

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const initialState = { read: fromRead.initialState, paragraphs: fromParagraphs.initialState };

describe('ReadComponent', () => {
  let component: ReadComponent;
  let debugElement: DebugElement;
  let fixture: ComponentFixture<ReadComponent>;
  let mockStore: MockStore<DeepPartial<{
    read: fromRead.ReadState;
    paragraphs: fromParagraphs.ParagraphState;
  }>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadComponent],
      imports: [MaterialModule, RouterModule.forRoot([])],
      providers: [MockStore, provideMockStore({ initialState })],
    }).compileComponents();
    fixture = TestBed.createComponent(ReadComponent);
    debugElement = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when the bookContent is loading', () => {
    it('should display a loader', () => {
      mockStore.setState({ ...initialState, read: { bookContentLoading: true } });
      fixture.detectChanges();

      const spinner = debugElement.query(By.css('mat-spinner'));
      expect(spinner.styles.visibility).toBe('visible');
    });
  });

  describe('when the bookContent is NOT loading', () => {
    it('should NOT display a loader', () => {
      mockStore.setState({ ...initialState, read: { bookContentLoading: false } });
      fixture.detectChanges();

      const spinner = debugElement.query(By.css('mat-spinner'));
      expect(spinner.styles.visibility).toBe('hidden');
    });
  });

  describe('when the bookContent is available', () => {
    const mockTitle = 'Mock title';

    it('should display the title', () => {
      mockStore.setState({ ...initialState, read: { bookContent: { title: mockTitle } } });
      fixture.detectChanges();

      const title = debugElement.query(By.css('.title'));
      expect(title.nativeElement.textContent).toContain(mockTitle);
    });
  });

  describe('when the paragraphs are available', () => {
    const mockContents = ['Mock paragraph 1', 'Mock paragraph 2'];
    const mockParagraphs = mockContents.map((paragraph, index) => ({ id: index, content: paragraph } as Paragraph));

    it('should display the paragraphs', () => {
      mockStore.setState({
        ...initialState,
        // use the ngrx/entities adapter to generate the mock entities
        paragraphs: fromParagraphs.adapter.setAll(mockParagraphs, { ...fromParagraphs.initialState }),
      });
      fixture.detectChanges();

      const paragraphs = debugElement.queryAll(By.css('.paragraph'));
      expect(paragraphs.length).toBe(mockContents.length);
      paragraphs.forEach((paragraph, index) =>
        expect(paragraph.nativeElement.textContent).toContain(mockContents[index]),
      );
    });
  });
});
