import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const DEFAULT_DEBOUNCE_TIME = 500;
const DEFAULT_TITLE = 'Search';
const DEFAULT_PLACEHOLDER = '';

@Component({
  selector: 'reed-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnDestroy, OnInit {
  searchInput = new FormControl();
  subscriptions = new Subscription();
  @Input() debounceTime = DEFAULT_DEBOUNCE_TIME;
  @Input() loader$ = new Observable<boolean>();
  @Input() title = DEFAULT_TITLE;
  @Input() placeholder = DEFAULT_PLACEHOLDER;
  @Output() searched = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.searchInput.valueChanges
        .pipe(debounceTime(this.debounceTime))
        .subscribe((search) => this.searched.emit(search)),
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
