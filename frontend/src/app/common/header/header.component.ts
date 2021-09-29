import { Component, OnInit } from '@angular/core';
import {faAdjust, faArrowsAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faAdjust = faAdjust;
  faArrowsAlt = faArrowsAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
