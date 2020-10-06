import { Component, OnInit } from '@angular/core';
import { ListModel } from './models/list.model';
import { ListService } from './services/list.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listCardFilter: any = { name: '' };
  listCard: ListModel;
  error: any;

  constructor(private detailService: ListService, private spinner: NgxSpinnerService) { 
   

  }

  ngOnInit(): void {
    this.spinner.show();
    this.getCards();
  }

  ngOnDestroy(): void {
    this.getCards();
  }

  public getCards() {
    this.detailService.getCards().subscribe((data: any) => {
      this.listCard = data.cards;
      this.spinner.hide();
      console.log("Pokémons Array: ", data.cards);
    }, (error: any) => {
      this.error = error;
      console.error("Errors: ", error);
    });
  }

}
