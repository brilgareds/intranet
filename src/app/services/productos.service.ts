import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../interfaces/productosFaces';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//cliente de servicio rest
export class ProductosService {

  //url
  API_ENDPOINT = "http://localhost:3001/api";

  constructor(private httpClient: HttpClient) { }

  //almacenar producto
  save(productos : Productos){
    const headers  = new HttpHeaders({'content-type':'application/json'});
    let producto = {
      "nombre_producto":  productos.nombre_producto,
      "descripcion":  productos.descripcion,
      "fabricantes_id":  productos.fabricantes_id,
      "unidades_id":  productos.unidades_id
      }
    return this.httpClient.post<Productos>(this.API_ENDPOINT+'/productos/',producto,{headers:headers});
  }

   //modificar producto
  update(productos : Productos){
    let producto = {
      "nombre_producto":  productos.nombre_producto,
      "descripcion":  productos.descripcion,
      "fabricantes_id":  productos.fabricantes_id,
      "unidades_id":  productos.unidades_id,
      "productos_id":  productos.productos_id,
      }

    return this.httpClient.put(this.API_ENDPOINT+'/productos/'+productos.productos_id,producto);
  }


  //eliminar producto
  delete(producto_id: number){
      return this.httpClient.delete<number>(this.API_ENDPOINT+'/productos/'+producto_id);
  }

   //consultar producto
   searchAll(){
        var producto = [
       {productos_id:1,nombre_producto:'aceta1',descripcion:'aceta1',fabricantes_id:1,unidades_id:1,nombre_unidad:'1',nombre:'1'},
       {productos_id:2,nombre_producto:'aceta2',descripcion:'aceta2',fabricantes_id:2,unidades_id:2,nombre_unidad:'2',nombre:'2'},
       {productos_id:3,nombre_producto:'aceta3',descripcion:'aceta3',fabricantes_id:3,unidades_id:3,nombre_unidad:'3',nombre:'3'},
       {productos_id:4,nombre_producto:'aceta4',descripcion:'aceta4',fabricantes_id:4,unidades_id:2,nombre_unidad:'2',nombre:'4'},
       {productos_id:5,nombre_producto:'aceta5',descripcion:'aceta5',fabricantes_id:4,unidades_id:1,nombre_unidad:'1',nombre:'14'}
   ];
      return producto;//this.httpClient.get(this.API_ENDPOINT+'/productos');

  }


}
