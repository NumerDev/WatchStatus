import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {
  constructor() {}

  visible: boolean = false;

  toggleView(e: Boolean) {
    this.visible == e ? (this.visible = false) : (this.visible = true);
    // console.log(this.visible);
  }

  toggleModal() {
    this.visible = this.visible ? false : true;
  }
}
