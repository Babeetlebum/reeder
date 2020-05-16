import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'reed-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  bookId$: Observable<number>;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.bookId$ = this.route.params.pipe(map((params) => params.bookId));
  }
}
