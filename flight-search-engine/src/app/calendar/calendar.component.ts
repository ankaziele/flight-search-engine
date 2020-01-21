import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  departureDate: Date;
  returnDate: Date;
  selected: boolean = false;
  checkBoxInnerHtml: string = "One way";
  minDate: Date = new Date();

  constructor() {}

  ngOnInit() {}

  onCheckboxSelected() {
    this.selected = !this.selected;
  }
}
