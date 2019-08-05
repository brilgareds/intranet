import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule } from '@angular/router';
import { UnidadesComponent } from './unidades/unidades.component';
import { FabricantesComponent } from './fabricantes/fabricantes.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: RouterModule[] = [
  {path: '',component: ProductosComponent},
  {path: 'productos',component: ProductosComponent},
  {path: 'unidades',component: UnidadesComponent},
  {path: 'fabricantes',component: FabricantesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    UnidadesComponent,
    FabricantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
