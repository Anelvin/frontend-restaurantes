import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http:HttpClient) { }


  consultarPlatos(datos){
    return this.http.post('http://localhost:3500/plato',datos);
  }

}
