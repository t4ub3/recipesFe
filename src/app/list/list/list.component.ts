import { Component, OnInit } from '@angular/core';
import {ListService} from '../shared/list.service';

@Component({
  selector: 'recipes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  recipesList;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getRecipesList().subscribe(resultJson => this.recipesList = resultJson);
  }

}
