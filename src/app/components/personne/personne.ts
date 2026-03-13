import { Component, EventEmitter, Input, input, Output, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-personne',
  imports: [],
  templateUrl: './personne.html',
  styleUrl: './personne.scss',
})
export class Personne {


  // Angular attend un nom
  @Input() nom : string = '';

  // POur la Ville 
  @Input() ville : string = '';

  @Output() personneSupprimee = new EventEmitter<any>();

  supprimerPersonne() {
  // On met les infos de la personne dans l'enveloppe avant de l'envoyer
   this.personneSupprimee.emit({ 
     nom: this.nom, 
     ville: this.ville 
   });
  }

}
