import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css'],
})
export class ParentComponentComponent {
  data!: any[];
  data2!: any[];
  receiveMessage($event: any) {
    this.data = $event;
    console.log('Received message from child component', this.data);
  }
  receiveSecond($event: any) {
    this.data2 = $event;
    console.log($event);
  }
}
