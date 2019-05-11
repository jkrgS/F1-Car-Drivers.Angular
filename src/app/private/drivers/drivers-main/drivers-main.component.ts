import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-drivers-main',
  templateUrl: './drivers-main.component.html',
  styleUrls: ['./drivers-main.component.scss']
})
export class DriversMainComponent implements OnInit {
  driverDetails = [];
  showSideBar = false;

  constructor(private commService: CommunicationService) { }

  ngOnInit() {
  }

  driver(driver: []) {
    this.showSideBar = true;
    this.driverDetails = driver;
  }

  sideBar() {
    this.showSideBar = false;
    this.commService.eyeIconDisplay(0);
  }

}
