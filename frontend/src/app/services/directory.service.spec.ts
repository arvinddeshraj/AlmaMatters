import { TestBed } from '@angular/core/testing';

import { DirectoryService } from './directory.service';

describe('DirectoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectoryService = TestBed.get(DirectoryService);
    expect(service).toBeTruthy();
  });
});
