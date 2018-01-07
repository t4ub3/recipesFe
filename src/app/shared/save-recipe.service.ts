import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SaveRecipeService {

  constructor(private http: HttpClient) { }

  saveRecipe(recipe) {
    return this.http.post('http://localhost:1337/recipe', recipe);
  }

}
