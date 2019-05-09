import { DriversListService } from './../../../services/api-services/drivers-list.service';
import { Component, OnInit } from '@angular/core';
import { IDrivers } from '../../../models/drivers';
import { Flags } from 'src/app/helpers/flags';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  drivers: any;

  constructor(private driversApiService: DriversListService) {}

  ngOnInit() {
    this.initComponent();
  }

  initComponent() {
    this.getDrivers();
  }

  getDrivers() {
    if (!this.drivers) {
      this.driversApiService.getDrivers().subscribe(res => {
        this.drivers = res;
      });
    }
  }

  getFlag(nation: string) {
    return 'flag-icon flag-icon-' + Flags[nation];
  }
}
