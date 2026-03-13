import { Component, Input, input, signal, WritableSignal } from '@angular/core';

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

}
