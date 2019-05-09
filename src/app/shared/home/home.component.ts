import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private commService: CommunicationService) {}

  ngOnInit() {}

  // enabling home icon from nav bar - updates the service subject
  homeIconDisplay() {
    this.commService.iconDisplay(true);
  }
}
