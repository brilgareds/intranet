import { Component, OnInit } from '@angular/core';
import { Fabricantes } from '../interfaces/fabricantesFaces';
import { HttpClient } from '@angular/common/http';
import { FabricantesService } from '../services/fabricantes.service';

@Component({
  selector: 'app-fabricantes',
  templateUrl: './fabricantes.component.html',
  styleUrls: ['./fabricantes.component.css']
})
export class FabricantesComponent implements OnInit {


  fabricantes: Fabricantes[];

  fabricante: Fabricantes = {
    fabricantes_id: null,
    nombre: null,
    identificacion: null,
    direccion: null
  };

  constructor(private fabricantesService: FabricantesService, private httpClient: HttpClient) {

  }

  //consulto data del servicio de fabricantes
  searchAllFabricantes() {
   
    this.fabricantesService.searchAll().subscribe((data : Fabricantes[]) => {
        console.log("######",data);
      this.fabricantes = data;
    },
      (error) => {
        alert('Ocurrio un Error');
        console.log("imprimir", error);
      });
  }


  ngOnInit() {
    this.searchAllFabricantes();
  }

}
