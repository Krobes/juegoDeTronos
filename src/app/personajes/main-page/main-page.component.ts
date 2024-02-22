import { Component, OnInit } from '@angular/core';
import { Personaje, Personajes } from '../interfaces/Personajes';
import { PersonajesService } from '../services/personajes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit{
  public personajes!: Personaje[];
  public personajesCopy!: Personaje[];
  PersonajesService!: Personaje[];

  constructor(public personajesService: PersonajesService) {}
  
  ngOnInit(): void {
    this.personajesService.getCharacters().subscribe((res: Personajes) => {
      this.personajes = res.data;
      this.personajesCopy = res.data;
    });
  }

  public filtrarCasa(casa:string): void{
    this.personajes = this.personajesCopy;
    if(casa !== 'All'){
      this.personajes = this.personajesService.filtrarPorCasa(casa, this.personajes);
    }
  }
}
