import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyFoodIconComponent } from './healthy-food.icon.component';

describe('HealthyFoodIconComponent', () => {
  let component: HealthyFoodIconComponent;
  let fixture: ComponentFixture<HealthyFoodIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthyFoodIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthyFoodIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
