import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/Personajes';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrl: './lista-personajes.component.css'
})
export class ListaPersonajesComponent {
  @Input()
  public personajes!: Personaje[];
}
