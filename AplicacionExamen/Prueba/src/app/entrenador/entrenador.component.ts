import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";
import {MasterURlService} from "../services/master-url.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-entrenador',
  templateUrl: 'entrenador.component.html',
  styleUrls: ['entrenador.component.css']
})
export class EntrenadorComponent implements OnInit {

  title: string = "Bienvenido a Ingresar Entrenadores";
  nuevaEntrenador = {};
  entrenadores = [];
  disabledButtons = {
    NuevaEntrenadorFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterURL: MasterURlService) {
  }

  ngOnInit() {
    this._http.get(this._masterURL.url + "Entrenador")
      .subscribe(
        (res: Response) => {
          this.entrenadores = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )
  }

  crearEntrenador(formulario: NgForm) {
    console.log(formulario);
    this.disabledButtons.NuevaEntrenadorFormSubmitButton = true;
    this._http.post(this._masterURL.url + "Entrenador", {
      nombre: formulario.value.nombre,
      fechaInicio: formulario.value.fechaInicio,
      region:formulario.value.region
    }).subscribe(
      (res) => {
        console.log("No hubo Errores");
        console.log(res);
        this.entrenadores.push(res.json());
        this.nuevaEntrenador = {};
        this.disabledButtons.NuevaEntrenadorFormSubmitButton = false;
      },
      (err) => {
        this.disabledButtons.NuevaEntrenadorFormSubmitButton = false;
        console.log("Ocurrio un err or", err);
      },
      () => {
        console.log("Termino la función vamos a las casas")
      }
    );
  }

  borrarEntrenador(id: number) {
    this._http.delete(this._masterURL.url + "Entrenador/" + id)
      .subscribe(
        (res) => {
          let entrenadorBorrada = res.json();
          this.entrenadores = this.entrenadores.filter(value => entrenadorBorrada.id != value.id);
        },
        (err) => {
          console.log(err);
        }
      )
  }

  actualizarEntrenador(entrenador: any) {
    let parametos = {
      nombre: entrenador.nombre,
      fechaInicio: entrenador.fechaInicio,
      region:entrenador.region
    };
    this._http.put(this._masterURL.url + "Entrenador/" + entrenador.id, parametos)
      .subscribe(
        (res: Response) => {
          entrenador.formularioCerrado = !entrenador.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }

}
