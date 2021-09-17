import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoCardComponent } from './hijo-card.component';

describe('HijoCardComponent', () => {
  let component: HijoCardComponent;
  let fixture: ComponentFixture<HijoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
