import { Component } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coordenadas= new FormGroup({
    latitud: new FormControl(''),
    longitud:new FormControl('')
  })
  lista=[{lat: 51.678418,
    lng: 7.809007}]
  google: any;
  title = 'SemiApi';
  lat = 51.678418;
  lng = 7.809007;
  
  recivirCordenadas(){
    console.log(this.coordenadas.value);    
    const {latitud, longitud}= this.coordenadas.value
    this.lista.push({lat: latitud,
      lng: longitud})
    console.log(this.lista)
    console.log(latitud,longitud)    
  }
}
