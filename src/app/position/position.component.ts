import { Component, OnInit } from '@angular/core';
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
    private router: Router
  ) {}

  positionID: string;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.positionID = params['id'];
    });
  }

  delete() {
    this.position.deletePosition(this.positionID);

    return this.router.navigate(['/']);
  }
}
