import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/Personajes';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  @Input()
  public personaje!:Personaje;
}
