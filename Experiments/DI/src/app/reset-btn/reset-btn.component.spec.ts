import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetBtnComponent } from './reset-btn.component';

describe('ResetBtnComponent', () => {
  let component: ResetBtnComponent;
  let fixture: ComponentFixture<ResetBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
