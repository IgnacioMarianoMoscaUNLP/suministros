import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenIconComponent } from './frozen.icon.component';

describe('FrozenIconComponent', () => {
  let component: FrozenIconComponent;
  let fixture: ComponentFixture<FrozenIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrozenIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrozenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
