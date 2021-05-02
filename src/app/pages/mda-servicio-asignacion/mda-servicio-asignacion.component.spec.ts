import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdaServicioAsignacionComponent } from './mda-servicio-asignacion.component';

describe('MdaServicioAsignacionComponent', () => {
  let component: MdaServicioAsignacionComponent;
  let fixture: ComponentFixture<MdaServicioAsignacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdaServicioAsignacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdaServicioAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
