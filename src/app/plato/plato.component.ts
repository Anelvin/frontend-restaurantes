import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.scss']
})
export class PlatoComponent implements OnInit {

  private restaurante=null;
  private token=null;
  private platos=null;
  constructor(
    private _router:ActivatedRoute,
    private router:Router,
    private consultaService:ConsultasService) { }

  ngOnInit() {
    this.restaurante=this._router.snapshot.paramMap.get('id');
    this.token = sessionStorage.getItem('token');
    let datos ={
      token: this.token,
      restaurante: this.restaurante
    }
    this.consultaService.consultarPlatos(datos)
    .subscribe(resultado=>{
      this.platos = resultado;
      console.log(this.platos);
    })
  }

  agregarPlato(){
    this.router.navigate(['/restaurante/'+this.restaurante+'/plato/registrar']);
  }

  detalle(platoID){
    this.router.navigate(['/restaurante/'+this.restaurante+'/plato/'+platoID]);
  }

}
