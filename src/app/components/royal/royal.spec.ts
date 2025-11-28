import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Royal } from './royal';

describe('Royal', () => {
  let component: Royal;
  let fixture: ComponentFixture<Royal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Royal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Royal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
