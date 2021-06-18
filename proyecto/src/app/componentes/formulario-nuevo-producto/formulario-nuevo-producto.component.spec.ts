import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoProductoComponent } from './formulario-nuevo-producto.component';

describe('FormularioNuevoProductoComponent', () => {
  let component: FormularioNuevoProductoComponent;
  let fixture: ComponentFixture<FormularioNuevoProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioNuevoProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
