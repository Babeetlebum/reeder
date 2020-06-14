import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromChoose from '@choose/store/choose.reducers';
import { selectBookList, selectBookListLoading } from '@choose/store/choose.selectors';
import { getBooks, readBook } from '@choose/store/choose.actions';
import { Book } from '@store/models';

@Component({
  selector: 'reed-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss'],
})
export class ChooseComponent implements OnInit {
  bookList$: Observable<Book[]>;
  bookListLoading$: Observable<boolean>;

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
}
