import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SearchDetailsComponent} from './search-details/search-details.component';
import {LandingpageComponent} from './landingpage/landingpage.component';


const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent},
  { path: 'areaDetails', component: SearchDetailsComponent},
  { path: 'searchArea', component: SearchDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
