import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ManualesComponent } from './manuales/manuales.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PdfViewerModule } from 'ng2-pdf-viewer';



import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AlertsModule } from 'angular-alert-module';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AdministradorService } from './services/administrador.service';
import { InicioService } from './services/inicio.service';
import { LoginService } from './services/login.service';
import { ManualesUComponent } from './manualesU/manualesU.component';
import { ProcesosComponent } from './procesos/procesos.component';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { CreadorComponent } from './creador/creador.component';



const routes: RouterModule[] = [
  {path: '',component: LoginComponent},
  {path: 'manuales/:id',component: ManualesComponent},
  {path: 'inicio',component: InicioComponent},
  {path: 'administrador',component: AdministradorComponent},
  {path: 'manualesU',component: ManualesUComponent},
  {path: 'procesos',component: ProcesosComponent},
  {path: 'login',component: LoginComponent},
  {path: 'creador',component: CreadorComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ManualesComponent,
    InicioComponent,
    AdministradorComponent,
    ErrorMessageComponent,
    ManualesUComponent,
    ProcesosComponent,
    LoginComponent,
    ModalComponent,
    CreadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    AlertsModule.forRoot()
  ],
  providers: [ AdministradorService, InicioService, LoginService, LoginComponent, ManualesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
