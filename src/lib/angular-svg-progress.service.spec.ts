import { TestBed } from '@angular/core/testing';

import { AngularSvgProgressService } from './angular-svg-progress.service';

describe('AngularSvgProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularSvgProgressService = TestBed.get(AngularSvgProgressService);
    expect(service).toBeTruthy();
  });
});
