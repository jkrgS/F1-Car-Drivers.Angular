import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private homeIconDisplaySource = new Subject<boolean>();

  homeIconDisplay$ = this.homeIconDisplaySource.asObservable();

  iconDisplay(display: boolean) {
    // if (path === truePath) {
    this.homeIconDisplaySource.next(display);
    // } else {
    // this.homeIconDisplaySource.next(false);
    // }
  }
}
