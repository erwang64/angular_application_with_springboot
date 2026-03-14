import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Personne } from './model/personne';
import { PersonneService } from './services/personne-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule , RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}