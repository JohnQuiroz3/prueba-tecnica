import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.css']
})
export class FormularioFacturaComponent implements OnInit {

  siguiente = {siguiente: null};
  nombreCliente = null;
  nombreProducto = null;
  inventario = 0;
  cliente = {
    identificacion: null,
    nombre: null,
    apellido: null,
    nacimiento: null,
    telefono: null,
    edad: null
  };
  producto = {
    idfactura: null,
    id: null,
    nombre: null,
    inventario: null,
    cantidad: null,
    compra: null,
    venta: null,
    totalproducto: null
  };
  factura = {
    numero: null,
    fecha: null,
    idcliente: null,
    total: 0
  }
  detalle = [];

  constructor(private servicio: AccesoBdService, private enrutador: Router) {}

  ngOnInit(): void {
    this.servicio.ultimaFactura().subscribe(result => this.siguiente = result[0]);
  }

  buscarCliente(identificacion): boolean{
    if(identificacion == null || identificacion == ""){
      alert("Debe ingresar la identificación del cliente");
    }
    else{
      this.servicio.consultarUno("cliente", "identificacion", identificacion).subscribe(result => {
        if(result[0] != undefined){
          this.cliente = result[0];
          this.nombreCliente = result[0]['nombre'] + " " + result[0]['apellido'];
        }
        else{
          alert("No se encontró el cliente");
        }
      });
    }
    return false;
  }

  buscarProducto(id): boolean{
    if(id == null || id == ""){
      alert("Debe ingresar la identificación del producto");
    }
    else{
      this.servicio.consultarUno("producto", "id", id).subscribe(result => {
        if(result[0] != undefined){
          this.producto = result[0];
          this.nombreProducto = result[0]['nombre'];
          this.inventario = result[0]['inventario'];
        }
        else{
          alert("No se pudo encontrar el producto");
        }
      });
    }
    return false;
  }

  agregarProducto(id, cantidad): boolean{
    console.log(cantidad);
    console.log(this.inventario);
    if(cantidad == null || cantidad == "" || cantidad <= 0){
      alert("Debe ingresar una cantidad valida mayor que 0");
    }
    else{
      this.producto.idfactura = this.siguiente.siguiente;
      this.producto.cantidad = cantidad;
      this.producto.totalproducto = this.producto.cantidad * this.producto.venta;
      this.detalle.push(this.producto);
      console.log(this.detalle);
      this.factura.total = this.factura.total + this.producto.totalproducto;
    }
    return false;
  }

  facturar(fecha, idcliente): boolean{
    var respuesta = false;
    this.factura.numero = this.siguiente.siguiente;
    if(fecha == null || fecha == "" || idcliente == null || idcliente == "" || this.detalle.length == 0){
      alert("Debe ingresar todos los datos solicitados");
      return false;
    }
    this.factura.fecha = fecha;
    this.factura.idcliente = idcliente;
    this.servicio.insertar("factura", this.factura).subscribe(result => {
      respuesta = result['validacion'];
      if(respuesta){
        for(let d of this.detalle){
          this.servicio.insertar("detalle_factura", d).subscribe(result => {
            respuesta = result['validacion'];
            if(!respuesta){
              alert("Ocurrió un error guardando los productos de la factura");
              return true;
            }
          });
        }
        this.enrutador.navigate(['/clientes']);
      }
      else{
        alert("Ocurrio un error guardando los datos de la factura");
      }
    });
    return false;
  }
}
