import { TestBed } from '@angular/core/testing';

import { UseMainSearch } from './use-main-search.service';

describe('UseMainSearch', () => {
  let service: UseMainSearch;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseMainSearch);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
