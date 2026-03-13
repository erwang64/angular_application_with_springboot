import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lumiere } from './lumiere';

describe('Lumiere', () => {
  let component: Lumiere;
  let fixture: ComponentFixture<Lumiere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lumiere],
    }).compileComponents();

    fixture = TestBed.createComponent(Lumiere);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
