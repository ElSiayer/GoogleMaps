import { AgmMap } from '@agm/core';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  @ViewChild("googleMap") agmMap: AgmMap;
  direccion= new FormGroup({
    sectorText: new FormControl(''),
    ciudadText: new FormControl(''),
    paisText: new FormControl('')
  })  
  lista=[{lat: 51.678418,
    lng: 7.809007}]
  google: any;
  title = 'Web services';
  
  protected map: any;
  constructor() {}
  defaultCenter = {lat: 55.5815245, lng: 36.8251383};
  currentCenter = Object.assign({}, this.defaultCenter);
  zoom = 3;

  geocode(address: string): Promise<any> {
    console.log(address);    
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode(
        {
          address: address
        },
        (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            resolve(results[0]);
          } else {
            reject(new Error(status));
          }
        }
      );
    });
  }
  
findPlace() {
  const {sectorText,ciudadText,paisText}=this.direccion.value
  var aux=sectorText+","+ciudadText+","+paisText;
  this.zoom = 14;
  this.geocode(aux).then(place => {
    this.currentCenter = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
  })
  .catch(err => {
    console.log(err);
  });
}  
}
