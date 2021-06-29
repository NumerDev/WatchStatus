import { PositionsService } from './../../services/Positions/positions.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss'],
})
export class AddPositionComponent {
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private position: PositionsService
  ) {}

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
    this.position.createPosition(this.fullForm.value);
    return this.route.navigate(['/']);
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
