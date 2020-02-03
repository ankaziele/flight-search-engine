// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-calendar",
//   templateUrl: "./calendar.component.html",
//   styleUrls: ["./calendar.component.scss"]
// })
// export class CalendarComponent implements OnInit {
//   departureDate: Date;
//   returnDate: Date;
//   selected: boolean = false;
//   checkBoxInnerHtml: string = "One way";
//   minDate: Date = new Date();

//   constructor() {}

//   ngOnInit() {}

//   onCheckboxSelected() {
//     this.selected = !this.selected;
//   }
// }




import {Component} from '@angular/core';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-calendar",
    templateUrl: "./calendar.component.html",
    styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent {

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  selected: boolean = false;

  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onCheckboxSelected() {
        this.selected = !this.selected;
      }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    if(!this.selected){

      return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
  }

  isInside(date: NgbDate) {
    if(!this.selected){
    return date.after(this.fromDate) && date.before(this.toDate);
    }
  }

  isRange(date: NgbDate) {
    if (!this.selected) {

      return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
    }
  }

  validateInput(currentValue: NgbDate, input: string): NgbDate {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
}