import { TestBed } from '@angular/core/testing';

import { AppigatorInitService } from './appigator-init.service';

describe('AppigatorInitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppigatorInitService = TestBed.get(AppigatorInitService);
    expect(service).toBeTruthy();
  });
});
