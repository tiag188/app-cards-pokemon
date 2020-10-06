import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
simport { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';
import { ComponentsModule } from './components/components.module';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CardsModule,
    ComponentsModule,
    FilterPipeModule
  ],
  providers: [HttpClient, SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
