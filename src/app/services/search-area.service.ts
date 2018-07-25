import { Injectable } from '@angular/core';
import { SearchAreaModel } from '../model/SearchAreaModel';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {SearchSectorModel} from '../model/SearchSectorModel';

@Injectable()
export class SearchAreaService {

  serverStr: string;

  searchAreaModel: SearchAreaModel[] =
   [{
    areaCode: 'BR7',
    areaName: 'Chislehurst, Elmstead',
    averageDetachedHousePrice: 1048624.0,
    averageFlatPrice: 375343.5,
    averageJourneyTime: 8.0,
    averageSemiDetachedHousePrice: 559424.0,
    distanceToWork: 2772.0,
    facilitiesScore: 109.0,
    goodSchools: 0,
    highestHousePrice: 0,
    lowestHousePrice: 0,
    outstandingSchools: 0,
    poorSchools: 0,
    postcode: 'BR7 5NN',
    primarySchools: 4,
    privateSchools: 3,
    safetyScore: 50,
    schoolScore: 157.0,
    secondarySchools: 3,
    sectorCode: '',
    stations: 'Chislehurst, Elmstead Woods',
    stationsCount: 2,
    totalSchools: 10,
    travelScore: 86.0,
    facilitiesScoreRating: 'GOLD',
    safetyScoreRating: 'PLATINUM',
    travelScoreRating: 'PLATINUM',
    schoolScoreRating: 'GOLD',
    totalScore: 350
  },{
     areaCode: 'SE9',
     areaName: 'Eltham, Mottingham, New Eltham, Falconwood, Chinbrook, Longlands, Kidbrooke',
     averageDetachedHousePrice: 719388.0,
     averageFlatPrice: 269004.0,
     averageJourneyTime: 10.3,
     averageSemiDetachedHousePrice: 491503.0,
     distanceToWork: 2701.0,
     facilitiesScore: 215.0,
     goodSchools: 0,
     highestHousePrice: 0,
     lowestHousePrice: 0,
     outstandingSchools: 0,
     poorSchools: 0,
     postcode: 'SE9 6SL',
     primarySchools: 19,
     privateSchools: 4,
     safetyScore: 100,
     schoolScore: 148.0,
     secondarySchools: 4,
     sectorCode: '',
     stations: 'Eltham, Falconwood, Mottingham, New Eltham',
     stationsCount: 4,
     totalSchools: 27,
     travelScore: 104.0,
     facilitiesScoreRating: 'PLATINUM',
     safetyScoreRating: 'PLATINUM',
     travelScoreRating: 'PLATINUM',
     schoolScoreRating: 'GOLD',
     totalScore: 375
   },{
     areaCode: 'BR1',
     areaName: 'Bromley, Bickley, Downham',
     averageDetachedHousePrice: 950991.0,
     averageFlatPrice: 343179.0,
     averageJourneyTime: 8.6166666667,
     averageSemiDetachedHousePrice: 547071.0,
     distanceToWork: 4004.0,
     facilitiesScore: 180.0,
     goodSchools: 0,
     highestHousePrice: 0,
     lowestHousePrice: 0,
     outstandingSchools: 0,
     poorSchools: 0,
     postcode: 'BR1 2EB',
     primarySchools: 12,
     privateSchools: 5,
     safetyScore: 100,
     schoolScore: 245.0,
     secondarySchools: 2,
     sectorCode: '',
     stations: 'Bickley, Bromley North, Bromley South, Sundridge Park',
     stationsCount: 4,
     totalSchools: 19,
     travelScore: 93.0,
     facilitiesScoreRating: 'PLATINUM',
     safetyScoreRating: 'PLATINUM',
     travelScoreRating: 'PLATINUM',
     schoolScoreRating: 'PLATINUM',
     totalScore: 400
   }];


  searchSectorModel: SearchSectorModel[] =
    [{
      areaCode: 'BR7',
      areaName: 'Chislehurst, Elmstead',
      averageDetachedHousePrice: 1048624.0,
      averageFlatPrice: 375343.5,
      averageJourneyTime: 8.0,
      averageSemiDetachedHousePrice: 559424.0,
      distanceToWork: 2772.0,
      facilitiesScore: 109.0,
      goodSchools: 0,
      highestHousePrice: 0,
      lowestHousePrice: 0,
      outstandingSchools: 0,
      poorSchools: 0,
      postcode: 'BR7 5NN',
      primarySchools: 4,
      privateSchools: 3,
      safetyScore: 50,
      schoolScore: 157.0,
      secondarySchools: 3,
      sectorCode: 'se9 2',
      stations: 'Chislehurst, Elmstead Woods',
      stationsCount: 2,
      totalSchools: 10,
      travelScore: 86.0,
      facilitiesScoreRating: 'GOLD',
      safetyScoreRating: 'PLATINUM',
      travelScoreRating: 'PLATINUM',
      schoolScoreRating: 'GOLD',
      totalScore: 350
    },{
      areaCode: 'SE9',
      areaName: 'Eltham, Mottingham, New Eltham, Falconwood, Chinbrook, Longlands, Kidbrooke',
      averageDetachedHousePrice: 719388.0,
      averageFlatPrice: 269004.0,
      averageJourneyTime: 10.3,
      averageSemiDetachedHousePrice: 491503.0,
      distanceToWork: 2701.0,
      facilitiesScore: 215.0,
      goodSchools: 0,
      highestHousePrice: 0,
      lowestHousePrice: 0,
      outstandingSchools: 0,
      poorSchools: 0,
      postcode: 'SE9 6SL',
      primarySchools: 19,
      privateSchools: 4,
      safetyScore: 100,
      schoolScore: 148.0,
      secondarySchools: 4,
      sectorCode: 'se9 6',
      stations: 'Eltham, Falconwood, Mottingham, New Eltham',
      stationsCount: 4,
      totalSchools: 27,
      travelScore: 104.0,
      facilitiesScoreRating: 'PLATINUM',
      safetyScoreRating: 'PLATINUM',
      travelScoreRating: 'PLATINUM',
      schoolScoreRating: 'GOLD',
      totalScore: 375
    },{
      areaCode: 'BR1',
      areaName: 'Bromley, Bickley, Downham',
      averageDetachedHousePrice: 950991.0,
      averageFlatPrice: 343179.0,
      averageJourneyTime: 8.6166666667,
      averageSemiDetachedHousePrice: 547071.0,
      distanceToWork: 4004.0,
      facilitiesScore: 180.0,
      goodSchools: 0,
      highestHousePrice: 0,
      lowestHousePrice: 0,
      outstandingSchools: 0,
      poorSchools: 0,
      postcode: 'BR1 2EB',
      primarySchools: 12,
      privateSchools: 5,
      safetyScore: 100,
      schoolScore: 245.0,
      secondarySchools: 2,
      sectorCode: 'br1 2',
      stations: 'Bickley, Bromley North, Bromley South, Sundridge Park',
      stationsCount: 4,
      totalSchools: 19,
      travelScore: 93.0,
      facilitiesScoreRating: 'PLATINUM',
      safetyScoreRating: 'PLATINUM',
      travelScoreRating: 'PLATINUM',
      schoolScoreRating: 'PLATINUM',
      totalScore: 400
    }];




  constructor(private http: HttpClient) {
    this.serverStr = this.getAppServer();
  }

  public getAppServer(): string {
    return environment.appServer;
  }


  getAreaDetails(): Observable<SearchAreaModel[]> {
    // console.log('app string :: ' + this.serverStr);
    // console.log(this.searchAreaModel);
     return of(this.searchAreaModel);
    //return this.http.get<SearchAreaModel[]>(this.serverStr + '/getAreaDetails?work_post_code=BR7+6JN&additional_post_code=SE12+8AW&max_journey_time=60&max_journey_distance=5000&min_house_price=300000&max_house_price=1100000&pref_travel_mode=car');
  }

  getSectorDetails(): Observable<SearchSectorModel[]> {
    // console.log('app string :: ' + this.serverStr);
    // console.log(this.searchAreaModel);
    return of(this.searchSectorModel);
    //return this.http.get<SearchAreaModel[]>(this.serverStr + '/getAreaDetails?work_post_code=BR7+6JN&additional_post_code=SE12+8AW&max_journey_time=60&max_journey_distance=5000&min_house_price=300000&max_house_price=1100000&pref_travel_mode=car');
  }
}
