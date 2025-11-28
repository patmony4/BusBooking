import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rival } from './rival';

describe('Rival', () => {
  let component: Rival;
  let fixture: ComponentFixture<Rival>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rival]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rival);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
