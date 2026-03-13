import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutPersonne } from './formulaire-ajout-personne';

describe('FormulaireAjoutPersonne', () => {
  let component: FormulaireAjoutPersonne;
  let fixture: ComponentFixture<FormulaireAjoutPersonne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireAjoutPersonne],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireAjoutPersonne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
