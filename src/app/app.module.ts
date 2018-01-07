import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ListModule } from './list/list.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SaveRecipeService} from './shared/save-recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NewRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    ReactiveFormsModule
  ],
  providers: [SaveRecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
