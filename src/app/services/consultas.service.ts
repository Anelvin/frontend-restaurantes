import { Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }


  consultarPlatos(datos){
    return this.http.post('http://localhost:3500/plato',datos);
  }

  consultarProductosAlmacen(){
    return this.http.get('http://localhost:3500/producto');
  }

  consultarRestaurante(restaurante){
    return this.http.get('http://localhost:3500/restaurante/'+restaurante);
  }

  consultaRestaurantes(){
    return this.http.get('http://localhost:3500/restaurante');
  }

  consultarPlato(platoID,datos){
    return this.http.post('http://localhost:3500/plato/'+platoID,datos);
  }
}
