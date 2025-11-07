import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryIconComponent } from './delivery.icon.component';

describe('DeliveryIconComponent', () => {
  let component: DeliveryIconComponent;
  let fixture: ComponentFixture<DeliveryIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
