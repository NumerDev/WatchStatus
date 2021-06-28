import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss'],
})
export class AddPositionComponent {
  @Output() toggle = new EventEmitter<Boolean>();

  constructor(private fb: FormBuilder, private route: Router) {}

  toggleVisible(e: boolean) {
    this.toggle.emit(e);
  }

  fullForm = this.fb.group({
    title: ['', Validators.required],
    type: ['', Validators.required],
    genre: this.fb.group({
      action: [false],
      scifi: [false],
      romanse: [false],
      horror: [false],
      drama: [false],
      adventure: [false],
    }),
    season: [1],
    episode: [1],
  });

  submit() {
    console.log(this.fullForm.value);
    // this.toggle.emit(true);
    this.route.navigate(['/']);
  }

  sInc(e: any) {
    this.fullForm.patchValue({
      season: Number(e.value) + 1,
    });
  }

  sDec(e: any) {
    if (e.value == 1) return;
    this.fullForm.patchValue({
      season: Number(e.value) - 1,
    });
  }

  eInc(e: any) {
    this.fullForm.patchValue({
      episode: Number(e.value) + 1,
    });
  }

  eDec(e: any) {
    if (e.value == 1) return;
    this.fullForm.patchValue({
      episode: Number(e.value) - 1,
    });
  }
}
