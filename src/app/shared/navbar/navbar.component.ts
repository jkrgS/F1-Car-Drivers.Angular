import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  // alla info for the navbar items -->
  navbarTitle = { name: 'Car Drivers' };
  mySocialPages = [
    { name: 'Github', icon: 'github', route: 'https://github.com/jkrgS' },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      route: 'https://www.linkedin.com/in/gsisko/'
    },
    {
      name: 'Twitter',
      icon: 'twitter',
      route: 'https://twitter.com/GeorgeJkrr'
    }
  ];
  // alla info for the navbar items <--

  homeIconActive = false; // enable/disable home icon from navbar
  subscriptions: Subscription; // for unsubscribe on destroy

  constructor(
    private commService: CommunicationService,
    private location: Location
  ) {
    // turn the nav bar home icon display on/off - component interaction
    this.subscriptions = commService.homeIconDisplay$.subscribe(res => {
      this.homeIconActive = res;
    });
  }

  ngOnInit() {
    this.getLocation(this.location.path());
  }

  // disabling home icon from nav bar - updates the service subject
  homeIconDisplay() {
    this.homeIconActive = false;
    this.commService.iconDisplay(false);
  }

  // for page refresh purpose
  getLocation(route: string) {
    if (route === '/drivers') {
      this.homeIconActive = true;
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
