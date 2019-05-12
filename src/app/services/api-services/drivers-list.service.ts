import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversListService {
  driversUrl = environment.driversAPI;

  constructor(private http: HttpClient) {}

  getDrivers(): Observable<any[]> {
    return this.http.get<any[]>(this.driversUrl);
  }
}
