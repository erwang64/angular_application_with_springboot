import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-personne',
  imports: [],
  templateUrl: './personne.html',
  styleUrl: './personne.scss',
})
export class Personne {

  imageurl : string = "https://www.autohebdo.fr/app/uploads/2026/03/DPPI_00126005_122-753x494.jpg";

  readonly label : WritableSignal<string> = signal("Clique sur le bouton pour decouvrir le meilleur pilote de tous les temps");

  onClick() : void {
    this.label.set("Charles Leclerc est le meilleur pilote de tous les temps");
  }

}
