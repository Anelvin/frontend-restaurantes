import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from '../services/consultas.service';

@Component({
  selector: 'app-despensa',
  templateUrl: './despensa.component.html',
  styleUrls: ['./despensa.component.scss']
})
export class DespensaComponent implements OnInit {

  private restaurante:string;
  private productos=null;

  constructor(
    private _router:ActivatedRoute,
    private router:Router,
    private consultaService:ConsultasService
  ) { }

  ngOnInit() {
    this.restaurante = this._router.snapshot.paramMap.get('id');
    this.consultaService.consultarRestaurante(this.restaurante)
    .subscribe(resultado=>{
      console.log(resultado);
      this.productos=resultado['despensa'];
    })
  }

  agregarProducto(){
    this.router.navigate(['/restaurante/'+this.restaurante+'/despensa/registrar']);
  }  

}
