import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { FormsModule } from '@angular/forms';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { AreaDetailsComponent } from './area-details/area-details.component';
import { SectorDetailsComponent } from './sector-details/sector-details.component';
import { PersonaliseComponent } from './personalise/personalise.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';
import { SearchDetailsComponent } from './search-details/search-details.component';
import {SearchAreaService} from '../services/search-area.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {DataTableModule} from 'angular5-data-table';
import {MatTableModule} from '@angular/material/table';
import {HousePricePipe} from '../pipes/HousePricePipe';
import {ClozerErrorHandler} from '../services/ClozerErrorHandler';
import { AreamapsComponent } from './areamaps/areamaps.component';
import { FindaddressonmapComponent } from './findaddressonmap/findaddressonmap.component';
import { MultiplepinsComponent } from './multiplepins/multiplepins.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoComponent,
    AreaDetailsComponent,
    SectorDetailsComponent,
    PersonaliseComponent,
    FeedbackComponent,
    FaqComponent,
    SearchDetailsComponent,
    LandingpageComponent,
    HousePricePipe,
    AreamapsComponent,
    FindaddressonmapComponent,
    MultiplepinsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    DataTableModule.forRoot(),
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxS2trHOjgbAMnJsJZfjK14NKJ75eDj44'
    })
  ],
  providers: [SearchAreaService, {provide: ErrorHandler, useClass: ClozerErrorHandler}, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
