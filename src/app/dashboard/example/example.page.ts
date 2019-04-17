import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'trg-example-page',
  templateUrl: './example.page.html',
  styleUrls : ['./example.page.scss'],
})

export class ExamplePage {

  model: NgbDateStruct;
  date: {year: number, month: number};

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  clickmodel = {
    left: true,
    middle: false,
    right: false
  };
  public isCollapsed = false;

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
