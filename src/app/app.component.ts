import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leagueOfLegend';

  storedPersonnages=[];

  /*
  onPersonnageAdded(event) {
    this.storedPersonnages.push(event);
  }
  */
}
