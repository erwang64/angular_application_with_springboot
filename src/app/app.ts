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

  title : string = "Angular avec Spring Boot";

  url : String = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;

  getUrl() : String {
    return this.url;
  }
}
