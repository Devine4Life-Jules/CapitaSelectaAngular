import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecrementBtnComponent } from './decrement-btn.component';

describe('DecrementBtnComponent', () => {
  let component: DecrementBtnComponent;
  let fixture: ComponentFixture<DecrementBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecrementBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecrementBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
