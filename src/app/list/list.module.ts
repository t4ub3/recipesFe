import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { ListService } from './shared/list.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    HttpClientModule
  ],
  exports: [ListComponent],
  declarations: [ListComponent],
  providers: [ListService]
})
export class ListModule { }
