import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  areaSearchResults: SearchAreaModel[];

  constructor(private router: Router, private searchAreaService: SearchAreaService, ) { }

  ngOnInit() {
    this.getAreaDetails();
  }

  // ngAfterViewInit() {
  //   this.searchAreaService.getAreaDetails()
  //     .subscribe(areaDetails => {
  //       this.areaSearchResults = areaDetails;
  //       console.log('returned areadetails :: ' + this.areaSearchResults[0].areaName);
  //     });
  // }

  getAreaDetails(): void {
    //if (this.areaSearchResults.length === 0)
    {
      this.searchAreaService.getAreaDetails().subscribe(
        areaDetails => {
          this.areaSearchResults = areaDetails;
          console.log('returned... ' + this.areaSearchResults[0].areaName);
        }
      );
    }
  }

}
