import { Component, OnInit } from '@angular/core';
import { ListModel } from './models/list.model';
import { ListService } from './services/list.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { version } from '../../../../package.json';
import { ListCardModel } from './models/ListCard.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  version: string = version;
  listCardFilter: any = { name: '' };
  listCard: ListCardModel;
  listCards: ListCardModel[];
  error: any;
  name: any;

  constructor(private _router: Router, private _listService: ListService, private _spinner: NgxSpinnerService) {
    this.version = "10.1.4";
    this._spinner.show();
    this.getCards();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.getCards();
    this._spinner;
  }

  public getCards() {
    this._listService.getCards().subscribe((data: ListModel) => {
      this.listCard = data.cards;
      this._spinner.hide()
    }, (error: any) => {
      this.error = error;
    });
  }

  public gotoCardDetails(url: string, id: string) {
    this._router.navigate([url, id]).then((e) => {
      if (e) {
        console.log("Navigation is successful!" + e);
      } else {
        console.log("Navigation has failed!" + e);
      }
    });
  }

}
