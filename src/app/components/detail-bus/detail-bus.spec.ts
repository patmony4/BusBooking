import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBus } from './detail-bus';

describe('DetailBus', () => {
  let component: DetailBus;
  let fixture: ComponentFixture<DetailBus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
