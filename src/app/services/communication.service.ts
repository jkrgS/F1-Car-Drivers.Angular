import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private homeIconDisplaySource = new Subject<boolean>();
  private eyeIconDisplaySource = new Subject<any>();

  homeIconDisplay$ = this.homeIconDisplaySource.asObservable();
  eyeIconDisplay$ = this.eyeIconDisplaySource.asObservable();

  iconDisplay(display: boolean) {
    // if (path === truePath) {
    this.homeIconDisplaySource.next(display);
    // } else {
    // this.homeIconDisplaySource.next(false);
    // }
  }

  eyeIconDisplay (index: any) {
    this.eyeIconDisplaySource.next(index);
  }
}
