import { Component, OnInit, Input } from '@angular/core';
import { Flags } from 'src/app/helpers/flags';

@Component({
  selector: 'app-drivers-details',
  templateUrl: './drivers-details.component.html',
  styleUrls: ['./drivers-details.component.scss']
})
export class DriversDetailsComponent implements OnInit {
  @Input() driverDetails: [];

  constructor() {}

  ngOnInit() {}

  getFlag(nation: string) {
    return 'flag-icon flag-icon-' + Flags[nation];
  }
}
