import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje, Personajes } from '../interfaces/Personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private url: string = 'https://apimocha.com/jjreina/characters';
  private options = {
    method: 'GET',
    headers: {}
  };
  constructor(private http: HttpClient) {} //Siempre igual

  public getCharacters(): Observable<Personajes>{
    return this.http.get<Personajes>(this.url, this.options);   
  }

  public filtrarPorCasa(casa:string, personajes:Personaje[]): Personaje[]{
    personajes = personajes.filter(personaje => personaje.family.includes(casa));
    return personajes;
  }

}
