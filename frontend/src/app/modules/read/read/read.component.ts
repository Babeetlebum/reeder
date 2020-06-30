import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { getBook } from '@read/store/read.actions';
import { BookContent, Paragraph } from '@read/store/read.entities';
import * as fromRead from '@read/store/read.reducers';
import { selectBookContent, selectBookContentLoading } from '@read/store/read.selectors';
import { selectAllParagraphs } from '@read/store/paragraphs.selectors';

@Component({
  selector: 'reed-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnDestroy, OnInit {
  public bookContent$: Observable<BookContent>;
  public paragraphs$: Observable<Paragraph[]>;
  public bookContentLoading$: Observable<boolean>;
  public subscriptions = new Subscription();

  constructor(private readonly route: ActivatedRoute, private readonly store: Store<fromRead.ReadState>) {}

  ngOnInit() {
    // on receiving a bookId from the route : dispatch an action to get the book
    this.subscriptions.add(this.route.params.subscribe(({ bookId }) => this.store.dispatch(getBook({ bookId }))));
    this.bookContent$ = this.store.select(selectBookContent);
    this.paragraphs$ = this.store.select(selectAllParagraphs);
    this.bookContentLoading$ = this.store.select(selectBookContentLoading);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
