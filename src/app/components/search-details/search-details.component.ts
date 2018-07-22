import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';
import {SearchModel} from '../../model/SearchModel';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  areaSearchResults: SearchAreaModel[];
  isLoading: boolean;
  searchComplete: boolean;
  //@Input() searchModel: SearchModel;

  constructor(private router: Router, private searchAreaService: SearchAreaService, ) { }

  ngOnInit() {
    this.isLoading = true;
   this.searchComplete = false;
   // console.log(this.searchModel.maxPrice);

    setTimeout( () => {
      this.searchAreaService.getAreaDetails().subscribe(
        areaDetails => {
          this.areaSearchResults = areaDetails;
          this.isLoading = false;
          this.searchComplete = true;
          console.log('returned... ' + this.areaSearchResults.length);
        }
      );
    }, 10000);

          // this.isLoading = false;
          // this.searchComplete = true;
  }




}
