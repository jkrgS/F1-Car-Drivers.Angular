import { TestBed } from '@angular/core/testing';

import { DriversListService } from './drivers-list.service';

describe('DriversListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriversListService = TestBed.get(DriversListService);
    expect(service).toBeTruthy();
  });
});
