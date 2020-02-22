import { Component, OnInit } from '@angular/core';

import '../../../../../@mv-checkbox/mv-checkbox';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {

  checkboxValue = true;
  checkboxValue2 = false;

  constructor() { }

  ngOnInit() {
  }

}
