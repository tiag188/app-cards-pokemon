import { Component, OnInit } from '@angular/core';
import { ListModel } from './models/list.model';
import { ListService } from './services/list.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listCardFilter: any = { name: '' };
  listCard: ListModel;
  error: any;
  name: any;

  constructor(private router: Router, private route: ActivatedRoute, private listService: ListService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getCards();
  }

  ngOnDestroy(): void {
    this.getCards();
    this.spinner;
  }

  public getCards() {
    this.listService.getCards().subscribe((data: any) => {
      this.listCard = data.cards;
      this.spinner.hide()
    }, (error: any) => {
      this.error = error;
    });
  }

  public gotoCardDetails(url: string, id: string) {
    this.router.navigate([url, id]).then((e) => {
      if (e) {
        console.log("Navigation is successful!" + e);
      } else {
        console.log("Navigation has failed!" + e);
      }
    });
  }


}
