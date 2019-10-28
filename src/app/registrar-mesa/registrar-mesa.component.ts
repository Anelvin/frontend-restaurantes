import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrosService } from '../services/registros.service';

@Component({
  selector: 'app-registrar-mesa',
  templateUrl: './registrar-mesa.component.html',
  styleUrls: ['./registrar-mesa.component.scss']
})
export class RegistrarMesaComponent implements OnInit {

  private restaurante:string;
  private nombreMesa:string;
  constructor(
    private router:Router,
    private _router:ActivatedRoute,
    private registroService:RegistrosService
  ) { }

  ngOnInit() {
    this.restaurante = this._router.snapshot.paramMap.get('id');

  }

  enviar(){
    let datos={
      restaurante:this.restaurante,
      nombre:this.nombreMesa
    }
    this.registroService.registrarMesaRestaurante(datos)
    .subscribe(resultado=>{
      this.router.navigate(['/restaurante/'+this.restaurante+'/mesas'])
    })
  }


}
