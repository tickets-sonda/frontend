import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEnCursoComponent } from './servicios-en-curso.component';

describe('ServiciosEnCursoComponent', () => {
  let component: ServiciosEnCursoComponent;
  let fixture: ComponentFixture<ServiciosEnCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosEnCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosEnCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
