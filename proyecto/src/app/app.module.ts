import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturacionComponent } from './componentes/facturacion/facturacion.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { FormularioFacturaComponent } from './componentes/formulario-factura/formulario-factura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioNuevoClienteComponent } from './componentes/formulario-nuevo-cliente/formulario-nuevo-cliente.component';
import { FormularioEditaClienteComponent } from './componentes/formulario-edita-cliente/formulario-edita-cliente.component';
import { FormularioEditaProductoComponent } from './componentes/formulario-edita-producto/formulario-edita-producto.component';
import { FormularioNuevoProductoComponent } from './componentes/formulario-nuevo-producto/formulario-nuevo-producto.component';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    FacturacionComponent,
    ProductosComponent,
    ClientesComponent,
    FormularioFacturaComponent,
    FormularioNuevoClienteComponent,
    FormularioEditaClienteComponent,
    FormularioEditaProductoComponent,
    FormularioNuevoProductoComponent,
    DetalleFacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
