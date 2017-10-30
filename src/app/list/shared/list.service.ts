import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListService {

  constructor(private http: HttpClient) { }

  getRecipesList() {
    return this.http.get('http://localhost:1337/recipes');
  }

}
