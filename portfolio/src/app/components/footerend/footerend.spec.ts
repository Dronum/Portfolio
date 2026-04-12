import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Footerend } from './footerend';

describe('Footerend', () => {
  let component: Footerend;
  let fixture: ComponentFixture<Footerend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footerend],
    }).compileComponents();

    fixture = TestBed.createComponent(Footerend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
