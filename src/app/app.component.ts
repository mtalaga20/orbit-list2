import { Satellite } from './satellite';
import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
          let satellite;
          let fetchedSatellites = data.satellites;
          fetchedSatellites.forEach(element => {
          
            satellite = new Satellite(element.name, element.type, element.launchDate, element.orbitType, element.operational);
            this.sourceList.push(satellite);
          });
         
 
       }.bind(this));
    }.bind(this));
  }
}
