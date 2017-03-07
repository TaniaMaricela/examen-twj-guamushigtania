import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-pokemon',
  templateUrl: 'pokemon.component.html',
  styleUrls: ['pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  private _parametros: any;
  pokemons=[];
  nuevoPokemon= {};
  disabledButtons = {
    NuevaPokemonFormSubmitButton: false
  };
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterURlService) {
  }

  ngOnInit() {

    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url+'Pokemon?idEntrenador='+this._parametros.idEntrenador)
          .subscribe(
            (res:Response)=>{
              this.pokemons = res.json()
                .map((value) => {
                  value.formularioCerrado = true;
                  return value;
                });
            },
            (err)=>{
              console.log(err)
            }
          )

      });

  }
  crearPokemon(formulario: NgForm){
    let nombre=formulario.value.nombre;
    let pokemon = {
      nombre:nombre,
      tipo1:formulario.value.tipo1,
      tipo2:formulario.value.tipo2,
      imagen:nombre,
      idEntrenador:this._parametros.idEntrenador
    };
    this._http.post(this._masterURL.url+'Pokemon',pokemon)
      .subscribe(
        (res:Response)=>{
          this.pokemons.push(res.json());
          this.nuevoPokemon = {};
        },
        (err)=>{
          console.log(err)
        }
      )
  }

  borrarPokemon(id: number) {
    this._http.delete(this._masterURL.url + "Pokemon/" + id)
      .subscribe(
        (res) => {
          let pokemonBorrado = res.json();
          this.pokemons= this.pokemons.filter(value => pokemonBorrado.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarPokemon(pokemon: any) {
    let parametos = {
      nombre:pokemon.nombre,
      tipo1:pokemon.tipo1,
      tipo2:pokemon.tipo2
    };
    this._http.put(this._masterURL.url + "Pokemon/" + pokemon.id, parametos)
      .subscribe(
        (res: Response) => {
          pokemon.formularioCerrado = !pokemon.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }
}
