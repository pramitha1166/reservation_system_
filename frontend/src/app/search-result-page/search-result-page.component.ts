import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelServiceService } from '../services/hotel-service.service';
import { ActivatedRoute } from '@angular/router';
import { SearchLocation } from '../models/location';
import { LocationServiceService } from '../services/location-service.service';

@Component({
  selector: 'app-search-result-page',
  templateUrl: './search-result-page.component.html',
  styleUrls: ['./search-result-page.component.css']
})
export class SearchResultPageComponent implements OnInit {


  public hotels: Array<Hotel> = [];
  public number_of_rooms: number = 1;
  public number_of_beds: number = 1;

  public locationData: Array<SearchLocation> =  [];
  keyword: string = 'location';
  locationId: number = 9999;

  constructor(private service: HotelServiceService, private route: ActivatedRoute, private locationServie: LocationServiceService) { }

  ngOnInit(): void {

    this.locationServie.fetchAllLocations().subscribe(res => {
      this.locationData = res.result
      console.log(this.locationData)
    })

    this.route.params.subscribe(params => {
      console.log('loc_id:',params.location_id)
      this.service.searchHotelsByLocationId(params.location_id,0).subscribe(res => {
        console.log(res)
        this.hotels = res.result
      })
    })
  }

  listByMainFilter() {
    this.route.params.subscribe(params => {
      this.service.searchHotelsByMainFilter(params.location_id,this.number_of_rooms,this.number_of_beds).subscribe(res => {
        console.log(res)
        this.hotels = res.result
      })
    })
  }

  filterByLocation() {
    if(this.locationId!==9999) {
      this.service.searchHotelsByLocationId(this.locationId,0).subscribe(res => {
        this.hotels = res.result;
      })
    }
  }

  onSelected(item: SearchLocation) {
    this.locationId = item.id
  }

  onCleared() {
    this.locationId = 9999;
  }


}
