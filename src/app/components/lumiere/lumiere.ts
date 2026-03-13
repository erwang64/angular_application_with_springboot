import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-lumiere',
  imports: [],
  templateUrl: './lumiere.html',
  styleUrl: './lumiere.scss',
})
export class Lumiere {

  imageUrl : string = "https://www.i2clipart.com/cliparts/f/a/e/0/clipart-voyant-rouge-eteint-red-light-off-128x128-fae0.png";



  readonly label : WritableSignal<string> = signal("Allumer la lumiere");

    onClick() : void {
    this.label.set("Eteindre la lumiere");
    this.imageUrl = "https://www.i2clipart.com/cliparts/8/4/3/b/clipart-voyant-rouge-allume-red-light-on-128x128-843b.png";
  }

}
