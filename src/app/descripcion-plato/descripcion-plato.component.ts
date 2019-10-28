import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultasService } from '../services/consultas.service';
import { RegistrosService } from '../services/registros.service';

@Component({
  selector: 'app-descripcion-plato',
  templateUrl: './descripcion-plato.component.html',
  styleUrls: ['./descripcion-plato.component.scss']
})
export class DescripcionPlatoComponent implements OnInit {

  private restaurante:string;
  private platoID:string;
  private plato:Object;
  private ingredientes:Array<Object>;
  private ingrediente:string;
  private ingredientesAdd=null;

  constructor(
    private router:Router,
    private _router:ActivatedRoute,
    private consultaService:ConsultasService,
    private registroService:RegistrosService
  ) { }

  ngOnInit() {
    this.restaurante = this._router.snapshot.paramMap.get('id');
    this.platoID = this._router.snapshot.paramMap.get('platoID');
    console.log(this.platoID);
    let token = sessionStorage.getItem('token');
    let datos = {
      restaurante:this.restaurante,
      token: token,
    }
    this.consultaService.consultarPlato(this.platoID,datos)
    .subscribe(resultado=>{
      console.log(resultado);
      this.plato = resultado;
      this.ingredientesAdd = resultado['ingredientes'];
    })
    this.consultaService.consultarRestaurante(this.restaurante)
    .subscribe(resultado=>{
      this.ingredientes = resultado['despensa'];
    })
  }

  enviar(){
    let token = sessionStorage.getItem('token');
    let datos={
      restaurante:this.restaurante,
      token:token,
      ingrediente:this.ingrediente
    }
    this.registroService.registrarIngrediente(this.platoID, datos)
    .subscribe(resultado=>{
      console.log(resultado);
      this.consultaService.consultarPlato(this.platoID,datos)
      .subscribe(resultado=>{
        console.log(resultado);
        this.plato = resultado;
        this.ingredientesAdd = resultado['ingredientes'];
      })
      this.consultaService.consultarRestaurante(this.restaurante)
      .subscribe(resultado=>{
        this.ingredientes = resultado['despensa'];
      })
    })
  }

}
