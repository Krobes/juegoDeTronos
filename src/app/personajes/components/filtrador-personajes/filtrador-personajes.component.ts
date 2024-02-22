import { Component, EventEmitter, Output } from '@angular/core';
import { Boton } from '../../interfaces/Boton';

@Component({
  selector: 'app-filtrador-personajes',
  templateUrl: './filtrador-personajes.component.html',
  styleUrl: './filtrador-personajes.component.css'
})
export class FiltradorPersonajesComponent {
public botones:Boton[] = [
  {
    casa:'Targaryen',
    claseBoton:'btn-primary'
  },
  {
    casa:'Stark',
    claseBoton:'btn-secondary'
  },
  {
    casa:'Baratheon',
    claseBoton:'btn-success'
  },
  {
    casa:'Lannister',
    claseBoton:'btn-danger'
  },
  {
    casa:'Greyjoy',
    claseBoton:'btn-warning'
  },
  {
    casa:'All',
    claseBoton:'btn-info'
  }
];

  @Output()
  public FiltrarEvento: EventEmitter<string> = new EventEmitter<string>();

  public filtrarCasa(casa:string): void{
    this.FiltrarEvento.emit(casa);
  }
}
