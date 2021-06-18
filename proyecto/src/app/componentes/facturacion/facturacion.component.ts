import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccesoBdService } from 'src/app/servicios/acceso-bd.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  fg: FormGroup;
  facturas = null;

  constructor(private servicio: AccesoBdService, fb: FormBuilder) {
    this.fg = fb.group({
      inicial: ['', Validators.required],
      final: ['',  Validators.required]
    });
  }

  ngOnInit(): void {
    this.consultar(null, null);
  }

  consultar(inicial, final){
    if(inicial == null || final == null){
      this.servicio.consultarTodos("factura").subscribe(result => this.facturas = result);
    }
    else{
      this.servicio.consultarFacturas(inicial, final).subscribe(result => this.facturas = result);
    }
    return false;
  }
}
