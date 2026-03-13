import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from "./components/personne/personne";
import { Lumiere } from "./components/lumiere/lumiere";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormulaireAjoutPersonne } from "./components/formulaire-ajout-personne/formulaire-ajout-personne";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Personne, Lumiere, ReactiveFormsModule, FormulaireAjoutPersonne],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  listePersonnes = [
    { nom: 'Erwan', ville: 'Bayonne' },
    { nom: 'Marie', ville: 'Cholet' },
  ]

ajouterALaListe(nouvellePersonne: any) {
  // Ici, on a accès à la liste, donc on peut faire le push !
  this.listePersonnes.push(nouvellePersonne);
}

supprimerDeLaListe(personneAEffacer: any) {
  // On garde tout le monde SAUF celui qui a le même nom et la même ville
  this.listePersonnes = this.listePersonnes.filter(p => 
    p.nom !== personneAEffacer.nom || p.ville !== personneAEffacer.ville
  );
}

}