import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijosPanelComponent } from './hijos-panel.component';

describe('HijosPanelComponent', () => {
  let component: HijosPanelComponent;
  let fixture: ComponentFixture<HijosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijosPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
