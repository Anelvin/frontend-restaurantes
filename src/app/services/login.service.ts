import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

   buscarRestaurantes(direccionURL:string){
    return this.http.get(direccionURL);
  }

  login(direccionURL:string,datos){
    return this.http.post(direccionURL,datos);
  }
}
