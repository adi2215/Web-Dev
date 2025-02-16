import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationnComponent } from './housing-locationn.component';

describe('HousingLocationnComponent', () => {
  let component: HousingLocationnComponent;
  let fixture: ComponentFixture<HousingLocationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousingLocationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
