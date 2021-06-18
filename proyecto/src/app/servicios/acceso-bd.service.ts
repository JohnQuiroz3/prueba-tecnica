import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoBdService {
  url = "http://localhost/";

  constructor(private http: HttpClient) { }

  consultarTodos(tabla){
    return this.http.get(`${this.url}${tabla}/read.php`);
  }
  consultarUno(tabla, columna, codigo){
    return this.http.get(`${this.url}${tabla}/read.php?${columna}=${codigo}`);
  }
  ultimaFactura(){
    return this.http.get(`${this.url}factura/read.php?siguiente=siguiente`);
  }
  consultarFacturas(inicial, final){
    return this.http.get(`${this.url}factura/read.php?inicial=${inicial}&final=${final}`);
  }
  consultarDetalle(factura){
    return this.http.get(`${this.url}detalle_factura/read.php?factura=${factura}`);
  }
  insertar(tabla, objeto){
    var url = `${this.url}${tabla}/create.php`;
    console.log(JSON.stringify(objeto));
    return this.http.post(url, JSON.stringify(objeto));
  }
  eliminar(tabla, columna, codigo){
    return this.http.get(`${this.url}${tabla}/delete.php?${columna}=${codigo}`);
  }
  actualizar(tabla, objeto){
    return this.http.post(`${this.url}${tabla}/update.php`, JSON.stringify(objeto));
  }
}
