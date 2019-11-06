import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ManualesComponent } from './manuales/manuales.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { GuardiaGuard } from './guard/guardia.guard';
import { InterceptorService } from './services/interceptor.service';



const routes: RouterModule[] = [
  {path: '',component: LoginComponent},
  {path: 'manuales/:id',component: ManualesComponent,canActivate: [GuardiaGuard],data: { roles: [1,2,3] }},
  {path: 'inicio',component: InicioComponent,canActivate: [GuardiaGuard],data: { roles: [1,2,3] }},
  {path: 'administrador',component: AdministradorComponent,canActivate: [GuardiaGuard],data: { roles: [2,3] }},
  {path: 'manualesU',component: ManualesUComponent,canActivate: [GuardiaGuard],data: { roles: [1,2,3] }},
  {path: 'procesos',component: ProcesosComponent,canActivate: [GuardiaGuard],data: { roles: [1,2,3] }},
  {path: 'login',component: LoginComponent},
  {path: 'creador',component: CreadorComponent,canActivate: [GuardiaGuard],data: { roles: [3] }},
 
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
  providers: [ AdministradorService, InicioService, LoginService, LoginComponent, ManualesComponent,  
        {
         provide: HTTP_INTERCEPTORS,
         useClass: InterceptorService,
         multi: true
        }
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
