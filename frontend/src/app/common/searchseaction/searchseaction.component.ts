import { Component, OnInit } from '@angular/core';
import { SearchLocation } from 'src/app/models/location';
import { LocationServiceService } from 'src/app/services/location-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchseaction',
  templateUrl: './searchseaction.component.html',
  styleUrls: ['./searchseaction.component.css']
})
export class SearchseactionComponent implements OnInit {

  showAdultFilter: boolean = false;
  numberOfAdults: number = 0;
  numberOfChildren: number = 0;
  numberOfRooms: number = 1;
  keyword='location';
  searchData: Array<SearchLocation> = []
  location_id: number = 9999;


  constructor(private service: LocationServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.fetchAllLocations().subscribe(res => {
      console.log(res.result)
      this.searchData = res.result
    })
  }

  showAdlutDrop() {
    if(this.showAdultFilter==false) {
      this.showAdultFilter = true;
    }else {
      this.showAdultFilter = false;
    }

  }


  addAdult() {
    this.numberOfAdults++;
  }

  removeAdult() {
    if(this.numberOfAdults>0) {
      this.numberOfAdults--;
    }else {
      this.numberOfAdults = 0;
    }
  }

  removeChild() {
    if(this.numberOfChildren>0) {
      this.numberOfChildren--;
    }else {
      this.numberOfChildren = 0;
    }
  }

  addChild() {
    this.numberOfChildren++;
  }

  removeRoom() {
    if(this.numberOfRooms>1) {
      this.numberOfRooms--;
    }else {
      this.numberOfRooms = 1;
    }
  }

  addRoom() {
    this.numberOfRooms++;
  }

  onChangeSearch(val: String) {
    console.log(val)
  }

  onSelected(item: SearchLocation) {
    console.log(item)
    this.location_id = item.id
  }

  onSearch() {
    console.log(this.location_id)
    if(this.location_id!==9999) {
      this.router.navigate(['search/',this.location_id])
    }
    
  }

  onCleared() {
    this.location_id = 9999
  }



}
