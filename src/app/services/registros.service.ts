import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  private registrarPlato='';
  constructor(
    private http:HttpClient) { }

  registroPlato(datos){
    /*let headers = new HttpHeaders();
    let token = sessionStorage.getItem('token');
    console.log(token);
    headers.set('Content-type','application/x-www-form-urlencoded');
    headers.set('autorization',token);
    return this.http.post("http://localhost:3500/plato/create",datos,{headers:headers})*/
    const headers = new HttpHeaders('autorization');
    //let token = sessionStorage.getItem('token');
    //headers.set('autorization',token);
    return this.http.post("http://localhost:3500/plato/create",datos, { headers:headers });

  }

  consultarPlatos(){
    return this.http.get('http://localhost:3500/plato');
  }

  
}
