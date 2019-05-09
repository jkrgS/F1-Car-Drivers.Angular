import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { IDrivers } from 'src/app/models/drivers';

@Injectable({
  providedIn: 'root'
})
export class DriversListService {
  driversUrl = environment.driversAPI;

  constructor(private http: HttpClient) {}

  // getDrivers(): Observable<IDrivers[]> {
  //   return this.http.get<IDrivers[]>(this.driversUrl);
  // }
  getDrivers() {
    return this.http.get(this.driversUrl);
  }
}
