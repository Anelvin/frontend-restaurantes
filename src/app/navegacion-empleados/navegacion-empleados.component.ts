import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navegacion-empleados',
  templateUrl: './navegacion-empleados.component.html',
  styleUrls: ['./navegacion-empleados.component.scss']
})
export class NavegacionEmpleadosComponent implements OnInit {

  private restaurante:string;
  constructor(private router:Router,
    private _router:ActivatedRoute) { }

  ngOnInit() {
    this.restaurante =this._router.snapshot.paramMap.get('id');
  }

  irPlatos(){
    this.router.navigate(['/restaurante/'+this.restaurante+'/plato']);
  }

  irDespensa(){
    this.router.navigate(['/restaurante/'+this.restaurante+'/despensa']);
  }

  irMesas(){
    this.router.navigate(['/restaurante/'+this.restaurante+'/mesas']);
  }
}
