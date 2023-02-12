import { TestBed } from '@angular/core/testing';

import { DetailsHttpService } from './details-http.service';

describe('DetailsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsHttpService = TestBed.get(DetailsHttpService);
    expect(service).toBeTruthy();
  });
});
