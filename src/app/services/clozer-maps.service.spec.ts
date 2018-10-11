import { TestBed, inject } from '@angular/core/testing';

import { ClozerMapsService } from './clozer-maps.service';

describe('ClozerMapsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClozerMapsService]
    });
  });

  it('should be created', inject([ClozerMapsService], (service: ClozerMapsService) => {
    expect(service).toBeTruthy();
  }));
});
