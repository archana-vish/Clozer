import {Component, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import { SearchModel } from '../../model/SearchModel';
import {SearchAreaService} from '../../services/search-area.service';
import {SearchAreaModel} from '../../model/SearchAreaModel';
import {Router} from '@angular/router';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
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
  showMap:boolean;
  checked: string;
  checkedMap:string;
  counts : Array<any>;
  seachCriteria: string;
  mapTitle:string;
  @Input() searchModel: SearchModel = new SearchModel();
  @Output() areaSearchResults;
  @Output() sectorSearchResults;
  @Output() outputSearchModel: SearchModel;
  displayedColumns: Array<any>;
  locs: any;
  marker: google.maps.Marker;
  iconUrl: any;
  google: any;
  geocoder: any;
  location: any;


  constructor(private searchAreaService: SearchAreaService,
              private router: Router,
              public mapsApiLoader: MapsAPILoader,
              private zone: NgZone,
              private wrapper: GoogleMapsAPIWrapper) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {

    this.hasLoaded = false;
    this.isLoading = false;

    this.sectorLoaded = false;
    this.sectorLoading = false;

    this.showDetails = false;
    this.showMap = true;

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

    for (let dist = 5; dist <= 30; dist += 5) {
      this.distance.push(dist);
    }

    this.searchModel.minPrice = this.priceRange[0];
    this.searchModel.maxPrice = 650000;
    this.searchModel.timeToTravel = this.time[1];
    this.searchModel.distanceToTravel = this.distance[1];
    this.searchModel.travelMode = 'any';
    this.searchModel.houseType = 'H';

    this.modes = [
      {name: 'Train', value: 'train', checked: true},
      {name: 'Bus', value: 'bus', checked: false},
      {name: 'Cycle', value: 'cycle', checked: false},
      {name: 'Car', value: 'car', checked: false},
      {name: 'Walk', value: 'walk', checked: false}
    ];

    this.locs =
      [
        {'lat':51.4151862, 'lng': 0.07603349999999409},
        {'lat':51.4414439, 'lng': 0.07603349999999409}];


  this.iconUrl = {
      url: '../../../assets/img/logo/icon.png',
      scaledSize: {
        height: 20,
        width: 20
      }
    };
  }

  resetFields() : void {
    this.searchModel.minPrice = this.priceRange[0];
    this.searchModel.maxPrice = 650000;
    this.searchModel.timeToTravel = this.time[1];
    this.searchModel.distanceToTravel = this.distance[1];
    this.searchModel.travelMode = 'any';
    this.searchModel.workPostcode = '';
    this.searchModel.homePostcode = '';
    this.searchModel.houseType = 'H';
  }

  showAreaDetails(areaCode: string): void {
    var infowindow =  new google.maps.InfoWindow({});
    infowindow.setContent(areaCode);
  }


  getAreaSearchResults(): void {

      this.isLoading = true;
      this.hasLoaded = false;
      this.areaSearchResults = [];

      this.transformPostcode(this.searchModel.homePostcode);

    setTimeout( () => {
        this.findLocation(this.searchModel.homePostcode);
        this.searchAreaService.getAreaDetails(this.searchModel).subscribe(
          areaDetails => {
            this.areaSearchResults = areaDetails;
            this.isLoading = false;
            this.hasLoaded = true;
          }
        );
      });
    }

  findLocation(address) {
    if (!this.geocoder) this.geocoder = new google.maps.Geocoder();
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {

      if (status == google.maps.GeocoderStatus.OK) {
        // decompose the result
        if (results[0].geometry.location) {
          this.location = {'lat':results[0].geometry.location.lat(),
          'lng':results[0].geometry.location.lng()};
          this.location.viewport = results[0].geometry.viewport;
        }

      //  this.map.triggerResize();
      } else {
        // alert("Sorry, this search produced no results.");
      }
    })
  }


    getSectorSearchResults(areaDetail: SearchAreaModel): void {

      this.searchModel.areaCode = areaDetail.area_code;
      this.sectorSearchResults = [];
      this.sectorLoading = true;
      this.sectorLoaded = false;

      this.displayedColumns = ['areaName', 'totalScore'];

      setTimeout( () => {
        this.searchAreaService.getSectorDetails(this.searchModel).subscribe(
          sectorDetails => {

            this.sectorLoading = false;
            this.sectorLoaded = true;
            this.compareByArea = true;
            this.showDetails = true;
            this.seachCriteria = 'View by Features';
            this.mapTitle='Hide Map';
            this.sectorSearchResults = sectorDetails;


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
          }
        );
      });

    }


  transformPostcode(postcode):string {
    postcode=postcode.replace(/\s/g,'');
      this.searchModel.homePostcode = postcode.substring(0, postcode.length - 3) + ' ' + postcode.substring(postcode.length - 3);
      return (postcode.substring(0, postcode.length - 3) + ' ' + postcode.substring(postcode.length - 3));
  }


  toggle(): void {
      if (this.compareByArea) {
        this.compareByArea = false;
        this.checked = 'checked';
        this.seachCriteria = 'View by Sectors'
      } else {
        this.compareByArea = true;
        this.checked = '';
        this.seachCriteria = 'View by Features'
      }
  }

  toggleMap(): void {
    if (this.showMap) {
      this.mapTitle = 'Show Map';
      this.checkedMap = '';
      this.showMap = false;
    } else {
      this.mapTitle = 'Hide Map';
      this.checkedMap = 'checked';
      this.showMap = true;
    }
  }
}
