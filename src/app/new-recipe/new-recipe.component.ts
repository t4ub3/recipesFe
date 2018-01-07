import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {SaveRecipeService} from '../shared/save-recipe.service';

@Component({
  selector: 'recipes-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.less']
})
export class NewRecipeComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private saveRecipeService: SaveRecipeService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      description: [''],
      // ingredients: this.formBuilder.group({
      //   name: ['', Validators.required],
      //   amountPerPerson: ['', Validators.required]
      // })
    });
  }

  saveRecipe(recipe){
    console.log(recipe);
    this.saveRecipeService.saveRecipe(recipe).subscribe(resultJson => console.log(resultJson));
  }
}
