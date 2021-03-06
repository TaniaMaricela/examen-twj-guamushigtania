import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MasterURlService} from "./services/master-url.service";
import { HomeComponent } from './home/home.component';
import {routing} from "./app.routes";
import { EntrenadorComponent } from './entrenador/entrenador.component';
import { PokemonComponent } from './pokemon/pokemon.component';

// DECORATOR
// @Decorator({asd:"asd"})
// @Primary({})
// @Politecnica({asda:"asdasd"})

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntrenadorComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterURlService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }



