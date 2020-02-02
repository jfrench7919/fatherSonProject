import { TestBed } from '@angular/core/testing';

import { PlaneBuilderService } from './plane-builder.service';

describe('PlaneBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaneBuilderService = TestBed.get(PlaneBuilderService);
    expect(service).toBeTruthy();
  });
});
