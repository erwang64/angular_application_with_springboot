import { Component } from '@angular/core';
import { PersonneService } from '../../services/personne-service';
import { Personne } from '../../model/personne';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-liste',
  imports: [UpperCasePipe],
  templateUrl: './liste.html',
  styleUrl: './liste.scss',
})
export class Liste {

  listePersonnes: Personne[] = [];

  // On injecte le service pour récupérer les données
  constructor(private personneService: PersonneService) {
    this.listePersonnes = this.personneService.getAllPersonnes();
  }
  
}
