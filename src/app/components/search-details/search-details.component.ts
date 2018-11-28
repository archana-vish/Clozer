import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';
import {SearchModel} from '../../model/SearchModel';
import {SearchComponent} from '../search/search.component';
import {Observable} from 'rxjs/Observable';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';


@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchDetailsComponent implements OnInit {

  @Input() areaSearchResults: SearchAreaModel[];
  @Input() searchModel: SearchModel;
  isLoading: boolean;
  searchComplete: boolean;

  latitude:51.409156;
  longitude:0.054646;



  constructor(private router: Router, private searchAreaService: SearchAreaService,
              private searchComponent: SearchComponent) { }


  ngOnInit() {


    this.getAreaDetails();
  }

  ngAfterViewInit() {
    this.getAreaDetails();
  }

  getAreaDetails(): void {
    this.isLoading = true;
    this.searchComplete = false;
    setTimeout( () => {
      this.searchAreaService.getAreaDetails(this.searchModel).subscribe(
        areaDetails => {
          this.areaSearchResults = areaDetails;
          this.isLoading = false;
          this.searchComplete = true;
          //console.log('returned... ' + this.areaSearchResults.length);
        }
      );
    });
  }


}
