import { Component, OnInit } from '@angular/core';
import { Unidades } from '../interfaces/unidadesFaces';
import { UnidadesService } from '../services/unidades.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  unidades: Unidades[];

  unidad : Unidades = {
    unidades_id : null,
    nombre : null,
    abreviatura : null
  };
  
  constructor(private unidadesService: UnidadesService, private httpClient: HttpClient) {

  }

  searchAllUnidades() {
      this.unidades = this.unidadesService.searchAll();
//    this.unidadesService.searchAll().subscribe((data: Unidades[]) => {
//        this.unidades = data;
//      },
//      (error)=>{
//        alert('Ocurrio un Error');
//        console.log("imprimir",error);
//      });
    }

  ngOnInit() {
    this.searchAllUnidades();
  }

}
