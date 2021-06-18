import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-formulario-edita-producto',
  templateUrl: './formulario-edita-producto.component.html',
  styleUrls: ['./formulario-edita-producto.component.css']
})
export class FormularioEditaProductoComponent implements OnInit {

  fg: FormGroup;
  
  producto = {
    id: null,
    nombre: null,
    inventario: null,
    compra: null,
    venta: null
  }

  constructor(private servicio: AccesoBdService, private route: ActivatedRoute, fb: FormBuilder, private enrutador: Router) {
    this.fg = fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      inventario: ['', Validators.required],
      compra: ['', Validators.required],
      venta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.producto.id = this.route.snapshot.paramMap.get('id');
    this.consultar(this.producto.id);
  }

  consultar(identificacion){
    this.servicio.consultarUno("producto", "id", identificacion).subscribe(result => {
      this.producto = result[0];
      this.fg.controls['id'].setValue(this.producto.id);
      this.fg.controls['nombre'].setValue(this.producto.nombre);
      this.fg.controls['inventario'].setValue(this.producto.inventario);
      this.fg.controls['compra'].setValue(this.producto.compra);
      this.fg.controls['venta'].setValue(this.producto.venta);
    });
  }

  guardar(identificacion, nombre, inventario, compra, venta): boolean{
    this.producto.id = identificacion;
    this.producto.nombre = nombre;
    this.producto.inventario = inventario;
    this.producto.compra = compra;
    this.producto.venta = venta;
    this.servicio.actualizar("producto", this.producto).subscribe(datos => {
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
