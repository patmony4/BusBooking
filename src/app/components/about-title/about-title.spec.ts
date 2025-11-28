import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTitle } from './about-title';

describe('AboutTitle', () => {
  let component: AboutTitle;
  let fixture: ComponentFixture<AboutTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
