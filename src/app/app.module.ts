import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DespensaComponent } from './despensa/despensa.component';
import { LoginComponent } from './login/login.component';
import { PlatoComponent } from './plato/plato.component';
import { FormsModule } from '@angular/forms';
import { RegistrarPlatoComponent } from './registrar-plato/registrar-plato.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NavegacionEmpleadosComponent } from './navegacion-empleados/navegacion-empleados.component';
import { MesasComponent } from './mesas/mesas.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    DespensaComponent,
    LoginComponent,
    PlatoComponent,
    RegistrarPlatoComponent,
    NavegacionEmpleadosComponent,
    MesasComponent,
    RegistrarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
