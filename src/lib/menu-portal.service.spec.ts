import { TestBed } from '@angular/core/testing';

import { MenuPortalService } from './menu-portal.service';

describe('MenuPortalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuPortalService = TestBed.get(MenuPortalService);
    expect(service).toBeTruthy();
  });
});
