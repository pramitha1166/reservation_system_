import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Hotels } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  private HOTEL_API_URL = "http://localhost:8085/api/hotel"

  constructor(private http: HttpClient) { }

  getAllHotels() : Observable<Hotels> {
    return this.http.get<Hotels>(this.HOTEL_API_URL+'/getall');
  }

  searchHotelsByLocationId(loc_id: number, pageNo: number) : Observable<Hotels> {
    return this.http.get<Hotels>(this.HOTEL_API_URL+'/filter?location_id='+loc_id+'&pageNo='+pageNo);
  }

  searchHotelsByMainFilter(loc_id: number, room_count: number, number_of_beds: number) : Observable<Hotels> {
    return this.http.get<Hotels>(this.HOTEL_API_URL+'/getall_byroomcount?room_count='+room_count+'&number_of_beds='+number_of_beds+'&location_id='+loc_id);
  }

}
