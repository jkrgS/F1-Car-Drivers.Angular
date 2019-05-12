import { DriversListService } from './../../../services/api-services/drivers-list.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Flags } from 'src/app/helpers/flags';
import { CommunicationService } from 'src/app/services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  @Output() driverDetails = new EventEmitter<any[]>();
  drivers: any;
  eyeIconIndex: any;

  subscriptions: Subscription; // for unsubscribe on destroy

  constructor(
    private driversApiService: DriversListService,
    private commService: CommunicationService
  ) {
    this.subscriptions = commService.eyeIconDisplay$.subscribe(res => {
      this.eyeIconIndex = res;
    });
  }

  ngOnInit() {
    this.initComponent();
  }

  initComponent() {
    this.getDrivers();
  }

  // get drivers list
  getDrivers() {
    if (!this.drivers) {
      this.driversApiService.getDrivers().subscribe(res => {
        this.drivers = res;
      });
    }
  }

  // gets the flag via flags helper enum
  getFlag(nation: string) {
    return 'flag-icon flag-icon-' + Flags[nation];
  }

  showDriverDetails(driverDetails: any[], index: any) {
    this.eyeIconIndex = index;
    this.driverDetails.emit(driverDetails);
  }
}
