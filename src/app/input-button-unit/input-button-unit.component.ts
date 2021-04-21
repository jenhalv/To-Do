import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Add items to the list!';

  // tslint:disable-next-line:no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
