import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespensaComponent } from './despensa/despensa.component';
import { LoginComponent } from './login/login.component';
import { PlatoComponent } from './plato/plato.component';
import { RegistrarPlatoComponent } from './registrar-plato/registrar-plato.component';


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
    path:'restaurante/despensa',
    component:DespensaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
