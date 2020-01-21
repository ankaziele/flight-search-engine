import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-one-way-toggler",
  templateUrl: "./one-way-toggler.component.html",
  styleUrls: ["./one-way-toggler.component.sass"]
})
export class OneWayTogglerComponent implements OnInit {
  @Input() selected: boolean;
  @Output() oncheckBoxSelect = new EventEmitter<{ selected: boolean }>();
  constructor() {}

  ngOnInit() {}

  onCheckboxSelected() {
    this.selected = !this.selected;
    this.oncheckBoxSelect.emit({ selected: this.selected });
  }
}
