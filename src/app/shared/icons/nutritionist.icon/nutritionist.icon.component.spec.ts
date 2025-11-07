import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistIconComponent } from './nutritionist.icon.component';

describe('NutritionistIconComponent', () => {
  let component: NutritionistIconComponent;
  let fixture: ComponentFixture<NutritionistIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionistIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
