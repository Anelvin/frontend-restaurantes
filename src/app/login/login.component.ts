import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Restaurante } from '../models/restaurante.model';
import { HttpRequest } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private direccionURL='http://localhost:3500/restaurante';
  private direccionLogin='http://localhost:3500/restaurante/login'
  private restaurantes:any;
  private usuario:string;
  private password:string;
  private restaurante:string
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.buscarRestaurantes(this.direccionURL)
    .subscribe(resultado=>{
      this.restaurantes=resultado;
    })
  }

  enviar(){
    let datos={
      usuario:this.usuario,
      password:this.password,
      restaurante:this.restaurante 
    }
    this.loginService.login(this.direccionLogin, datos)
    .subscribe(resultado=>{
      console.log(resultado);
    },error=>alert('Ha habido un problema con al entrar'))
  }

}
