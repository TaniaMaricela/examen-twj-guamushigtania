import {Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {EntrenadorComponent} from "./entrenador/entrenador.component";
import {PokemonComponent} from "./pokemon/pokemon.component";

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'entrenador', component: EntrenadorComponent},
  {path: 'entrenador/:idEntrenador/pokemon', component: PokemonComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

