import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  constructor() {
    this.color = 'red';
    this.name = 'text';
  }
  @Input('color') color: string;
  @Input('name') name: string;

  temp: boolean = false;
  ngOnInit(): void {}
}
