import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.css'],
})
export class ChildSecondComponent {
  @Input() data: any = [];
  @Output() childEvent = new EventEmitter();

  clickToSend() {
    this.childEvent.emit(this.data);
  }
}
