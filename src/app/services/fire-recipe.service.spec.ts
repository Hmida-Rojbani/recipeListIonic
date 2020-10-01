import { TestBed } from '@angular/core/testing';

import { FireRecipeService } from './fire-recipe.service';

describe('FireRecipeService', () => {
  let service: FireRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
