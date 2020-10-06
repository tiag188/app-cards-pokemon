import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './cards/details/details.component';
import { ListComponent } from './cards/list/list.component';

const routes: Routes = [
  { path: "**", component: ListComponent },
  { path: "cards", component: ListComponent },
  { path: "details", component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
