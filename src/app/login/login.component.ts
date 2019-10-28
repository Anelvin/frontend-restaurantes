import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';


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
  constructor(private loginService:LoginService, private router:Router) { }

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
        sessionStorage.setItem("token",resultado['access_token'])
        this.router.navigate(['/restaurante/'+this.restaurante+'/plato'])
    },error=>alert('Error, verifica tus datos'))
  }

}
