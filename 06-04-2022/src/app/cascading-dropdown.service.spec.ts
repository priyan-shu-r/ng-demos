import { TestBed } from '@angular/core/testing';

import { CascadingDropdownService } from './cascading-dropdown.service';

describe('CascadingDropdownService', () => {
  let service: CascadingDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CascadingDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
