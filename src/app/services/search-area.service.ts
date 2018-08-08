import { Injectable } from '@angular/core';
import { SearchAreaModel } from '../model/SearchAreaModel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SearchSectorModel} from '../model/SearchSectorModel';
import {SearchModel} from '../model/SearchModel';

@Injectable()
export class SearchAreaService {

  serverStr: string;

  searchAreaModel: SearchAreaModel[]
    =
   [{
     area_code: 'BR7',
    area_name: 'Chislehurst, Elmstead',
    average_detached_house_price: 1048624.0,
    average_flat_price: 375343.5,
    average_journey_time: 8.0,
    average_semi_detached_house_price: 559424.0,
    distance_to_work: 2772.0,
    facilities_score: 109.0,
    good_schools: 0,
    highest_house_price: 0,
    lowest_house_price: 0,
    outstanding_schools: 0,
    poor_schools: 0,
    postcode: 'BR7 5NN',
    primary_schools: 4,
    private_schools: 3,
    safety_score: 50,
    school_score: 157.0,
    secondary_schools: 3,
    sector_code: '',
    stations: 'Chislehurst, Elmstead Woods',
    stations_count: 2,
    total_schools: 10,
    travel_score: 86.0,
    facilities_score_rating: 'GOLD',
    safety_score_rating: 'PLATINUM',
    travel_score_rating: 'PLATINUM',
    school_score_rating: 'GOLD',
    total_score: 350
  },{
     area_code: 'SE9',
     area_name: 'Eltham, Mottingham, New Eltham, Falconwood, Chinbrook, Longlands, Kidbrooke',
     average_detached_house_price: 719388.0,
     average_flat_price: 269004.0,
     average_journey_time: 10.3,
     average_semi_detached_house_price: 491503.0,
     distance_to_work: 2701.0,
     facilities_score: 215.0,
     good_schools: 0,
     highest_house_price: 0,
     lowest_house_price: 0,
     outstanding_schools: 0,
     poor_schools: 0,
     postcode: 'SE9 6SL',
     primary_schools: 19,
     private_schools: 4,
     safety_score: 100,
     school_score: 148.0,
     secondary_schools: 4,
     sector_code: '',
     stations: 'Eltham, Falconwood, Mottingham, New Eltham',
     stations_count: 4,
     total_schools: 27,
     travel_score: 104.0,
     facilities_score_rating: 'PLATINUM',
     safety_score_rating: 'PLATINUM',
     travel_score_rating: 'PLATINUM',
     school_score_rating: 'GOLD',
     total_score: 375
   },{
     area_code: 'BR1',
     area_name: 'Bromley, Bickley, Downham',
     average_detached_house_price: 950991.0,
     average_flat_price: 343179.0,
     average_journey_time: 8.6166666667,
     average_semi_detached_house_price: 547071.0,
     distance_to_work: 4004.0,
     facilities_score: 180.0,
     good_schools: 0,
     highest_house_price: 0,
     lowest_house_price: 0,
     outstanding_schools: 0,
     poor_schools: 0,
     postcode: 'BR1 2EB',
     primary_schools: 12,
     private_schools: 5,
     safety_score: 100,
     school_score: 245.0,
     secondary_schools: 2,
     sector_code: '',
     stations: 'Bickley, Bromley North, Bromley South, Sundridge Park',
     stations_count: 4,
     total_schools: 19,
     travel_score: 93.0,
     facilities_score_rating: 'PLATINUM',
     safety_score_rating: 'PLATINUM',
     travel_score_rating: 'PLATINUM',
     school_score_rating: 'PLATINUM',
     total_score: 400
   }];


  searchSectorModel: SearchSectorModel[]
  =
    [{
      area_code: 'BR7',
      area_name: 'Chislehurst, Elmstead',
      average_detached_house_price: 1048624.0,
      average_flat_price: 375343.5,
      average_journey_time: 8.0,
      average_semi_detached_house_price: 559424.0,
      distance_to_work: 2772.0,
      facilities_score: 109.0,
      good_schools: 0,
      highest_house_price: 0,
      lowest_house_price: 0,
      outstanding_schools: 0,
      poor_schools: 0,
      postcode: 'BR7 5NN',
      primary_schools: 4,
      private_schools: 3,
      safety_score: 50,
      school_score: 157.0,
      secondary_schools: 3,
      sector_code: 'se9 2',
      sector_name: 'Eltham South',
      stations: 'Chislehurst, Elmstead Woods',
      stations_count: 2,
      total_schools: 10,
      travel_score: 86.0,
      facilities_score_rating: 'GOLD',
      facilities_score_stars: 3,
      facilities_stars: [],
      facilities_grey_stars: [],
      safety_score_rating: 'PLATINUM',
      safety_score_stars: 4,
      safety_stars: [],
      safety_grey_stars: [],
      travel_score_rating: 'PLATINUM',
      travel_score_stars: 4,
      travel_stars: [],
      travel_grey_stars: [],
      school_score_rating: 'GOLD',
      school_score_stars: 3,
      school_stars: [],
      school_grey_stars: [],
      total_score: 350
    },{
      area_code: 'SE9',
      area_name: 'Eltham, Mottingham, New Eltham, Falconwood, Chinbrook, Longlands, Kidbrooke',
      average_detached_house_price: 719388.0,
      average_flat_price: 269004.0,
      average_journey_time: 10.3,
      average_semi_detached_house_price: 491503.0,
      distance_to_work: 2701.0,
      facilities_score: 215.0,
      good_schools: 0,
      highest_house_price: 0,
      lowest_house_price: 0,
      outstanding_schools: 0,
      poor_schools: 0,
      postcode: 'SE9 6SL',
      primary_schools: 19,
      private_schools: 4,
      safety_score: 100,
      school_score: 148.0,
      secondary_schools: 4,
      sector_code: 'se9 6',
      sector_name: 'Eltham South',
      stations: 'Eltham, Falconwood, Mottingham, New Eltham',
      stations_count: 4,
      total_schools: 27,
      travel_score: 104.0,
      facilities_score_rating: 'GOLD',
      facilities_score_stars: 3,
      facilities_stars: [],
      facilities_grey_stars: [],
      safety_score_rating: 'PLATINUM',
      safety_score_stars: 4,
      safety_stars: [],
      safety_grey_stars: [],
      travel_score_rating: 'PLATINUM',
      travel_score_stars: 4,
      travel_stars: [],
      travel_grey_stars: [],
      school_score_rating: 'GOLD',
      school_score_stars: 3,
      school_stars: [],
      school_grey_stars: [],
      total_score: 375
    },{
      area_code: 'BR1',
      area_name: 'Bromley, Bickley, Downham',
      average_detached_house_price: 950991.0,
      average_flat_price: 343179.0,
      average_journey_time: 8.6166666667,
      average_semi_detached_house_price: 547071.0,
      distance_to_work: 4004.0,
      facilities_score: 180.0,
      good_schools: 0,
      highest_house_price: 0,
      lowest_house_price: 0,
      outstanding_schools: 0,
      poor_schools: 0,
      postcode: 'BR1 2EB',
      primary_schools: 12,
      private_schools: 5,
      safety_score: 100,
      school_score: 245.0,
      secondary_schools: 2,
      sector_code: 'br1 2',
      sector_name: 'Bromley',
      stations: 'Bickley, Bromley North, Bromley South, Sundridge Park',
      stations_count: 4,
      total_schools: 19,
      travel_score: 93.0,
      facilities_score_rating: 'GOLD',
      facilities_score_stars: 3,
      facilities_stars: [],
      facilities_grey_stars: [],
      safety_score_rating: 'PLATINUM',
      safety_score_stars: 4,
      safety_stars: [],
      safety_grey_stars: [],
      travel_score_rating: 'PLATINUM',
      travel_score_stars: 4,
      travel_stars: [],
      travel_grey_stars: [],
      school_score_rating: 'GOLD',
      school_score_stars: 3,
      school_stars: [],
      school_grey_stars: [],
      total_score: 400
    }];




  constructor(private http: HttpClient) {
    this.serverStr = this.getAppServer();
  }

  public getAppServer(): string {
    return environment.appServer;
  }


  getAreaDetails(searchModel: SearchModel): Observable<SearchAreaModel[]> {
    // console.log('app string :: ' + this.serverStr);
    // console.log(this.searchAreaModel);
    console.log('in service ' + searchModel.minPrice + ':' + searchModel.maxPrice + ':' + searchModel.homePostcode + ':' + searchModel.workPostcode
    + ':' + searchModel.timeToTravel + ':' + searchModel.distanceToTravel + ':' + searchModel.travelMode);
    return of(this.searchAreaModel);
    //  return this.http.get<SearchAreaModel[]>(this.serverStr +
    //    '/getAreaDetails?work_post_code=BR7+6JN'+
    //     '&additional_post_code=SE12+8AW'+
    //     '&max_journey_time=' + searchModel.timeToTravel +
    //     '&max_journey_distance=' + searchModel.distanceToTravel +
    //     '&min_house_price=' + searchModel.minPrice +
    //     '&max_house_price=' + searchModel.maxPrice +
    //     '&pref_travel_mode=' + searchModel.travelMode);
  }

  getSectorDetails(): Observable<SearchSectorModel[]> {
    // console.log('app string :: ' + this.serverStr);
    // console.log(this.searchAreaModel);
    return of(this.searchSectorModel);
    //return this.http.get<SearchSectorModel[]>(this.serverStr + '/getSectorDetails?work_post_code=BR7+6JN&additional_post_code=SE12+8AW&max_journey_time=60&max_journey_distance=5000&min_house_price=300000&max_house_price=1100000&pref_travel_mode=car&area_code=SE9');
  }
}
