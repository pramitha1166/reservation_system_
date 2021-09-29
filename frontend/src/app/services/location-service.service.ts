import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchLocation, SearchLocationList } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  private LOCATION_API_UTR = "http://localhost:8085/api/location";

  constructor(private http: HttpClient) { }

  fetchAllLocations(): Observable<SearchLocationList> {
    return this.http.get<SearchLocationList>(this.LOCATION_API_UTR+'/getall');
  }

}
