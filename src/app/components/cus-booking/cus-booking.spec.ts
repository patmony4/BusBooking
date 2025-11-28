import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusBooking } from './cus-booking';

describe('CusBooking', () => {
  let component: CusBooking;
  let fixture: ComponentFixture<CusBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CusBooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusBooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
