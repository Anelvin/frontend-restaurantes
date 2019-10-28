import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { RegistrosService } from '../services/registros.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-registrar-plato',
  templateUrl: './registrar-plato.component.html',
  styleUrls: ['./registrar-plato.component.scss']
})
export class RegistrarPlatoComponent implements OnInit {

  private restaurante=null;
  private nombrePlato:string;
  private nombreRestaurante:string;
  private nombreImagen:string;
  private token:string

  constructor(
    private _router:ActivatedRoute,
    private storage:AngularFireStorage,
    private registroService:RegistrosService,
    private router:Router) { }

  ngOnInit() {
    this.nombreRestaurante=this._router.snapshot.paramMap.get('id');
    this.token=sessionStorage.getItem('token');
  }

  subirImagen(event){
    //console.log(event.target.files[0]);
    const filePath = 'imagenPlatos/'+event.target.files[0].name;
    const tasks = this.storage.upload(filePath, event.target.files[0]);
    this.nombreImagen = event.target.files[0].name;
  }

  enviar(){
    let datos={
      nombre:this.nombrePlato,
      restaurante:this.nombreRestaurante,
      imagenURL:this.nombreImagen,
      token:this.token
    }
    this.registroService.registroPlato(datos)
    .subscribe(resultado=>{
      console.log(resultado);
      this.router.navigate(['/restaurante/'+this.nombreRestaurante+'/plato']);
    })
  }

}
