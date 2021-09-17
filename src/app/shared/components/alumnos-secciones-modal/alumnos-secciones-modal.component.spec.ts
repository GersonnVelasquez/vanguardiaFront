import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosSeccionesModalComponent } from './alumnos-secciones-modal.component';

describe('AlumnosSeccionesModalComponent', () => {
  let component: AlumnosSeccionesModalComponent;
  let fixture: ComponentFixture<AlumnosSeccionesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosSeccionesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosSeccionesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
