import {Component, OnInit} from '@angular/core';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Country} from './country.model';

@Component({
  selector: 'trg-example-page',
  templateUrl: './example.page.html',
  styleUrls : ['./example.page.scss'],
})

export class ExamplePage {

    countries: Country[] = [
      {
        name: 'Russia',
        flag: 'f/f3/Flag_of_Russia.svg',
        area: 17075200,
        population: 146989754
      },
      {
        name: 'Canada',
        flag: 'c/cf/Flag_of_Canada.svg',
        area: 9976140,
        population: 36624199
      },
      {
        name: 'United States',
        flag: 'a/a4/Flag_of_the_United_States.svg',
        area: 9629091,
        population: 324459463
      },
      {
        name: 'China',
        flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
        area: 9596960,
        population: 1409517397
      }
    ];

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
