import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoServicioAsignacionVerComponent } from './nuevo-servicio-asignacion-ver.component';

describe('NuevoServicioAsignacionVerComponent', () => {
  let component: NuevoServicioAsignacionVerComponent;
  let fixture: ComponentFixture<NuevoServicioAsignacionVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoServicioAsignacionVerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoServicioAsignacionVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
