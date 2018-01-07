import { TestBed, inject } from '@angular/core/testing';

import { SaveRecipeService } from './save-recipe.service';

describe('SaveRecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveRecipeService]
    });
  });

  it('should be created', inject([SaveRecipeService], (service: SaveRecipeService) => {
    expect(service).toBeTruthy();
  }));
});
