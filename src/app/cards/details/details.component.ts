import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string;
  imageUrlHi: string;
  imageUrl: string;
  name: string;
  type: string[];
  attacks: string[];
  resistance: string[];
  weakness: string[];
  card: string;
  error: any;

  constructor(private _location: Location, private _route: ActivatedRoute, private _detailService: DetailsService, private _spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.getCard(params.get('id'));
    })
  }

  ngOnDestroy(): void {
    this.getCard(this.id);
  }
  backPage() {
    this._location.back();
  }
  //get card pokemon by id
  public getCard(id: string) {
    this._spinner.show();
    this.id = id;
    this._detailService.getCard(id).subscribe((data: any) => {
     
      this.card = data.card;
      this.imageUrlHi = data.card.imageUrlHiRes;
      this.imageUrl = data.card.imageUrl;
      this.name = data.card.name;
      this.type = data.card.types;
      this.attacks = data.card.attacks;
      this.resistance = data.card.resistances;
      this.weakness = data.card.weaknesses;
      this._spinner.hide();
    }, (error: any) => {
      this.error = error;
    });
  }
}
