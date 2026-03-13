import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from "./components/personne/personne";
import { Lumiere } from "./components/lumiere/lumiere";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Personne, Lumiere],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  listePersonnes = [
    { nom: 'Erwan', ville: 'Bayonne' },
    { nom: 'Marie', ville: 'Cholet' },
  ]
}
