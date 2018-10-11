import { TestBed, inject } from '@angular/core/testing';

import { SearchAreaService } from './search-area.service';

describe('SearchAreaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAreaService]
    });
  });

  it('should be created', inject([SearchAreaService], (service: SearchAreaService) => {
    expect(service).toBeTruthy();
  }));
});
