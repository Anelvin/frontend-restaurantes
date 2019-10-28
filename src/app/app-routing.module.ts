import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespensaComponent } from './despensa/despensa.component';
import { LoginComponent } from './login/login.component';
import { PlatoComponent } from './plato/plato.component';
import { RegistrarPlatoComponent } from './registrar-plato/registrar-plato.component';
import { MesasComponent } from './mesas/mesas.component';
import { RegistrarMesaComponent } from './registrar-mesa/registrar-mesa.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';


const routes: Routes = [
  {
    path:'restaurante/login',
    component:LoginComponent
  },
  {
    path:'restaurante/:id/plato',
    component:PlatoComponent
  },
  {
    path:'restaurante/:id/plato/registrar',
    component:RegistrarPlatoComponent
  },
  {
    path:'restaurante/:id/despensa',
    component:DespensaComponent
  },
  {
    path:'restaurante/:id/despensa/registrar',
    component:RegistrarProductoComponent
  },
  {
    path:'restaurante/:id/mesas',
    component:MesasComponent
  },
  {
    path:'restaurante/:id/mesas/registrar',
    component:RegistrarMesaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
