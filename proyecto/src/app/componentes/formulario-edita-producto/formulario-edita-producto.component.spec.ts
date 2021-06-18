import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditaProductoComponent } from './formulario-edita-producto.component';

describe('FormularioEditaProductoComponent', () => {
  let component: FormularioEditaProductoComponent;
  let fixture: ComponentFixture<FormularioEditaProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEditaProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
