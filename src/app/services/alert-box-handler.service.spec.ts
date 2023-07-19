import { TestBed } from '@angular/core/testing';

import { AlertBoxHandlerService } from './alert-box-handler.service';

describe('AlertBoxHandlerService', () => {
  let service: AlertBoxHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertBoxHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
