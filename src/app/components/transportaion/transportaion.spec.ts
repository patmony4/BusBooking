import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transportaion } from './transportaion';

describe('Transportaion', () => {
  let component: Transportaion;
  let fixture: ComponentFixture<Transportaion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transportaion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transportaion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
