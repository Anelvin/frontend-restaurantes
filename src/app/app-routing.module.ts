import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespensaComponent } from './despensa/despensa.component';
import { LoginComponent } from './login/login.component';
import { PlatoComponent } from './plato/plato.component';


const routes: Routes = [
  {
    path:'restaurante/login',
    component:LoginComponent
  },
  {
    path:'restaurante/plato',
    component:PlatoComponent
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
