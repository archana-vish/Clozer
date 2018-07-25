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
  hasLoaded: boolean;
  isLoading: boolean;
  sectorLoaded: boolean;
  sectorLoading: boolean;
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

    for (let i = 50000; i < 200000; i += 10000) {
      this.priceRange.push(i);
    }

    for ( let tc = 10; tc < 200 ; tc += 10) {
      this.time.push(tc);
    }

    for (let dist = 5; dist < 100; dist += 5) {
      this.distance.push(dist);
    }

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
        this.searchAreaService.getAreaDetails().subscribe(
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
            this.sectorSearchResults = sectorDetails;
            this.sectorLoading = false;
            this.sectorLoaded = true;
            console.log('returned... ' + this.sectorSearchResults.length);
          }
        );
      });

    }



}
