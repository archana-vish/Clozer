import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { VideoComponent } from './video/video.component';
import { AreaDetailsComponent } from './area-details/area-details.component';
import { SectorDetailsComponent } from './sector-details/sector-details.component';
import { PersonaliseComponent } from './personalise/personalise.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoComponent,
    AreaDetailsComponent,
    SectorDetailsComponent,
    PersonaliseComponent,
    FeedbackComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
