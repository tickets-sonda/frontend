import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEnCursoDetalleComponent } from './servicios-en-curso-detalle.component';

describe('ServiciosEnCursoDetalleComponent', () => {
  let component: ServiciosEnCursoDetalleComponent;
  let fixture: ComponentFixture<ServiciosEnCursoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosEnCursoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosEnCursoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
