import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cards-pokemon-app';

  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

}
