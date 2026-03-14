import { Routes } from '@angular/router';
import { Liste } from './components/liste/liste';
import { FormulaireAjoutPersonne } from './components/formulaire-ajout-personne/formulaire-ajout-personne';

export const routes: Routes = [

    { path: 'liste' , component: Liste},

    { path: 'ajouter' , component: FormulaireAjoutPersonne},



];
