import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  private restaurante:string;
  private mostrarMesas:boolean;
  private mostrarPlatos:boolean;
  private restaurantes=null;
  private restauranteSeleccionado=false;
  private mesas=null;
  private platos=null;

  constructor(
    private consultaService:ConsultasService
  ) { }

  ngOnInit() {
    this.consultaService.consultaRestaurantes()
    .subscribe(resultado=>{
      this.restaurantes = resultado;
    })
  }

  buscarMesas(){
    this.restauranteSeleccionado=true;
    this.consultaService.consultarRestaurante(this.restaurante)
    .subscribe(resultado=>{
      this.mesas=resultado['mesas'];
      this.mostrarMesas=true;
      this.mostrarPlatos=false;
    }
    )
  }

  buscarPlatos(){
    let datos={
      restaurante:this.restaurante
    }
    this.consultaService.consultarPlatos(datos)
    .subscribe(resultado=>{
      console.log(resultado);
      this.mostrarMesas=false;
      this.mostrarPlatos=true;
      this.platos=resultado;
    })
  }

}
