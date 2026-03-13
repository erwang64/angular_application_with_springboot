import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personne } from "./components/personne/personne";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Personne],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_application_with_springboot');
}
