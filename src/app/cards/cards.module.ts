import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { ListComponent } from './list/list.component';
import { ListService } from './list/services/list.service';
import { SortPipe } from '../pipes/sort.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DetailsComponent } from './details/details.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [ListComponent, ListComponent, SortPipe, DetailsComponent],
  exports:[ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    FilterPipeModule,
    MatCardModule,
    MatGridListModule,
    NgxSpinnerModule,
    ComponentsModule
  ],
  providers:[
    ListService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardsModule { }
