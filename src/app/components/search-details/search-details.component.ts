import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.getAreaDetails();
  }

  getAreaDetails(): void {}



}
