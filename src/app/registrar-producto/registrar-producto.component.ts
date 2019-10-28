import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../services/consultas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrosService } from '../services/registros.service';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.component.html',
  styleUrls: ['./registrar-producto.component.scss']
})
export class RegistrarProductoComponent implements OnInit {

  private nombreProducto:string;
  private cantidad:number;
  private productos=null;
  private restaurante:string;
  private nombreImagen:string
  private imagenURL:string;

  constructor(
    private consultaService:ConsultasService,
    private _router:ActivatedRoute,
    private registroService:RegistrosService,
    private router:Router
  ) { }

  ngOnInit() {
    this.restaurante = this._router.snapshot.paramMap.get('id');
    this.consultaService.consultarProductosAlmacen()
    .subscribe(resultado=>{
      this.productos = resultado;
    })
  }

  enviar(){
    let datos = {
      producto:this.nombreProducto,
      cantidad:this.cantidad,
      restaurante:this.restaurante,
      imagenURL:this.imagenURL
    }

   this.registroService.registrarProductoRestaurante(datos)
    .subscribe(resultado=>{
      this.router.navigate(['/restaurante/'+this.restaurante+'/despensa']);
    })

    
  }

  verNombre(event){
    for(let x=0;x<event.target.options.length;x++){
      if(event.target.options[x].selected == true){
       this.nombreProducto = event.target.options[x].innerText;
      }
    }
  
  }

}
