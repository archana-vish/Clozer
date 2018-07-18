import { Injectable } from '@angular/core';
import { SearchAreaModel } from '../model/SearchAreaModel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchAreaService {

  serverStr: string;

  searchAreaModel: SearchAreaModel[];

  // = [{
  //   areaCode: 'BR7',
  //   areaName: 'Chislehurst, Elmstead',
  //   averageDetachedHousePrice: 1048624.0,
  //   averageFlatPrice: 375343.5,
  //   averageJourneyTime: 8.0,
  //   averageSemiDetachedHousePrice: 559424.0,
  //   distanceToWork: 2772.0,
  //   facilitiesScore: 109.0,
  //   goodSchools: 0,
  //   highestHousePrice: 0,
  //   lowestHousePrice: 0,
  //   outstandingSchools: 0,
  //   poorSchools: 0,
  //   postcode: 'BR7 5NN',
  //   primarySchools: 4,
  //   privateSchools: 3,
  //   safetyScore: 50,
  //   schoolScore: 157.0,
  //   secondarySchools: 3,
  //   sectorCode: '',
  //   stations: 'Chislehurst, Elmstead Woods',
  //   stationsCount: 2,
  //   totalSchools: 10,
  //   travelScore: 86.0,
  //   facilitiesScoreRating: 'GOLD',
  //   safetyScoreRating: 'PLATINUM',
  //   travelScoreRating: 'PLATINUM',
  //   schoolScoreRating: 'GOLD',
  //   totalScore: 350
  // }];




  constructor(private http: HttpClient) {
    this.serverStr = this.getAppServer();
  }

  public getAppServer(): string {
    return environment.appServer;
  }


  getAreaDetails(): Observable<SearchAreaModel[]> {
    console.log('app string :: ' + this.serverStr);
    // return of(this.searchAreaModel);
    return this.http.get<SearchAreaModel[]>(this.serverStr + '/getAreaDetails?work_post_code=BR7+6JN&additional_post_code=SE12+8AW&max_journey_time=60&max_journey_distance=5000&min_house_price=300000&max_house_price=1100000&pref_travel_mode=car');
  }

}
