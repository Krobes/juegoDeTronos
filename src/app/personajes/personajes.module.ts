import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PersonajeComponent } from './components/personaje/personaje.component';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FiltradorPersonajesComponent } from './components/filtrador-personajes/filtrador-personajes.component';



@NgModule({
  declarations: [
    PersonajeComponent,
    ListaPersonajesComponent,
    MainPageComponent,
    FiltradorPersonajesComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class PersonajesModule { }
