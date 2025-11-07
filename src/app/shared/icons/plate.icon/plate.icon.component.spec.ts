import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateIconComponent } from './plate.icon.component';

describe('PlateIconComponent', () => {
  let component: PlateIconComponent;
  let fixture: ComponentFixture<PlateIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlateIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
