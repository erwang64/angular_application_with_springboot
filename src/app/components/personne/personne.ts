import { Component, EventEmitter, Input, input, Output, signal, WritableSignal,  } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personne',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './personne.html',
  styleUrl: './personne.scss',
})
export class Personne {


  // Angular attend un nom
  @Input() nom : string = '';

  // POur la Ville 
  @Input() ville : string = '';

  @Output() personneSupprimee = new EventEmitter<any>();

  @Output() personneModifiee = new EventEmitter<any>();

  // 1. Notre interrupteur (par défaut, on ne modifie pas)
  estEnTrainDeModifier = false;

  basculerMode() {
    this.estEnTrainDeModifier = !this.estEnTrainDeModifier;
  }


  sauvegarder() {
    // On crée un objet avec les valeurs actuelles des inputs
    const nouvelleInfo = { nom: this.nom, ville: this.ville };
  
    this.personneModifiee.emit(nouvelleInfo);
    this.basculerMode();
  }

  supprimerPersonne() {
  // On met les infos de la personne dans l'enveloppe avant de l'envoyer
   this.personneSupprimee.emit({ 
     nom: this.nom, 
     ville: this.ville 
   });
  }

}
