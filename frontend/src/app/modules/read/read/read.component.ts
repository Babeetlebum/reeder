import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRead from '@read/store/read.reducers';
import { selectBookList, selectBookListLoading } from '@read/store/read.selectors';
import { getBooks } from '@read/store/read.actions';
import { Book } from '@store/models';

@Component({
  selector: 'reed-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  bookList$: Observable<Book[]>;
  bookListLoading$: Observable<boolean>;

  constructor(private store: Store<fromRead.State>) {}

  ngOnInit() {
    this.bookList$ = this.store.select(selectBookList);
    this.bookListLoading$ = this.store.select(selectBookListLoading);
  }

  getBooks() {
    this.store.dispatch(getBooks());
  }
}
