function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/country-menu/country-menu.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/country-menu/country-menu.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCountryMenuCountryMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button style=\"position: fixed; z-index: 1;\" routerLink=\"/{{map}}\">Zurück</button>\n<div style=\"width: 100%; height: 10%; position: fixed; top: 0;\">\n\t<h1 style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); margin: 0;\">{{name}}</h1>\n</div>\n<div style=\"width: 40%; height: 40%; position: fixed; top: 10%; left: 10%; background-color: #DADADA; border: black solid 1px; cursor: pointer;\"\n\t(click)=\"showCapital ? showCapital = false : showCapital = true\">\n\t<div style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n\t\t<h2 style=\"margin: 0;\">Hauptstadt{{showCapital?':':''}}</h2>\n\t\t<h2 *ngIf=\"showCapital\">{{countryCapitals[code]}}</h2>\n\t</div>\n</div>\n<div style=\"width: 40%; height: 40%; position: fixed; top: 10%; right: 10%; background-color: #DADADA; border: black solid 1px; cursor: pointer;\"\n\t(click)=\"showPopulation ? showPopulation = false : showPopulation = true\">\n\t<div style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n\t\t<h2 style=\"margin: 0;\">Einwohner{{showPopulation?':':''}}</h2>\n\t\t<h2 *ngIf=\"showPopulation\">{{countryPopulation[code] | number:'':'de-DE'}}</h2>\n\t</div>\n</div>\n<div style=\"width: 40%; height: 40%; position: fixed; bottom: 10%; left: 10%; background-color: #DADADA; border: black solid 1px; cursor: pointer;\"\n\t(click)=\"showFlag ? showFlag = false : showFlag = true\">\n\t<div *ngIf=\"!showFlag\" style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); max-height: 100%; overflow: hidden;\">\n\t\t<h2 style=\"margin: 0;\">Flagge{{showFlag?':':''}}</h2>\n\t</div>\n\t<img src=\"../../assets/flags/png1000px/{{code.toLowerCase()}}.png\" style=\"display: block; max-width: 90%; max-height: 90%; top: 50%; left: 50%; position: relative; transform: translate(-50%, -50%);\" *ngIf=\"showFlag\"/>\n</div>\n<div style=\"width: 40%; height: 40%; position: fixed; bottom: 10%; right: 10%; background-color: #DADADA; border: black solid 1px; cursor: pointer;\"\n\t(click)=\"showArea ? showArea = false : showArea = true\">\n\t<div style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n\t\t<h2 style=\"margin: 0;\">Fläche{{showArea?':':''}}</h2>\n\t\t<h2 *ngIf=\"showArea\">{{countryArea[code] | number:'':'de-DE'}} km&#0178;</h2>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMenuMainMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);\">\n\t<div style=\"display: inline-block; vertical-align: middle;\">\n\t\t<button routerLink=\"/Welt\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Welt</button>\n\t</div>\n\t<div style=\"display: inline-block; vertical-align: middle;\">\n\t\t<button routerLink=\"/Europa\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Europa</button>\n\t\t<button routerLink=\"/Nordamerika\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Nordamerika</button>\n\t\t<button routerLink=\"/Südamerika\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Südamerika</button>\n\t\t<button routerLink=\"/Asien\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Asien</button>\n\t\t<button routerLink=\"/Afrika\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Afrika</button>\n\t\t<button routerLink=\"/Ozeanien\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Ozeanien</button>\n\t</div>\n\t<div style=\"display: inline-block; vertical-align: middle;\">\n\t\t<button routerLink=\"/Deutschland\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">Deutschland</button>\n\t\t<button routerLink=\"/USA\" style=\"margin: 5px; font-size: 28px; display: block; cursor: pointer;\">USA</button>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMapMapComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button style=\"position: fixed; z-index: 1;\" (click)=\"back()\">Zurück</button>\n<!--<div style=\"position: fixed; z-index: 1; background-color: white; bottom: 0; left: 0; width: 100px; height: 200px;\">Team A</div>\n<div style=\"position: fixed; z-index: 1; background-color: white; bottom: 0; left: 100px; width: 100px; height: 200px;\">Team B</div>-->\n<div id=\"map\" style=\"width: 100%; height: 100%;\" [ngClass]=\"{'blurred': showCountryMenu}\" (click)=\"doSomething()\"></div>\n<div *ngIf=\"showCountryMenu && !showOptions\" style=\"position: fixed; top: 0; width: 100%; height: 100%;\">\n    <div style=\"width: 100%; height: 10%; position: fixed; top: 0; background: linear-gradient(transparent, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0.7) 75%, transparent);\">\n        <h1 style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); margin: 0;\">{{name}}</h1>\n    </div>\n    <div class=\"box top-left\" [ngStyle]=\"getOptionStyle(4)\" (click)=\"showOptions = true; categoryToShow = 'Hauptstadt'; showCapital = true; calculateOptions();\">\n        <div style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n            <h1 style=\"margin: 0;\">Hauptstadt</h1>\n        </div>\n    </div>\n    <div class=\"box top-right\" [ngStyle]=\"getOptionStyle(4)\" (click)=\"showOptions = true; categoryToShow = 'Einwohner'; showPopulation = true; calculateOptions();\">\n        <div style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n            <h1 style=\"margin: 0;\">Einwohner</h1>\n        </div>\n    </div>\n    <div class=\"box bottom-left\" [ngStyle]=\"getOptionStyle(4)\" (click)=\"showOptions = true; categoryToShow = 'Flagge'; showFlag = true; calculateOptions();\">\n        <div *ngIf=\"!showFlag\" style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); max-height: 100%; overflow: hidden;\">\n            <h1 style=\"margin: 0;\">Flagge</h1>\n        </div>\n    </div>\n    <div class=\"box bottom-right\" [ngStyle]=\"getOptionStyle(4)\" (click)=\"showOptions = true; categoryToShow = 'Fläche'; showArea = true; calculateOptions();\">\n        <div style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n            <h1 style=\"margin: 0;\">Fläche</h1>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"showCountryMenu && showOptions\" style=\"position: fixed; top: 0; width: 100%; height: 100%;\">\n    <div style=\"width: 100%; height: 10%; position: fixed; top: 0; background: linear-gradient(transparent, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0.7) 75%, transparent);\">\n        <h1 style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); margin: 0;\">{{categoryToShow}} von {{name}}</h1>\n    </div>\n    <div class=\"box top-left\" [ngStyle]=\"getOptionStyle(0)\" (click)=\"clickeOptionIndex = 0; optionClicked = true;\">\n        <div *ngIf=\"!showFlag\"  style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n            <h1 *ngIf=\"showCapital\" style=\"margin: 0;\">{{countryCapitals[options[0]]}}</h1>\n            <h1 *ngIf=\"showPopulation\" style=\"margin: 0;\">{{countryPopulation[options[0]] | number:'':'de-DE'}}</h1>\n            <h1 *ngIf=\"showArea\" style=\"margin: 0;\">{{countryArea[options[0]] | number:'':'de-DE'}} km&#0178;</h1>\n        </div>\n        <img class=\"img-style\"\n        *ngIf=\"showFlag\"\n        src=\"../../assets/flags/png1000px/{{options[0].toLowerCase()}}.png\"\n        (error)=\"setDefaultImage($event)\"/>\n    </div>\n    <div class=\"box top-right\" [ngStyle]=\"getOptionStyle(1)\" (click)=\"clickeOptionIndex = 1; optionClicked = true;\">\n        <div *ngIf=\"!showFlag\"  style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n            <h1 *ngIf=\"showCapital\" style=\"margin: 0;\">{{countryCapitals[options[1]]}}</h1>\n            <h1 *ngIf=\"showPopulation\" style=\"margin: 0;\">{{countryPopulation[options[1]] | number:'':'de-DE'}}</h1>\n            <h1 *ngIf=\"showArea\" style=\"margin: 0;\">{{countryArea[options[1]] | number:'':'de-DE'}} km&#0178;</h1>\n        </div>\n        <img class=\"img-style\"\n        *ngIf=\"showFlag\"\n        src=\"../../assets/flags/png1000px/{{options[1].toLowerCase()}}.png\"\n        (error)=\"setDefaultImage($event)\"/>\n    </div>\n    <div class=\"box bottom-left\" [ngStyle]=\"getOptionStyle(2)\" (click)=\"clickeOptionIndex = 2; optionClicked = true;\">\n        <div *ngIf=\"!showFlag\" style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%);\">\n            <h1 *ngIf=\"showCapital\" style=\"margin: 0;\">{{countryCapitals[options[2]]}}</h1>\n            <h1 *ngIf=\"showPopulation\" style=\"margin: 0;\">{{countryPopulation[options[2]] | number:'':'de-DE'}}</h1>\n            <h1 *ngIf=\"showArea\" style=\"margin: 0;\">{{countryArea[options[2]] | number:'':'de-DE'}} km&#0178;</h1>\n        </div>\n        <img class=\"img-style\"\n        *ngIf=\"showFlag\"\n        src=\"../../assets/flags/png1000px/{{options[2].toLowerCase()}}.png\"\n        (error)=\"setDefaultImage($event)\"/>\n    </div>\n    <div class=\"box bottom-right\" [ngStyle]=\"getOptionStyle(3)\" (click)=\"clickeOptionIndex = 3; optionClicked = true;\">\n        <div *ngIf=\"!showFlag\" style=\"position: relative; text-align: center; top: 50%; transform: translate(0, -50%); \">\n            <h1 *ngIf=\"showCapital\" style=\"margin: 0;\">{{countryCapitals[options[3]]}}</h1>\n            <h1 *ngIf=\"showPopulation\" style=\"margin: 0;\">{{countryPopulation[options[3]] | number:'':'de-DE'}}</h1>\n            <h1 *ngIf=\"showArea\" style=\"margin: 0;\">{{countryArea[options[3]] | number:'':'de-DE'}} km&#0178;</h1>\n        </div>\n        <img class=\"img-style\"\n        *ngIf=\"showFlag\" \n        src=\"../../assets/flags/png1000px/{{options[3].toLowerCase()}}.png\" \n        (error)=\"setDefaultImage($event)\"/>\n    </div>\n</div>\n<div *ngIf=\"showCountryMenu\" style=\"position: fixed; z-index: 1; left: 40px; bottom: 0; font-size: 12px;\">{{boxSizeService.boxSize}}</div>\n<button *ngIf=\"showCountryMenu\" style=\"position: fixed; z-index: 1; left: 0; bottom: 0; width: 20px;\" (click)=\"increment()\">+</button>\n<button *ngIf=\"showCountryMenu\" style=\"position: fixed; z-index: 1; left: 20px; bottom: 0; width: 20px;\" (click)=\"decrement()\">-</button>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/world/world.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/world/world.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWorldWorldComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button style=\"position: fixed; z-index: 1; top: 0; left: 0;\"><a href=\"\">Zurück</a></button>\n<div style=\"position: fixed; z-index: 1; background-color: white; bottom: 0; left: 0; width: 100px; height: 200px;\" >Team A</div>\n<div style=\"position: fixed; z-index: 1; background-color: white; bottom: 0; left: 100px; width: 100px; height: 200px;\">Team B</div>\n<div id=\"world-map\" style=\"width: 100%; height: 100%;\"></div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-menu/main-menu.component */
    "./src/app/main-menu/main-menu.component.ts");
    /* harmony import */


    var _country_menu_country_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./country-menu/country-menu.component */
    "./src/app/country-menu/country-menu.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");

    var routes = [{
      path: '',
      component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_3__["MainMenuComponent"]
    }, {
      path: ':map',
      component: _map_map_component__WEBPACK_IMPORTED_MODULE_5__["MapComponent"]
    }, {
      path: ':map/:code',
      component: _country_menu_country_menu_component__WEBPACK_IMPORTED_MODULE_4__["CountryMenuComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'geoApp';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/locales/de */
    "./node_modules/@angular/common/locales/de.js");
    /* harmony import */


    var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _world_world_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./world/world.component */
    "./src/app/world/world.component.ts");
    /* harmony import */


    var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main-menu/main-menu.component */
    "./src/app/main-menu/main-menu.component.ts");
    /* harmony import */


    var _country_menu_country_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./country-menu/country-menu.component */
    "./src/app/country-menu/country-menu.component.ts");
    /* harmony import */


    var _map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./map/map.component */
    "./src/app/map/map.component.ts");
    /* harmony import */


    var _box_size_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./box-size.service */
    "./src/app/box-size.service.ts");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_4___default.a, 'de');

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _world_world_component__WEBPACK_IMPORTED_MODULE_7__["WorldComponent"], _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_8__["MainMenuComponent"], _country_menu_country_menu_component__WEBPACK_IMPORTED_MODULE_9__["CountryMenuComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
      providers: [_box_size_service__WEBPACK_IMPORTED_MODULE_11__["BoxSizeService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/box-size.service.ts":
  /*!*************************************!*\
    !*** ./src/app/box-size.service.ts ***!
    \*************************************/

  /*! exports provided: BoxSizeService */

  /***/
  function srcAppBoxSizeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxSizeService", function () {
      return BoxSizeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BoxSizeService = function BoxSizeService() {
      _classCallCheck(this, BoxSizeService);

      this.boxSize = 40;
    };

    BoxSizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BoxSizeService);
    /***/
  },

  /***/
  "./src/app/country-menu/country-menu.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/country-menu/country-menu.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCountryMenuCountryMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnktbWVudS9jb3VudHJ5LW1lbnUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/country-menu/country-menu.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/country-menu/country-menu.component.ts ***!
    \********************************************************/

  /*! exports provided: CountryMenuComponent */

  /***/
  function srcAppCountryMenuCountryMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryMenuComponent", function () {
      return CountryMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CountryMenuComponent = /*#__PURE__*/function () {
      function CountryMenuComponent(route) {
        _classCallCheck(this, CountryMenuComponent);

        this.route = route;
        this.showCapital = false;
        this.showPopulation = false;
        this.showFlag = false;
        this.showArea = false;
        this.countryNames = {
          "US-AL": "Alabama",
          "US-AK": "Alaska",
          "US-AZ": "Arizona",
          "US-AR": "Arkansas",
          "US-CO": "Colorado",
          "US-CT": "Connecticut",
          "US-DE": "Delaware",
          "US-FL": "Florida",
          "US-GA": "Georgia",
          "US-HI": "Hawaii",
          "US-ID": "Idaho",
          "US-IL": "Illinois",
          "US-IN": "Indiana",
          "US-IA": "Iowa",
          "US-CA": "Kalifornien",
          "US-KS": "Kansas",
          "US-KY": "Kentucky",
          "US-LA": "Louisiana",
          "US-ME": "Maine",
          "US-MD": "Maryland",
          "US-MA": "Massachusetts",
          "US-MI": "Michigan",
          "US-MN": "Minnesota",
          "US-MS": "Mississippi",
          "US-MO": "Missouri",
          "US-MT": "Montana",
          "US-NE": "Nebraska",
          "US-NV": "Nevada",
          "US-NH": "New Hampshire",
          "US-NJ": "New Jersey",
          "US-NM": "New Mexico",
          "US-NY": "New York",
          "US-NC": "North Carolina",
          "US-ND": "North Dakota",
          "US-OH": "Ohio",
          "US-OK": "Oklahoma",
          "US-OR": "Oregon",
          "US-PA": "Pennsylvania",
          "US-RI": "Rhode Island",
          "US-SC": "South Carolina",
          "US-SD": "South Dakota",
          "US-TN": "Tennessee",
          "US-TX": "Texas",
          "US-UT": "Utah",
          "US-VT": "Vermont",
          "US-VA": "Virginia",
          "US-WA": "Washington",
          "US-WV": "West Virginia",
          "US-WI": "Wisconsin",
          "US-WY": "Wyoming",
          "DE-BW": "Baden-Württemberg",
          "DE-BY": "Bayern",
          "DE-BE": "Berlin",
          "DE-BB": "Brandenburg",
          "DE-HB": "Bremen",
          "DE-HH": "Hamburg",
          "DE-HE": "Hessen",
          "DE-MV": "Mecklenburg-Vorpommern",
          "DE-NI": "Niedersachsen",
          "DE-NW": "Nordrhein-Westfalen",
          "DE-RP": "Rheinland-Pfalz",
          "DE-SL": "Saarland",
          "DE-SN": "Sachsen",
          "DE-ST": "Sachsen-Anhalt",
          "DE-SH": "Schleswig-Holstein",
          "DE-TH": "Thüringen",
          "AD": "Andorra",
          "AE": "Vereinigte Arabische Emirate",
          "AF": "Afghanistan",
          "AG": "Antigua und Barbuda",
          "AI": "Anguilla",
          "AL": "Albanien",
          "AM": "Armenien",
          "AN": "Niederländische Antillen",
          "AO": "Angola",
          "AQ": "Antarktis",
          "AR": "Argentinien",
          "AS": "Amerikanisch-Samoa",
          "AT": "Österreich",
          "AU": "Australien",
          "AW": "Aruba",
          "AX": "Åland",
          "AZ": "Aserbaidschan",
          "BA": "Bosnien und Herzegowina",
          "BB": "Barbados",
          "BD": "Bangladesch",
          "BE": "Belgien",
          "BF": "Burkina Faso",
          "BG": "Bulgarien",
          "BH": "Bahrain",
          "BI": "Burundi",
          "BJ": "Benin",
          "BM": "Bermuda",
          "BN": "Brunei Darussalam",
          "BO": "Bolivien",
          "BR": "Brasilien",
          "BS": "Bahamas",
          "BT": "Bhutan",
          "BV": "Bouvetinsel",
          "BW": "Botswana",
          "BY": "Weißrussland",
          "BZ": "Belize",
          "CA": "Kanada",
          "CC": "Kokosinseln (Keelinginseln)",
          "CD": "Kongo",
          "CF": "Zentralafrikanische Republik",
          "CG": "Republik Kongo",
          "CH": "Schweiz",
          "CI": "Elfenbeinküste",
          "CK": "Cookinseln",
          "CL": "Chile",
          "CM": "Kamerun",
          "CN": "China",
          "CO": "Kolumbien",
          "CR": "Costa Rica",
          "CU": "Kuba",
          "CV": "Kap Verde",
          "CX": "Weihnachtsinsel",
          "CY": "Zypern",
          "CZ": "Tschechien",
          "DE": "Deutschland",
          "DJ": "Dschibuti",
          "DK": "Dänemark",
          "DM": "Dominica",
          "DO": "Dominikanische Republik",
          "DZ": "Algerien",
          "EC": "Ecuador",
          "EE": "Estland",
          "EG": "Ägypten",
          "EH": "Westsahara",
          "ER": "Eritrea",
          "ES": "Spanien",
          "ET": "Äthiopien",
          "FI": "Finnland",
          "FJ": "Fidschi",
          "FK": "Falklandinseln (Malwinen)",
          "FM": "Mikronesien",
          "FO": "Färöer",
          "FR": "Frankreich",
          "GA": "Gabun",
          "GB": "Großbritannien",
          "GD": "Grenada",
          "GE": "Georgien",
          "GF": "Französisch-Guayana",
          "GG": "Guernsey (Kanalinsel)",
          "GH": "Ghana",
          "GI": "Gibraltar",
          "GL": "Grönland",
          "GM": "Gambia",
          "GN": "Guinea",
          "GP": "Guadeloupe",
          "GQ": "Äquatorialguinea",
          "GR": "Griechenland",
          "GS": "Südgeorgien und die Südl. Sandwichinseln",
          "GT": "Guatemala",
          "GU": "Guam",
          "GW": "Guinea-Bissau",
          "GY": "Guyana",
          "HK": "Hongkong",
          "HM": "Heard- und McDonald-Inseln",
          "HN": "Honduras",
          "HR": "Kroatien",
          "HT": "Haiti",
          "HU": "Ungarn",
          "ID": "Indonesien",
          "IE": "Irland",
          "IL": "Israel",
          "IM": "Insel Man",
          "IN": "Indien",
          "IO": "Britisches Territorium im Indischen Ozean",
          "IQ": "Irak",
          "IR": "Iran",
          "IS": "Island",
          "IT": "Italien",
          "JE": "Jersey (Kanalinsel)",
          "JM": "Jamaika",
          "JO": "Jordanien",
          "JP": "Japan",
          "KE": "Kenia",
          "KG": "Kirgisistan",
          "KH": "Kambodscha",
          "KI": "Kiribati",
          "KM": "Komoren",
          "KN": "St. Kitts und Nevis",
          "KP": "Nordkorea",
          "KR": "Südkorea",
          "KW": "Kuwait",
          "KY": "Kaimaninseln",
          "KZ": "Kasachstan",
          "LA": "Laos",
          "LB": "Libanon",
          "LC": "St. Lucia",
          "LI": "Liechtenstein",
          "LK": "Sri Lanka",
          "LR": "Liberia",
          "LS": "Lesotho",
          "LT": "Litauen",
          "LU": "Luxemburg",
          "LV": "Lettland",
          "LY": "Libyen",
          "MA": "Marokko",
          "MC": "Monaco",
          "MD": "Moldawien",
          "MG": "Madagaskar",
          "MH": "Marshallinseln",
          "MK": "Mazedonien",
          "ML": "Mali",
          "MM": "Myanmar (Burma)",
          "MN": "Mongolei",
          "MO": "Macau",
          "MP": "Nördliche Marianen",
          "MQ": "Martinique",
          "MR": "Mauretanien",
          "MS": "Montserrat",
          "MT": "Malta",
          "MU": "Mauritius",
          "MV": "Malediven",
          "MW": "Malawi",
          "MX": "Mexiko",
          "MY": "Malaysia",
          "MZ": "Mosambik",
          "NA": "Namibia",
          "NC": "Neukaledonien",
          "NE": "Niger",
          "NF": "Norfolkinsel",
          "NG": "Nigeria",
          "NI": "Nicaragua",
          "NL": "Niederlande",
          "NO": "Norwegen",
          "NP": "Nepal",
          "NR": "Nauru",
          "NU": "Niue",
          "NZ": "Neuseeland",
          "OM": "Oman",
          "PA": "Panama",
          "PE": "Peru",
          "PF": "Französisch-Polynesien",
          "PG": "Papua-Neuguinea",
          "PH": "Philippinen",
          "PK": "Pakistan",
          "PL": "Polen",
          "PM": "St. Pierre und Miquelon",
          "PN": "Pitcairninseln",
          "PR": "Puerto Rico",
          "PS": "Palästina",
          "PT": "Portugal",
          "PW": "Palau",
          "PY": "Paraguay",
          "QA": "Katar",
          "RE": "Réunion",
          "RO": "Rumänien",
          "RU": "Russland",
          "RW": "Ruanda",
          "SA": "Saudi-Arabien",
          "SB": "Salomonen",
          "SC": "Seychellen",
          "SD": "Sudan",
          "SE": "Schweden",
          "SG": "Singapur",
          "SH": "St. Helena",
          "SI": "Slowenien",
          "SJ": "Svalbard und Jan Mayen",
          "SK": "Slowakei",
          "SL": "Sierra Leone",
          "SM": "San Marino",
          "SN": "Senegal",
          "SO": "Somalia",
          "SR": "Suriname",
          "ST": "São Tomé und Príncipe",
          "SV": "El Salvador",
          "SY": "Syrien",
          "SZ": "Swasiland",
          "TC": "Turks- und Caicosinseln",
          "TD": "Tschad",
          "TF": "Französische Süd- und Antarktisgebiete",
          "TG": "Togo",
          "TH": "Thailand",
          "TJ": "Tadschikistan",
          "TK": "Tokelau",
          "TL": "Timor-Leste",
          "TM": "Turkmenistan",
          "TN": "Tunesien",
          "TO": "Tonga",
          "TR": "Türkei",
          "TT": "Trinidad und Tobago",
          "TV": "Tuvalu",
          "TW": "Taiwan",
          "TZ": "Tansania",
          "UA": "Ukraine",
          "UG": "Uganda",
          "UM": "Amerikanisch-Ozeanien",
          "US": "Vereinigte Staaten von Amerika",
          "UY": "Uruguay",
          "UZ": "Usbekistan",
          "VA": "Vatikanstadt",
          "VC": "St. Vincent und die Grenadinen",
          "VE": "Venezuela",
          "VG": "Britische Jungferninseln",
          "VI": "Amerikanische Jungferninseln",
          "VN": "Vietnam",
          "VU": "Vanuatu",
          "WF": "Wallis und Futuna",
          "WS": "Samoa",
          "YE": "Jemen",
          "YT": "Mayotte",
          "ZA": "Südafrika",
          "ZM": "Sambia",
          "ZW": "Simbabwe",
          "RS": "Serbien",
          "ME": "Montenegro",
          "BL": "Saint-Barthélemy",
          "BQ": "Bonaire, Sint Eustatius und Saba",
          "CW": "Curaçao",
          "MF": "Saint-Martin (franz. Teil)",
          "SX": "Sint Maarten (niederl. Teil)",
          "SS": "Südsudan"
        };
        this.countryCapitals = {
          "US-AL": "Montgomery",
          "US-AK": "Juneau",
          "US-AZ": "Phoenix",
          "US-AR": "Little Rock",
          "US-CO": "Denver",
          "US-CT": "Hartford",
          "US-DE": "Dover",
          "US-FL": "Tallahassee",
          "US-GA": "Atlanta",
          "US-HI": "Honolulu",
          "US-ID": "Boise",
          "US-IL": "Springfield",
          "US-IN": "Indianapolis",
          "US-IA": "Des Moines",
          "US-CA": "Sacramento",
          "US-KS": "Topeka",
          "US-KY": "Frankfort",
          "US-LA": "Baton Rouge",
          "US-ME": "Augusta",
          "US-MD": "Annapolis",
          "US-MA": "Boston",
          "US-MI": "Lansing",
          "US-MN": "Saint Paul",
          "US-MS": "Jackson",
          "US-MO": "Jefferson City",
          "US-MT": "Helena",
          "US-NE": "Lincoln",
          "US-NV": "Carson City",
          "US-NH": "Concord",
          "US-NJ": "Trenton",
          "US-NM": "Santa Fe",
          "US-NY": "Albany",
          "US-NC": "Raleigh",
          "US-ND": "Bismarck",
          "US-OH": "Columbus",
          "US-OK": "Oklahoma City",
          "US-OR": "Salem",
          "US-PA": "Harrisburg",
          "US-RI": "Providence",
          "US-SC": "Columbia",
          "US-SD": "Pierre",
          "US-TN": "Nashville",
          "US-TX": "Austin",
          "US-UT": "Salt Lake City",
          "US-VT": "Montpelier",
          "US-VA": "Richmond",
          "US-WA": "Olympia",
          "US-WV": "Charleston",
          "US-WI": "Madison",
          "US-WY": "Cheyenne",
          "DE-BW": "Stuttgart",
          "DE-BY": "München",
          "DE-BE": "Berlin",
          "DE-BB": "Potsdam",
          "DE-HB": "Bremen",
          "DE-HH": "Hamburg",
          "DE-HE": "Wiesbaden",
          "DE-MV": "Schwerin",
          "DE-NI": "Hannover",
          "DE-NW": "Düsseldorf",
          "DE-RP": "Mainz",
          "DE-SL": "Saarbrücken",
          "DE-SN": "Dresden",
          "DE-ST": "Magdeburg",
          "DE-SH": "Kiel",
          "DE-TH": "Erfurt",
          "AF": "Kabul",
          "EG": "Kairo",
          "AL": "Tirana",
          "DZ": "Algier",
          "AO": "Luanda",
          "GQ": "Malabo",
          "AR": "Buenos Aires",
          "AM": "Jerewan",
          "AZ": "Baku",
          "ET": "Addis Abeba",
          "AU": "Canberra",
          "BS": "Nassau",
          "BH": "Manama",
          "BD": "Dhaka",
          "BE": "Brüssel",
          "BZ": "Belmopan",
          "BJ": "Porto-Novo",
          "BT": "Thimphu",
          "BO": "Sucre",
          "BA": "Sarajevo",
          "BW": "Gaborone",
          "BR": "Brasília",
          "BN": "Bandar Seri Begawan",
          "BG": "Sofia",
          "BF": "Ouagadougou",
          "BI": "Gitega",
          "CL": "Santiago de Chile",
          "TW": "Taipeh",
          "CN": "Peking",
          "CR": "San José",
          "DK": "Kopenhagen",
          "GL": "Nuuk",
          "DE": "Berlin",
          "DO": "Santo Domingo",
          "DJ": "Dschibuti-Stadt",
          "EC": "Quito",
          "SV": "San Salvador",
          "CI": "Yamoussoukro",
          "ER": "Asmara",
          "EE": "Tallinn",
          "FJ": "Suva",
          "FI": "Helsinki",
          "FR": "Paris",
          "GA": "Libreville",
          "GM": "Banjul",
          "GE": "Tiflis",
          "GH": "Accra",
          "GD": "St. George’s",
          "GR": "Athen",
          "GT": "Guatemala-Stadt",
          "GN": "Conakry",
          "GW": "Bissau",
          "GY": "Georgetown",
          "HT": "Port-au-Prince",
          "HN": "Tegucigalpa",
          "IN": "Neu-Delhi",
          "ID": "Jakarta",
          "IQ": "Bagdad",
          "IR": "Teheran",
          "IE": "Dublin",
          "IS": "Reykjavík",
          "IL": "Jerusalem",
          "IT": "Rom",
          "JM": "Kingston",
          "JP": "Tokio",
          "YE": "Sanaa(de jure)/Aden(de facto)",
          "JO": "Amman",
          "KH": "Phnom Penh",
          "CM": "Yaoundé",
          "CA": "Ottawa",
          "CV": "Praia",
          "KZ": "Nur-Sultan",
          "QA": "Doha",
          "KE": "Nairobi",
          "KG": "Bischkek",
          "KI": "South Tarawa",
          "CO": "Bogotá",
          "KM": "Moroni",
          "CD": "Kinshasa",
          "CG": "Brazzaville",
          "KP": "Pjöngjang",
          "KR": "Seoul",
          "XK": "Pristina",
          "HR": "Zagreb",
          "CU": "Havanna",
          "KW": "Kuwait-Stadt",
          "LA": "Vientiane",
          "LS": "Maseru",
          "LV": "Riga",
          "LB": "Beirut",
          "LR": "Monrovia",
          "LY": "Tripolis",
          "LI": "Vaduz",
          "LT": "Vilnius(Wilna)",
          "LU": "Luxemburg",
          "MG": "Antananarivo",
          "MW": "Lilongwe",
          "MY": "Kuala Lumpur",
          "MV": "Malé",
          "ML": "Bamako",
          "MT": "Valletta",
          "MA": "Rabat",
          "MH": "Majuro",
          "MR": "Nouakchott",
          "MU": "Port Louis",
          "MX": "Mexiko-Stadt",
          "FM": "Palikir",
          "FO": "Tórshavn",
          "MD": "Chișinău",
          "MC": "Stadtstaat",
          "MN": "Ulaanbaatar",
          "ME": "Podgorica",
          "MZ": "Maputo",
          "MM": "Naypyidaw",
          "NA": "Windhoek",
          "NR": "Yaren",
          "NP": "Kathmandu",
          "NZ": "Wellington",
          "NI": "Managua",
          "NL": "Amsterdam",
          "NE": "Niamey",
          "NG": "Abuja",
          "NU": "Alofi",
          "MK": "Skopje",
          "XC": "Nord-Nikosia",
          "NO": "Oslo",
          "OM": "Maskat",
          "AT": "Wien",
          "TL": "Dili",
          "PK": "Islamabad",
          "PS": "Ostjerusalem(beansprucht) und Ramallah(de facto)",
          "PW": "Ngerulmud",
          "PA": "Panama-Stadt",
          "PG": "Port Moresby",
          "PY": "Asunción",
          "PE": "Lima",
          "PH": "Manila",
          "PL": "Warschau",
          "PT": "Lissabon",
          "RW": "Kigali",
          "RO": "Bukarest",
          "RU": "Moskau",
          "SB": "Honiara",
          "ZM": "Lusaka",
          "WS": "Apia",
          "SM": "San Marino",
          "ST": "São Tomé",
          "SA": "Riad",
          "SE": "Stockholm",
          "CH": "Bern",
          "SN": "Dakar",
          "RS": "Belgrad",
          "SC": "Victoria",
          "SL": "Freetown",
          "ZW": "Harare",
          "SG": "Stadtstaat",
          "SK": "Bratislava",
          "SI": "Ljubljana",
          "SO": "Mogadischu",
          "XS": "Hargeysa",
          "ES": "Madrid",
          "LK": "Sri Jayewardenepura(de jure)/Colombo(de facto)",
          "KN": "Basseterre",
          "LC": "Castries",
          "VC": "Kingstown",
          "ZA": "Pretoria",
          "SD": "Khartum",
          "SS": "Juba",
          "SR": "Paramaribo",
          "SZ": "Mbabane",
          "SY": "Damaskus",
          "TJ": "Duschanbe",
          "TZ": "Dodoma",
          "TH": "Bangkok",
          "TG": "Lomé",
          "TO": "Nukuʻalofa",
          "TT": "Port of Spain",
          "TD": "N’Djamena",
          "CZ": "Prag",
          "TN": "Tunis",
          "TR": "Ankara",
          "TM": "Aschgabad",
          "TV": "Funafuti",
          "UG": "Kampala",
          "UA": "Kiew",
          "HU": "Budapest",
          "UY": "Montevideo",
          "UZ": "Taschkent",
          "VU": "Port Vila",
          "VA": "Stadtstaat",
          "VE": "Caracas",
          "AE": "Abu Dhabi",
          "US": "Washington, D.C.",
          "GB": "London",
          "VN": "Hanoi",
          "BY": "Minsk",
          "EH": "El Aaiún",
          "CF": "Bangui",
          "CY": "Nikosia"
        };
        this.countryPopulation = {
          "US-AL": 4779736,
          "US-AK": 710231,
          "US-AZ": 6392017,
          "US-AR": 2915918,
          "US-CO": 5029196,
          "US-CT": 3574097,
          "US-DE": 897934,
          "US-FL": 18801310,
          "US-GA": 9687653,
          "US-HI": 1360301,
          "US-ID": 1567582,
          "US-IL": 12830632,
          "US-IN": 6483802,
          "US-IA": 3046355,
          "US-CA": 37253956,
          "US-KS": 2853118,
          "US-KY": 4339367,
          "US-LA": 4533372,
          "US-ME": 1328361,
          "US-MD": 5773552,
          "US-MA": 6547629,
          "US-MI": 9883640,
          "US-MN": 5303925,
          "US-MS": 2967297,
          "US-MO": 5988927,
          "US-MT": 989415,
          "US-NE": 1826341,
          "US-NV": 2700551,
          "US-NH": 1316470,
          "US-NJ": 8791894,
          "US-NM": 2059179,
          "US-NY": 19378102,
          "US-NC": 9535483,
          "US-ND": 672591,
          "US-OH": 11536504,
          "US-OK": 3751351,
          "US-OR": 3831074,
          "US-PA": 12702379,
          "US-RI": 1052567,
          "US-SC": 4625364,
          "US-SD": 814180,
          "US-TN": 6346105,
          "US-TX": 25145561,
          "US-UT": 2763885,
          "US-VT": 625741,
          "US-VA": 8001024,
          "US-WA": 6724540,
          "US-WV": 1852994,
          "US-WI": 5686986,
          "US-WY": 563626,
          "DE-BW": 10880000,
          "DE-BY": 12844000,
          "DE-BE": 3520000,
          "DE-BB": 2485000,
          "DE-HB": 671000,
          "DE-HH": 1787000,
          "DE-HE": 6176000,
          "DE-MV": 1612000,
          "DE-NI": 7927000,
          "DE-NW": 17866000,
          "DE-RP": 4053000,
          "DE-SL": 996000,
          "DE-SN": 4085000,
          "DE-ST": 2245000,
          "DE-SH": 2859000,
          "DE-TH": 2171000,
          "AF": 35500000,
          "EG": 93400000,
          "AL": 2900000,
          "DZ": 42200000,
          "AO": 28600000,
          "GQ": 1300000,
          "AR": 44300000,
          "AM": 3000000,
          "AZ": 9900000,
          "ET": 105000000,
          "AU": 24500000,
          "BS": 400000,
          "BH": 1500000,
          "BD": 164700000,
          "BE": 11300000,
          "BZ": 400000,
          "BJ": 11200000,
          "BT": 800000,
          "BO": 11100000,
          "BA": 3500000,
          "BW": 2300000,
          "BR": 207900000,
          "BN": 400000,
          "BG": 7100000,
          "BF": 19600000,
          "BI": 10400000,
          "CL": 18400000,
          "TW": 23600000,
          "CN": 1395380000,
          "CR": 4900000,
          "DK": 5748769,
          "GL": 56584,
          "DE": 83100000,
          "DO": 10700000,
          "DJ": 1000000,
          "EC": 16800000,
          "SV": 6400000,
          "CI": 24400000,
          "ER": 5900000,
          "EE": 1300000,
          "FJ": 900000,
          "FI": 5500000,
          "FR": 65000000,
          "GA": 2000000,
          "GM": 2100000,
          "GE": 3900000,
          "GH": 28800000,
          "GD": 108000,
          "GR": 10700000,
          "GT": 16900000,
          "GN": 11500000,
          "GW": 1900000,
          "GY": 800000,
          "HT": 10600000,
          "HN": 8900000,
          "IN": 1352600000,
          "ID": 264000000,
          "IQ": 39200000,
          "IR": 80600000,
          "IE": 4800000,
          "IS": 350000,
          "IL": 8600000,
          "IT": 60500000,
          "JM": 2900000,
          "JP": 126700000,
          "YE": 28300000,
          "JO": 9700000,
          "KH": 15900000,
          "CM": 25000000,
          "CA": 36700000,
          "CV": 517000,
          "KZ": 18000000,
          "QA": 2700000,
          "KE": 49700000,
          "KG": 6200000,
          "KI": 100000,
          "CO": 49300000,
          "KM": 800000,
          "CD": 81500000,
          "CG": 5000000,
          "KP": 25500000,
          "KR": 51400000,
          "XK": 1800000,
          "HR": 4100000,
          "CU": 11300000,
          "KW": 4100000,
          "LA": 7000000,
          "LS": 2200000,
          "LV": 1900000,
          "LB": 6200000,
          "LR": 4700000,
          "LY": 6400000,
          "LI": 40000,
          "LT": 2800000,
          "LU": 600000,
          "MG": 25500000,
          "MW": 18600000,
          "MY": 31600000,
          "MV": 400000,
          "ML": 18900000,
          "MT": 438000,
          "MA": 35100000,
          "MH": 60000,
          "MR": 4400000,
          "MU": 1300000,
          "MX": 129200000,
          "FM": 107000,
          "FO": 51371,
          "MD": 3900000,
          "MC": 37800,
          "MN": 3200000,
          "ME": 600000,
          "MZ": 29700000,
          "MM": 53400000,
          "NA": 2500000,
          "NR": 10000,
          "NP": 29400000,
          "NZ": 4800000,
          "NI": 6200000,
          "NL": 17100000,
          "NE": 20600000,
          "NG": 190900000,
          "NU": 1229,
          "MK": 2100000,
          "XC": 295000,
          "NO": 5300000,
          "OM": 4700000,
          "AT": 8800000,
          "TL": 1300000,
          "PK": 207600000,
          "PS": 4900000,
          "PW": 21000,
          "PA": 4100000,
          "PG": 8300000,
          "PY": 6800000,
          "PE": 31800000,
          "PH": 105000000,
          "PL": 38400000,
          "PT": 10300000,
          "RW": 12300000,
          "RO": 19600000,
          "RU": 144500000,
          "SB": 700000,
          "ZM": 16400000,
          "WS": 200000,
          "SM": 32800,
          "ST": 200000,
          "SA": 32600000,
          "SE": 10100000,
          "CH": 8500000,
          "SN": 15800000,
          "RS": 7000000,
          "SC": 90000,
          "SL": 7600000,
          "ZW": 16600000,
          "SG": 5700000,
          "SK": 5400000,
          "SI": 2100000,
          "SO": 14700000,
          "XS": 3500000,
          "ES": 46600000,
          "LK": 21400000,
          "KN": 50000,
          "LC": 200000,
          "VC": 104000,
          "ZA": 56500000,
          "SD": 40600000,
          "SS": 12600000,
          "SR": 600000,
          "SZ": 1400000,
          "SY": 18300000,
          "TJ": 8800000,
          "TZ": 57500000,
          "TH": 66100000,
          "TG": 7800000,
          "TO": 123000,
          "TT": 1400000,
          "TD": 14900000,
          "CZ": 10600000,
          "TN": 11500000,
          "TR": 80900000,
          "TM": 5800000,
          "TV": 10000,
          "UG": 42800000,
          "UA": 42300000,
          "HU": 9800000,
          "UY": 3500000,
          "UZ": 32600000,
          "VU": 300000,
          "VA": 829,
          "VE": 31400000,
          "AE": 9400000,
          "US": 325400000,
          "GB": 66200000,
          "VN": 93700000,
          "BY": 9500000,
          "EH": 600000,
          "CF": 4700000,
          "CY": 1200000
        };
        this.countryArea = {
          "US-AL": 135767,
          "US-AK": 1723337,
          "US-AZ": 295234,
          "US-AR": 137732,
          "US-CO": 269601,
          "US-CT": 14357,
          "US-DE": 6446,
          "US-FL": 170312,
          "US-GA": 153910,
          "US-HI": 28313,
          "US-ID": 216643,
          "US-IL": 149995,
          "US-IN": 94326,
          "US-IA": 145746,
          "US-CA": 423967,
          "US-KS": 213100,
          "US-KY": 104656,
          "US-LA": 135659,
          "US-ME": 91633,
          "US-MD": 32131,
          "US-MA": 27336,
          "US-MI": 250487,
          "US-MN": 225163,
          "US-MS": 125438,
          "US-MO": 180540,
          "US-MT": 380831,
          "US-NE": 200330,
          "US-NV": 286380,
          "US-NH": 24214,
          "US-NJ": 22591,
          "US-NM": 314917,
          "US-NY": 141297,
          "US-NC": 139391,
          "US-ND": 183108,
          "US-OH": 116098,
          "US-OK": 181037,
          "US-OR": 254799,
          "US-PA": 119280,
          "US-RI": 4001,
          "US-SC": 82933,
          "US-SD": 199729,
          "US-TN": 109153,
          "US-TX": 695662,
          "US-UT": 219882,
          "US-VT": 24906,
          "US-VA": 110787,
          "US-WA": 184661,
          "US-WV": 62756,
          "US-WI": 169635,
          "US-WY": 253335,
          "DE-BW": 35751,
          "DE-BY": 70550,
          "DE-BE": 892,
          "DE-BB": 29654,
          "DE-HB": 420,
          "DE-HH": 755,
          "DE-HE": 21115,
          "DE-MV": 23212,
          "DE-NI": 47593,
          "DE-NW": 34113,
          "DE-RP": 19854,
          "DE-SL": 2567,
          "DE-SN": 18449,
          "DE-ST": 20452,
          "DE-SH": 15802,
          "DE-TH": 16202,
          "AF": 652230,
          "EG": 1001450,
          "AL": 28748,
          "DZ": 2381741,
          "AO": 1246700,
          "GQ": 28051,
          "AR": 2780400,
          "AM": 29743,
          "AZ": 86600,
          "ET": 1104300,
          "AU": 7741220,
          "BS": 13880,
          "BH": 760,
          "BD": 143998,
          "BE": 30528,
          "BZ": 22966,
          "BJ": 112622,
          "BT": 38394,
          "BO": 1098581,
          "BA": 51197,
          "BW": 581730,
          "BR": 8514877,
          "BN": 5765,
          "BG": 110879,
          "BF": 274200,
          "BI": 27830,
          "CL": 756102,
          "TW": 35980,
          "CN": 9596961,
          "CR": 51100,
          "DK": 43094,
          "GL": 2166086,
          "DE": 357121,
          "DO": 48670,
          "DJ": 23200,
          "EC": 283561,
          "SV": 21041,
          "CI": 322463,
          "ER": 117600,
          "EE": 45228,
          "FJ": 18274,
          "FI": 338145,
          "FR": 551500,
          "GA": 267667,
          "GM": 11295,
          "GE": 69700,
          "GH": 238533,
          "GD": 344,
          "GR": 131957,
          "GT": 108889,
          "GN": 245857,
          "GW": 36125,
          "GY": 214969,
          "HT": 27750,
          "HN": 112090,
          "IN": 3287263,
          "ID": 1904569,
          "IQ": 438317,
          "IR": 1648195,
          "IE": 70273,
          "IS": 103000,
          "IL": 22380,
          "IT": 301340,
          "JM": 10991,
          "JP": 377915,
          "YE": 527968,
          "JO": 89342,
          "KH": 181035,
          "CM": 475440,
          "CA": 9984670,
          "CV": 4033,
          "KZ": 2724900,
          "QA": 11586,
          "KE": 580367,
          "KG": 199951,
          "KI": 811,
          "CO": 1138910,
          "KM": 2235,
          "CD": 2344858,
          "CG": 342000,
          "KP": 120538,
          "KR": 99720,
          "XK": 10887,
          "HR": 56594,
          "CU": 110860,
          "KW": 17818,
          "LA": 236800,
          "LS": 30355,
          "LV": 64589,
          "LB": 10400,
          "LR": 111369,
          "LY": 1759540,
          "LI": 160,
          "LT": 65300,
          "LU": 2586,
          "MG": 587041,
          "MW": 118484,
          "MY": 329847,
          "MV": 298,
          "ML": 1240192,
          "MT": 316,
          "MA": 446550,
          "MH": 181,
          "MR": 1030700,
          "MU": 2040,
          "MX": 1964375,
          "FM": 702,
          "FO": 1396,
          "MD": 33851,
          "MC": 2,
          "MN": 1564116,
          "ME": 13812,
          "MZ": 799380,
          "MM": 676578,
          "NA": 824292,
          "NR": 21,
          "NP": 147181,
          "NZ": 267710,
          "NI": 130730,
          "NL": 41543,
          "NE": 1267000,
          "NG": 923768,
          "NU": 260,
          "MK": 25713,
          "XC": 3355,
          "NO": 323802,
          "OM": 309500,
          "AT": 83871,
          "TL": 14874,
          "PK": 796095,
          "PS": 6220,
          "PW": 459,
          "PA": 75420,
          "PG": 462840,
          "PY": 406752,
          "PE": 1285216,
          "PH": 299000,
          "PL": 312685,
          "PT": 92090,
          "RW": 26338,
          "RO": 238391,
          "RU": 17098242,
          "SB": 28896,
          "ZM": 752618,
          "WS": 2831,
          "SM": 61,
          "ST": 964,
          "SA": 2149690,
          "SE": 450295,
          "CH": 41277,
          "SN": 196722,
          "RS": 77474,
          "SC": 455,
          "SL": 71740,
          "ZW": 390757,
          "SG": 697,
          "SK": 49035,
          "SI": 20273,
          "SO": 637657,
          "XS": 137600,
          "ES": 505370,
          "LK": 65610,
          "KN": 261,
          "LC": 616,
          "VC": 389,
          "ZA": 1219090,
          "SD": 1886068,
          "SS": 619745,
          "SR": 163820,
          "SZ": 17364,
          "SY": 185180,
          "TJ": 143100,
          "TZ": 947300,
          "TH": 513120,
          "TG": 56785,
          "TO": 747,
          "TT": 5128,
          "TD": 1284000,
          "CZ": 78867,
          "TN": 163610,
          "TR": 783562,
          "TM": 488100,
          "TV": 26,
          "UG": 241038,
          "UA": 603550,
          "HU": 93028,
          "UY": 176215,
          "UZ": 447400,
          "VU": 12189,
          "VA": 0.44,
          "VE": 912050,
          "AE": 83600,
          "US": 9826675,
          "GB": 243610,
          "VN": 331210,
          "BY": 207600,
          "EH": 266000,
          "CF": 622984,
          "CY": 9251
        };
      }

      _createClass(CountryMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.map = params.get("map");
            _this.code = params.get("code");
            _this.name = _this.countryNames[_this.code];
          });
        }
      }]);

      return CountryMenuComponent;
    }();

    CountryMenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CountryMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-country-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./country-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/country-menu/country-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./country-menu.component.css */
      "./src/app/country-menu/country-menu.component.css"))["default"]]
    })], CountryMenuComponent);
    /***/
  },

  /***/
  "./src/app/main-menu/main-menu.component.css":
  /*!***************************************************!*\
    !*** ./src/app/main-menu/main-menu.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMenuMainMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tbWVudS9tYWluLW1lbnUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main-menu/main-menu.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-menu/main-menu.component.ts ***!
    \**************************************************/

  /*! exports provided: MainMenuComponent */

  /***/
  function srcAppMainMenuMainMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function () {
      return MainMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainMenuComponent = /*#__PURE__*/function () {
      function MainMenuComponent() {
        _classCallCheck(this, MainMenuComponent);
      }

      _createClass(MainMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainMenuComponent;
    }();

    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-menu.component.css */
      "./src/app/main-menu/main-menu.component.css"))["default"]]
    })], MainMenuComponent);
    /***/
  },

  /***/
  "./src/app/map/map.component.css":
  /*!***************************************!*\
    !*** ./src/app/map/map.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppMapMapComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\r\n    font-family: arial;\r\n}\r\n\r\nh1 {\r\n    word-wrap: break-word;\r\n}\r\n\r\n.blurred {\r\n    filter: blur(5px);\r\n}\r\n\r\n.img-style {\r\n    display: block;\r\n    max-width: 90%;\r\n    max-height: 90%;\r\n    top: 50%;\r\n    left: 50%;\r\n    position: relative;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.box {\r\n    position: fixed;\r\n    background-color: rgba(255,255,255,0.5);\r\n    border: black solid 1px;\r\n    cursor: pointer;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.top-left {\r\n    bottom: 50%;\r\n    right: 50%;\r\n}\r\n\r\n.top-right {\r\n    bottom: 50%;\r\n    left: 50%;\r\n}\r\n\r\n.bottom-left {\r\n    top: 50%;\r\n    right: 50%;\r\n}\r\n\r\n.bottom-right {\r\n    top: 50%;\r\n    left: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFFBQVE7SUFDUixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYXAvbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxufVxyXG5cclxuaDEge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uYmx1cnJlZCB7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxufVxyXG5cclxuLmltZy1zdHlsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogOTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XHJcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi50b3AtbGVmdCB7XHJcbiAgICBib3R0b206IDUwJTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi50b3AtcmlnaHQge1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5ib3R0b20tbGVmdCB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi5ib3R0b20tcmlnaHQge1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/map/map.component.ts":
  /*!**************************************!*\
    !*** ./src/app/map/map.component.ts ***!
    \**************************************/

  /*! exports provided: MapComponent */

  /***/
  function srcAppMapMapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _box_size_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../box-size.service */
    "./src/app/box-size.service.ts");

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(route, router, boxSizeService) {
        _classCallCheck(this, MapComponent);

        this.route = route;
        this.router = router;
        this.boxSizeService = boxSizeService;
        this.map = 'Welt';
        this.mapName = 'world_mill_en';
        this.mapNames = {
          "Welt": "world_mill_en",
          "Europa": "europe_mill",
          "Nordamerika": "north_america_mill",
          "Südamerika": "south_america_mill",
          "Asien": "asia_mill",
          "Afrika": "africa_mill",
          "Ozeanien": "oceania_mill",
          "Deutschland": "de_mill",
          "USA": "us_aea",
          "Kontinente": "continents_mill"
        };
        this.showCountryMenu = false;
        this.showCapital = false;
        this.showPopulation = false;
        this.showFlag = false;
        this.showArea = false;
        this.showOptions = false;
        this.categoryToShow = "";
        this.options = [];
        this.optionClicked = false;
        this.clickeOptionIndex = 4;
        this.countryCodes = ["BE", "FR", "BG", "DK", "HR", "DE", "BA", "HU", "JE", "FI", "BY", "GR", "RU", "NL", "PT", "NO", "LI", "LV", "LT", "LU", "FO", "PL", "XK", "CH", "AD", "EE", "IS", "AL", "IT", "GG", "CZ", "IM", "GB", "AX", "IE", "ES", "ME", "MD", "RO", "RS", "MK", "SK", "MT", "SI", "SM", "UA", "SE", "AT", "BF", "DJ", "BI", "BJ", "ZA", "BW", "DZ", "ET", "RW", "TZ", "GQ", "NA", "NE", "NG", "TN", "LR", "LS", "ZW", "TG", "TD", "ER", "LY", "GW", "ZM", "CI", "EH", "CM", "EG", "SL", "CG", "CF", "AO", "CD", "GA", "GN", "GM", "XS", "CV", "GH", "SZ", "MG", "MA", "KE", "SS", "ML", "KM", "ST", "MW", "SO", "SN", "MR", "UG", "SD", "MZ", "BD", "MN", "BN", "BH", "BT", "HK", "JO", "PS", "LB", "LA", "TW", "TR", "LK", "TL", "TM", "TJ", "TH", "XC", "NP", "PK", "PH", "-99", "AE", "CN", "AF", "IQ", "JP", "IR", "AM", "SY", "VN", "GE", "IL", "IN", "AZ", "ID", "OM", "KG", "UZ", "MM", "SG", "KH", "CY", "QA", "KR", "KP", "KW", "KZ", "SA", "MY", "YE", "PY", "CO", "VE", "CL", "SR", "BO", "EC", "AR", "GY", "BR", "PE", "UY", "FK", "PR", "DO", "DM", "LC", "NI", "PA", "CA", "SV", "HT", "TT", "JM", "GT", "HN", "BZ", "BS", "CR", "US", "GL", "MX", "CU", "GU", "PW", "KI", "NC", "NU", "NZ", "AU", "PG", "SB", "PF", "FJ", "FM", "WS", "VU"];
        this.europeCodes = ["BE", "FR", "BG", "DK", "HR", "DE", "BA", "HU", "JE", "FI", "BY", "GR", "RU", "NL", "PT", "NO", "LI", "LV", "LT", "LU", "FO", "PL", "XK", "CH", "AD", "EE", "IS", "AL", "IT", "GG", "CZ", "IM", "GB", "AX", "IE", "ES", "ME", "MD", "RO", "RS", "MK", "SK", "MT", "SI", "SM", "UA", "SE", "AT"];
        this.africaCodes = ["BF", "DJ", "BI", "BJ", "ZA", "BW", "DZ", "ET", "RW", "TZ", "GQ", "NA", "NE", "NG", "TN", "LR", "LS", "ZW", "TG", "TD", "ER", "LY", "GW", "ZM", "CI", "EH", "CM", "EG", "SL", "CG", "CF", "AO", "CD", "GA", "GN", "GM", "XS", "CV", "GH", "SZ", "MG", "MA", "KE", "SS", "ML", "KM", "ST", "MW", "SO", "SN", "MR", "UG", "SD", "MZ"];
        this.asiaCodes = ["BD", "MN", "BN", "BH", "BT", "HK", "JO", "PS", "LB", "LA", "TW", "TR", "LK", "TL", "TM", "TJ", "TH", "XC", "NP", "PK", "PH", "-99", "AE", "CN", "AF", "IQ", "JP", "IR", "AM", "SY", "VN", "GE", "IL", "IN", "AZ", "ID", "OM", "KG", "UZ", "MM", "SG", "KH", "CY", "QA", "KR", "KP", "KW", "KZ", "SA", "MY", "YE"];
        this.soutAmericaCodes = ["PY", "CO", "VE", "CL", "SR", "BO", "EC", "AR", "GY", "BR", "PE", "UY", "FK"];
        this.northAmericaCodes = ["PR", "DO", "DM", "LC", "NI", "PA", "CA", "SV", "HT", "TT", "JM", "GT", "HN", "BZ", "BS", "CR", "US", "GL", "MX", "CU"];
        this.oceaniaCodes = ["GU", "PW", "KI", "NC", "NU", "NZ", "AU", "PG", "SB", "PF", "FJ", "FM", "WS", "VU"];
        this.usCodes = ["US-AL", "US-AK", "US-AZ", "US-AR", "US-CO", "US-CT", "US-DE", "US-FL", "US-GA", "US-HI", "US-ID", "US-IL", "US-IN", "US-IA", "US-CA", "US-KS", "US-KY", "US-LA", "US-ME", "US-MD", "US-MA", "US-MI", "US-MN", "US-MS", "US-MO", "US-MT", "US-NE", "US-NV", "US-NH", "US-NJ", "US-NM", "US-NY", "US-NC", "US-ND", "US-OH", "US-OK", "US-OR", "US-PA", "US-RI", "US-SC", "US-SD", "US-TN", "US-TX", "US-UT", "US-VT", "US-VA", "US-WA", "US-WV", "US-WI", "US-WY"];
        this.germanyCodes = ["DE-BW", "DE-BY", "DE-BE", "DE-BB", "DE-HB", "DE-HH", "DE-HE", "DE-MV", "DE-NI", "DE-NW", "DE-RP", "DE-SL", "DE-SN", "DE-ST", "DE-SH", "DE-TH"];
        this.countryNames = {
          "US-AL": "Alabama",
          "US-AK": "Alaska",
          "US-AZ": "Arizona",
          "US-AR": "Arkansas",
          "US-CO": "Colorado",
          "US-CT": "Connecticut",
          "US-DE": "Delaware",
          "US-FL": "Florida",
          "US-GA": "Georgia",
          "US-HI": "Hawaii",
          "US-ID": "Idaho",
          "US-IL": "Illinois",
          "US-IN": "Indiana",
          "US-IA": "Iowa",
          "US-CA": "Kalifornien",
          "US-KS": "Kansas",
          "US-KY": "Kentucky",
          "US-LA": "Louisiana",
          "US-ME": "Maine",
          "US-MD": "Maryland",
          "US-MA": "Massachusetts",
          "US-MI": "Michigan",
          "US-MN": "Minnesota",
          "US-MS": "Mississippi",
          "US-MO": "Missouri",
          "US-MT": "Montana",
          "US-NE": "Nebraska",
          "US-NV": "Nevada",
          "US-NH": "New Hampshire",
          "US-NJ": "New Jersey",
          "US-NM": "New Mexico",
          "US-NY": "New York",
          "US-NC": "North Carolina",
          "US-ND": "North Dakota",
          "US-OH": "Ohio",
          "US-OK": "Oklahoma",
          "US-OR": "Oregon",
          "US-PA": "Pennsylvania",
          "US-RI": "Rhode Island",
          "US-SC": "South Carolina",
          "US-SD": "South Dakota",
          "US-TN": "Tennessee",
          "US-TX": "Texas",
          "US-UT": "Utah",
          "US-VT": "Vermont",
          "US-VA": "Virginia",
          "US-WA": "Washington",
          "US-WV": "West Virginia",
          "US-WI": "Wisconsin",
          "US-WY": "Wyoming",
          "DE-BW": "Baden-Württemberg",
          "DE-BY": "Bayern",
          "DE-BE": "Berlin",
          "DE-BB": "Brandenburg",
          "DE-HB": "Bremen",
          "DE-HH": "Hamburg",
          "DE-HE": "Hessen",
          "DE-MV": "Mecklenburg-Vorpommern",
          "DE-NI": "Niedersachsen",
          "DE-NW": "Nordrhein-Westfalen",
          "DE-RP": "Rheinland-Pfalz",
          "DE-SL": "Saarland",
          "DE-SN": "Sachsen",
          "DE-ST": "Sachsen-Anhalt",
          "DE-SH": "Schleswig-Holstein",
          "DE-TH": "Thüringen",
          "AD": "Andorra",
          "AE": "Vereinigte Arabische Emirate",
          "AF": "Afghanistan",
          "AG": "Antigua und Barbuda",
          "AI": "Anguilla",
          "AL": "Albanien",
          "AM": "Armenien",
          "AN": "Niederländische Antillen",
          "AO": "Angola",
          "AQ": "Antarktis",
          "AR": "Argentinien",
          "AS": "Amerikanisch-Samoa",
          "AT": "Österreich",
          "AU": "Australien",
          "AW": "Aruba",
          "AX": "Åland",
          "AZ": "Aserbaidschan",
          "BA": "Bosnien und Herzegowina",
          "BB": "Barbados",
          "BD": "Bangladesch",
          "BE": "Belgien",
          "BF": "Burkina Faso",
          "BG": "Bulgarien",
          "BH": "Bahrain",
          "BI": "Burundi",
          "BJ": "Benin",
          "BM": "Bermuda",
          "BN": "Brunei Darussalam",
          "BO": "Bolivien",
          "BR": "Brasilien",
          "BS": "Bahamas",
          "BT": "Bhutan",
          "BV": "Bouvetinsel",
          "BW": "Botswana",
          "BY": "Weißrussland",
          "BZ": "Belize",
          "CA": "Kanada",
          "CC": "Kokosinseln (Keelinginseln)",
          "CD": "Kongo",
          "CF": "Zentralafrikanische Republik",
          "CG": "Republik Kongo",
          "CH": "Schweiz",
          "CI": "Elfenbeinküste",
          "CK": "Cookinseln",
          "CL": "Chile",
          "CM": "Kamerun",
          "CN": "China",
          "CO": "Kolumbien",
          "CR": "Costa Rica",
          "CU": "Kuba",
          "CV": "Kap Verde",
          "CX": "Weihnachtsinsel",
          "CY": "Zypern",
          "CZ": "Tschechien",
          "DE": "Deutschland",
          "DJ": "Dschibuti",
          "DK": "Dänemark",
          "DM": "Dominica",
          "DO": "Dominikanische Republik",
          "DZ": "Algerien",
          "EC": "Ecuador",
          "EE": "Estland",
          "EG": "Ägypten",
          "EH": "Westsahara",
          "ER": "Eritrea",
          "ES": "Spanien",
          "ET": "Äthiopien",
          "FI": "Finnland",
          "FJ": "Fidschi",
          "FK": "Falklandinseln (Malwinen)",
          "FM": "Mikronesien",
          "FO": "Färöer",
          "FR": "Frankreich",
          "GA": "Gabun",
          "GB": "Großbritannien",
          "GD": "Grenada",
          "GE": "Georgien",
          "GF": "Französisch-Guayana",
          "GG": "Guernsey (Kanalinsel)",
          "GH": "Ghana",
          "GI": "Gibraltar",
          "GL": "Grönland",
          "GM": "Gambia",
          "GN": "Guinea",
          "GP": "Guadeloupe",
          "GQ": "Äquatorialguinea",
          "GR": "Griechenland",
          "GS": "Südgeorgien und die Südl. Sandwichinseln",
          "GT": "Guatemala",
          "GU": "Guam",
          "GW": "Guinea-Bissau",
          "GY": "Guyana",
          "HK": "Hongkong",
          "HM": "Heard- und McDonald-Inseln",
          "HN": "Honduras",
          "HR": "Kroatien",
          "HT": "Haiti",
          "HU": "Ungarn",
          "ID": "Indonesien",
          "IE": "Irland",
          "IL": "Israel",
          "IM": "Insel Man",
          "IN": "Indien",
          "IO": "Britisches Territorium im Indischen Ozean",
          "IQ": "Irak",
          "IR": "Iran",
          "IS": "Island",
          "IT": "Italien",
          "JE": "Jersey (Kanalinsel)",
          "JM": "Jamaika",
          "JO": "Jordanien",
          "JP": "Japan",
          "KE": "Kenia",
          "KG": "Kirgisistan",
          "KH": "Kambodscha",
          "KI": "Kiribati",
          "KM": "Komoren",
          "KN": "St. Kitts und Nevis",
          "KP": "Nordkorea",
          "KR": "Südkorea",
          "KW": "Kuwait",
          "KY": "Kaimaninseln",
          "KZ": "Kasachstan",
          "LA": "Laos",
          "LB": "Libanon",
          "LC": "St. Lucia",
          "LI": "Liechtenstein",
          "LK": "Sri Lanka",
          "LR": "Liberia",
          "LS": "Lesotho",
          "LT": "Litauen",
          "LU": "Luxemburg",
          "LV": "Lettland",
          "LY": "Libyen",
          "MA": "Marokko",
          "MC": "Monaco",
          "MD": "Moldawien",
          "MG": "Madagaskar",
          "MH": "Marshallinseln",
          "MK": "Mazedonien",
          "ML": "Mali",
          "MM": "Myanmar (Burma)",
          "MN": "Mongolei",
          "MO": "Macau",
          "MP": "Nördliche Marianen",
          "MQ": "Martinique",
          "MR": "Mauretanien",
          "MS": "Montserrat",
          "MT": "Malta",
          "MU": "Mauritius",
          "MV": "Malediven",
          "MW": "Malawi",
          "MX": "Mexiko",
          "MY": "Malaysia",
          "MZ": "Mosambik",
          "NA": "Namibia",
          "NC": "Neukaledonien",
          "NE": "Niger",
          "NF": "Norfolkinsel",
          "NG": "Nigeria",
          "NI": "Nicaragua",
          "NL": "Niederlande",
          "NO": "Norwegen",
          "NP": "Nepal",
          "NR": "Nauru",
          "NU": "Niue",
          "NZ": "Neuseeland",
          "OM": "Oman",
          "PA": "Panama",
          "PE": "Peru",
          "PF": "Französisch-Polynesien",
          "PG": "Papua-Neuguinea",
          "PH": "Philippinen",
          "PK": "Pakistan",
          "PL": "Polen",
          "PM": "St. Pierre und Miquelon",
          "PN": "Pitcairninseln",
          "PR": "Puerto Rico",
          "PS": "Palästina",
          "PT": "Portugal",
          "PW": "Palau",
          "PY": "Paraguay",
          "QA": "Katar",
          "RE": "Réunion",
          "RO": "Rumänien",
          "RU": "Russland",
          "RW": "Ruanda",
          "SA": "Saudi-Arabien",
          "SB": "Salomonen",
          "SC": "Seychellen",
          "SD": "Sudan",
          "SE": "Schweden",
          "SG": "Singapur",
          "SH": "St. Helena",
          "SI": "Slowenien",
          "SJ": "Svalbard und Jan Mayen",
          "SK": "Slowakei",
          "SL": "Sierra Leone",
          "SM": "San Marino",
          "SN": "Senegal",
          "SO": "Somalia",
          "SR": "Suriname",
          "ST": "São Tomé und Príncipe",
          "SV": "El Salvador",
          "SY": "Syrien",
          "SZ": "Swasiland",
          "TC": "Turks- und Caicosinseln",
          "TD": "Tschad",
          "TF": "Französische Süd- und Antarktisgebiete",
          "TG": "Togo",
          "TH": "Thailand",
          "TJ": "Tadschikistan",
          "TK": "Tokelau",
          "TL": "Timor-Leste",
          "TM": "Turkmenistan",
          "TN": "Tunesien",
          "TO": "Tonga",
          "TR": "Türkei",
          "TT": "Trinidad und Tobago",
          "TV": "Tuvalu",
          "TW": "Taiwan",
          "TZ": "Tansania",
          "UA": "Ukraine",
          "UG": "Uganda",
          "UM": "Amerikanisch-Ozeanien",
          "US": "Vereinigte Staaten von Amerika",
          "UY": "Uruguay",
          "UZ": "Usbekistan",
          "VA": "Vatikanstadt",
          "VC": "St. Vincent und die Grenadinen",
          "VE": "Venezuela",
          "VG": "Britische Jungferninseln",
          "VI": "Amerikanische Jungferninseln",
          "VN": "Vietnam",
          "VU": "Vanuatu",
          "WF": "Wallis und Futuna",
          "WS": "Samoa",
          "YE": "Jemen",
          "YT": "Mayotte",
          "ZA": "Südafrika",
          "ZM": "Sambia",
          "ZW": "Simbabwe",
          "RS": "Serbien",
          "ME": "Montenegro",
          "BL": "Saint-Barthélemy",
          "BQ": "Bonaire, Sint Eustatius und Saba",
          "CW": "Curaçao",
          "MF": "Saint-Martin (franz. Teil)",
          "SX": "Sint Maarten (niederl. Teil)",
          "SS": "Südsudan"
        };
        this.countryCapitals = {
          "US-AL": "Montgomery",
          "US-AK": "Juneau",
          "US-AZ": "Phoenix",
          "US-AR": "Little Rock",
          "US-CO": "Denver",
          "US-CT": "Hartford",
          "US-DE": "Dover",
          "US-FL": "Tallahassee",
          "US-GA": "Atlanta",
          "US-HI": "Honolulu",
          "US-ID": "Boise",
          "US-IL": "Springfield",
          "US-IN": "Indianapolis",
          "US-IA": "Des Moines",
          "US-CA": "Sacramento",
          "US-KS": "Topeka",
          "US-KY": "Frankfort",
          "US-LA": "Baton Rouge",
          "US-ME": "Augusta",
          "US-MD": "Annapolis",
          "US-MA": "Boston",
          "US-MI": "Lansing",
          "US-MN": "Saint Paul",
          "US-MS": "Jackson",
          "US-MO": "Jefferson City",
          "US-MT": "Helena",
          "US-NE": "Lincoln",
          "US-NV": "Carson City",
          "US-NH": "Concord",
          "US-NJ": "Trenton",
          "US-NM": "Santa Fe",
          "US-NY": "Albany",
          "US-NC": "Raleigh",
          "US-ND": "Bismarck",
          "US-OH": "Columbus",
          "US-OK": "Oklahoma City",
          "US-OR": "Salem",
          "US-PA": "Harrisburg",
          "US-RI": "Providence",
          "US-SC": "Columbia",
          "US-SD": "Pierre",
          "US-TN": "Nashville",
          "US-TX": "Austin",
          "US-UT": "Salt Lake City",
          "US-VT": "Montpelier",
          "US-VA": "Richmond",
          "US-WA": "Olympia",
          "US-WV": "Charleston",
          "US-WI": "Madison",
          "US-WY": "Cheyenne",
          "DE-BW": "Stuttgart",
          "DE-BY": "München",
          "DE-BE": "Berlin",
          "DE-BB": "Potsdam",
          "DE-HB": "Bremen",
          "DE-HH": "Hamburg",
          "DE-HE": "Wiesbaden",
          "DE-MV": "Schwerin",
          "DE-NI": "Hannover",
          "DE-NW": "Düsseldorf",
          "DE-RP": "Mainz",
          "DE-SL": "Saarbrücken",
          "DE-SN": "Dresden",
          "DE-ST": "Magdeburg",
          "DE-SH": "Kiel",
          "DE-TH": "Erfurt",
          "AF": "Kabul",
          "EG": "Kairo",
          "AL": "Tirana",
          "DZ": "Algier",
          "AO": "Luanda",
          "GQ": "Malabo",
          "AR": "Buenos Aires",
          "AM": "Jerewan",
          "AZ": "Baku",
          "ET": "Addis Abeba",
          "AU": "Canberra",
          "BS": "Nassau",
          "BH": "Manama",
          "BD": "Dhaka",
          "BE": "Brüssel",
          "BZ": "Belmopan",
          "BJ": "Porto-Novo",
          "BT": "Thimphu",
          "BO": "Sucre",
          "BA": "Sarajevo",
          "BW": "Gaborone",
          "BR": "Brasília",
          "BN": "Bandar Seri Begawan",
          "BG": "Sofia",
          "BF": "Ouagadougou",
          "BI": "Gitega",
          "CL": "Santiago de Chile",
          "TW": "Taipeh",
          "CN": "Peking",
          "CR": "San José",
          "DK": "Kopenhagen",
          "GL": "Nuuk",
          "DE": "Berlin",
          "DO": "Santo Domingo",
          "DJ": "Dschibuti-Stadt",
          "EC": "Quito",
          "SV": "San Salvador",
          "CI": "Yamoussoukro",
          "ER": "Asmara",
          "EE": "Tallinn",
          "FJ": "Suva",
          "FI": "Helsinki",
          "FR": "Paris",
          "GA": "Libreville",
          "GM": "Banjul",
          "GE": "Tiflis",
          "GH": "Accra",
          "GD": "St. George’s",
          "GR": "Athen",
          "GT": "Guatemala-Stadt",
          "GN": "Conakry",
          "GW": "Bissau",
          "GY": "Georgetown",
          "HT": "Port-au-Prince",
          "HN": "Tegucigalpa",
          "IN": "Neu-Delhi",
          "ID": "Jakarta",
          "IQ": "Bagdad",
          "IR": "Teheran",
          "IE": "Dublin",
          "IS": "Reykjavík",
          "IL": "Jerusalem",
          "IT": "Rom",
          "JM": "Kingston",
          "JP": "Tokio",
          "YE": "Sanaa(de jure)/Aden(de facto)",
          "JO": "Amman",
          "KH": "Phnom Penh",
          "CM": "Yaoundé",
          "CA": "Ottawa",
          "CV": "Praia",
          "KZ": "Nur-Sultan",
          "QA": "Doha",
          "KE": "Nairobi",
          "KG": "Bischkek",
          "KI": "South Tarawa",
          "CO": "Bogotá",
          "KM": "Moroni",
          "CD": "Kinshasa",
          "CG": "Brazzaville",
          "KP": "Pjöngjang",
          "KR": "Seoul",
          "XK": "Pristina",
          "HR": "Zagreb",
          "CU": "Havanna",
          "KW": "Kuwait-Stadt",
          "LA": "Vientiane",
          "LS": "Maseru",
          "LV": "Riga",
          "LB": "Beirut",
          "LR": "Monrovia",
          "LY": "Tripolis",
          "LI": "Vaduz",
          "LT": "Vilnius(Wilna)",
          "LU": "Luxemburg",
          "MG": "Antananarivo",
          "MW": "Lilongwe",
          "MY": "Kuala Lumpur",
          "MV": "Malé",
          "ML": "Bamako",
          "MT": "Valletta",
          "MA": "Rabat",
          "MH": "Majuro",
          "MR": "Nouakchott",
          "MU": "Port Louis",
          "MX": "Mexiko-Stadt",
          "FM": "Palikir",
          "FO": "Tórshavn",
          "MD": "Chișinău",
          "MC": "Stadtstaat",
          "MN": "Ulaanbaatar",
          "ME": "Podgorica",
          "MZ": "Maputo",
          "MM": "Naypyidaw",
          "NA": "Windhoek",
          "NR": "Yaren",
          "NP": "Kathmandu",
          "NZ": "Wellington",
          "NI": "Managua",
          "NL": "Amsterdam",
          "NE": "Niamey",
          "NG": "Abuja",
          "NU": "Alofi",
          "MK": "Skopje",
          "XC": "Nord-Nikosia",
          "NO": "Oslo",
          "OM": "Maskat",
          "AT": "Wien",
          "TL": "Dili",
          "PK": "Islamabad",
          "PS": "Ostjerusalem(beansprucht) und Ramallah(de facto)",
          "PW": "Ngerulmud",
          "PA": "Panama-Stadt",
          "PG": "Port Moresby",
          "PY": "Asunción",
          "PE": "Lima",
          "PH": "Manila",
          "PL": "Warschau",
          "PT": "Lissabon",
          "RW": "Kigali",
          "RO": "Bukarest",
          "RU": "Moskau",
          "SB": "Honiara",
          "ZM": "Lusaka",
          "WS": "Apia",
          "SM": "San Marino",
          "ST": "São Tomé",
          "SA": "Riad",
          "SE": "Stockholm",
          "CH": "Bern",
          "SN": "Dakar",
          "RS": "Belgrad",
          "SC": "Victoria",
          "SL": "Freetown",
          "ZW": "Harare",
          "SG": "Stadtstaat",
          "SK": "Bratislava",
          "SI": "Ljubljana",
          "SO": "Mogadischu",
          "XS": "Hargeysa",
          "ES": "Madrid",
          "LK": "Sri Jayewardenepura(de jure)/Colombo(de facto)",
          "KN": "Basseterre",
          "LC": "Castries",
          "VC": "Kingstown",
          "ZA": "Pretoria",
          "SD": "Khartum",
          "SS": "Juba",
          "SR": "Paramaribo",
          "SZ": "Mbabane",
          "SY": "Damaskus",
          "TJ": "Duschanbe",
          "TZ": "Dodoma",
          "TH": "Bangkok",
          "TG": "Lomé",
          "TO": "Nukuʻalofa",
          "TT": "Port of Spain",
          "TD": "N’Djamena",
          "CZ": "Prag",
          "TN": "Tunis",
          "TR": "Ankara",
          "TM": "Aschgabad",
          "TV": "Funafuti",
          "UG": "Kampala",
          "UA": "Kiew",
          "HU": "Budapest",
          "UY": "Montevideo",
          "UZ": "Taschkent",
          "VU": "Port Vila",
          "VA": "Stadtstaat",
          "VE": "Caracas",
          "AE": "Abu Dhabi",
          "US": "Washington, D.C.",
          "GB": "London",
          "VN": "Hanoi",
          "BY": "Minsk",
          "EH": "El Aaiún",
          "CF": "Bangui",
          "CY": "Nikosia"
        };
        this.countryPopulation = {
          "US-AL": 4779736,
          "US-AK": 710231,
          "US-AZ": 6392017,
          "US-AR": 2915918,
          "US-CO": 5029196,
          "US-CT": 3574097,
          "US-DE": 897934,
          "US-FL": 18801310,
          "US-GA": 9687653,
          "US-HI": 1360301,
          "US-ID": 1567582,
          "US-IL": 12830632,
          "US-IN": 6483802,
          "US-IA": 3046355,
          "US-CA": 37253956,
          "US-KS": 2853118,
          "US-KY": 4339367,
          "US-LA": 4533372,
          "US-ME": 1328361,
          "US-MD": 5773552,
          "US-MA": 6547629,
          "US-MI": 9883640,
          "US-MN": 5303925,
          "US-MS": 2967297,
          "US-MO": 5988927,
          "US-MT": 989415,
          "US-NE": 1826341,
          "US-NV": 2700551,
          "US-NH": 1316470,
          "US-NJ": 8791894,
          "US-NM": 2059179,
          "US-NY": 19378102,
          "US-NC": 9535483,
          "US-ND": 672591,
          "US-OH": 11536504,
          "US-OK": 3751351,
          "US-OR": 3831074,
          "US-PA": 12702379,
          "US-RI": 1052567,
          "US-SC": 4625364,
          "US-SD": 814180,
          "US-TN": 6346105,
          "US-TX": 25145561,
          "US-UT": 2763885,
          "US-VT": 625741,
          "US-VA": 8001024,
          "US-WA": 6724540,
          "US-WV": 1852994,
          "US-WI": 5686986,
          "US-WY": 563626,
          "DE-BW": 10880000,
          "DE-BY": 12844000,
          "DE-BE": 3520000,
          "DE-BB": 2485000,
          "DE-HB": 671000,
          "DE-HH": 1787000,
          "DE-HE": 6176000,
          "DE-MV": 1612000,
          "DE-NI": 7927000,
          "DE-NW": 17866000,
          "DE-RP": 4053000,
          "DE-SL": 996000,
          "DE-SN": 4085000,
          "DE-ST": 2245000,
          "DE-SH": 2859000,
          "DE-TH": 2171000,
          "AF": 35500000,
          "EG": 93400000,
          "AL": 2900000,
          "DZ": 42200000,
          "AO": 28600000,
          "GQ": 1300000,
          "AR": 44300000,
          "AM": 3000000,
          "AZ": 9900000,
          "ET": 105000000,
          "AU": 24500000,
          "BS": 400000,
          "BH": 1500000,
          "BD": 164700000,
          "BE": 11300000,
          "BZ": 400000,
          "BJ": 11200000,
          "BT": 800000,
          "BO": 11100000,
          "BA": 3500000,
          "BW": 2300000,
          "BR": 207900000,
          "BN": 400000,
          "BG": 7100000,
          "BF": 19600000,
          "BI": 10400000,
          "CL": 18400000,
          "TW": 23600000,
          "CN": 1395380000,
          "CR": 4900000,
          "DK": 5748769,
          "GL": 56584,
          "DE": 83100000,
          "DO": 10700000,
          "DJ": 1000000,
          "EC": 16800000,
          "SV": 6400000,
          "CI": 24400000,
          "ER": 5900000,
          "EE": 1300000,
          "FJ": 900000,
          "FI": 5500000,
          "FR": 65000000,
          "GA": 2000000,
          "GM": 2100000,
          "GE": 3900000,
          "GH": 28800000,
          "GD": 108000,
          "GR": 10700000,
          "GT": 16900000,
          "GN": 11500000,
          "GW": 1900000,
          "GY": 800000,
          "HT": 10600000,
          "HN": 8900000,
          "IN": 1352600000,
          "ID": 264000000,
          "IQ": 39200000,
          "IR": 80600000,
          "IE": 4800000,
          "IS": 350000,
          "IL": 8600000,
          "IT": 60500000,
          "JM": 2900000,
          "JP": 126700000,
          "YE": 28300000,
          "JO": 9700000,
          "KH": 15900000,
          "CM": 25000000,
          "CA": 36700000,
          "CV": 517000,
          "KZ": 18000000,
          "QA": 2700000,
          "KE": 49700000,
          "KG": 6200000,
          "KI": 100000,
          "CO": 49300000,
          "KM": 800000,
          "CD": 81500000,
          "CG": 5000000,
          "KP": 25500000,
          "KR": 51400000,
          "XK": 1800000,
          "HR": 4100000,
          "CU": 11300000,
          "KW": 4100000,
          "LA": 7000000,
          "LS": 2200000,
          "LV": 1900000,
          "LB": 6200000,
          "LR": 4700000,
          "LY": 6400000,
          "LI": 40000,
          "LT": 2800000,
          "LU": 600000,
          "MG": 25500000,
          "MW": 18600000,
          "MY": 31600000,
          "MV": 400000,
          "ML": 18900000,
          "MT": 438000,
          "MA": 35100000,
          "MH": 60000,
          "MR": 4400000,
          "MU": 1300000,
          "MX": 129200000,
          "FM": 107000,
          "FO": 51371,
          "MD": 3900000,
          "MC": 37800,
          "MN": 3200000,
          "ME": 600000,
          "MZ": 29700000,
          "MM": 53400000,
          "NA": 2500000,
          "NR": 10000,
          "NP": 29400000,
          "NZ": 4800000,
          "NI": 6200000,
          "NL": 17100000,
          "NE": 20600000,
          "NG": 190900000,
          "NU": 1229,
          "MK": 2100000,
          "XC": 295000,
          "NO": 5300000,
          "OM": 4700000,
          "AT": 8800000,
          "TL": 1300000,
          "PK": 207600000,
          "PS": 4900000,
          "PW": 21000,
          "PA": 4100000,
          "PG": 8300000,
          "PY": 6800000,
          "PE": 31800000,
          "PH": 105000000,
          "PL": 38400000,
          "PT": 10300000,
          "RW": 12300000,
          "RO": 19600000,
          "RU": 144500000,
          "SB": 700000,
          "ZM": 16400000,
          "WS": 200000,
          "SM": 32800,
          "ST": 200000,
          "SA": 32600000,
          "SE": 10100000,
          "CH": 8500000,
          "SN": 15800000,
          "RS": 7000000,
          "SC": 90000,
          "SL": 7600000,
          "ZW": 16600000,
          "SG": 5700000,
          "SK": 5400000,
          "SI": 2100000,
          "SO": 14700000,
          "XS": 3500000,
          "ES": 46600000,
          "LK": 21400000,
          "KN": 50000,
          "LC": 200000,
          "VC": 104000,
          "ZA": 56500000,
          "SD": 40600000,
          "SS": 12600000,
          "SR": 600000,
          "SZ": 1400000,
          "SY": 18300000,
          "TJ": 8800000,
          "TZ": 57500000,
          "TH": 66100000,
          "TG": 7800000,
          "TO": 123000,
          "TT": 1400000,
          "TD": 14900000,
          "CZ": 10600000,
          "TN": 11500000,
          "TR": 80900000,
          "TM": 5800000,
          "TV": 10000,
          "UG": 42800000,
          "UA": 42300000,
          "HU": 9800000,
          "UY": 3500000,
          "UZ": 32600000,
          "VU": 300000,
          "VA": 829,
          "VE": 31400000,
          "AE": 9400000,
          "US": 325400000,
          "GB": 66200000,
          "VN": 93700000,
          "BY": 9500000,
          "EH": 600000,
          "CF": 4700000,
          "CY": 1200000
        };
        this.countryArea = {
          "US-AL": 135767,
          "US-AK": 1723337,
          "US-AZ": 295234,
          "US-AR": 137732,
          "US-CO": 269601,
          "US-CT": 14357,
          "US-DE": 6446,
          "US-FL": 170312,
          "US-GA": 153910,
          "US-HI": 28313,
          "US-ID": 216643,
          "US-IL": 149995,
          "US-IN": 94326,
          "US-IA": 145746,
          "US-CA": 423967,
          "US-KS": 213100,
          "US-KY": 104656,
          "US-LA": 135659,
          "US-ME": 91633,
          "US-MD": 32131,
          "US-MA": 27336,
          "US-MI": 250487,
          "US-MN": 225163,
          "US-MS": 125438,
          "US-MO": 180540,
          "US-MT": 380831,
          "US-NE": 200330,
          "US-NV": 286380,
          "US-NH": 24214,
          "US-NJ": 22591,
          "US-NM": 314917,
          "US-NY": 141297,
          "US-NC": 139391,
          "US-ND": 183108,
          "US-OH": 116098,
          "US-OK": 181037,
          "US-OR": 254799,
          "US-PA": 119280,
          "US-RI": 4001,
          "US-SC": 82933,
          "US-SD": 199729,
          "US-TN": 109153,
          "US-TX": 695662,
          "US-UT": 219882,
          "US-VT": 24906,
          "US-VA": 110787,
          "US-WA": 184661,
          "US-WV": 62756,
          "US-WI": 169635,
          "US-WY": 253335,
          "DE-BW": 35751,
          "DE-BY": 70550,
          "DE-BE": 892,
          "DE-BB": 29654,
          "DE-HB": 420,
          "DE-HH": 755,
          "DE-HE": 21115,
          "DE-MV": 23212,
          "DE-NI": 47593,
          "DE-NW": 34113,
          "DE-RP": 19854,
          "DE-SL": 2567,
          "DE-SN": 18449,
          "DE-ST": 20452,
          "DE-SH": 15802,
          "DE-TH": 16202,
          "AF": 652230,
          "EG": 1001450,
          "AL": 28748,
          "DZ": 2381741,
          "AO": 1246700,
          "GQ": 28051,
          "AR": 2780400,
          "AM": 29743,
          "AZ": 86600,
          "ET": 1104300,
          "AU": 7741220,
          "BS": 13880,
          "BH": 760,
          "BD": 143998,
          "BE": 30528,
          "BZ": 22966,
          "BJ": 112622,
          "BT": 38394,
          "BO": 1098581,
          "BA": 51197,
          "BW": 581730,
          "BR": 8514877,
          "BN": 5765,
          "BG": 110879,
          "BF": 274200,
          "BI": 27830,
          "CL": 756102,
          "TW": 35980,
          "CN": 9596961,
          "CR": 51100,
          "DK": 43094,
          "GL": 2166086,
          "DE": 357121,
          "DO": 48670,
          "DJ": 23200,
          "EC": 283561,
          "SV": 21041,
          "CI": 322463,
          "ER": 117600,
          "EE": 45228,
          "FJ": 18274,
          "FI": 338145,
          "FR": 551500,
          "GA": 267667,
          "GM": 11295,
          "GE": 69700,
          "GH": 238533,
          "GD": 344,
          "GR": 131957,
          "GT": 108889,
          "GN": 245857,
          "GW": 36125,
          "GY": 214969,
          "HT": 27750,
          "HN": 112090,
          "IN": 3287263,
          "ID": 1904569,
          "IQ": 438317,
          "IR": 1648195,
          "IE": 70273,
          "IS": 103000,
          "IL": 22380,
          "IT": 301340,
          "JM": 10991,
          "JP": 377915,
          "YE": 527968,
          "JO": 89342,
          "KH": 181035,
          "CM": 475440,
          "CA": 9984670,
          "CV": 4033,
          "KZ": 2724900,
          "QA": 11586,
          "KE": 580367,
          "KG": 199951,
          "KI": 811,
          "CO": 1138910,
          "KM": 2235,
          "CD": 2344858,
          "CG": 342000,
          "KP": 120538,
          "KR": 99720,
          "XK": 10887,
          "HR": 56594,
          "CU": 110860,
          "KW": 17818,
          "LA": 236800,
          "LS": 30355,
          "LV": 64589,
          "LB": 10400,
          "LR": 111369,
          "LY": 1759540,
          "LI": 160,
          "LT": 65300,
          "LU": 2586,
          "MG": 587041,
          "MW": 118484,
          "MY": 329847,
          "MV": 298,
          "ML": 1240192,
          "MT": 316,
          "MA": 446550,
          "MH": 181,
          "MR": 1030700,
          "MU": 2040,
          "MX": 1964375,
          "FM": 702,
          "FO": 1396,
          "MD": 33851,
          "MC": 2,
          "MN": 1564116,
          "ME": 13812,
          "MZ": 799380,
          "MM": 676578,
          "NA": 824292,
          "NR": 21,
          "NP": 147181,
          "NZ": 267710,
          "NI": 130730,
          "NL": 41543,
          "NE": 1267000,
          "NG": 923768,
          "NU": 260,
          "MK": 25713,
          "XC": 3355,
          "NO": 323802,
          "OM": 309500,
          "AT": 83871,
          "TL": 14874,
          "PK": 796095,
          "PS": 6220,
          "PW": 459,
          "PA": 75420,
          "PG": 462840,
          "PY": 406752,
          "PE": 1285216,
          "PH": 299000,
          "PL": 312685,
          "PT": 92090,
          "RW": 26338,
          "RO": 238391,
          "RU": 17098242,
          "SB": 28896,
          "ZM": 752618,
          "WS": 2831,
          "SM": 61,
          "ST": 964,
          "SA": 2149690,
          "SE": 450295,
          "CH": 41277,
          "SN": 196722,
          "RS": 77474,
          "SC": 455,
          "SL": 71740,
          "ZW": 390757,
          "SG": 697,
          "SK": 49035,
          "SI": 20273,
          "SO": 637657,
          "XS": 137600,
          "ES": 505370,
          "LK": 65610,
          "KN": 261,
          "LC": 616,
          "VC": 389,
          "ZA": 1219090,
          "SD": 1886068,
          "SS": 619745,
          "SR": 163820,
          "SZ": 17364,
          "SY": 185180,
          "TJ": 143100,
          "TZ": 947300,
          "TH": 513120,
          "TG": 56785,
          "TO": 747,
          "TT": 5128,
          "TD": 1284000,
          "CZ": 78867,
          "TN": 163610,
          "TR": 783562,
          "TM": 488100,
          "TV": 26,
          "UG": 241038,
          "UA": 603550,
          "HU": 93028,
          "UY": 176215,
          "UZ": 447400,
          "VU": 12189,
          "VA": 0.44,
          "VE": 912050,
          "AE": 83600,
          "US": 9826675,
          "GB": 243610,
          "VN": 331210,
          "BY": 207600,
          "EH": 266000,
          "CF": 622984,
          "CY": 9251
        };
      }

      _createClass(MapComponent, [{
        key: "doSomething",
        value: function doSomething() {
          //var path = this.router.url;
          var code = jQuery('#map')[0].getAttribute("code");

          if (code) {
            //this.router.navigate([path+"/"+jQuery('#map')[0].getAttribute("code")]);
            this.code = code;
            this.name = this.countryNames[this.code];
            this.showCountryMenu = true;
          }
        }
      }, {
        key: "back",
        value: function back() {
          if (this.showCountryMenu) {
            if (this.showOptions) {
              this.showOptions = false;
              this.options = [];
              this.categoryToShow = "";
              this.showCapital = false;
              this.showPopulation = false;
              this.showFlag = false;
              this.showArea = false;
              this.optionClicked = false;
              this.clickeOptionIndex = 4;
            } else {
              this.showCountryMenu = false;
              this.code = "";
              jQuery('#map')[0].removeAttribute("code");
            }
          } else {
            this.router.navigate(["/"]);
          }
        }
      }, {
        key: "calculateOptions",
        value: function calculateOptions() {
          var list = this.europeCodes.includes(this.code) ? this.europeCodes : this.africaCodes.includes(this.code) ? this.africaCodes : this.asiaCodes.includes(this.code) ? this.asiaCodes : this.soutAmericaCodes.includes(this.code) ? this.soutAmericaCodes : this.northAmericaCodes.includes(this.code) ? this.northAmericaCodes : this.oceaniaCodes.includes(this.code) ? this.oceaniaCodes : this.usCodes.includes(this.code) ? this.usCodes : this.germanyCodes.includes(this.code) ? this.germanyCodes : this.countryCodes;
          this.options = [this.code];

          while (this.options.length < 4) {
            var random = Math.trunc(Math.random() * list.length);

            if (!this.options.includes(list[random]) && this.isCategoryAvailable(list[random], this.categoryToShow)) {
              var index = Math.trunc(Math.random() * (this.options.length + 1));
              this.options.splice(index, 0, list[random]);
            }
          }
        }
      }, {
        key: "isCategoryAvailable",
        value: function isCategoryAvailable(code, category) {
          switch (category) {
            case "Hauptstadt":
              if (this.countryCapitals[code]) {
                return true;
              } else {
                return false;
              }

            case "Einwohner":
              if (this.countryPopulation[code]) {
                return true;
              } else {
                return false;
              }

            case "Fläche":
              if (this.countryArea[code]) {
                return true;
              } else {
                return false;
              }

          }

          return true;
        }
      }, {
        key: "setDefaultImage",
        value: function setDefaultImage(event) {
          var altOptions = ["ci", "ga", "kn", "tk", "xk"];
          var newCountry = "";

          while (newCountry == "") {
            var index = Math.trunc(Math.random() * 5);

            if (!this.options.includes(altOptions[index])) {
              newCountry = altOptions[index];
            }
          }

          event.target.src = "../../assets/flags/png1000px/" + newCountry + ".png";
        }
      }, {
        key: "getOptionStyle",
        value: function getOptionStyle(index) {
          if (index < 4 && this.optionClicked) {
            if (this.options[index] == this.code) {
              return {
                'background': 'rgba(0,255,0,0.5)',
                "width": this.boxSizeService.boxSize + "%",
                "height": this.boxSizeService.boxSize + "%"
              };
            }

            if (index == this.clickeOptionIndex) {
              return {
                'background': 'rgba(255,0,0,0.5)',
                "width": this.boxSizeService.boxSize + "%",
                "height": this.boxSizeService.boxSize + "%"
              };
            }
          }

          return {
            "width": this.boxSizeService.boxSize + "%",
            "height": this.boxSizeService.boxSize + "%"
          };
        }
      }, {
        key: "increment",
        value: function increment() {
          if (this.boxSizeService.boxSize < 40) {
            this.boxSizeService.boxSize++;
          }
        }
      }, {
        key: "decrement",
        value: function decrement() {
          if (this.boxSizeService.boxSize > 20) {
            this.boxSizeService.boxSize--;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.paramMap.subscribe(function (params) {
            _this2.map = params.get("map");
            _this2.mapName = _this2.mapNames[_this2.map];
          });
          jQuery('#map').vectorMap({
            map: this.mapName,
            backgroundColor: '#67a8ce',
            zoomMin: 1,
            zoomMax: 8,
            zoomButtons: false,
            focusOn: {
              x: this.map == "Ozeanien" ? 0.2 : 0.5,
              y: this.map == "Europa" || this.map == "Afrika" ? 0.3 : this.map == "Ozeanien" ? 0.6 : 0.5,
              scale: this.map == "Europa" ? 1.14 : this.map == "Afrika" ? 1.18 : this.map == "Ozeanien" ? 1.4 : 1
            },
            regionStyle: {
              initial: {
                fill: '#e4e4e4',
                'fill-opacity': 1,
                stroke: 'none',
                'stroke-width': 0,
                'stroke-opacity': 1
              },
              hover: {
                fill: 'red',
                cursor: 'pointer'
              }
            },
            onRegionClick: function onRegionClick(e, code) {
              e.target.parentElement.setAttribute("code", code);
            },
            onRegionLabelShow: function onRegionLabelShow(e, el, code) {
              e.preventDefault();
            }
          });
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _box_size_service__WEBPACK_IMPORTED_MODULE_3__["BoxSizeService"]
      }];
    };

    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-map',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./map.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/map/map.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./map.component.css */
      "./src/app/map/map.component.css"))["default"]]
    })], MapComponent);
    /***/
  },

  /***/
  "./src/app/world/world.component.css":
  /*!*******************************************!*\
    !*** ./src/app/world/world.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppWorldWorldComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmxkL3dvcmxkLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/world/world.component.ts":
  /*!******************************************!*\
    !*** ./src/app/world/world.component.ts ***!
    \******************************************/

  /*! exports provided: WorldComponent */

  /***/
  function srcAppWorldWorldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorldComponent", function () {
      return WorldComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var WorldComponent = /*#__PURE__*/function () {
      function WorldComponent(router) {
        _classCallCheck(this, WorldComponent);

        this.router = router;

        this.getRegionName = function (code) {
          return jQuery('#world-map').vectorMap('get', 'regionName', code);
        };
      }

      _createClass(WorldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          jQuery('#world-map').vectorMap({
            map: 'world_mill_en',
            backgroundColor: '#67a8ce',
            zoomButtons: false,
            regionStyle: {
              initial: {
                fill: '#e4e4e4',
                'fill-opacity': 1,
                stroke: 'none',
                'stroke-width': 0,
                'stroke-opacity': 1
              }
            },
            onRegionClick: function onRegionClick(e, code) {
              window.location.assign(window.location.href + '/' + code);
            }
          });
        }
      }]);

      return WorldComponent;
    }();

    WorldComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-world',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./world.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/world/world.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./world.component.css */
      "./src/app/world/world.component.css"))["default"]]
    })], WorldComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Daniel\Documents\Sources\geoApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map