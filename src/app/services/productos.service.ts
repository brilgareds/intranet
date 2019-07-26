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
  API_ENDPOINT = "http://localhost:8000/api";

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
      return this.httpClient.get(this.API_ENDPOINT+'/productos');

  }


}
