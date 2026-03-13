import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from "./components/personne/personne";
import { Lumiere } from "./components/lumiere/lumiere";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Personne, Lumiere, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  listePersonnes = [
    { nom: 'Erwan', ville: 'Bayonne' },
    { nom: 'Marie', ville: 'Cholet' },
  ]


  // declaration du formulaire :

  protected readonly form = new FormGroup({

    name: new FormControl("", Validators.required),

    ville: new FormControl("", [Validators.required]),
  });

ajouterPersonne() {
  // On récupère les valeurs
  const nouveauNom = this.form.value.name;
  const nouvelleVille = this.form.value.ville;

  // On vérifie qu'on a bien quelque chose avant de pousser
  if (nouveauNom && nouvelleVille) {
    this.listePersonnes.push({ 
      nom: nouveauNom, 
      ville: nouvelleVille 
    });
    
    // Bonus : On vide le formulaire après l'ajout pour faire propre
    this.form.reset();
  }
}

}