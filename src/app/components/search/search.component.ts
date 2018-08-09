import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';
import { SearchModel } from '../../model/SearchModel';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';
import {Router} from '@angular/router';
import {AreaDetailsComponent} from '../area-details/area-details.component';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  priceRange: Array<any> = [];
  time: Array<any> = [];
  distance: Array<any> = [] ;
  modes: Array<any>;
  hasLoaded: boolean;
  isLoading: boolean;
  sectorLoaded: boolean;
  sectorLoading: boolean;
  showDetails: boolean;
  compareByArea: boolean;
  checked: string;
  counts : Array<any>;
  seachCriteria: string;
  @Input() searchModel: SearchModel = new SearchModel();
  @Output() areaSearchResults;
  @Output() sectorSearchResults;
  @Output() outputSearchModel: SearchModel;
  displayedColumns: Array<any>;

  constructor(private searchAreaService: SearchAreaService, private router: Router ) { }

  ngOnInit() {

    this.hasLoaded = false;
    this.isLoading = false;

    this.sectorLoaded = false;
    this.sectorLoading = false;

    this.showDetails = false;

    this.counts = new Array(3);

    for (let i = 50; i <= 975; i += 25) {
      this.priceRange.push(i+'000');
    }

    for (let i = 1000; i <= 2000; i += 125) {
      this.priceRange.push(i+'000');
    }

    for ( let tc = 10; tc <= 90 ; tc += 10) {
      this.time.push(tc);
    }

    this.distance.push(1);

    for (let dist = 5; dist <= 100; dist += 5) {
      this.distance.push(dist);
    }

    this.searchModel.minPrice = this.priceRange[0];
    this.searchModel.maxPrice = 650000;
    this.searchModel.timeToTravel = this.time[0];
    this.searchModel.distanceToTravel = this.distance[0];
    this.searchModel.travelMode = 'any';

    this.modes = [
      {name: 'Train', value: 'train', checked: true},
      {name: 'Bus', value: 'bus', checked: false},
      {name: 'Cycle', value: 'cycle', checked: false},
      {name: 'Car', value: 'car', checked: false},
      {name: 'Walk', value: 'walk', checked: false}
    ];

    /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [
        [230, 750, 450, 300, 280, 240, 200, 190]
      ]
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
    }

    const completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);


    //For testing
    //this.getAreaSearchResults();

  }

  resetFields() : void {
    this.searchModel.minPrice = this.priceRange[0];
    this.searchModel.maxPrice = 650000;
    this.searchModel.timeToTravel = this.time[0];
    this.searchModel.distanceToTravel = this.distance[0];
    this.searchModel.travelMode = 'any';
    this.searchModel.workPostcode = '';
    this.searchModel.homePostcode = '';
  }

  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };

  getAreaSearchResults(): void {

      this.isLoading = true;
      this.hasLoaded = false;
      this.areaSearchResults = [];

    console.log('##############################');
    console.log('Printing search Model for Area');
      console.log(this.searchModel.minPrice);
      console.log(this.searchModel.maxPrice);
      console.log(this.searchModel.distanceToTravel);
      console.log(this.searchModel.timeToTravel);
      console.log(this.searchModel.homePostcode);
      console.log(this.searchModel.workPostcode);
      console.log(this.searchModel.travelMode);
      console.log('##############################');



    setTimeout( () => {
        this.searchAreaService.getAreaDetails(this.searchModel).subscribe(
          areaDetails => {
            console.log('returned :: ' + areaDetails[0].area_code);
            console.log('returned ob :: '+ areaDetails);
            this.areaSearchResults = areaDetails;
            this.isLoading = false;
            this.hasLoaded = true;
            console.log('returned... ' + this.areaSearchResults.length);
            console.log(this.areaSearchResults[0].area_name);
            console.log(this.areaSearchResults[1].area_name);
            console.log(this.areaSearchResults[2].area_name);
            console.log(this.areaSearchResults[0].distance_to_work);
          }
        );
      });


    setTimeout( () => {
      this.searchAreaService.getSectorDetails().subscribe(
        sectorDetails => {
          sectorDetails.forEach(
            sector => {
              sector.facilities_stars = new Array(sector.facilities_score_stars);
              sector.facilities_grey_stars = new Array( 5 - sector.facilities_score_stars);
              sector.school_stars = new Array(sector.school_score_stars);
              sector.school_grey_stars = new Array( 5 - sector.school_score_stars);
              sector.travel_stars = new Array(sector.travel_score_stars);
              sector.travel_grey_stars = new Array(5-sector.travel_score_stars);
              sector.safety_stars = new Array(sector.safety_score_stars);
              sector.safety_grey_stars = new Array(5 - sector.safety_score_stars);
            }
          )
          this.sectorSearchResults = sectorDetails;
          this.sectorLoading = false;
          this.sectorLoaded = true;
          this.compareByArea = true;
          this.checked = '';
          this.showDetails = true;
          this.seachCriteria = 'Search by Facilities';
          console.log('returned... ' + this.sectorSearchResults.length);
        }
      );
    });
    }


    getSectorSearchResults(areaDetail: SearchAreaModel): void {

      console.log(areaDetail.area_code);
      this.searchModel.areaCode = areaDetail.area_code;
      this.sectorSearchResults = [];
      this.sectorLoading = true;
      this.sectorLoaded = false;

       // this.searchModel.areaCode = this.areaCode;


      console.log('********************************');
      console.log('Printing search Model for Sector');
      console.log(this.searchModel.minPrice);
      console.log(this.searchModel.maxPrice);
      console.log(this.searchModel.distanceToTravel);
      console.log(this.searchModel.timeToTravel);
      console.log(this.searchModel.homePostcode);
      console.log(this.searchModel.workPostcode);
      console.log(this.searchModel.travelMode);

      console.log(this.searchModel.areaCode);
      console.log('********************************');


      this.displayedColumns = ['areaName', 'totalScore'];

      setTimeout( () => {
        this.searchAreaService.getSectorDetails().subscribe(
          sectorDetails => {
            sectorDetails.forEach(
              sector => {
                sector.facilities_stars = new Array(sector.facilities_score_stars);
                sector.facilities_grey_stars = new Array( 5 - sector.facilities_score_stars);
                sector.school_stars = new Array(sector.school_score_stars);
                sector.school_grey_stars = new Array( 5 - sector.school_score_stars);
                sector.travel_stars = new Array(sector.travel_score_stars);
                sector.travel_grey_stars = new Array(5-sector.travel_score_stars);
                sector.safety_stars = new Array(sector.safety_score_stars);
                sector.safety_grey_stars = new Array(5 - sector.safety_score_stars);
              }
            )
            this.sectorSearchResults = sectorDetails;
            this.sectorLoading = false;
            this.sectorLoaded = true;
            this.compareByArea = true;
            this.showDetails = true;
            this.seachCriteria = 'Search by Facilities';
            console.log('returned... ' + this.sectorSearchResults.length);
          }
        );
      });

    }


  toggle(): void {
      this.compareByArea = !this.compareByArea;
      if (this.checked.trim().length === 0) {
        this.checked = 'checked';
        this.seachCriteria = 'Search by Area Code'
      } else {
        this.checked = '';
        this.seachCriteria = 'Search by Facilities'
      }
  }

}
