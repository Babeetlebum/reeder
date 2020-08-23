import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromChoose from '@choose/store/choose.reducers';
import { selectBookList, selectBookListLoading } from '@choose/store/choose.selectors';
import { getBooks, readBook, searchBooks } from '@choose/store/choose.actions';
import { Book } from '@store/models';

const SEARCH_BAR_TITLE = 'Search for books';
// tslint:disable-next-line quotemark
const SEARCH_BAR_PLACEHOLDER = "Try 'moby', 'dickens exp' or 'rouge noir' ...";

@Component({
  selector: 'reed-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss'],
})
export class ChooseComponent implements OnInit {
  bookList$: Observable<Book[]>;
  bookListLoading$: Observable<boolean>;
  searchBarTitle = SEARCH_BAR_TITLE;
  searchBarPlaceholder = SEARCH_BAR_PLACEHOLDER;

  constructor(private store: Store<fromChoose.State>) {}

  ngOnInit() {
    this.bookList$ = this.store.select(selectBookList);
    this.bookListLoading$ = this.store.select(selectBookListLoading);
    this.getBooks();
  }

  getBooks() {
    this.store.dispatch(getBooks());
  }

  readBook(bookId: number) {
    this.store.dispatch(readBook({ bookId }));
  }

  searched(search: string): void {
    this.store.dispatch(searchBooks({ search }));
  }
}
