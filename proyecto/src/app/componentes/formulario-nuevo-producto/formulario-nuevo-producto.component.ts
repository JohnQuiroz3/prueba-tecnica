import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-formulario-nuevo-producto',
  templateUrl: './formulario-nuevo-producto.component.html',
  styleUrls: ['./formulario-nuevo-producto.component.css']
})
export class FormularioNuevoProductoComponent implements OnInit {

  fg: FormGroup;

  producto = {
    id: null,
    nombre: null,
    inventario: null,
    compra: null,
    venta: null
  }
  
  constructor(private servicio: AccesoBdService, fb: FormBuilder, private enrutador: Router) {
    this.fg = fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      inventario: ['', Validators.required],
      compra: ['', Validators.required],
      venta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  guardar(identificacion, nombre, inventario, compra, venta): boolean{
    this.producto.id = identificacion;
    this.producto.nombre = nombre;
    this.producto.inventario = inventario;
    this.producto.compra = compra;
    this.producto.venta = venta;
    this.servicio.insertar("producto", this.producto).subscribe(datos => {
      if(!datos['validacion']){
        alert("No se pudo guardar la información del producto. Intente asignando una nueva identificación");
        return false;
      }
      else{
        alert("Se guardó correctamente la información del producto");
        this.enrutador.navigate(['/productos']);
      }
    });
    return true;
  }
}
