import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { PositionsService } from '../services/Positions/positions.service';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss'],
})
export class PositionComponent implements OnInit {
  constructor(
    private position: PositionsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  positionID: string;

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

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.positionID = params['id'];
    });
  }

  update() {
    this.position.updatePosition(this.fullForm.value, this.positionID);
    return this.router.navigate(['/']);
  }

  delete() {
    this.position.deletePosition(this.positionID);

    return this.router.navigate(['/']);
  }
}
