import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list/list.component';
import {NewRecipeComponent} from './new-recipe/new-recipe.component';

const routes: Routes = [
  {
    path: 'new-recipe',
    component: NewRecipeComponent
  },
  {
    path: 'recipes-list',
    component: ListComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
