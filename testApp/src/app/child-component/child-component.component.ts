import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
})
export class ChildComponentComponent {
  myForm!: FormGroup;
  tempArray: any[] = [];
  @Output() childEvent = new EventEmitter();
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }

  submit(e: any) {
    this.tempArray.push(this.myForm.value);
    console.log('Submit clicked', this.tempArray);
    this.childEvent.emit(this.tempArray);
  }
}
