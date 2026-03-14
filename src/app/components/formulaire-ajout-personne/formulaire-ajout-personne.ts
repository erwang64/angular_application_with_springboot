import { Component } from '@angular/core';
import { PersonneService } from '../../services/personne-service';
import { Router } from '@angular/router';
import { Personne } from '../../model/personne';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulaire-ajout-personne',
  imports: [FormsModule],
  templateUrl: './formulaire-ajout-personne.html',
  styleUrl: './formulaire-ajout-personne.scss',
})
export class FormulaireAjoutPersonne {

  nouveauNom: string = '';
  nouvelleVille: string = '';

  constructor( private personneService: PersonneService, private router: Router) {}

  ajouterPersonne() {

    const personneCree = new Personne(this.nouveauNom, this.nouvelleVille);

    this.personneService.createPersonne(personneCree);

    // Après l'ajout, on redirige vers la liste
    this.router.navigate(['/liste']);
  }
}
