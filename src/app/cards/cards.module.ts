import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { ListComponent } from './list/list.component';
import { ListService } from './list/services/list.service';
import { SortPipe } from '../pipes/sort.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [ListComponent, ListComponent, SortPipe],
  exports:[ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
    MatCardModule,
    MatGridListModule
  ],
  providers:[
    ListService
  ]
})
export class CardsModule { }
