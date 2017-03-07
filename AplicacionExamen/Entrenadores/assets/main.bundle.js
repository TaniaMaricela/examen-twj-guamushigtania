webpackJsonp([1,4],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterURlService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasterURlService = (function () {
    function MasterURlService() {
        this._url = "https://examen-twj-ariashomero-homero.c9users.io/";
        // this.url = "https://aplicacion-adrianeguez.c9users.io"
        // this.url = "https://asdasd-asdasdasd.herokuapp.com"
    }
    Object.defineProperty(MasterURlService.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (nuevoUrl) {
            this._url = nuevoUrl;
        },
        enumerable: true,
        configurable: true
    });
    MasterURlService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MasterURlService);
    return MasterURlService;
}());
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/master-url.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_master_url_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntrenadorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntrenadorComponent = (function () {
    function EntrenadorComponent(_http, _masterURL) {
        this._http = _http;
        this._masterURL = _masterURL;
        this.title = "Bienvenido a Ingresar Entrenadores";
        this.nuevaEntrenador = {};
        this.entrenadores = [];
        this.disabledButtons = {
            NuevaEntrenadorFormSubmitButton: false
        };
    }
    EntrenadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._http.get(this._masterURL.url + "Entrenador")
            .subscribe(function (res) {
            _this.entrenadores = res.json()
                .map(function (value) {
                value.formularioCerrado = true;
                return value;
            });
        }, function (err) {
            console.log(err);
        });
    };
    EntrenadorComponent.prototype.crearEntrenador = function (formulario) {
        var _this = this;
        console.log(formulario);
        this.disabledButtons.NuevaEntrenadorFormSubmitButton = true;
        this._http.post(this._masterURL.url + "Entrenador", {
            nombre: formulario.value.nombre,
            fechaInicio: formulario.value.fechaInicio,
            region: formulario.value.region
        }).subscribe(function (res) {
            console.log("No hubo Errores");
            console.log(res);
            _this.entrenadores.push(res.json());
            _this.nuevaEntrenador = {};
            _this.disabledButtons.NuevaEntrenadorFormSubmitButton = false;
        }, function (err) {
            _this.disabledButtons.NuevaEntrenadorFormSubmitButton = false;
            console.log("Ocurrio un err or", err);
        }, function () {
            console.log("Termino la función vamos a las casas");
        });
    };
    EntrenadorComponent.prototype.borrarEntrenador = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + "Entrenador/" + id)
            .subscribe(function (res) {
            var entrenadorBorrada = res.json();
            _this.entrenadores = _this.entrenadores.filter(function (value) { return entrenadorBorrada.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    EntrenadorComponent.prototype.actualizarEntrenador = function (entrenador) {
        var parametos = {
            nombre: entrenador.nombre,
            fechaInicio: entrenador.fechaInicio,
            region: entrenador.region
        };
        this._http.put(this._masterURL.url + "Entrenador/" + entrenador.id, parametos)
            .subscribe(function (res) {
            entrenador.formularioCerrado = !entrenador.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            console.log("Error:", err);
        });
    };
    EntrenadorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-entrenador',
            template: __webpack_require__(516),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_master_url_service__["a" /* MasterURlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_master_url_service__["a" /* MasterURlService */]) === 'function' && _b) || Object])
    ], EntrenadorComponent);
    return EntrenadorComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/entrenador.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(517),
            styles: [__webpack_require__(512)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/home.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__ = __webpack_require__(191);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokemonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PokemonComponent = (function () {
    function PokemonComponent(_ActivatedRoute, _http, _masterURL) {
        this._ActivatedRoute = _ActivatedRoute;
        this._http = _http;
        this._masterURL = _masterURL;
        this.pokemons = [];
        this.nuevoPokemon = {};
        this.disabledButtons = {
            NuevaPokemonFormSubmitButton: false
        };
    }
    PokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ActivatedRoute
            .params
            .subscribe(function (parametros) {
            _this._parametros = parametros;
            _this._http.get(_this._masterURL.url + 'Pokemon?idEntrenador=' + _this._parametros.idEntrenador)
                .subscribe(function (res) {
                _this.pokemons = res.json()
                    .map(function (value) {
                    value.formularioCerrado = true;
                    return value;
                });
            }, function (err) {
                console.log(err);
            });
        });
    };
    PokemonComponent.prototype.crearPokemon = function (formulario) {
        var _this = this;
        var nombre = formulario.value.nombre;
        var pokemon = {
            nombre: nombre,
            tipo1: formulario.value.tipo1,
            tipo2: formulario.value.tipo2,
            imagen: nombre,
            idEntrenador: this._parametros.idEntrenador
        };
        this._http.post(this._masterURL.url + 'Pokemon', pokemon)
            .subscribe(function (res) {
            _this.pokemons.push(res.json());
            _this.nuevoPokemon = {};
        }, function (err) {
            console.log(err);
        });
    };
    PokemonComponent.prototype.borrarPokemon = function (id) {
        var _this = this;
        this._http.delete(this._masterURL.url + "Pokemon/" + id)
            .subscribe(function (res) {
            var pokemonBorrado = res.json();
            _this.pokemons = _this.pokemons.filter(function (value) { return pokemonBorrado.id != value.id; });
        }, function (err) {
            console.log(err);
        });
    };
    PokemonComponent.prototype.actualizarPokemon = function (pokemon) {
        var parametos = {
            nombre: pokemon.nombre,
            tipo1: pokemon.tipo1,
            tipo2: pokemon.tipo2
        };
        this._http.put(this._masterURL.url + "Pokemon/" + pokemon.id, parametos)
            .subscribe(function (res) {
            pokemon.formularioCerrado = !pokemon.formularioCerrado;
            console.log("Respuesta:", res.json());
        }, function (err) {
            console.log("Error:", err);
        });
    };
    PokemonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-pokemon',
            template: __webpack_require__(518),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__["a" /* MasterURlService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_master_url_service__["a" /* MasterURlService */]) === 'function' && _c) || Object])
    ], PokemonComponent);
    return PokemonComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/pokemon.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 335;


/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(456);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/main.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(515),
            styles: [__webpack_require__(510)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_master_url_service__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__entrenador_entrenador_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pokemon_pokemon_component__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// DECORATOR
// @Decorator({asd:"asd"})
// @Primary({})
// @Politecnica({asda:"asdasd"})
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__entrenador_entrenador_component__["a" /* EntrenadorComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pokemon_pokemon_component__["a" /* PokemonComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routing */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_master_url_service__["a" /* MasterURlService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entrenador_entrenador_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pokemon_pokemon_component__ = __webpack_require__(306);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'entrenador', component: __WEBPACK_IMPORTED_MODULE_2__entrenador_entrenador_component__["a" /* EntrenadorComponent */] },
    { path: 'entrenador/:idEntrenador/pokemon', component: __WEBPACK_IMPORTED_MODULE_3__pokemon_pokemon_component__["a" /* PokemonComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/app.routes.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/personal/Documents/GitHub/examen-twj-ariashomero/AplicacionPrueba/AplicacionPrueba/src/environment.js.map

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/home']\"><img src=\"../assets/bootstrap-3.3.7-dist/wall.png\" alt=\"Imagen pokemon\" height=\"100px\" ></a>\r\n<nav class=\"navbar navbar-inverse\">\r\n  <div class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"/\">Pokémon</a>\r\n  </div>\r\n\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n    <ul class=\"nav navbar-nav\">\r\n\r\n          <li><a [routerLink]=\"['/entrenador']\">Entrenadores</a></li>\r\n\r\n          <li><a [routerLink]=\"['/entrenador','2','pokemon']\">Pokémon</a></li>\r\n        </ul>\r\n\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-2\"></div>\r\n  <div class=\"col-sm-6\">\r\n    <h1>{{title}}</h1>\r\n    <h2>{{error}}</h2>\r\n  </div>\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\"></div>\r\n      <div class=\"col-sm-4 opaque1\">\r\n        <h2>Crea un entrenador</h2>\r\n        <form class=\"animated bounceIn\" (ngSubmit)=\"crearEntrenador(NuevaEntrenadorForm)\" #NuevaEntrenadorForm=\"ngForm\">\r\n\r\n          <div class=\"form-group\">\r\n            <label>Nombres</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese su nombre\" [(ngModel)]=\"nuevaEntrenador.nombre\" name=\"nombre\">\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Fecha inicio</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"datePicker\" [(ngModel)]=\"nuevaEntrenador.fechaInicio\" name=\"fechaInicio\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Region</label>\r\n            <select class=\"form-control\" id=\"exampleSelect1\" [(ngModel)]=\"nuevaEntrenador.region\" name=\"region\">\r\n              <option>Alola</option>\r\n              <option>Johto</option>\r\n              <option>Kanto</option>\r\n              <option>Hoenn</option>\r\n              <option>Teselia</option>\r\n              <option>Sinnoh</option>\r\n              <option>Kalos</option>\r\n              <option>Islas</option>\r\n              <option>Sete</option>\r\n            </select>\r\n          </div>\r\n          <button  [disabled]=\"disabledButtons.NuevaEntrenadorFormSubmitButton||!NuevaEntrenadorForm.valid\" type=\"submit\"\r\n                  class=\"btn btn-block btn-success\">Crear\r\n          </button>\r\n\r\n        </form>\r\n        <br>\r\n      </div>\r\n      <div class=\"col-sm-4\">\r\n        <h1>{{nuevaEntrenador.nombre}}</h1>\r\n        <h1>{{nuevaEntrenador.fechaInicio}}</h1>\r\n        <h1>{{nuevaEntrenador.region}}</h1>\r\n      </div>\r\n    </div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\"></div>\r\n  <div class=\"col-sm-6\" style=\"color: white\">\r\n    <h1>Lista de Entrenadores</h1>\r\n  </div>\r\n  <div class=\"col-sm-2\">\r\n\r\n  </div>\r\n  <div class=\"col-sm-2\"></div>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\"></div>\r\n  <div class=\"col-sm-6\" style=\"color: white\">\r\n    <p>Aqui se listan todos los entrenadores del sistema de pokemon.</p>\r\n  </div>\r\n\r\n  <div class=\"col-sm-4\"></div>\r\n</div>\r\n<br>\r\n\r\n\r\n<div class=\"col-sm-12 animated flipInX\"  *ngFor=\"let entrenador of entrenadores\">\r\n  <div>\r\n    <div class=\"row\" >\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-8 opaque1\">\r\n        <div class=\"row ma-margen-top-bottom\">\r\n          <div class=\"col-sm-1\">\r\n            ID: {{entrenador.id}}\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"text-center ma-borde ma-padding-top-bottom\">\r\n              <h1> {{entrenador.nombre}} </h1>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-5 text-center\">\r\n            <div class=\"text-center ma-borde\" style=\"margin-top: 10px;\">\r\n              <p>\r\n                {{entrenador.nombre}}\r\n              </p>\r\n              <p>\r\n                {{entrenador.region}}\r\n              </p>\r\n              <p>\r\n                {{entrenador.fechaInicio}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2 text-center\">\r\n            <br>\r\n            <a (click)=\"borrarEntrenador(entrenador.id)\" class=\"btn btn-danger btn-block\">X</a>\r\n            <a (click)=\"entrenador.formularioCerrado = !entrenador.formularioCerrado\" class=\"btn btn-info btn-block\">Edit</a>\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <a class=\"btn btn-default btn-block\" [routerLink]=\"[entrenador.id,'pokemon']\">Ir a Pokémons</a>\r\n            <br>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-2\"></div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <br>\r\n\r\n  <div class=\"div\"  [hidden]=\"entrenador.formularioCerrado\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\"></div>\r\n      <div class=\"col-sm-6\" style=\"color: white\">\r\n        <h1>Editar Entrenador  - {{entrenador.nombre}} </h1>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n\r\n      </div>\r\n      <div class=\"col-sm-2\"></div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\"></div>\r\n      <div class=\"col-sm-4 opaque1\">\r\n        <br>\r\n        <form class=\"animated bounceIn\" (ngSubmit)=\"actualizarEntrenador(entrenador)\" #NuevaEntrenadorForm2=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label>Nombres</label>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese sus Nombres\" name=\"nombres\" [(ngModel)]=\"entrenador.nombre\"\r\n                   #nombre=\"ngModel\"\r\n                   #nombreElm>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Fecha</label>\r\n            <input type=\"date\" class=\"form-control\" placeholder=\"Ingrese su fecha de inicio:\" name=\"fechaInicio\" [(ngModel)]=\"entrenador.fechaInicio\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Region</label>\r\n            <select class=\"form-control\" [(ngModel)]=\"entrenador.region\" name=\"region\">\r\n              <option>Alola</option>\r\n              <option>Johto</option>\r\n              <option>Kanto</option>\r\n              <option>Hoenn</option>\r\n              <option>Teselia</option>\r\n              <option>Sinnoh</option>\r\n              <option>Kalos</option>\r\n              <option>Islas</option>\r\n              <option>Sete</option>\r\n            </select>\r\n          </div>\r\n\r\n          <input type=\"hidden\" name=\"idEntrenador\" value=\" {{entrenador.id}}\">\r\n          <button type=\"submit\" class=\"btn btn-block btn-success\"\r\n                  [disabled]=\"disabledButtons.NuevaEntrenadorFormSubmitButton||!NuevaEntrenadorForm2.valid\"\r\n          >Editar Entrenador :)</button>\r\n          <button type=\"button\"\r\n                  class=\"btn btn-block btn-warning\"\r\n                  (click)=\"entrenador.formularioCerrado = !entrenador.formularioCerrado\"\r\n          >\r\n            Cancelar\r\n          </button>\r\n\r\n        </form>\r\n        <br>\r\n      </div>\r\n      <div class=\"col-sm-4\"></div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n  <br>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\"></div>\r\n    <div class=\"col-sm-4\">\r\n      <img onmouseover=\"ver()\" width=\"280\" onmouseleave=\"noVer()\" src=\"../../assets/pokemon/superior.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"col-sm-4\"></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\"></div>\r\n    <div class=\"col-sm-4\" onmouseover=\"ver()\" onmouseleave=\"noVer()\">\r\n      <h1 id=\"pokeball2\" class=\"hidden text-center\" style=\"color: white;\">Bienvenido!</h1>\r\n      <img  id=\"pokeball\"  width=\"280\" class=\"hidden\" src=\"../../assets/pokemon/Pikachu.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"col-sm-4\"></div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\"></div>\r\n    <div class=\"col-sm-8\" >\r\n      <img onmouseover=\"ver()\" onmouseleave=\"noVer()\" width=\"280\" src=\"../../assets/pokemon/inferior.png\"alt=\"\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\"></div>\r\n  <div class=\"col-sm-5 opaque1\">\r\n    <h2>Crea un Pokemon</h2>\r\n\r\n    <form action=\"\" method=\"post\" (ngSubmit)=\"crearPokemon(NuevaPokemonForm)\" #NuevaPokemonForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label>Nombre del Pokémon</label>\r\n        <select class=\"form-control\" id=\"select1\" name=\"nombre\" [(ngModel)]=\"nuevoPokemon.nombre\" onchange=\"cambiar();\">\r\n          <option>Abra</option>\r\n          <option>Aerodactyl</option>\r\n          <option>Alakazam</option>\r\n          <option>Arbok</option>\r\n          <option>Arcanine</option>\r\n          <option>Articuno</option>\r\n          <option>Beedrill </option>\r\n          <option>Bellsprout</option>\r\n          <option>Blastoise </option>\r\n          <option>Bulbasaur</option>\r\n          <option>Butterfree </option>\r\n          <option>Caterpie </option>\r\n          <option>Chansey</option>\r\n          <option>Charizard</option>\r\n          <option>Charmander</option>\r\n          <option>Charmeleon</option>\r\n          <option>Clefable</option>\r\n          <option>Clefairy </option>\r\n          <option>Cloyster</option>\r\n          <option>Cubone</option>\r\n          <option>Dewgong</option>\r\n          <option>Diglett</option>\r\n          <option>Ditto</option>\r\n          <option>Dodrio</option>\r\n          <option>Doduo</option>\r\n          <option>Dragonair</option>\r\n          <option>Dragonite</option>\r\n          <option>Dratini</option>\r\n          <option>Drowzee</option>\r\n          <option>Dugtrio</option>\r\n          <option>Eevee</option>\r\n          <option>Ekans </option>\r\n          <option>Electabuzz</option>\r\n          <option>Electrode</option>\r\n          <option>Exeggcute</option>\r\n          <option>Exeggutor</option>\r\n          <option>Farfetch</option>\r\n          <option>Fearow </option>\r\n          <option>Flareon</option>\r\n          <option>Gastly</option>\r\n          <option>Gengar</option>\r\n          <option>Geodude</option>\r\n          <option>Gloom</option>\r\n          <option>Golbat</option>\r\n          <option>Goldeen</option>\r\n          <option>Golduck</option>\r\n          <option>Golem</option>\r\n          <option>Graveler</option>\r\n          <option>Grimer</option>\r\n          <option>Growlithe</option>\r\n          <option>Gyarados</option>\r\n          <option>Haunter</option>\r\n          <option>Hitmonchan</option>\r\n          <option>Hitmonlee</option>\r\n          <option>Horsea</option>\r\n          <option>Hypno</option>\r\n          <option>Ivysaur</option>\r\n          <option>Jigglypuff</option>\r\n          <option>Jolteon</option>\r\n          <option>Jynx</option>\r\n          <option>Kabuto</option>\r\n          <option>Kabutops</option>\r\n          <option>Kadabra</option>\r\n          <option>Kakuna</option>\r\n          <option>Kangaskhan</option>\r\n          <option>Kingler</option>\r\n          <option>Koffing</option>\r\n          <option>Krabby</option>\r\n          <option>Lapras </option>\r\n          <option>Lickitung</option>\r\n          <option>Machamp</option>\r\n          <option>Machoke</option>\r\n          <option>Machop</option>\r\n          <option>Magikarp</option>\r\n          <option>Magmar</option>\r\n          <option>Magnemite</option>\r\n          <option>Magneton</option>\r\n          <option>Mankey </option>\r\n          <option>Marowak</option>\r\n          <option>Metapod </option>\r\n          <option>Mew</option>\r\n          <option>Mewtwo</option>\r\n          <option>Moltres</option>\r\n          <option>Mr.Mime</option>\r\n          <option>Muk</option>\r\n          <option>Nidoking</option>\r\n          <option>Nidoqueen </option>\r\n          <option>NidoranF</option>\r\n          <option>NidoranM</option>\r\n          <option>Nidorina </option>\r\n          <option>Nidorino</option>\r\n          <option>Ninetales</option>\r\n          <option>Oddish</option>\r\n          <option>Omanyte</option>\r\n          <option>Omastar</option>\r\n          <option>Onix</option>\r\n          <option>Paras</option>\r\n          <option>Parasect</option>\r\n          <option>Persian</option>\r\n          <option>Pidgeot </option>\r\n          <option>Pidgeotto </option>\r\n          <option>Pidgey </option>\r\n          <option>Pikachu</option>\r\n          <option>Pinsir</option>\r\n          <option>Poliwag</option>\r\n          <option>Poliwhirl</option>\r\n          <option>Poliwrath</option>\r\n          <option>Ponyta</option>\r\n          <option>Porygon</option>\r\n          <option>Primeape</option>\r\n          <option>Psyduck</option>\r\n          <option>Raichu </option>\r\n          <option>Rapidash</option>\r\n          <option>Raticate </option>\r\n          <option>Rattata</option>\r\n          <option>Rhydon</option>\r\n          <option>Rhyhorn</option>\r\n          <option>Sandshrew </option>\r\n          <option>Sandslash </option>\r\n          <option>Scyther</option>\r\n          <option>Seadra</option>\r\n          <option>Seaking</option>\r\n          <option>Seel</option>\r\n          <option>Shellder</option>\r\n          <option>Slowbro</option>\r\n          <option>Slowpoke</option>\r\n          <option>Snorlax</option>\r\n          <option>Spearow </option>\r\n          <option>Squirtle </option>\r\n          <option>Starmie</option>\r\n          <option>Staryu</option>\r\n          <option>Tangela</option>\r\n          <option>Tauros</option>\r\n          <option>Tentacool</option>\r\n          <option>Tentacruel</option>\r\n          <option>Vaporeon</option>\r\n          <option>Venomoth</option>\r\n          <option>Venonat</option>\r\n          <option>Venusaur</option>\r\n          <option>Victreebel</option>\r\n          <option>Vileplume</option>\r\n          <option>Voltorb</option>\r\n          <option>Vulpix</option>\r\n          <option>Wartortle </option>\r\n          <option>Weedle</option>\r\n          <option>Weepinbell</option>\r\n          <option>Weezing</option>\r\n          <option>Wigglytuff</option>\r\n          <option>Zapdos</option>\r\n          <option>Zubat</option>\r\n\r\n\r\n        </select>\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Tipo1</label>\r\n        <select class=\"form-control\" name=\"tipo1\"  [(ngModel)]=\"nuevoPokemon.tipo1\" >\r\n          <option>Acero</option>\r\n          <option>Agua</option>\r\n          <option>Bicho</option>\r\n          <option>Dragón</option>\r\n          <option>Eléctrico</option>\r\n          <option>Fantasma</option>\r\n          <option>Fuego</option>\r\n          <option>Hada</option>\r\n          <option>Hielo</option>\r\n          <option>Lucha</option>\r\n          <option>Normal</option>\r\n          <option>Planta</option>\r\n          <option>Psíquico</option>\r\n          <option>Roca</option>\r\n          <option>Siniestro</option>\r\n          <option>Tierra</option>\r\n          <option>Veneno</option>\r\n          <option>Volador</option>\r\n        </select>\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Tipo2</label>\r\n        <select class=\"form-control\" name=\"tipo2\"  [(ngModel)]=\"nuevoPokemon.tipo2\" >\r\n          <option>Acero</option>\r\n          <option>Agua</option>\r\n          <option>Bicho</option>\r\n          <option>Dragón</option>\r\n          <option>Eléctrico</option>\r\n          <option>Fantasma</option>\r\n          <option>Fuego</option>\r\n          <option>Hada</option>\r\n          <option>Hielo</option>\r\n          <option>Lucha</option>\r\n          <option>Normal</option>\r\n          <option>Planta</option>\r\n          <option>Psíquico</option>\r\n          <option>Roca</option>\r\n          <option>Siniestro</option>\r\n          <option>Tierra</option>\r\n          <option>Veneno</option>\r\n          <option>Volador</option>\r\n        </select>\r\n\r\n      </div>\r\n      <button  type=\"submit\" class=\"btn btn-success\">Crear Pokémon :)</button>\r\n\r\n    </form>\r\n    <br>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <img align=\"center\" id=\"img1\" class=\"opaque1\" src=\"../../assets/bootstrap-3.3.7-dist/pokemon.jpeg\" height=\"300px\">\r\n  </div>\r\n  <div class=\"col-sm-2\"></div>\r\n</div>\r\n\r\n  <div class=\"opaque1\">\r\n    <h1>Lista de Entrenadores</h1>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9\">\r\n        <p>Aqui se listan todos los pokémon del sistema de pokémon.</p>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n      </div>\r\n    </div>\r\n    <br>\r\n  </div>\r\n  <br>\r\n  <div class=\"opaque1\">\r\n    <div class=\"col-sm-12 animated flipInX\"  *ngFor=\"let pokemon of pokemons\">\r\n      <br>\r\n      <div class=\"row ma-margen-top-bottom\">\r\n        <div class=\"col-sm-1\">\r\n          ID: {{pokemon.id}}\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 opaque1\">\r\n\r\n          <div class=\"text-center ma-borde ma-padding-top-bottom\">\r\n            <h1> {{pokemon.nombre}}</h1>\r\n            <img align=\"center\" id=\"if\" src=\"../../assets/pokemon/{{pokemon.imagen}}.png\" height=\"150px\">\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"col-sm-1\"></div>\r\n\r\n        <div class=\"col-sm-5 opaque1\">\r\n          <div class=\"ma-borde\" style=\"margin-top: 40px;\">\r\n\r\n            <h2 class=\"text-center \">\r\n              {{pokemon.nombre}}\r\n            </h2>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4\"></div>\r\n              <div class=\"col-sm-2\">\r\n                <p>\r\n                  Tipo1:\r\n                </p>\r\n                <p>\r\n                  Tipo2:\r\n                </p>\r\n                <p>\r\n                  Entrenador:\r\n                </p>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <p>\r\n                  {{pokemon.tipo1}}\r\n                </p>\r\n                <p>\r\n                  {{pokemon.tipo2}}\r\n                </p>\r\n                <p>\r\n                  {{pokemon.idEntrenador.nombre}}\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-1\">\r\n          <a (click)=\"borrarPokemon(pokemon.id)\" class=\"btn btn-danger btn-block\">X</a>\r\n\r\n          <a (click)=\"pokemon.formularioCerrado = !pokemon.formularioCerrado\" class=\"btn btn-info btn-block\">Edit</a>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\" [hidden]=\"pokemon.formularioCerrado\">\r\n        <div class=\"col-sm-4\"> </div>\r\n        <div class=\"col-sm-4 opaque1\">\r\n          <form class=\"animated bounceIn\" (ngSubmit)=\"actualizarPokemon(pokemon)\" #NuevaPokemonForm2=\"ngForm\" method=\"post\">\r\n\r\n            <div class=\"form-group\">\r\n              <br>\r\n              <label>Nombre del pokémon:</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Ingrese el nombre del pokémon\" name=\"nombre\" [(ngModel)]=\"pokemon.nombre\"\r\n                     #nombre=\"ngModel\"\r\n                     #nombreElm>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Tipo1</label>\r\n              <select class=\"form-control\" name=\"tipo1\" [(ngModel)]=\"pokemon.tipo1\">\r\n                <option>Acero</option>\r\n                <option>Agua</option>\r\n                <option>Bicho</option>\r\n                <option>Dragón</option>\r\n                <option>Eléctrico</option>\r\n                <option>Fantasma</option>\r\n                <option>Fuego</option>\r\n                <option>Hada</option>\r\n                <option>Hielo</option>\r\n                <option>Lucha</option>\r\n                <option>Normal</option>\r\n                <option>Planta</option>\r\n                <option>Psíquico</option>\r\n                <option>Roca</option>\r\n                <option>Siniestro</option>\r\n                <option>Tierra</option>\r\n                <option>Veneno</option>\r\n                <option>Volador</option>\r\n              </select>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label>Tipo2</label>\r\n              <select class=\"form-control\" name=\"tipo2\" [(ngModel)]=\"pokemon.tipo2\">\r\n                <option>Acero</option>\r\n                <option>Agua</option>\r\n                <option>Bicho</option>\r\n                <option>Dragón</option>\r\n                <option>Eléctrico</option>\r\n                <option>Fantasma</option>\r\n                <option>Fuego</option>\r\n                <option>Hada</option>\r\n                <option>Hielo</option>\r\n                <option>Lucha</option>\r\n                <option>Normal</option>\r\n                <option>Planta</option>\r\n                <option>Psíquico</option>\r\n                <option>Roca</option>\r\n                <option>Siniestro</option>\r\n                <option>Tierra</option>\r\n                <option>Veneno</option>\r\n                <option>Volador</option>\r\n              </select>\r\n\r\n            </div>\r\n            <input type=\"hidden\" name=\"idPokemon\" value=\" {{pokemon.id}}\">\r\n            <button type=\"submit\" class=\"btn btn-block btn-success\"\r\n                    [disabled]=\"disabledButtons.NuevaPokemonFormSubmitButton||!NuevaPokemonForm2.valid\"\r\n            >Editar Pokémon :)</button>\r\n            <button type=\"button\"\r\n                    class=\"btn btn-block btn-warning\"\r\n                    (click)=\"pokemon.formularioCerrado = !pokemon.formularioCerrado\"\r\n            >\r\n              Cancelar\r\n            </button>\r\n          </form>\r\n          <br>\r\n        </div>\r\n        <div class=\"col-sm-4\"></div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(336);


/***/ })

},[536]);
//# sourceMappingURL=main.bundle.js.map