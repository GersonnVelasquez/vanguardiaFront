import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCardComponent } from './seccion-card.component';

describe('AsignaturaCardComponent', () => {
  let component: SeccionCardComponent;
  let fixture: ComponentFixture<SeccionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
