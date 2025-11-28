import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Netional } from './netional';

describe('Netional', () => {
  let component: Netional;
  let fixture: ComponentFixture<Netional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Netional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Netional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
