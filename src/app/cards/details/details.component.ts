import { Component, OnInit } from '@angular/core';
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
  card: string;
  error: any;

  constructor(private route: ActivatedRoute,private detailService: DetailsService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getCard(params.get('id'));
    })
  }

  public getCard(id: string) {
    this.id = id;
    this.detailService.getCard(id).subscribe((data: any) => {
      this.card = data.card;

      console.log("DAta:" +data);
      console.log("CARD:" + this.card);
      this.spinner.hide();
    }, (error: any) => {
      this.error = error;
    });
  }
}
