import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionesPanelComponent } from './secciones-panel.component';

describe('AsignaturasPanelComponent', () => {
  let component: SeccionesPanelComponent;
  let fixture: ComponentFixture<SeccionesPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeccionesPanelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionesPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
