import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  priceRange: Array<any> = new Array(20);


  constructor() { }

  ngOnInit() {
    for (var j = 0, i = 50000; j < 20; i += 10000) {
      this.priceRange[j] = i;
      j++;
    }
  }




}
