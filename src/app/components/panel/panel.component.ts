import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PositionsService } from '../../services/Positions/positions.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  constructor(
    private position: PositionsService,
    private route: ActivatedRoute
  ) {}

  lists: any;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {});

    this.position.getPosition().subscribe((lists: any) => {
      this.lists = lists;
    });
  }
}
