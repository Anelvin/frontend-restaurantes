import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.scss']
})
export class MesasComponent implements OnInit {

  private restaurante:string;
  private mesas:string;

  constructor(
    private router:Router,
    private _router:ActivatedRoute,
    private consultaService:ConsultasService
  ) { }

  ngOnInit() {
    this.restaurante = this._router.snapshot.paramMap.get('id');
    this.consultaService.consultarRestaurante(this.restaurante)
    .subscribe(resultado=>{
      this.mesas = resultado['mesas'];
    })
  }

  agregarMesa(){
    this.router.navigate(['/restaurante/'+this.restaurante+'/mesas/registrar']);
  }

}
