// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"gamesrc/CST.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
// キーを作成する
// もしメニューまでいくのであればCST.SCENES.LOADで"ＭＥＮＵ"が呼び出されます
var CST = {
  SCENES: {
    LOAD: "LOAD",
    ANIM: "ANIM",
    MENU: "MENUSCENE",
    PLAYSCENE: "PLAYSCENE",
    CLASSLIST: "CLASSLIST"
  },
  IMAGE: {
    // メニューシーン用
    MENUBG: "menubg.png",
    FIRSTSTAGEBTN: "firststagebtn.png",
    SECONDSTAGEBTN: "secondstagebtn.png",
    THIRDSTAGEBTN: "thirdstagebtn.png",
    GAMECLERBTN: "gameclearbtn.png",
    GAMECLOOSEBTN: "gameloosebtn.png",
    GOLEMSCENEBTN: "golemscenebtn.png",
    DRAGONSCENEBTN: "dragonscenebtn.png",
    SELECT: "select.png",
    PLAYERHPGAUGE: "playerhpgauge.png",
    ENEMYHPGAUGE: "enemyhpgauge.png",
    SUMMONBTNKNIGHT: "summonknight.png",
    SUMMONBTNDAME: "summondame.png",
    MENUBAR: "menubar.png",
    APPRENTICEICON: "apprenticeicon.png",
    KNIGHTICON: "knighticon.png",
    DAMEICON: "dameicon.png",
    ARROW: "arrow.png",
    SKILLBTN: "skill.png",
    EXPLANATION: "Explanation.jpg",
    POINTER: "pointer.png",
    COLLISION: "collision.png"
  },
  AUDIO: {},
  SPRITE: {
    APPRENTICE: "apprenticespritesheet",
    PLAYERMINIONS: "playermnionsspritesheet",
    ENEMYBOSS: "enemyspritesheet",
    ENEMYMINIONS: "enemyminionsspritesheet",
    SACREDTREE: "sacredtreespritesheet",
    // スキル呪文
    APPRENTICESKILL: "apprenticeskillspritesheet",
    SUMMONENEMY: "sumonenemyspritesheet",
    SUMMONPLAYERMINION: "sumonplayerminionspritesheet"
  },
  SPRITESIZE: {
    APPRENTICE: 48,
    PLAYERMINIONS: 32,
    ENEMYBOSS: 64,
    ENEMYMINIONS: 32,
    SACREDTREE: 96,
    APPRENTICESKILL: 128,
    SUMMONENEMY: 96,
    SUMMONPLAYERMINION: 48
  },
  ANIMEAPPRENTICE: {
    IDRING: "apprenticeidring",
    INTERSEPT1: "apprenticeintersept1",
    INTERSEPT2: "apprenticeintersept2",
    WIN: "apprenticewin",
    LOOSE: "apprenticeloose"
  },
  ANIMENGIHT: {
    FRONT: "knightfront",
    LEFT: "knightleft",
    BACK: "knightback",
    RIGHT: "knightright",
    FRONTATTACK: "knightfrontattack",
    LEFTATTACK: "knightleftattack",
    BACKATTACK: "knightbackattack",
    RIGHTATTACK: "knightrightattack",
    FRONTWAIT: "knightfrontwait",
    LEFTWAIT: "knightleftwait",
    BACKWAIT: "knightbackwait",
    RIGHTWAIT: "knightrightwait"
  },
  ANIMEDAME: {
    FRONT: "damefront",
    LEFT: "dameleft",
    BACK: "dameback",
    RIGHT: "dameright",
    FRONTARROWWAIT: "damefrontarrowwait",
    LEFTARROWWAIT: "dameleftarrowwait",
    BACKARROWWAIT: "damebackarrowwait",
    RIGHTARROWWAIT: "damerightarrowwait",
    FRONTARROWATTACK: "damefrontarrowattack",
    LEFTARROWATTACK: "dameleftarrowattack",
    BACKARROWATTACK: "damebackarrowattack",
    RIGHTARROWATTACK: "damerightarrowattack"
  },
  ANIMEROCKSPIDER: {
    FRONT: "rockspiderfront",
    LEFT: "rockspiderleft",
    BACK: "rockspiderback",
    RIGHT: "rockspiderright",
    ATTACK: "rockspiderattack",
    DEATH: "rockspiderdeath",
    SUMMON: "rockspidersummon"
  },
  ANIMEGOLEM: {
    FRONT: "golemfront",
    LEFT: "golemleft",
    BACK: "golemback",
    RIGHT: "golemright",
    FRONTATTACK: "golemfrontattack",
    LEFTATTACK: "golemleftattack",
    BACKATTACK: "golembackattack",
    RIGHTATTACK: "golemrightattack",
    FRONTDESTORY: "golemfrontdestory",
    LEFTDESTORY: "golemleftdestory",
    BACKDESTORY: "golembackdestory",
    RIGHTDESTORY: "golemrightdestory"
  },
  ANIMEWITCH: {
    FRONTMOVE: "witchfrontmove",
    LEFTMOVE: "witchleftmove",
    BACKMOVE: "witchbackmove",
    RIGHTMOVE: "witchrightmove",
    FRONTMOVEARRIVAL: "witchfrontmovearrival",
    LEFTMOVEARRIVAL: "witchleftmovearrival",
    BACKMOVEARRIVAL: "witchbackmovearrival",
    RIGHTMOVEARRIVAL: "witchrightmovearrival",
    FRONT: "witchfront",
    LEFT: "witchleft",
    BACK: "witchback",
    RIGHT: "witchright",
    FRONTSUMMON: "witchfrontsummon",
    LEFTSUMMON: "witchleftsummon",
    BACKSUMMON: "witchbacksummon",
    RIGHTSUMMON: "witchrightsummon",
    FRONTDESTORY: "witchfrontdestory",
    LEFTDESTORY: "witchleftdestory",
    BACKDESTORY: "witchbackdestory",
    RIGHTDESTORY: "witchrightdestory"
  },
  ANIMEFECTS: {
    MINIONSKILL: "minionskill",
    ENEMYSUMMON: 'minionsummon',
    ENEMYBOSSSUMMON: "enemybosssummon",
    PLAYERMINIONSUMMON: "playerminionsummon",
    PLAYERSKILL: "playerskill"
  },
  ANIMSACRED: {
    SACREDTREE: "sacredtree",
    SACREDTREEDESTROY: "sacredtreeonestepdestroy",
    SACREDTREEDESTROY2: "sacredtreeonestepdestroy2"
  }
};
exports.CST = CST;
},{}],"gamesrc/scenes/loadscene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
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

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadScene = void 0;
/** @type {import("../typings/phaser")}*/
// CSTをインポート

var CST_1 = require("../CST"); // import { MenuScene } from "./MenuScene";
// extendsは親クラスを継承した子クラスです
// class クラス名 extends 親クラス名


var loadScene =
/** @class */
function (_super) {
  __extends(loadScene, _super);

  function loadScene() {
    return _super.call(this, {
      key: CST_1.CST.SCENES.LOAD
    }) || this;
  }

  loadScene.prototype.LoadImages = function () {
    this.load.setPath("./gameassets/image");

    for (var prop in CST_1.CST.IMAGE) {
      // @ts-ignore
      this.load.image(CST_1.CST.IMAGE[prop], CST_1.CST.IMAGE[prop]);
    }

    ;
  };

  loadScene.prototype.LoadAudio = function () {
    this.load.setPath("./gameassets/audio");

    for (var prop in CST_1.CST.AUDIO) {
      // @ts-ignore
      this.load.audio(CST_1.CST.AUDIO[prop], CST_1.CST.AUDIO[prop]);
    }

    ;
  };

  loadScene.prototype.LoadSprite = function () {
    this.load.setPath("./gameassets/sprite");

    for (var prop in CST_1.CST.SPRITE) {
      // @ts-ignore
      this.load.atlas(CST_1.CST.SPRITE[prop], CST_1.CST.SPRITE[prop] + ".png", CST_1.CST.SPRITE[prop] + ".json"); // @ts-ignore

      this.textures.addSpriteSheetFromAtlas(CST_1.CST.SPRITE[prop], {
        frameHeight: CST_1.CST.SPRITESIZE[prop],
        frameWidth: CST_1.CST.SPRITESIZE[prop],
        atlas: CST_1.CST.SPRITE[prop],
        frame: ""
      });
    }

    ;
  };

  loadScene.prototype.preload = function () {
    // マップの読み込み
    this.load.image("mapPng", "./gameassets/maps/maptexture.png");
    this.load.tilemapTiledJSON("mapStage1", "./gameassets/maps/mapStage1.json");
    this.LoadSprite();
    this.LoadImages();
  };

  ;

  loadScene.prototype.create = function () {
    //アニメーションファイルに移動
    this.scene.start(CST_1.CST.SCENES.ANIM);
  };

  ;
  return loadScene;
}(Phaser.Scene);

exports.loadScene = loadScene;
},{"../CST":"gamesrc/CST.ts"}],"gamesrc/scenes/animation.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animation = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var animation = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(animation, _Phaser$Scene);

  var _super = _createSuper(animation);

  function animation() {
    _classCallCheck(this, animation);

    return _super.call(this, {
      key: _CST.CST.SCENES.ANIM
    });
  }

  _createClass(animation, [{
    key: "preload",
    value: function preload() {
      // 見習いアニメーション
      this.anims.create({
        key: _CST.CST.ANIMEAPPRENTICE.IDRING,
        frameRate: 1,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.APPRENTICE, {
          prefix: "00",
          start: 0,
          end: 0
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEAPPRENTICE.INTERSEPT1,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.APPRENTICE, {
          prefix: "00",
          start: 0,
          end: 13
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEAPPRENTICE.INTERSEPT2,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.APPRENTICE, {
          prefix: "00",
          start: 14,
          end: 25
        }),
        repeat: 0
      }); // 勝利アニメーション

      this.anims.create({
        key: _CST.CST.ANIMEAPPRENTICE.WIN,
        frameRate: 24,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.APPRENTICE, {
          prefix: "00",
          start: 26,
          end: 46
        }),
        repeat: 5
      }); // 敗北アニメーション

      this.anims.create({
        key: _CST.CST.ANIMEAPPRENTICE.LOOSE,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.APPRENTICE, {
          prefix: "00",
          start: 47,
          end: 57
        })
      }); // プレイヤースキル

      this.anims.create({
        key: _CST.CST.ANIMEFECTS.PLAYERSKILL,
        frameRate: 3,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.APPRENTICESKILL, {
          prefix: "00",
          start: 0,
          end: 5
        }),
        repeat: -1
      }); // プレイヤーミニオン召喚

      this.anims.create({
        key: _CST.CST.ANIMEFECTS.PLAYERMINIONSUMMON,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.SUMMONPLAYERMINION, {
          prefix: "00",
          start: 0,
          end: 6
        })
      }); // 騎士アニメーション

      this.anims.create({
        key: _CST.CST.ANIMENGIHT.FRONT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 0,
          end: 10
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.FRONTATTACK,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 44,
          end: 49
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.FRONTWAIT,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 44,
          end: 44
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.LEFT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 11,
          end: 21
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.LEFTATTACK,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 50,
          end: 56
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.LEFTWAIT,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 50,
          end: 50
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.BACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 22,
          end: 32
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.BACKATTACK,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 57,
          end: 62
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.BACKWAIT,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 57,
          end: 57
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.RIGHT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 33,
          end: 43
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.RIGHTATTACK,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 63,
          end: 67
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMENGIHT.RIGHTWAIT,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 63,
          end: 63
        })
      }); // ヴァルキリーアニメーション

      this.anims.create({
        key: _CST.CST.ANIMEDAME.FRONT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 68,
          end: 78
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.FRONTARROWWAIT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 112,
          end: 112
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.FRONTARROWATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 113,
          end: 113
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.LEFT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 79,
          end: 89
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.LEFTARROWWAIT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 114,
          end: 114
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.LEFTARROWATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 115,
          end: 115
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.BACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 90,
          end: 100
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.BACKARROWWAIT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 116,
          end: 116
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.BACKARROWATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 117,
          end: 117
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.RIGHT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 101,
          end: 111
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.RIGHTARROWATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 119,
          end: 119
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEDAME.RIGHTARROWWAIT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.PLAYERMINIONS, {
          prefix: "00",
          start: 118,
          end: 118
        }),
        repeat: 0
      }); // スキル発動時

      this.anims.create({
        key: _CST.CST.ANIMEFECTS.MINIONSKILL,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.SUMMONPLAYERMINION, {
          prefix: "00",
          start: 7,
          end: 21
        }),
        repeat: -1
      }); // 岩クモアニメーション

      this.anims.create({
        key: _CST.CST.ANIMEROCKSPIDER.FRONT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYMINIONS, {
          prefix: "00",
          start: 0,
          end: 20
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEROCKSPIDER.LEFT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYMINIONS, {
          prefix: "00",
          start: 21,
          end: 41
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEROCKSPIDER.RIGHT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYMINIONS, {
          prefix: "00",
          start: 42,
          end: 62
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEROCKSPIDER.BACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYMINIONS, {
          prefix: "00",
          start: 63,
          end: 82
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEROCKSPIDER.DEATH,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYMINIONS, {
          prefix: "00",
          start: 83,
          end: 99
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEROCKSPIDER.ATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYMINIONS, {
          prefix: "00",
          start: 100,
          end: 107
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEROCKSPIDER.SUMMON,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYMINIONS, {
          prefix: "00",
          start: 108,
          end: 128
        })
      }); // 敵召喚

      this.anims.create({
        key: _CST.CST.ANIMEFECTS.ENEMYSUMMON,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.SUMMONENEMY, {
          prefix: "00",
          start: 0,
          end: 6
        })
      }); // 敵ボス召喚

      this.anims.create({
        key: _CST.CST.ANIMEFECTS.ENEMYBOSSSUMMON,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.SUMMONENEMY, {
          prefix: "00",
          start: 0,
          end: 6
        }),
        repeat: -1
      }); // ゴーレム

      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.FRONT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 0,
          end: 9
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.LEFT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 10,
          end: 19
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.BACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 20,
          end: 29
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.RIGHT,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 30,
          end: 39
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.FRONTATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 40,
          end: 59
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.LEFTATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 60,
          end: 79
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.BACKATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 80,
          end: 99
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.RIGHTATTACK,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 100,
          end: 119
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.FRONTDESTORY,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 120,
          end: 139
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.LEFTDESTORY,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 140,
          end: 159
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.RIGHTDESTORY,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 160,
          end: 179
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEGOLEM.BACKDESTORY,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 180,
          end: 199
        })
      }); // 魔女

      this.anims.create({
        key: _CST.CST.ANIMEWITCH.FRONTMOVE,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 210,
          end: 200
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.LEFTMOVE,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 221,
          end: 211
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.BACKMOVE,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 232,
          end: 222
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.RIGHTMOVE,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 243,
          end: 233
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.FRONTMOVEARRIVAL,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 200,
          end: 210
        }),
        repeat: 0
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.LEFTMOVEARRIVAL,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 211,
          end: 221
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.BACKMOVEARRIVAL,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 222,
          end: 232
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.RIGHTMOVEARRIVAL,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 233,
          end: 243
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.FRONT,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 244,
          end: 254
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.LEFT,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 255,
          end: 265
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.BACK,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 266,
          end: 276
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.RIGHT,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 277,
          end: 287
        }),
        repeat: -1
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.FRONTSUMMON,
        frameRate: 15,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 288,
          end: 298
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.LEFTSUMMON,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 299,
          end: 309
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.BACKSUMMON,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 310,
          end: 320
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.RIGHTSUMMON,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 321,
          end: 331
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.LEFTDESTORY,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 332,
          end: 342
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.FRONTDESTORY,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 343,
          end: 353
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.RIGHTDESTORY,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 354,
          end: 364
        })
      });
      this.anims.create({
        key: _CST.CST.ANIMEWITCH.BACKDESTORY,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.ENEMYBOSS, {
          prefix: "00",
          start: 365,
          end: 375
        })
      }); // 神樹のアニメーション

      this.anims.create({
        key: _CST.CST.ANIMSACRED.SACREDTREE,
        frameRate: 1,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.SACREDTREE, {
          prefix: "00",
          start: 0,
          end: 12
        }),
        repeat: -1
      }); // 神樹壊れる

      this.anims.create({
        key: _CST.CST.ANIMSACRED.SACREDTREEDESTROY,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.SACREDTREE, {
          prefix: "00",
          start: 13,
          end: 49
        })
      }); // 神樹悪魔

      this.anims.create({
        key: _CST.CST.ANIMSACRED.SACREDTREEDESTROY2,
        frameRate: 10,
        frames: this.anims.generateFrameNames(_CST.CST.SPRITE.SACREDTREE, {
          prefix: "00",
          start: 40,
          end: 49
        }),
        repeat: -1
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);

  return animation;
}(Phaser.Scene);

exports.animation = animation;
},{"../CST":"gamesrc/CST.ts"}],"gamesrc/scenes/classList.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.witchClass = exports.parameter = exports.SummonBoss = exports.DefaultSummon = exports.ApprenticeClass = exports.PlayerStatus = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlayerStatus = function PlayerStatus() {
  _classCallCheck(this, PlayerStatus);

  this.hp = 32;
  this.summonTotal = 0;
  this.prohibitedArea = true;
};

exports.PlayerStatus = PlayerStatus;
;

var ApprenticeClass = /*#__PURE__*/function (_Phaser$Physics$Arcad) {
  _inherits(ApprenticeClass, _Phaser$Physics$Arcad);

  var _super = _createSuper(ApprenticeClass);

  function ApprenticeClass(scene, x, y, texture) {
    var _this;

    _classCallCheck(this, ApprenticeClass);

    _this = _super.call(this, scene, x, y, texture);
    scene.add.existing(_assertThisInitialized(_this));

    _this.play(_CST.CST.ANIMEAPPRENTICE.IDRING);

    _this.btn = scene.physics.add.image(x, y, _CST.CST.IMAGE.SELECT).setInteractive().setScale(5);
    _this.choice = true;
    _this.skillActivation = false;
    _this.skillDamage = 0.05;
    return _this;
  }

  return ApprenticeClass;
}(Phaser.Physics.Arcade.Sprite);

exports.ApprenticeClass = ApprenticeClass;

var DefaultSummon = /*#__PURE__*/function (_Phaser$GameObjects$C) {
  _inherits(DefaultSummon, _Phaser$GameObjects$C);

  var _super2 = _createSuper(DefaultSummon);

  function DefaultSummon(type, scene, x, y, list) {
    var _this2;

    _classCallCheck(this, DefaultSummon);

    _this2 = _super2.call(this, scene, x, y, list); //画像の描画

    _this2.scene.add.existing(_assertThisInitialized(_this2)); // パラメーターの割り振り
    // このナイトが選択されているかどうか


    _this2.choice = true;
    _this2.attackZoneCircle = scene.add.circle(0, 0, 70).setStrokeStyle(2, 0xFFFFFF);

    if (type === "knight") {
      _this2.swordAtack = scene.physics.add.image(x, y, _CST.CST.IMAGE.COLLISION).setAlpha(0.01);

      _this2.swordAtack.body.setCircle(20).setOffset(-15, -15);

      _this2.knightAtackTime = false;
      _this2.leaveBoss = false;
      _this2.knightAttackDamage = 0.03;
    }

    if (type === "dame") {
      _this2.atackTime = true;
      _this2.arrowAtack = true;
      _this2.dameAttackDamage = 0.6;
      _this2.arrowStance = false;
    }

    _this2.pointMove = false;
    _this2.moveSpeed = 50;
    _this2.collision = scene.physics.add.image(x, y, _CST.CST.IMAGE.COLLISION).setAlpha(0.01).setScale(3);
    _this2.btn = scene.physics.add.image(x, y, _CST.CST.IMAGE.SELECT).setInteractive().setScale(5);
    _this2.attackZone = scene.physics.add.image(x, y, _CST.CST.IMAGE.COLLISION);

    _this2.attackZone.body.setCircle(70).setOffset(-70, -70);

    _this2.type = type; // 召喚エフェクト

    _this2.summoneffect = scene.add.sprite(x, y, _CST.CST.SPRITE.SUMMONPLAYERMINION).play(_CST.CST.ANIMEFECTS.PLAYERMINIONSUMMON);

    _this2.summoneffect.on("animationcomplete", function () {
      _this2.summoneffect.destroy();
    }); // スキル発動


    _this2.skillActivation = false;
    _this2.skillEffect = scene.physics.add.sprite(x, y, _CST.CST.SPRITE.SUMMONPLAYERMINION).play(_CST.CST.ANIMEFECTS.MINIONSKILL).setDepth(-1).setVisible(false);
    return _this2;
  }

  return DefaultSummon;
}(Phaser.GameObjects.Container);

exports.DefaultSummon = DefaultSummon;
;

var SummonBoss = /*#__PURE__*/function (_Phaser$Physics$Arcad2) {
  _inherits(SummonBoss, _Phaser$Physics$Arcad2);

  var _super3 = _createSuper(SummonBoss);

  // 出現後
  function SummonBoss(scene, x, y, texture, name) {
    var _this3;

    _classCallCheck(this, SummonBoss);

    _this3 = _super3.call(this, scene, x, y, texture);
    scene.physics.world.enable(_assertThisInitialized(_this3));
    _this3.attackDamage = 0.1;
    scene.add.existing(_assertThisInitialized(_this3));
    _this3.summon = false; // this.anims.stop();

    _this3.setTint(0X82004B);

    _this3.summoneffect = scene.add.sprite(x, y, _CST.CST.SPRITE.SUMMONPLAYERMINION).play(_CST.CST.ANIMEFECTS.ENEMYBOSSSUMMON).setDepth(-1);
    _this3.collision = scene.physics.add.image(x, y, _CST.CST.IMAGE.COLLISION).setAlpha(0.01); // ボスのＨＰはゴーレムの総量

    _this3.hp = 30;
    _this3.enemyHpBar = scene.add.graphics({
      fillStyle: {
        color: 0xFF0000
      }
    }).fillRect(-15, -20, _this3.hp, 2);
    return _this3;
  }

  return SummonBoss;
}(Phaser.Physics.Arcade.Sprite);

exports.SummonBoss = SummonBoss;
;

var parameter = function parameter() {
  _classCallCheck(this, parameter);

  this.Choice = false;
};

exports.parameter = parameter;

var witchClass = /*#__PURE__*/function (_Phaser$Physics$Arcad3) {
  _inherits(witchClass, _Phaser$Physics$Arcad3);

  var _super4 = _createSuper(witchClass);

  function witchClass(scene, x, y, texture) {
    var _this4;

    _classCallCheck(this, witchClass);

    _this4 = _super4.call(this, scene, x, y, texture);
    scene.add.existing(_assertThisInitialized(_this4));
    scene.physics.world.enable(_assertThisInitialized(_this4));
    _this4.movePoint = [[384, 32], [64, 320], [704, 192], [160, 128], [608, 64]];

    _this4.play(_CST.CST.ANIMEWITCH.FRONT);

    _this4.summonPoint = [[160, 32], [256, 64], [96, 256], [128, 416], [448, 480], [640, 352], [640, 192], [640, 96], [544, 32], [96, 160]];
    _this4.summonBossPoint = [[96, 288], [736, 288]];
    _this4.hp = 30;
    _this4.enemyHpBar = scene.add.graphics({
      fillStyle: {
        color: 0xFF0000
      }
    }).fillRect(-15, -30, _this4.hp, 2);
    _this4.direction = "front";
    _this4.destroyAnimation = false;
    return _this4;
  }

  return witchClass;
}(Phaser.Physics.Arcade.Sprite);

exports.witchClass = witchClass;
},{"../CST":"gamesrc/CST.ts"}],"gamesrc/scenes/playscene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playScene = void 0;

var _CST = require("../CST");

var classList = _interopRequireWildcard(require("./classList"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var playScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(playScene, _Phaser$Scene);

  var _super = _createSuper(playScene);

  function playScene() {
    _classCallCheck(this, playScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.PLAYSCENE
    });
  }

  _createClass(playScene, [{
    key: "init",
    value: function init(stageData) {
      //引き継いだ後にインスタント化
      this.stageData = stageData;
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      //プレイヤーのステータス
      this.player = new classList.PlayerStatus();
      this.playerHpBar = this.add.graphics({
        fillStyle: {
          color: 0X0000FF
        }
      }).fillRect(369, 280, this.player.hp, 4).setDepth(2); //神樹

      this.sacredTree = this.physics.add.sprite(384, 320, _CST.CST.SPRITE.SACREDTREE).setSize(36, 60).play(_CST.CST.ANIMSACRED.SACREDTREE).setImmovable(true).setDepth(1); // ゲーム画面のボタンデザイン60

      this.apprenticeIcon = this.physics.add.image(530, 480, _CST.CST.IMAGE.APPRENTICEICON).setDepth(2);
      this.knightIcon = this.physics.add.image(530, 480, _CST.CST.IMAGE.KNIGHTICON).setInteractive().setVisible(false).setDepth(2);
      this.dameIcon = this.physics.add.image(530, 480, _CST.CST.IMAGE.DAMEICON).setInteractive().setVisible(false).setDepth(2);
      this.summonBtnKnight = this.physics.add.image(650, 480, _CST.CST.IMAGE.SUMMONBTNKNIGHT).setInteractive().setDepth(2);
      this.summonBtnDame = this.physics.add.image(710, 480, _CST.CST.IMAGE.SUMMONBTNDAME).setInteractive().setDepth(2);
      this.skillBtn = this.physics.add.image(590, 480, _CST.CST.IMAGE.SKILLBTN).setInteractive().setDepth(2); // 見習いキャラ

      this.apprentice = new classList.ApprenticeClass(this, 384, 370, _CST.CST.SPRITE.APPRENTICE).setDepth(1); // 見習いキャラをタッチしたら

      this.apprentice.btn.on("pointerdown", function () {
        _this.apprentice.choice = true;

        if (_this.playerMinion1 !== undefined) {
          _this.playerMinion1.choice = false;
        }

        ;

        if (_this.playerMinion2 !== undefined) {
          _this.playerMinion2.choice = false;
        }

        ;

        if (_this.playerMinion3 !== undefined) {
          _this.playerMinion3.choice = false;
        }

        ;

        if (_this.playerMinion4 !== undefined) {
          _this.playerMinion4.choice = false;
        }

        ; // ゲーム画面のボタンデザインapprentice

        _this.apprenticeIcon.setVisible(true);

        _this.knightIcon.setVisible(false);

        _this.dameIcon.setVisible(false);

        _this.summonBtnKnight.setVisible(true);

        _this.summonBtnDame.setVisible(true);

        _this.player.prohibitedArea = false;
      }); // ナイトとデイムを召喚する
      // ミニオンのグループ化

      this.playerMinionsGroup = this.add.group(); // ナイトの召喚

      this.summonBtnKnight.on("pointerdown", function () {
        // 召喚合計数が召喚上限に達していなければ実行
        if (_this.player.summonTotal < _this.stageData.playerSummonUpperLimit) {
          // 召喚アニメーション
          _this.apprentice.play(_CST.CST.ANIMEAPPRENTICE.INTERSEPT1);

          ++_this.player.summonTotal;

          switch (_this.player.summonTotal) {
            case 1:
              // type="knight"か"dame"を入れてください384, 370
              _this.playerMinion1 = new classList.DefaultSummon('knight', _this, 364, 400, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion2 !== undefined) {
                _this.playerMinion2.choice = false;
              }

              ;

              if (_this.playerMinion3 !== undefined) {
                _this.playerMinion3.choice = false;
              }

              ;

              if (_this.playerMinion4 !== undefined) {
                _this.playerMinion4.choice = false;
              }

              ; // ナイトの初期アニメーション

              _this.playerMinion1.list[0].play(_CST.CST.ANIMENGIHT.FRONT, true);

              _this.playerMinion1.list[1].play(_CST.CST.ANIMENGIHT.FRONTWAIT, true);

              _this.playerMinion1.btn.on("pointerdown", function () {
                _this.playerMinion1.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion2 !== undefined) {
                  _this.playerMinion2.choice = false;
                }

                ;

                if (_this.playerMinion3 !== undefined) {
                  _this.playerMinion3.choice = false;
                }

                ;

                if (_this.playerMinion4 !== undefined) {
                  _this.playerMinion4.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(false);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.playerMinionsGroup.add(_this.playerMinion1); // ボタン作成
              // ゲーム画面のボタンデザインナイト


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(true);

              _this.dameIcon.setVisible(false);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;

            case 2:
              // ナイト
              _this.playerMinion2 = new classList.DefaultSummon('knight', _this, 410, 400, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion1 !== undefined) {
                _this.playerMinion1.choice = false;
              }

              ;

              if (_this.playerMinion3 !== undefined) {
                _this.playerMinion3.choice = false;
              }

              ;

              if (_this.playerMinion4 !== undefined) {
                _this.playerMinion4.choice = false;
              }

              ; // ナイトの初期アニメーション

              _this.playerMinion2.list[0].play(_CST.CST.ANIMENGIHT.FRONT, true);

              _this.playerMinion2.list[1].play(_CST.CST.ANIMENGIHT.FRONTWAIT, true);

              _this.playerMinion2.btn.on("pointerdown", function () {
                _this.playerMinion2.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion1 !== undefined) {
                  _this.playerMinion1.choice = false;
                }

                ;

                if (_this.playerMinion3 !== undefined) {
                  _this.playerMinion3.choice = false;
                }

                ;

                if (_this.playerMinion4 !== undefined) {
                  _this.playerMinion4.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(false);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.playerMinionsGroup.add(_this.playerMinion2); // ゲーム画面のボタンデザインナイト


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(true);

              _this.dameIcon.setVisible(false);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;

            case 3:
              // ナイト
              _this.playerMinion3 = new classList.DefaultSummon('knight', _this, 344, 430, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion1 !== undefined) {
                _this.playerMinion1.choice = false;
              }

              ;

              if (_this.playerMinion2 !== undefined) {
                _this.playerMinion2.choice = false;
              }

              ;

              if (_this.playerMinion4 !== undefined) {
                _this.playerMinion4.choice = false;
              }

              ; // ナイトの初期アニメーション

              _this.playerMinion3.list[0].play(_CST.CST.ANIMENGIHT.FRONT, true);

              _this.playerMinion3.list[1].play(_CST.CST.ANIMENGIHT.FRONTWAIT, true);

              _this.playerMinion3.btn.on("pointerdown", function () {
                _this.playerMinion3.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion1 !== undefined) {
                  _this.playerMinion1.choice = false;
                }

                ;

                if (_this.playerMinion2 !== undefined) {
                  _this.playerMinion2.choice = false;
                }

                ;

                if (_this.playerMinion4 !== undefined) {
                  _this.playerMinion4.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(false);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.playerMinionsGroup.add(_this.playerMinion3); // ゲーム画面のボタンデザインナイト


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(true);

              _this.dameIcon.setVisible(false);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;

            case 4:
              _this.playerMinion4 = new classList.DefaultSummon('knight', _this, 430, 430, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion1 !== undefined) {
                _this.playerMinion1.choice = false;
              }

              ;

              if (_this.playerMinion2 !== undefined) {
                _this.playerMinion2.choice = false;
              }

              ;

              if (_this.playerMinion3 !== undefined) {
                _this.playerMinion3.choice = false;
              }

              ; // ナイトの初期アニメーション

              _this.playerMinion4.list[0].play(_CST.CST.ANIMENGIHT.FRONT, true);

              _this.playerMinion4.list[1].play(_CST.CST.ANIMENGIHT.FRONTWAIT, true);

              _this.playerMinion4.btn.on("pointerdown", function () {
                _this.playerMinion4.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion1 !== undefined) {
                  _this.playerMinion1.choice = false;
                }

                ;

                if (_this.playerMinion2 !== undefined) {
                  _this.playerMinion2.choice = false;
                }

                ;

                if (_this.playerMinion3 !== undefined) {
                  _this.playerMinion3.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(false);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.playerMinionsGroup.add(_this.playerMinion4); // ゲーム画面のボタンデザインナイト


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(true);

              _this.dameIcon.setVisible(false);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;
          }

          ;
        }

        ;
        _this.player.prohibitedArea = false;
      }); // デイムの召喚

      this.summonBtnDame.on("pointerdown", function () {
        // 召喚合計数が召喚上限に達していなければ実行
        if (_this.player.summonTotal < _this.stageData.playerSummonUpperLimit) {
          ++_this.player.summonTotal; // 召喚アニメーション

          _this.apprentice.play(_CST.CST.ANIMEAPPRENTICE.INTERSEPT1);

          switch (_this.player.summonTotal) {
            case 1:
              // type="knight"か"dame"を入れてください
              _this.playerMinion1 = new classList.DefaultSummon('dame', _this, 364, 400, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // デイムの初期アニメーション
              // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion2 !== undefined) {
                _this.playerMinion2.choice = false;
              }

              ;

              if (_this.playerMinion3 !== undefined) {
                _this.playerMinion3.choice = false;
              }

              ;

              if (_this.playerMinion4 !== undefined) {
                _this.playerMinion4.choice = false;
              }

              ;

              _this.playerMinion1.list[0].play(_CST.CST.ANIMEDAME.FRONT, true);

              _this.playerMinion1.list[1].play(_CST.CST.ANIMEDAME.FRONTARROWWAIT, true);

              _this.playerMinion1.btn.on("pointerdown", function () {
                _this.playerMinion1.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion2 !== undefined) {
                  _this.playerMinion2.choice = false;
                }

                ;

                if (_this.playerMinion3 !== undefined) {
                  _this.playerMinion3.choice = false;
                }

                ;

                if (_this.playerMinion4 !== undefined) {
                  _this.playerMinion4.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(true);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.physics.overlap(_this.playerMinion1);

              _this.playerMinionsGroup.add(_this.playerMinion1); // ゲーム画面のボタンデザインデイム


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(false);

              _this.dameIcon.setVisible(true);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;

            case 2:
              // デイム
              _this.playerMinion2 = new classList.DefaultSummon('dame', _this, 410, 400, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // デイムの初期アニメーション
              // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion2 !== undefined) {
                _this.playerMinion2.choice = false;
              }

              ;

              if (_this.playerMinion3 !== undefined) {
                _this.playerMinion3.choice = false;
              }

              ;

              if (_this.playerMinion4 !== undefined) {
                _this.playerMinion4.choice = false;
              }

              ; // デイムの初期アニメーション

              _this.playerMinion2.list[0].play(_CST.CST.ANIMEDAME.FRONT, true);

              _this.playerMinion2.list[1].play(_CST.CST.ANIMEDAME.FRONTARROWWAIT, true);

              _this.playerMinion2.btn.on("pointerdown", function () {
                _this.playerMinion2.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion1 !== undefined) {
                  _this.playerMinion1.choice = false;
                }

                ;

                if (_this.playerMinion3 !== undefined) {
                  _this.playerMinion3.choice = false;
                }

                ;

                if (_this.playerMinion4 !== undefined) {
                  _this.playerMinion4.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(true);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.playerMinionsGroup.add(_this.playerMinion2); // ゲーム画面のボタンデザインデイム


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(false);

              _this.dameIcon.setVisible(true);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;

            case 3:
              // デイム
              _this.playerMinion3 = new classList.DefaultSummon('dame', _this, 344, 430, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // デイムの初期アニメーション
              // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion1 !== undefined) {
                _this.playerMinion1.choice = false;
              }

              ;

              if (_this.playerMinion2 !== undefined) {
                _this.playerMinion2.choice = false;
              }

              ;

              if (_this.playerMinion4 !== undefined) {
                _this.playerMinion4.choice = false;
              }

              ; // デイムの初期アニメーション

              _this.playerMinion3.list[0].play(_CST.CST.ANIMEDAME.FRONT, true);

              _this.playerMinion3.list[1].play(_CST.CST.ANIMEDAME.FRONTARROWWAIT, true);

              _this.playerMinion3.btn.on("pointerdown", function () {
                _this.playerMinion3.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion1 !== undefined) {
                  _this.playerMinion1.choice = false;
                }

                ;

                if (_this.playerMinion2 !== undefined) {
                  _this.playerMinion2.choice = false;
                }

                ;

                if (_this.playerMinion4 !== undefined) {
                  _this.playerMinion4.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(true);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.playerMinionsGroup.add(_this.playerMinion3); // ゲーム画面のボタンデザインデイム


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(false);

              _this.dameIcon.setVisible(true);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;

            case 4:
              _this.playerMinion4 = new classList.DefaultSummon('dame', _this, 430, 430, [_this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS), _this.add.sprite(0, 0, _CST.CST.SPRITE.PLAYERMINIONS)]); // デイムの初期アニメーション
              // 初期選択

              if (_this.apprentice !== undefined) {
                _this.apprentice.choice = false;
              }

              ;

              if (_this.playerMinion1 !== undefined) {
                _this.playerMinion1.choice = false;
              }

              ;

              if (_this.playerMinion2 !== undefined) {
                _this.playerMinion2.choice = false;
              }

              ;

              if (_this.playerMinion3 !== undefined) {
                _this.playerMinion3.choice = false;
              }

              ; // デイムの初期アニメーション

              _this.playerMinion4.list[0].play(_CST.CST.ANIMEDAME.FRONT, true);

              _this.playerMinion4.list[1].play(_CST.CST.ANIMEDAME.FRONTARROWWAIT, true);

              _this.playerMinion4.btn.on("pointerdown", function () {
                _this.playerMinion4.choice = true;

                if (_this.apprentice !== undefined) {
                  _this.apprentice.choice = false;
                }

                ;

                if (_this.playerMinion1 !== undefined) {
                  _this.playerMinion1.choice = false;
                }

                ;

                if (_this.playerMinion2 !== undefined) {
                  _this.playerMinion2.choice = false;
                }

                ;

                if (_this.playerMinion3 !== undefined) {
                  _this.playerMinion3.choice = false;
                }

                ; // ゲーム画面のボタンデザインナイト

                _this.apprenticeIcon.setVisible(false);

                _this.knightIcon.setVisible(true);

                _this.dameIcon.setVisible(true);

                _this.summonBtnKnight.setVisible(false);

                _this.summonBtnDame.setVisible(false);
              });

              _this.playerMinionsGroup.add(_this.playerMinion4); // ゲーム画面のボタンデザインデイム


              _this.apprenticeIcon.setVisible(false);

              _this.knightIcon.setVisible(false);

              _this.dameIcon.setVisible(true);

              _this.summonBtnKnight.setVisible(false);

              _this.summonBtnDame.setVisible(false);

              break;
          }

          ;
        }

        ;
        _this.player.prohibitedArea = false;
      }); // スキルを発動

      this.skillBtn.on("pointerdown", function () {
        // 主人公のボタンか
        if (_this.apprentice.choice !== undefined && _this.apprentice.choice === true) {
          _this.apprentice.skillActivation = true;
          _this.apprenticeSkill = _this.physics.add.sprite(300, 270, _CST.CST.SPRITE.APPRENTICESKILL).play(_CST.CST.ANIMEFECTS.PLAYERSKILL).setDepth(-1).setOrigin(0).setScale(1.3); // スキルアニメーション

          _this.apprentice.play(_CST.CST.ANIMEAPPRENTICE.INTERSEPT2); // 見習いスキルと敵の衝突


          _this.physics.add.overlap(_this.apprenticeSkill, _this.enemyMinions, function (apprenticeSkill, minion) {
            // デスエフェクト
            var rockSpiderDeath = _this.physics.add.sprite(minion.x + 16, minion.y + 16, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.DEATH, true);

            rockSpiderDeath.on("animationcomplete", function () {
              rockSpiderDeath.destroy();
            });
            minion.destroy();
          });

          _this.physics.add.overlap(_this.apprenticeSkill, _this.enemyBossGroup, function (apprenticeSkill, enemyBoss) {
            if (enemyBoss.hp > 0) {
              enemyBoss.hp = enemyBoss.hp - _this.apprentice.skillDamage;
              enemyBoss.enemyHpBar.clear().fillRect(-15, -20, enemyBoss.hp, 2);
            }
          });
        }

        ; // どのミニオンか

        if (_this.playerMinion1 !== undefined && _this.playerMinion1.choice === true) {
          _this.playerMinion1.skillActivation = true;
        }

        ;

        if (_this.playerMinion2 !== undefined && _this.playerMinion2.choice === true) {
          _this.playerMinion2.skillActivation = true;
        }

        ;

        if (_this.playerMinion3 !== undefined && _this.playerMinion3.choice === true) {
          _this.playerMinion3.skillActivation = true;
        }

        ;

        if (_this.playerMinion4 !== undefined && _this.playerMinion4.choice === true) {
          _this.playerMinion4.skillActivation = true;
        }

        ;
        _this.player.prohibitedArea = false;

        _this.skillBtn.setVisible(false); // スキルを再度使うときは時間をあける


        var skillTimer = _this.time.addEvent({
          delay: 5000,
          loop: true
        });

        skillTimer.callback = function () {
          _this.skillBtn.setVisible(true);

          skillTimer.destroy();
        };
      }); // マウス、タッチ操作でプレイヤーミニオンを動かす
      // 動く先を作成
      // 画面を押したときの操作

      this.input.on("pointerdown", function (pointer) {
        // アイコンをポイント禁止エリアにする
        _this.apprenticeIcon.on("pointerdown", function () {
          _this.player.prohibitedArea = false;
        });

        _this.knightIcon.on("pointerdown", function () {
          _this.player.prohibitedArea = false;
        });

        _this.dameIcon.on("pointerdown", function () {
          _this.player.prohibitedArea = false;
        });

        prohibitedBtn.on("pointerdown", function () {
          _this.player.prohibitedArea = false;
        }); // 禁止エリアでないかどうかを確認

        if (_this.player.prohibitedArea === true) {
          // 一体目であれば
          if (_this.playerMinion1 !== undefined && _this.playerMinion1.choice === true) {
            // 初期設定
            if (_this.point1 !== undefined) {
              _this.point1.destroy();
            }

            ; // ポインターを描画

            _this.point1 = _this.add.image(pointer.x, pointer.y, _CST.CST.IMAGE.POINTER);

            _this.physics.moveToObject(_this.playerMinion1.collision, _this.point1, _this.playerMinion1.moveSpeed);

            _this.playerMinion1.pointMove = true;

            _this.physics.world.enable(_this.point1);

            _this.physics.add.overlap(_this.playerMinion1.collision, _this.point1, function () {
              _this.playerMinion1.collision.setVelocity(0);

              _this.point1.destroy();

              _this.playerMinion1.pointMove = false;
            });
          }

          ; // 二体目であれば

          if (_this.playerMinion2 !== undefined && _this.playerMinion2.choice === true) {
            // 初期設定
            if (_this.point2 !== undefined) {
              _this.point2.destroy();
            }

            ; // ポインターを描画

            _this.point2 = _this.add.image(pointer.x, pointer.y, _CST.CST.IMAGE.POINTER);

            _this.physics.moveToObject(_this.playerMinion2.collision, _this.point2, _this.playerMinion2.moveSpeed);

            _this.playerMinion2.pointMove = true;

            _this.physics.world.enable(_this.point2);

            _this.physics.add.overlap(_this.playerMinion2.collision, _this.point2, function () {
              _this.playerMinion2.collision.setVelocity(0);

              _this.point2.destroy();

              _this.playerMinion2.pointMove = false;
            });
          }

          ; // 三体目であれば

          if (_this.playerMinion3 !== undefined && _this.playerMinion3.choice === true) {
            // 初期設定
            if (_this.point3 !== undefined) {
              _this.point3.destroy();
            }

            ; // ポインターを描画

            _this.point3 = _this.add.image(pointer.x, pointer.y, _CST.CST.IMAGE.POINTER);

            _this.physics.moveToObject(_this.playerMinion3.collision, _this.point3, _this.playerMinion3.moveSpeed);

            _this.playerMinion3.pointMove = true;

            _this.physics.world.enable(_this.point3);

            _this.physics.add.overlap(_this.playerMinion3.collision, _this.point3, function () {
              _this.playerMinion3.collision.setVelocity(0);

              _this.point3.destroy();

              _this.playerMinion3.pointMove = false;
            });
          }

          ; // 四体目であれば

          if (_this.playerMinion4 !== undefined && _this.playerMinion4.choice === true) {
            // 初期設定
            if (_this.point4 !== undefined) {
              _this.point4.destroy();
            }

            ; // ポインターを描画

            _this.point4 = _this.add.image(pointer.x, pointer.y, _CST.CST.IMAGE.POINTER);

            _this.physics.moveToObject(_this.playerMinion4.collision, _this.point4, _this.playerMinion4.moveSpeed);

            _this.playerMinion4.pointMove = true;

            _this.physics.world.enable(_this.point4);

            _this.physics.add.overlap(_this.playerMinion4.collision, _this.point4, function () {
              _this.playerMinion4.collision.setVelocity(0);

              _this.point4.destroy();

              _this.playerMinion4.pointMove = false;
            });
          }

          ;
        }

        ;
        _this.player.prohibitedArea = true;
      }); // マップ表示

      var mapsStage1 = this.add.tilemap("mapStage1");
      var maps = mapsStage1.addTilesetImage("maptexture", "mapPng"); // マップレイヤーを表示

      this.colliedLayer = mapsStage1.createStaticLayer("collision", [maps], 0, 0).setCollisionByProperty({
        collision: true
      }).setDepth(-4);
      mapsStage1.createStaticLayer("tree_1", [maps], 0, 0).setDepth(1);
      mapsStage1.createStaticLayer("tree_2", [maps], 0, 0).setDepth(1);
      mapsStage1.createStaticLayer("under", [maps], 0, 0).setDepth(-1);
      mapsStage1.createStaticLayer("under2", [maps], 0, 0).setDepth(-1); // 追加でポイントを作らない場所を作成

      var prohibitedBtn = this.physics.add.image(630, 480, _CST.CST.IMAGE.COLLISION).setScale(35, 8).setInteractive().setAlpha(0.001); // 敵グループの作成

      this.enemyMinions = this.physics.add.group(); // // ボスのグループ化

      this.enemyBossGroup = this.physics.add.group(); // ボスグループのプロパティ

      if (this.stageData.witch === false) {
        this.enemyBossGroup.summon = false;

        for (var i = 0; i < this.stageData.enemyBossMany; i++) {
          var xPosition = 0;
          var yPosition = 0;

          switch (i) {
            case 0:
              xPosition = 384;
              yPosition = 32;
              break;

            case 1:
              xPosition = 100;
              yPosition = 200;
              break;

            case 2:
              xPosition = 608;
              yPosition = 200;
              break;

            default:
              break;
          }

          this.enemyBoss = new classList.SummonBoss(this, xPosition, yPosition, _CST.CST.SPRITE.ENEMYBOSS, "golem");
          this.enemyBossGroup.add(this.enemyBoss);
          this.enemyBossGroup.getChildren()[i].setImmovable(true); // 敵ボスと神樹の衝突

          this.physics.add.collider(this.enemyBossGroup.getChildren()[i], this.sacredTree, function (enemyBossGroup) {
            enemyBossGroup.play(_CST.CST.ANIMEGOLEM.FRONTATTACK, true);
            enemyBossGroup.collision.setVelocity(0); // 断続的にダメージが入るように

            if (_this.player.hp > 0) {
              _this.player.hp = _this.player.hp - enemyBossGroup.attackDamage;

              _this.playerHpBar.clear().fillRect(369, 280, _this.player.hp, 4);
            }
          });
        } // ゴーレムの召喚時間


        this.golemTime = 30000;
      }

      ;

      if (this.stageData.witch === true) {
        this.witch = new classList.witchClass(this, 384, 32, _CST.CST.SPRITE.ENEMYBOSS);
        this.witch.setImmovable(true);
        var timer = this.time.addEvent({
          delay: 15000,
          loop: true
        }); //ウィッチの移動

        timer.callback = function () {
          // ウィッチ
          // 移動
          if (_this.witch.hp >= 0) {
            _this.witch.setVisible(false);

            var witchMove = _this.physics.add.sprite(_this.witch.x, _this.witch.y, _CST.CST.SPRITE.ENEMYBOSS);

            if (_this.witch.direction === "front") {
              witchMove.play(_CST.CST.ANIMEWITCH.FRONTMOVE, true);
            } else if (_this.witch.direction === "right") {
              witchMove.play(_CST.CST.ANIMEWITCH.RIGHTMOVE, true);
            } else if (_this.witch.direction === "left") {
              witchMove.play(_CST.CST.ANIMEWITCH.LEFTMOVE, true);
            }

            ;
            witchMove.on("animationcomplete", function () {
              witchMove.destroy(); // ランダム数を作成

              var random = Math.floor(Math.random() * 6);

              switch (random) {
                case 1:
                  _this.witch.setPosition(_this.witch.movePoint[0][0], _this.witch.movePoint[0][1]);

                  _this.witch.direction = "front";
                  break;

                case 2:
                  _this.witch.setPosition(_this.witch.movePoint[1][0], _this.witch.movePoint[1][1]);

                  _this.witch.direction = "right";
                  break;

                case 3:
                  _this.witch.setPosition(_this.witch.movePoint[2][0], _this.witch.movePoint[2][1]);

                  _this.witch.direction = "left";
                  break;

                case 4:
                  _this.witch.setPosition(_this.witch.movePoint[3][0], _this.witch.movePoint[3][1]);

                  _this.witch.direction = "front";
                  break;

                case 5:
                  _this.witch.setPosition(_this.witch.movePoint[4][0], _this.witch.movePoint[4][1]);

                  _this.witch.direction = "front";
                  break;

                default:
                  break;
              }

              ;

              var witchMoveArrival = _this.physics.add.sprite(_this.witch.x, _this.witch.y, _CST.CST.SPRITE.ENEMYBOSS);

              if (_this.witch.direction === "front") {
                witchMoveArrival.play(_CST.CST.ANIMEWITCH.FRONTMOVEARRIVAL, true);
              } else if (_this.witch.direction === "right") {
                witchMoveArrival.play(_CST.CST.ANIMEWITCH.RIGHTMOVEARRIVAL, true);
              } else if (_this.witch.direction === "left") {
                witchMoveArrival.play(_CST.CST.ANIMEWITCH.LEFTMOVEARRIVAL, true);
              }

              ;
              witchMoveArrival.on("animationcomplete", function () {
                witchMoveArrival.destroy();

                _this.witch.setVisible(true);

                if (_this.witch.direction === "front") {
                  _this.witch.play(_CST.CST.ANIMEWITCH.FRONT, true);
                } else if (_this.witch.direction === "right") {
                  _this.witch.play(_CST.CST.ANIMEWITCH.RIGHT, true);
                } else if (_this.witch.direction === "left") {
                  _this.witch.play(_CST.CST.ANIMEWITCH.LEFT, true);
                }

                ;
              });
            });
          }

          ;
        }; // ゴーレムの召喚時間


        this.golemTime = 15000;
      }

      ;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      var _loop = function _loop(i) {
        if (_this2.enemyBossGroup.getChildren()[i] !== undefined) {
          // ボスの設定
          _this2.enemyBossGroup.getChildren()[i].setPosition(_this2.enemyBossGroup.getChildren()[i].collision.x, _this2.enemyBossGroup.getChildren()[i].collision.y);

          _this2.enemyBossGroup.getChildren()[i].enemyHpBar.setPosition(_this2.enemyBossGroup.getChildren()[i].collision.x, _this2.enemyBossGroup.getChildren()[i].collision.y);

          if (_this2.enemyBossGroup.getChildren()[i].hp <= 0) {
            _this2.enemyBossGroup.getChildren()[i].summoneffect.destroy();

            _this2.enemyBossGroup.getChildren()[i].collision.destroy(); // ゴーレム破壊アニメーションは別に作成しておく


            golemDestory = _this2.add.sprite(_this2.enemyBossGroup.getChildren()[i].x, _this2.enemyBossGroup.getChildren()[i].y, _CST.CST.SPRITE.ENEMYBOSS).play(_CST.CST.ANIMEGOLEM.FRONTDESTORY);
            golemDestory.on("animationcomplete", function () {
              golemDestory.destroy();
            }); // 敵ボス倒れたときにプレイヤーミニオンが追っていたら動かなくする

            _this2.physics.add.overlap(_this2.enemyBossGroup.getChildren()[i].collision, _this2.playerMinionsGroup.attackZone, function () {
              _this2.playerMinionsGroup.getChildren()[i].collision.setVelocity(0);
            });

            _this2.enemyBossGroup.getChildren()[i].destroy();
          }

          ;

          if (_this2.enemyBossGroup.active === true) {
            if (_this2.enemyBossGroup.summon === false) {
              // ボスが移動し始めたらザコが出ないように（一回のみ）
              // どのくらいの時間でボスが動きはじめるか30秒
              _this2.time.delayedCall(_this2.golemTime, function () {
                if (_this2.enemyBossGroup.getChildren()[i] !== undefined) {
                  _this2.enemyBossGroup.getChildren()[i].summoneffect.setVisible(false);

                  _this2.enemyBossGroup.getChildren()[i].clearTint(); // ゴーレムの移動


                  _this2.physics.moveToObject(_this2.enemyBossGroup.getChildren()[i].collision, _this2.sacredTree, 20); // ゴーレムのアニメーション


                  if (_this2.enemyBossGroup.getChildren()[i].collision.body.velocity.angle() > 1 && _this2.enemyBossGroup.getChildren()[i].collision.body.velocity.angle() < 2) {
                    _this2.enemyBossGroup.getChildren()[i].play(_CST.CST.ANIMEGOLEM.FRONT, true);
                  } else if (_this2.enemyBossGroup.getChildren()[i].collision.body.velocity.angle() > 2 && _this2.enemyBossGroup.getChildren()[i].collision.body.velocity.angle() < 4) {
                    _this2.enemyBossGroup.getChildren()[i].play(_CST.CST.ANIMEGOLEM.LEFT, true);
                  } else if (_this2.enemyBossGroup.getChildren()[i].collision.body.velocity.angle() > 4 && _this2.enemyBossGroup.getChildren()[i].collision.body.velocity.angle() < 5) {
                    _this2.enemyBossGroup.getChildren()[i].play(_CST.CST.ANIMEGOLEM.BACK, true);
                  } else if (_this2.enemyBossGroup.getChildren()[i].collision.body.velocity.angle() !== 0) {
                    _this2.enemyBossGroup.getChildren()[i].play(_CST.CST.ANIMEGOLEM.RIGHT, true);
                  }

                  ;
                }

                ;
              });

              if (i === _this2.enemyBossGroup.getChildren().length - 1) {
                _this2.enemyBossGroup.summon = true;
              }

              ;
            }

            ;
          }

          ;
        }
      };

      // ボスのＨＰのどれかが0になったら
      for (var i = 0; i < this.enemyBossGroup.getChildren().length; i++) {
        var golemDestory;

        _loop(i);
      }

      ; // 見習いのスキル発動

      if (this.apprentice.skillActivation === true) {
        this.apprentice.skillActivation = false;
        this.time.delayedCall(5000, function () {
          _this2.apprenticeSkill.destroy(); // スキル終了後アニメーションを戻す


          _this2.apprentice.play(_CST.CST.ANIMEAPPRENTICE.IDRING);
        }, [], null);
      }

      ; // プレイヤーミニオンのアニメーション

      var _loop2 = function _loop2(_i) {
        _this2.playerMinionsGroup.getChildren()[_i].setPosition(_this2.playerMinionsGroup.getChildren()[_i].collision.x, _this2.playerMinionsGroup.getChildren()[_i].collision.y);

        _this2.playerMinionsGroup.getChildren()[_i].attackZone.setPosition(_this2.playerMinionsGroup.getChildren()[_i].collision.x, _this2.playerMinionsGroup.getChildren()[_i].collision.y);

        _this2.playerMinionsGroup.getChildren()[_i].skillEffect.setPosition(_this2.playerMinionsGroup.getChildren()[_i].collision.x, _this2.playerMinionsGroup.getChildren()[_i].collision.y);

        _this2.playerMinionsGroup.getChildren()[_i].attackZoneCircle.setPosition(_this2.playerMinionsGroup.getChildren()[_i].collision.x, _this2.playerMinionsGroup.getChildren()[_i].collision.y);

        if (_this2.playerMinionsGroup.getChildren()[_i].swordAtack !== undefined) {
          _this2.playerMinionsGroup.getChildren()[_i].swordAtack.setPosition(_this2.playerMinionsGroup.getChildren()[_i].collision.x, _this2.playerMinionsGroup.getChildren()[_i].collision.y);
        }

        _this2.playerMinionsGroup.getChildren()[_i].btn.setPosition(_this2.playerMinionsGroup.getChildren()[_i].collision.x, _this2.playerMinionsGroup.getChildren()[_i].collision.y); // ナイトのアニメーション


        if (_this2.playerMinionsGroup.getChildren()[_i].type === "knight") {
          if (_this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyMinions) === true || _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].swordAtack, _this2.enemyBoss) === true) {
            if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 1 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 2) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.FRONT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.FRONTATTACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 2 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 4) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.LEFT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.LEFTATTACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 4 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 5) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.BACKATTACK, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.BACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() !== 0) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.RIGHT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.RIGHTATTACK, true);
            }
          } else {
            if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 1 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 2) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.FRONT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.FRONTWAIT, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 2 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 4) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.LEFT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.LEFTWAIT, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 4 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 5) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.BACKWAIT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.BACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() !== 0) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMENGIHT.RIGHT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMENGIHT.RIGHTWAIT, true);
            }
          }

          ;
        }

        ; // デイムのアニメーション

        if (_this2.playerMinionsGroup.getChildren()[_i].type === "dame") {
          if (_this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyMinions) !== true && _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyBoss) !== true) {
            if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 1 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 2) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.FRONT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.FRONTARROWWAIT, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 2 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 4) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.LEFT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.LEFTARROWWAIT, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 4 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 5) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.BACKARROWWAIT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.BACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() !== 0) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.RIGHT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.RIGHTARROWWAIT, true);
            }
          } else {
            // 矢を使うアニメーション
            if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 1 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 2) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.FRONT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.FRONTARROWATTACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 2 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 4) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.LEFT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.LEFTARROWATTACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() > 4 && _this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() < 5) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.BACKARROWATTACK, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.BACK, true);
            } else if (_this2.playerMinionsGroup.getChildren()[_i].collision.body.velocity.angle() !== 0) {
              _this2.playerMinionsGroup.getChildren()[_i].list[0].play(_CST.CST.ANIMEDAME.RIGHT, true);

              _this2.playerMinionsGroup.getChildren()[_i].list[1].play(_CST.CST.ANIMEDAME.RIGHTARROWATTACK, true);
            }

            ;
          }

          ;
        }

        ; // コリジョンレイヤーとミニオンの衝突したら縦横に避けるように

        _this2.physics.add.collider(_this2.playerMinionsGroup.getChildren()[_i].collision, _this2.colliedLayer, function (minion, colliedLayer) {
          if (minion.body.velocity.x === 0) {
            if (minion.body.velocity.y < 0) {
              minion.setVelocityY(-30);
            } else {
              minion.setVelocityY(30);
            }

            ;
          } else if (minion.body.velocity.y === 0) {
            if (minion.body.velocity.x < 0) {
              minion.setVelocityX(-30);
            } else {
              minion.setVelocityX(30);
            }

            ;
          }

          ;

          _this2.time.delayedCall(1000, function () {
            if (_this2.playerMinionsGroup.getChildren()[_i] === _this2.playerMinionsGroup.getChildren()[0]) {
              if (_this2.point1.active === true) {
                _this2.physics.moveToObject(minion, _this2.point1, _this2.playerMinionsGroup.getChildren()[_i].moveSpeed);
              }

              ;
            } else if (_this2.playerMinionsGroup.getChildren()[_i] === _this2.playerMinionsGroup.getChildren()[1]) {
              if (_this2.point2.active === true) {
                _this2.physics.moveToObject(minion, _this2.point2, _this2.playerMinionsGroup.getChildren()[_i].moveSpeed);
              }

              ;
            } else if (_this2.playerMinionsGroup.getChildren()[_i] === _this2.playerMinionsGroup.getChildren()[2]) {
              if (_this2.point3.active === true) {
                _this2.physics.moveToObject(minion, _this2.point3, _this2.playerMinionsGroup.getChildren()[_i].moveSpeed);
              }

              ;
            } else if (_this2.playerMinionsGroup.getChildren()[_i] === _this2.playerMinionsGroup.getChildren()[3]) {
              if (_this2.point4.active === true) {
                _this2.physics.moveToObject(minion, _this2.point4, _this2.playerMinionsGroup.getChildren()[_i].moveSpeed);
              }

              ;
            }
          });
        }); // デイムの敵への攻撃


        if (_this2.playerMinionsGroup.getChildren()[_i].type === "dame") {
          // デイムスキル発動時
          if (_this2.playerMinionsGroup.getChildren()[_i].skillActivation === true) {
            _this2.playerMinionsGroup.getChildren()[_i].attackZone.body.setCircle(140).setOffset(-140, -140);

            _this2.playerMinionsGroup.getChildren()[_i].skillEffect.setVisible(true);

            _this2.playerMinionsGroup.getChildren()[_i].attackZoneCircle.setScale(2); // スキル削除


            _this2.time.delayedCall(5000, function () {
              _this2.playerMinionsGroup.getChildren()[_i].skillActivation = false;

              _this2.playerMinionsGroup.getChildren()[_i].skillEffect.setVisible(false);

              _this2.playerMinionsGroup.getChildren()[_i].attackZone.body.setCircle(70).setOffset(-70, -70);

              _this2.playerMinionsGroup.getChildren()[_i].attackZoneCircle.setScale(1);
            }, [], null);
          }

          ; // デイム移動中は攻撃しないように

          if (_this2.playerMinionsGroup.getChildren()[_i].pointMove === false) {
            _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyMinions, function (attackZone, minion) {
              if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack === true) {
                var arrow = _this2.physics.add.image(attackZone.x, attackZone.y, _CST.CST.IMAGE.ARROW);

                _this2.physics.moveToObject(arrow, minion, 150);

                _this2.playerMinionsGroup.getChildren()[_i].arrowAtack = false;
                _this2.playerMinionsGroup.getChildren()[_i].atackTime = false; // アローと敵の衝突

                _this2.physics.add.collider(arrow, minion, function () {
                  arrow.destroy(); // デスエフェクト

                  var rockSpiderDeath = _this2.physics.add.sprite(minion.x + 16, minion.y + 16, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.DEATH, true);

                  rockSpiderDeath.on("animationcomplete", function () {
                    rockSpiderDeath.destroy();
                  });
                  minion.destroy();
                });
              }

              ;
            }); // デイムのボスへの攻撃


            _this2.physics.collide(_this2.playerMinionsGroup.getChildren()[_i].collision, _this2.enemyBossGroup, function (dame, enemyBoss) {
              dame.setVelocity(0);
            }); // ボスゴーレム１に対して


            if (_this2.enemyBossGroup.getChildren()[0] !== undefined) {
              _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyBossGroup.getChildren()[0], function (attackZone, enemyBoss) {
                if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack === true) {
                  var arrow = _this2.physics.add.image(attackZone.x, attackZone.y, _CST.CST.IMAGE.ARROW);

                  _this2.physics.moveToObject(arrow, enemyBoss, 150);

                  _this2.playerMinionsGroup.getChildren()[_i].arrowAtack = false;
                  _this2.playerMinionsGroup.getChildren()[_i].atackTime = false; // アローと敵の衝突

                  _this2.physics.add.collider(arrow, enemyBoss, function () {
                    arrow.destroy();

                    if (_this2.enemyBossGroup.getChildren()[0].hp > 0) {
                      _this2.enemyBossGroup.getChildren()[0].hp = _this2.enemyBossGroup.getChildren()[0].hp - _this2.playerMinionsGroup.getChildren()[_i].dameAttackDamage;

                      _this2.enemyBossGroup.getChildren()[0].enemyHpBar.clear().fillRect(-15, -20, _this2.enemyBossGroup.getChildren()[0].hp, 2);
                    }
                  });
                }
              });
            }

            ; // ボスゴーレム2に対して

            if (_this2.enemyBossGroup.getChildren()[1] !== undefined) {
              _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyBossGroup.getChildren()[1], function (attackZone, enemyBoss) {
                if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack === true) {
                  var arrow = _this2.physics.add.image(attackZone.x, attackZone.y, _CST.CST.IMAGE.COLLISION);

                  _this2.physics.moveToObject(arrow, enemyBoss, 150);

                  _this2.playerMinionsGroup.getChildren()[_i].arrowAtack = false;
                  _this2.playerMinionsGroup.getChildren()[_i].atackTime = false; // アローと敵の衝突

                  _this2.physics.add.collider(arrow, enemyBoss, function () {
                    arrow.destroy();

                    if (_this2.enemyBossGroup.getChildren()[1].hp > 0) {
                      _this2.enemyBossGroup.getChildren()[1].hp = _this2.enemyBossGroup.getChildren()[1].hp - _this2.playerMinionsGroup.getChildren()[_i].dameAttackDamage;

                      _this2.enemyBossGroup.getChildren()[1].enemyHpBar.clear().fillRect(-15, -20, _this2.enemyBossGroup.getChildren()[1].hp, 2);
                    }
                  });
                }
              });
            }

            ; // ボスゴーレム3に対して

            if (_this2.enemyBossGroup.getChildren()[2] !== undefined) {
              _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyBossGroup.getChildren()[2], function (attackZone, enemyBoss) {
                if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack === true) {
                  var arrow = _this2.physics.add.image(attackZone.x, attackZone.y, _CST.CST.IMAGE.ARROW);

                  _this2.physics.moveToObject(arrow, enemyBoss, 150);

                  _this2.playerMinionsGroup.getChildren()[_i].arrowAtack = false;
                  _this2.playerMinionsGroup.getChildren()[_i].atackTime = false; // アローと敵の衝突

                  _this2.physics.add.collider(arrow, enemyBoss, function () {
                    arrow.destroy();

                    if (_this2.enemyBossGroup.getChildren()[2].hp > 0) {
                      _this2.enemyBossGroup.getChildren()[2].hp = _this2.enemyBossGroup.getChildren()[2].hp - _this2.playerMinionsGroup.getChildren()[_i].dameAttackDamage;

                      _this2.enemyBossGroup.getChildren()[2].enemyHpBar.clear().fillRect(-15, -20, _this2.enemyBossGroup.getChildren()[2].hp, 2);
                    }
                  });
                }
              });
            }

            ; // 魔女に対して

            if (_this2.stageData.witch === true) {
              _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.witch, function (attackZone, witch) {
                if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack === true) {
                  var arrow = _this2.physics.add.image(attackZone.x, attackZone.y, _CST.CST.IMAGE.ARROW);

                  _this2.physics.moveToObject(arrow, witch, 150);

                  _this2.playerMinionsGroup.getChildren()[_i].arrowAtack = false;
                  _this2.playerMinionsGroup.getChildren()[_i].atackTime = false; // アローと敵の衝突

                  _this2.physics.add.collider(arrow, witch, function () {
                    arrow.destroy();

                    if (_this2.witch.hp > 0) {
                      _this2.witch.hp = _this2.witch.hp - _this2.playerMinionsGroup.getChildren()[_i].dameAttackDamage;

                      _this2.witch.enemyHpBar.clear().fillRect(-15, -20, _this2.witch.hp, 2);
                    }
                  });
                }
              });
            }
          }

          ; // デイムスキル発動時

          if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack === false && _this2.playerMinionsGroup.getChildren()[_i].atackTime === false) {
            if (_this2.playerMinionsGroup.getChildren()[_i].skillActivation === true) {
              _this2.time.delayedCall(200, function () {
                if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack !== undefined) {
                  _this2.playerMinionsGroup.getChildren()[_i].arrowAtack = true;
                }
              }, [], null);
            } // スキル発動してないとき
            else if (_this2.playerMinionsGroup.getChildren()[_i].skillActivation === false) {
                _this2.time.delayedCall(2000, function () {
                  if (_this2.playerMinionsGroup.getChildren()[_i].arrowAtack !== undefined) {
                    _this2.playerMinionsGroup.getChildren()[_i].arrowAtack = true;
                  }
                }, [], null);
              }

            _this2.playerMinionsGroup.getChildren()[_i].atackTime = true;
          }

          ;
        } // ナイトの敵への攻撃
        else if (_this2.playerMinionsGroup.getChildren()[_i].type === "knight") {
            // ナイトスキル発動時
            if (_this2.playerMinionsGroup.getChildren()[_i].skillActivation === true) {
              _this2.playerMinionsGroup.getChildren()[_i].moveSpeed = 200;

              _this2.playerMinionsGroup.getChildren()[_i].skillEffect.setVisible(true); // スキル削除


              _this2.time.delayedCall(5000, function () {
                _this2.playerMinionsGroup.getChildren()[_i].skillActivation = false;
                _this2.playerMinionsGroup.getChildren()[_i].moveSpeed = 50;

                _this2.playerMinionsGroup.getChildren()[_i].skillEffect.setVisible(false);
              }, [], null);
            }

            ;

            if (_this2.playerMinionsGroup.getChildren()[_i].pointMove === false) {
              _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyMinions, function (attackZone, minion) {
                // 同時に移動が出来るように
                _this2.physics.moveToObject(_this2.playerMinionsGroup.getChildren()[_i].collision, minion, _this2.playerMinionsGroup.getChildren()[_i].moveSpeed);

                _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].swordAtack, minion, function (knight) {
                  // デスエフェクト
                  var rockSpiderDeath = _this2.physics.add.sprite(minion.x + 16, minion.y + 16, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.DEATH, true);

                  rockSpiderDeath.on("animationcomplete", function () {
                    rockSpiderDeath.destroy();
                  });
                  minion.destroy();

                  _this2.playerMinionsGroup.getChildren()[_i].collision.setVelocity(0); // 同時に敵を攻撃した場合はもう一体が止まるように


                  var _loop6 = function _loop6(k) {
                    _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.playerMinionsGroup.getChildren()[k].collision, function () {
                      _this2.playerMinionsGroup.getChildren()[k].collision.setVelocity(0);
                    });
                  };

                  for (var k = 0; k < _this2.playerMinionsGroup.getChildren().length; k++) {
                    _loop6(k);
                  }

                  ;
                }); //敵ミニオンが0になった時にも動かないように


                if (_this2.enemyMinions.getChildren().length === 0) {
                  _this2.playerMinionsGroup.getChildren()[_i].collision.setVelocity(0);
                }

                ; // 敵ミニオンが木を攻撃した時に、プレイヤーミニオンが追っていたら動かなくする

                _this2.physics.add.collider(_this2.sacredTree, _this2.enemyMinions, function () {
                  _this2.playerMinionsGroup.getChildren()[_i].collision.setVelocity(0);
                });
              }); // ボスに対して


              var _loop7 = function _loop7(l) {
                // ボスに到達したらポイントを削除
                _this2.physics.collide(_this2.playerMinionsGroup.getChildren()[_i].collision, _this2.enemyBossGroup.getChildren()[l]);

                if (_this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].swordAtack, _this2.enemyBossGroup) === false) {
                  _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.enemyBossGroup.getChildren()[l], function () {
                    _this2.physics.moveToObject(_this2.playerMinionsGroup.getChildren()[_i].collision, _this2.enemyBossGroup.getChildren()[l]);
                  });
                } // オーバーラップ時はknightAtackTimeをtrueにするアニメーション用


                if (_this2.playerMinionsGroup.getChildren()[_i].knightAtackTime === false) {
                  _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].swordAtack, _this2.enemyBossGroup.getChildren()[l], function (playerMinion, enemyBoss) {
                    if (_this2.playerMinionsGroup.getChildren()[0].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point1 !== undefined) {
                        _this2.point1.destroy();
                      }

                      ;
                    } else if (_this2.playerMinionsGroup.getChildren()[1].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point2 !== undefined) {
                        _this2.point2.destroy();
                      }

                      ;
                    } else if (_this2.playerMinionsGroup.getChildren()[2].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point3 !== undefined) {
                        _this2.point3.destroy();
                      }

                      ;
                    } else if (_this2.playerMinionsGroup.getChildren()[3].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point4 !== undefined) {
                        _this2.point4.destroy();
                      }

                      ;
                    }

                    ;

                    _this2.playerMinionsGroup.getChildren()[_i].collision.setVelocity(0);

                    if (_this2.enemyBossGroup.getChildren()[l].hp >= 0) {
                      _this2.enemyBossGroup.getChildren()[l].hp = _this2.enemyBossGroup.getChildren()[l].hp - _this2.playerMinionsGroup.getChildren()[_i].knightAttackDamage;

                      _this2.enemyBossGroup.getChildren()[l].enemyHpBar.clear().fillRect(-15, -20, _this2.enemyBossGroup.getChildren()[l].hp, 2);
                    }

                    ;
                    _this2.playerMinionsGroup.getChildren()[_i].knightAtackTime = true;
                  });
                } else {
                  _this2.playerMinionsGroup.getChildren()[_i].knightAtackTime = false;
                }

                ;
              };

              for (var l = 0; l < _this2.enemyBossGroup.getChildren().length; l++) {
                _loop7(l);
              }

              ; // 魔女に対して

              if (_this2.stageData.witch === true) {
                _this2.physics.collide(_this2.playerMinionsGroup.getChildren()[_i].collision, _this2.witch);

                if (_this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].swordAtack, _this2.witch) === false) {
                  _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].attackZone, _this2.witch, function () {
                    _this2.physics.moveToObject(_this2.playerMinionsGroup.getChildren()[_i].collision, _this2.witch);
                  });
                } // オーバーラップ時はknightAtackTimeをtrueにするアニメーション用


                if (_this2.playerMinionsGroup.getChildren()[_i].knightAtackTime === false) {
                  _this2.physics.overlap(_this2.playerMinionsGroup.getChildren()[_i].swordAtack, _this2.witch, function () {
                    if (_this2.playerMinionsGroup.getChildren()[0].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point1 !== undefined) {
                        _this2.point1.destroy();
                      }

                      ;
                    } else if (_this2.playerMinionsGroup.getChildren()[1].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point2 !== undefined) {
                        _this2.point2.destroy();
                      }

                      ;
                    } else if (_this2.playerMinionsGroup.getChildren()[2].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point3 !== undefined) {
                        _this2.point3.destroy();
                      }

                      ;
                    } else if (_this2.playerMinionsGroup.getChildren()[3].swordAtack === _this2.playerMinionsGroup.getChildren()[_i].swordAtack) {
                      if (_this2.point4 !== undefined) {
                        _this2.point4.destroy();
                      }

                      ;
                    }

                    ;

                    _this2.playerMinionsGroup.getChildren()[_i].collision.setVelocity(0);

                    if (_this2.witch.hp >= 0) {
                      _this2.witch.hp = _this2.witch.hp - _this2.playerMinionsGroup.getChildren()[_i].knightAttackDamage;

                      _this2.witch.enemyHpBar.clear().fillRect(-15, -20, _this2.witch.hp, 2);
                    }

                    ;
                    _this2.playerMinionsGroup.getChildren()[_i].knightAtackTime = true;
                  });
                } else {
                  _this2.playerMinionsGroup.getChildren()[_i].knightAtackTime = false;
                }

                ;
              }

              ;
            }

            ;
          }

        ;
      };

      for (var _i = 0; _i < this.playerMinionsGroup.getChildren().length; _i++) {
        _loop2(_i);
      }

      ;

      for (var _i2 = 0; _i2 < this.enemyBossGroup.getChildren().length; _i2++) {}

      ;

      for (var _i3 = 0; _i3 < this.enemyMinions.getChildren().length; _i3++) {
        // ロックスパイダーのアニメーション
        if (this.enemyMinions.getChildren()[_i3].body.velocity.angle() > 1 && this.enemyMinions.getChildren()[_i3].body.velocity.angle() < 2) {
          this.enemyMinions.getChildren()[_i3].play(_CST.CST.ANIMEROCKSPIDER.FRONT, true);
        } else if (this.enemyMinions.getChildren()[_i3].body.velocity.angle() > 2 && this.enemyMinions.getChildren()[_i3].body.velocity.angle() < 4) {
          this.enemyMinions.getChildren()[_i3].play(_CST.CST.ANIMEROCKSPIDER.LEFT, true);
        } else if (this.enemyMinions.getChildren()[_i3].body.velocity.angle() > 4 && this.enemyMinions.getChildren()[_i3].body.velocity.angle() < 5) {
          this.enemyMinions.getChildren()[_i3].play(_CST.CST.ANIMEROCKSPIDER.BACK, true);
        } else if (this.enemyMinions.getChildren()[_i3].body.velocity.angle() !== 0) {
          this.enemyMinions.getChildren()[_i3].play(_CST.CST.ANIMEROCKSPIDER.RIGHT, true);
        }

        ;

        if (this.enemyMinions.getChildren()[_i3].active === true) {}
      } // 敵ミニオンがやられた時に増えるよう


      if (this.stageData.witch === false) {
        if (this.enemyMinions.getChildren().length === 0) {
          var _loop3 = function _loop3(_i4) {
            var xPosition = 0;
            var yPosition = 0; // ランダム数を作成

            random = Math.floor(Math.random() * 11);

            switch (random) {
              case 1:
                xPosition = 128;
                yPosition = 32;
                break;

              case 2:
                xPosition = 352;
                yPosition = 32;
                break;

              case 3:
                xPosition = 608;
                yPosition = 32;
                break;

              case 4:
                xPosition = 768;
                yPosition = 288;
                break;

              case 5:
                xPosition = 768;
                yPosition = 128;
                break;

              case 6:
                xPosition = 96;
                yPosition = 128;
                break;

              case 7:
                xPosition = 96;
                yPosition = 192;
                break;

              case 8:
                xPosition = 32;
                yPosition = 248;
                break;

              case 9:
                xPosition = 0;
                yPosition = 352;
                break;

              case 10:
                xPosition = 736;
                yPosition = 384;
                break;

              default:
                break;
            }

            _this2.rockSpider = _this2.physics.add.sprite(xPosition, yPosition, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.FRONT); // 召喚エフェクト

            var rockSpiderSummon = _this2.physics.add.sprite(_this2.rockSpider.x, _this2.rockSpider.y, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.SUMMON, true).setDepth(-1);

            rockSpiderSummon.on("animationcomplete", function () {
              rockSpiderSummon.destroy();
            });

            _this2.enemyMinions.add(_this2.rockSpider);

            _this2.physics.moveToObject(_this2.enemyMinions.getChildren()[_i4], _this2.sacredTree, 20);

            _this2.physics.add.collider(_this2.sacredTree, _this2.enemyMinions, function (sacredtree, minion) {
              // 攻撃エフェクト
              var rockSpiderAttack = _this2.physics.add.sprite(minion.x + 16, minion.y + 16, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.ATTACK, true);

              rockSpiderAttack.on("animationcomplete", function () {
                rockSpiderAttack.destroy();
              });
              minion.destroy();

              if (_this2.player.hp > 0) {
                _this2.player.hp = _this2.player.hp - 4;

                _this2.playerHpBar.clear().fillRect(369, 280, _this2.player.hp, 4);
              }
            }); // コリジョンレイヤーと衝突したら縦横に避けるように


            _this2.physics.add.collider(_this2.enemyMinions.getChildren()[_i4], _this2.colliedLayer, function (enemy, colliedLayer) {
              if (enemy.body.velocity.x === 0) {
                if (enemy.body.velocity.y < 0) {
                  enemy.setVelocityY(-20);
                } else {
                  enemy.setVelocityY(20);
                }

                ;
              } else if (enemy.body.velocity.y === 0) {
                if (enemy.body.velocity.x < 0) {
                  enemy.setVelocityX(-20);
                } else {
                  enemy.setVelocityX(20);
                }

                ;
              }

              ;

              _this2.time.delayedCall(3000, function () {
                if (enemy.active === true) {
                  _this2.physics.moveToObject(enemy, _this2.sacredTree, 20);
                }
              });
            });
          };

          for (var _i4 = 0; _i4 < this.stageData.enemyMinionMany; _i4++) {
            var random;

            _loop3(_i4);
          }

          ;
        }

        ;
      }

      ; // ウィッチの召喚

      if (this.stageData.witch === true && this.witch.destroyAnimation === false) {
        this.witch.enemyHpBar.setPosition(this.witch.x, this.witch.y);

        if (this.witch !== undefined && this.witch.hp <= 0) {
          this.witch.destroy(); // ウィッチ破壊アニメーションは別に作成しておく

          this.witch.destroyAnimation = true;
          var witchDestory = this.add.sprite(this.witch.x, this.witch.y, _CST.CST.SPRITE.ENEMYBOSS);

          if (this.witch.direction === "front") {
            witchDestory.play(_CST.CST.ANIMEWITCH.FRONTDESTORY, true);
          } else if (this.witch.direction === "right") {
            witchDestory.play(_CST.CST.ANIMEWITCH.RIGHTDESTORY, true);
          } else if (this.witch.direction === "left") {
            witchDestory.play(_CST.CST.ANIMEWITCH.LEFTDESTORY, true);
          }

          ;
          witchDestory.on("animationcomplete", function () {
            witchDestory.destroy(); // ゲームクリアです

            var gameClearBtn;
            gameClearBtn = _this2.add.image(0, 0, _CST.CST.IMAGE.GAMECLERBTN).setOrigin(0, 0).setInteractive().setDepth(5);
            gameClearBtn.setVisible(true);
            gameClearBtn.on("pointerdown", function () {
              // ステージデータを一個上げる
              localStorage.gameStage = 9;
              playGameDisplayStage();

              _this2.scene.remove();

              document.getElementById('gameScreen').remove();
            });
          });
        }

        ; // 召喚アニメーション

        if (this.enemyMinions.getChildren().length === 0 && this.enemyBossGroup.getChildren().length === 0) {
          var _loop4 = function _loop4(_i5) {
            var xPosition = void 0;
            var yPosition = void 0;
            xPosition = _this2.witch.summonPoint[_i5][0];
            yPosition = _this2.witch.summonPoint[_i5][1];
            _this2.rockSpider = _this2.physics.add.sprite(xPosition, yPosition, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.FRONT); // 召喚エフェクト

            var rockSpiderSummon = _this2.physics.add.sprite(_this2.rockSpider.x, _this2.rockSpider.y, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.SUMMON, true).setDepth(-1);

            rockSpiderSummon.on("animationcomplete", function () {
              rockSpiderSummon.destroy();
            });

            _this2.enemyMinions.add(_this2.rockSpider);

            _this2.physics.moveToObject(_this2.enemyMinions.getChildren()[_i5], _this2.sacredTree, 20);

            _this2.physics.add.collider(_this2.sacredTree, _this2.enemyMinions, function (sacredtree, minion) {
              // 攻撃エフェクト
              var rockSpiderAttack = _this2.physics.add.sprite(minion.x + 16, minion.y + 16, _CST.CST.SPRITE.ENEMYMINIONS).play(_CST.CST.ANIMEROCKSPIDER.ATTACK, true);

              rockSpiderAttack.on("animationcomplete", function () {
                rockSpiderAttack.destroy();
              });
              minion.destroy();

              if (_this2.player.hp >= 0) {
                _this2.player.hp = _this2.player.hp - 4;

                _this2.playerHpBar.clear().fillRect(369, 280, _this2.player.hp, 4);
              }
            }); // コリジョンレイヤーと衝突したら縦横に避けるように


            _this2.physics.add.collider(_this2.enemyMinions.getChildren()[_i5], _this2.colliedLayer, function (enemy, colliedLayer) {
              if (enemy.body.velocity.x === 0) {
                if (enemy.body.velocity.y < 0) {
                  enemy.setVelocityY(-20);
                } else {
                  enemy.setVelocityY(20);
                }

                ;
              } else if (enemy.body.velocity.y === 0) {
                if (enemy.body.velocity.x < 0) {
                  enemy.setVelocityX(-20);
                } else {
                  enemy.setVelocityX(20);
                }

                ;
              }

              ;

              _this2.time.delayedCall(3000, function () {
                if (enemy.active === true) {
                  _this2.physics.moveToObject(enemy, _this2.sacredTree, 20);
                }
              });
            });
          };

          for (var _i5 = 0; _i5 < this.witch.summonPoint.length; _i5++) {
            _loop4(_i5);
          } // ゴーレムを召喚
          // ランダムで配置を変換
          // ランダム数を作成
          // this.enemyBossGroup = this.physics.add.group();
          // ボスグループのプロパティ


          this.enemyBossGroup.summon = false;

          var _loop5 = function _loop5(_i6) {
            var xPosition = void 0;
            var yPosition = void 0;
            xPosition = _this2.witch.summonBossPoint[_i6][0];
            yPosition = _this2.witch.summonBossPoint[_i6][1];
            _this2.enemyBoss = new classList.SummonBoss(_this2, xPosition, yPosition, _CST.CST.SPRITE.ENEMYBOSS, "golem");

            _this2.enemyBossGroup.add(_this2.enemyBoss);

            _this2.enemyBossGroup.getChildren()[_i6].setImmovable(true); // 敵ボスと神樹の衝突


            _this2.physics.add.overlap(_this2.enemyBossGroup.getChildren()[_i6].collision, _this2.sacredTree, function () {
              if (_this2.enemyBossGroup.getChildren()[_i6] !== undefined) {
                // ゴーレムのアニメーション
                if (_this2.enemyBossGroup.getChildren()[_i6].collision.body.velocity.angle() > 1 && _this2.enemyBossGroup.getChildren()[_i6].collision.body.velocity.angle() < 2) {
                  _this2.enemyBossGroup.getChildren()[_i6].play(_CST.CST.ANIMEGOLEM.FRONTATTACK, true);
                } else if (_this2.enemyBossGroup.getChildren()[_i6].collision.body.velocity.angle() > 2 && _this2.enemyBossGroup.getChildren()[_i6].collision.body.velocity.angle() < 4) {
                  _this2.enemyBossGroup.getChildren()[_i6].play(_CST.CST.ANIMEGOLEM.LEFTATTACK, true);
                } else if (_this2.enemyBossGroup.getChildren()[_i6].collision.body.velocity.angle() > 4 && _this2.enemyBossGroup.getChildren()[_i6].collision.body.velocity.angle() < 5) {
                  _this2.enemyBossGroup.getChildren()[_i6].play(_CST.CST.ANIMEGOLEM.BACKATTACK, true);
                } else if (_this2.enemyBossGroup.getChildren()[_i6].collision.body.velocity.angle() !== 0) {
                  _this2.enemyBossGroup.getChildren()[_i6].play(_CST.CST.ANIMEGOLEM.RIGHTATTACK, true);
                }

                ;

                _this2.enemyBossGroup.getChildren()[_i6].collision.setVelocity(0); // 断続的にダメージが入るように


                if (_this2.player.hp > 0) {
                  _this2.player.hp = _this2.player.hp - _this2.enemyBossGroup.getChildren()[_i6].attackDamage;

                  _this2.playerHpBar.clear().fillRect(369, 280, _this2.player.hp, 4);
                }

                ;
              }

              ;
            });
          };

          for (var _i6 = 0; _i6 < this.witch.summonBossPoint.length; _i6++) {
            _loop5(_i6);
          }

          ;
          this.witch.setVisible(false);
          var witchSummon = this.add.sprite(this.witch.x, this.witch.y, _CST.CST.SPRITE.ENEMYBOSS).play(_CST.CST.ANIMEWITCH.FRONTSUMMON);
          witchSummon.on("animationcomplete", function () {
            witchSummon.destroy();

            _this2.witch.setVisible(true);
          });
        }

        ;
      }

      ; // すべてのボスを倒したら

      if (this.stageData.witch === false) {
        if (this.enemyBossGroup.getChildren().length === 0) {
          this.apprentice.play(_CST.CST.ANIMEAPPRENTICE.WIN, true);
          this.apprentice.on("animationcomplete", function () {
            // this.scene.start(CST.SCENES.MENU, this.nextStageData);
            var gameClearBtn;
            gameClearBtn = _this2.add.image(0, 0, _CST.CST.IMAGE.GAMECLERBTN).setOrigin(0, 0).setInteractive().setDepth(5); // ゲームクリアです

            gameClearBtn.on("pointerdown", function () {
              // ステージデータを一個上げる
              var gameStage = Number(localStorage.getItem('gameStage'));
              var stageChoice = Number(localStorage.getItem('stageChoice'));

              switch (stageChoice) {
                case 1:
                  if (gameStage === 2) {
                    ++gameStage;
                  }

                  break;

                case 2:
                  if (gameStage === 5) {
                    ++gameStage;
                  }

                  break;

                case 3:
                  if (gameStage === 8) {
                    ++gameStage;
                  }

                  break;

                default:
                  break;
              }

              localStorage.gameStage = gameStage;
              playGameDisplayStage();

              _this2.scene.remove();

              document.getElementById('gameScreen').remove();
            });
          });
        }

        ;
      }

      ;

      if (this.player.hp < 0) {
        if (this.sacredTree.active === true) {
          var scredTree = this.add.sprite(this.sacredTree.x, this.sacredTree.y, _CST.CST.SPRITE.SACREDTREE);
          this.sacredTree.destroy();
          scredTree.play(_CST.CST.ANIMSACRED.SACREDTREEDESTROY, true);
          scredTree.on("animationcomplete", function () {
            // this.sacredTree.play(CST.ANIMSACRED.SACREDTREEDESTROY2, true);
            _this2.apprentice.play(_CST.CST.ANIMEAPPRENTICE.LOOSE, true);

            _this2.apprentice.on("animationcomplete", function () {
              // this.scene.start(CST.SCENES.MENU, this.nextStageData);
              var gameLooseBtn;
              gameLooseBtn = _this2.add.image(0, 0, _CST.CST.IMAGE.GAMECLOOSEBTN).setOrigin(0, 0).setInteractive().setDepth(5); // 負けました

              gameLooseBtn.on("pointerdown", function () {
                playGameDisplayStage();

                _this2.scene.remove();

                document.getElementById('gameScreen').remove();
              });
            });
          });
        }

        ;
      }

      ;
    }
  }]);

  return playScene;
}(Phaser.Scene);

exports.playScene = playScene;
; // ステージ表示

function playGameDisplayStage() {
  // ボタン作成
  var playGameTitle1 = {
    documentKey: document.getElementById('playGame1'),
    textKey: 'playGame1Introduction',
    KeyLevel: 1
  };
  var playGameTitle2 = {
    documentKey: document.getElementById('playGame2'),
    textKey: 'playGame1ThisChapter',
    KeyLevel: 2
  };
  var playGameTitle3 = {
    documentKey: document.getElementById('playGame3'),
    textKey: 'playGame1Conclusion',
    KeyLevel: 3
  };
  var playGameTitle4 = {
    documentKey: document.getElementById('playGame4'),
    textKey: 'playGame2Introduction',
    KeyLevel: 4
  };
  var playGameTitle5 = {
    documentKey: document.getElementById('playGame5'),
    textKey: 'playGame2ThisChapter',
    KeyLevel: 5
  };
  var playGameTitle6 = {
    documentKey: document.getElementById('playGame6'),
    textKey: 'playGame2Conclusion',
    KeyLevel: 6
  };
  var playGameTitle7 = {
    documentKey: document.getElementById('playGame7'),
    textKey: 'playGame3Introduction',
    KeyLevel: 7
  };
  var playGameTitle8 = {
    documentKey: document.getElementById('playGame8'),
    textKey: 'playGame3ThisChapter',
    KeyLevel: 8
  };
  var playGameTitle9 = {
    documentKey: document.getElementById('playGame9'),
    textKey: 'playGame3Conclusion',
    KeyLevel: 9
  };
  var playGameTitleList = [playGameTitle1, playGameTitle2, playGameTitle3, playGameTitle4, playGameTitle5, playGameTitle6, playGameTitle7, playGameTitle8, playGameTitle9];

  for (var _i7 = 0, _playGameTitleList = playGameTitleList; _i7 < _playGameTitleList.length; _i7++) {
    var key = _playGameTitleList[_i7];

    // ステージ表示
    if (Number(localStorage.gameStage) >= key.KeyLevel) {
      key.documentKey.style.display = 'block';
    } else {
      key.documentKey.style.display = 'none';
    }
  }

  ;
}

;
},{"../CST":"gamesrc/CST.ts","./classList":"gamesrc/scenes/classList.ts"}],"gamesrc/scenes/menuscene.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var menuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(menuScene, _Phaser$Scene);

  var _super = _createSuper(menuScene);

  function menuScene() {
    _classCallCheck(this, menuScene);

    return _super.call(this, {
      key: _CST.CST.SCENES.MENU
    });
  }

  _createClass(menuScene, [{
    key: "init",
    value: function init() {
      console.log(localStorage.getItem('stageChoice'));
      var stageData = Number(localStorage.getItem('stageChoice')); //引き継いだ後にインスタント化
      // ステージ１なら

      switch (stageData) {
        case 1:
          this.stageData = {
            name: "stage1",
            playerSummonUpperLimit: 2,
            enemyMinionMany: 2,
            enemyBossMany: 1,
            witch: false
          };
          break;

        case 2:
          this.stageData = {
            name: "stage2",
            playerSummonUpperLimit: 3,
            enemyMinionMany: 4,
            enemyBossMany: 2,
            witch: false
          };
          break;

        case 3:
          this.stageData = {
            name: "stage3",
            playerSummonUpperLimit: 4,
            enemyMinionMany: 0,
            enemyBossMany: 0,
            witch: true
          };
          break;

        default:
          this.stageData = {
            name: "stage1",
            playerSummonUpperLimit: 2,
            enemyMinionMany: 2,
            enemyBossMany: 1,
            witch: false
          };
          break;
      }

      ;
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var stageBtn;
      var gameClearBtn;

      if (this.stageData.name === "stage1") {
        stageBtn = this.add.image(0, 0, _CST.CST.IMAGE.FIRSTSTAGEBTN).setOrigin(0, 0).setInteractive();
      } else if (this.stageData.name === "stage2") {
        stageBtn = this.add.image(0, 0, _CST.CST.IMAGE.SECONDSTAGEBTN).setOrigin(0, 0).setInteractive();
      } else if (this.stageData.name === "stage3") {
        stageBtn = this.add.image(0, 0, _CST.CST.IMAGE.THIRDSTAGEBTN).setOrigin(0, 0).setInteractive();
      } // ステージシーンに飛びます


      stageBtn.on("pointerdown", function () {
        _this.scene.start(_CST.CST.SCENES.PLAYSCENE, _this.stageData);
      });
    }
  }]);

  return menuScene;
}(Phaser.Scene);

exports.menuScene = menuScene;
},{"../CST":"gamesrc/CST.ts"}],"javascript.js":[function(require,module,exports) {
"use strict";

var _loadscene = require("./gamesrc/scenes/loadscene");

var _animation = require("./gamesrc/scenes/animation");

var _playscene = require("./gamesrc/scenes/playscene");

var _menuscene = require("./gamesrc/scenes/menuscene");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// マウスが乗ったときに右下がめくれるようなアニメーション
// document.getElementById('pageLowerRightBtn').addEventListener('mouseenter', turnOverBook);
// 表紙 ロードしたときに呼び出します
window.onload = function () {
  // どこまで進んだか
  if (localStorage.gameStage === undefined) {
    localStorage.gameStage = 1;
  }

  ;
  page0Cover();
  popWIndowDIsplay('page0');
}; // 表紙


function page0Cover() {
  // ページ作成関数
  nextPageGenerate('page0Cover');
}

; // 1ページ目インデックス

function page1Index() {
  nextPageGenerate('page1Index');
  document.getElementById('indexPage1').addEventListener('click', function () {});
  document.getElementById('indexPage2').addEventListener('click', function () {
    indexJump('page2Introduction');
  });
  document.getElementById('indexPage3').addEventListener('click', function () {
    indexJump('page3CharacterIntroduction');
  });
  document.getElementById('indexPage4').addEventListener('click', function () {
    indexJump('page4HowToPlay');
  });
  document.getElementById('indexPage5').addEventListener('click', function () {
    indexJump('page5PlayGame');
  });
  document.getElementById('indexPage6').addEventListener('click', function () {
    indexJump('page6Imprint');
  });
  popWIndowDIsplay('page1');
}

; // 目次から他のページに飛ぶときにめくれるように

function indexJump(nextPage) {
  var pageList = ['page0Cover', 'page1Index', 'page2Introduction', 'page3CharacterIntroduction', 'page4HowToPlay', 'page5PlayGame', 'page6Imprint'];

  for (var i = 0; i < pageList.length; i++) {
    if (nextPage === pageList[i]) {
      document.getElementById(pageList[i]).style.visibility = 'visible';
    } else if (pageList[i] === 'page1Index') {
      document.getElementById(pageList[i]).style.visibility = 'visible';
    } else {
      document.getElementById(pageList[i]).style.visibility = 'hidden';
    }
  }

  var turningPage = document.getElementById('page1Index');

  turningPage.animate({
    transform: ['rotateY(20deg)', 'rotateY(120deg)'],
    opacity: ['1', '0.5']
  }, {
    duration: 3000,
    fill: 'forwards',
    easing: 'ease'
  }).onfinish = function () {
    if (document.getElementById('backButton') !== null) {
      document.getElementById('backButton').remove();
    }

    ;

    if (document.getElementById('indexButton') !== null) {
      document.getElementById('indexButton').remove();
    }

    ; // めくった後戻しておく

    turningPage.animate({
      transform: ['rotateY(0deg)', 'rotateY(0deg)'],
      opacity: ['1', '1']
    }, {
      duration: 0,
      fill: 'forwards',
      easing: 'ease'
    });

    switch (nextPage) {
      case 'page2Introduction':
        page2Introduction();
        break;

      case 'page3CharacterIntroduction':
        page3CharacterIntroduction();
        break;

      case 'page4HowToPlay':
        page4HowToPlay();
        break;

      case 'page5PlayGame':
        page5PlayGame();
        break;

      case 'page6Imprint':
        page6Imprint();
        break;

      default:
        break;
    }

    ;
  };
}

; // 2ページ目序章

function page2Introduction() {
  // 最初に初期値に戻しておく
  nextPageGenerate('page2Introduction'); // ポップが閉じたら序章が開始するように

  popWIndowDIsplay('page2');
  var page2IntroductionImgTree = document.getElementById('page2IntroductionImgTree');
  var page2IntroductionImgFruit = document.getElementById('page2IntroductionImgFruit');
  var page2IntroductionImgMell = document.getElementById('page2IntroductionImgMell');
  var page2IntroductionImgWitch = document.getElementById('page2IntroductionImgWitch');
  var introductionText1 = document.getElementById('introductionText1');
  var introductionText2 = document.getElementById('introductionText2');
  var introductionText3 = document.getElementById('introductionText3');
  var introductionText4 = document.getElementById('introductionText4');
  var introductionText5 = document.getElementById('introductionText5');
  var page2IntroductionIMGTiile = document.getElementById('page2IntroductionImgTitle');
  page2IntroductionImgTree.style.display = 'none';
  page2IntroductionImgFruit.style.display = 'none';
  page2IntroductionImgMell.style.display = 'none';
  page2IntroductionImgWitch.style.display = 'none';
  introductionText1.style.display = 'none';
  introductionText2.style.display = 'none';
  introductionText3.style.display = 'none';
  introductionText4.style.display = 'none';
  introductionText5.style.display = 'none';
  page2IntroductionIMGTiile.style.display = 'none';
  page2IntroductionImgTree.style.display = 'none';
  document.getElementById('firstPlayClickButton2Introduction').addEventListener('click', function () {
    document.getElementById('pageLowerRightBtn').style.display = 'none';
    page2IntroductionImgTree.style.display = 'block';

    page2IntroductionImgTree.animate({
      opacity: ['0', '1']
    }, {
      duration: 3000,
      fill: 'forwards',
      easing: 'ease'
    }).onfinish = function () {
      introductionText1.style.display = 'block';

      introductionText1.animate({
        opacity: ['0', '1']
      }, {
        duration: 5000,
        fill: 'forwards',
        easing: 'ease'
      }).onfinish = function () {
        page2IntroductionImgFruit.style.display = 'block';

        page2IntroductionImgFruit.animate({
          opacity: ['0', '1']
        }, {
          duration: 3000,
          fill: 'forwards',
          easing: 'ease'
        }).onfinish = function () {
          introductionText2.style.display = 'block';
          introductionText3.style.display = 'block';
          introductionText2.animate({
            opacity: ['0', '1']
          }, {
            duration: 5000,
            fill: 'forwards',
            easing: 'ease'
          });

          introductionText3.animate({
            opacity: ['0', '1']
          }, {
            duration: 5000,
            fill: 'forwards',
            easing: 'ease'
          }).onfinish = function () {
            page2IntroductionImgMell.style.display = 'block';
            page2IntroductionImgMell.animate({
              opacity: ['0', '1']
            }, {
              duration: 3000,
              fill: 'forwards',
              easing: 'ease'
            });
            page2IntroductionImgWitch.style.display = 'block';

            page2IntroductionImgWitch.animate({
              opacity: ['0', '1']
            }, {
              duration: 3000,
              fill: 'forwards',
              easing: 'ease'
            }).onfinish = function () {
              introductionText4.style.display = 'block';
              introductionText4.animate({
                opacity: ['0', '1']
              }, {
                duration: 5000,
                fill: 'forwards',
                easing: 'ease'
              });
              introductionText5.style.display = 'block';

              introductionText5.animate({
                opacity: ['0', '1']
              }, {
                duration: 5000,
                fill: 'forwards',
                easing: 'ease'
              }).onfinish = function () {
                page2IntroductionIMGTiile.style.display = 'block';

                page2IntroductionIMGTiile.animate({
                  opacity: ['0', '1']
                }, {
                  duration: 10000,
                  fill: 'forwards',
                  easing: 'ease'
                }).onfinish = function () {
                  document.getElementById('pageLowerRightBtn').style.display = 'block';
                };
              };
            };
          };
        };
      };
    };
  });
}

; // 3pページ登場人物

function page3CharacterIntroduction() {
  nextPageGenerate('page3CharacterIntroduction');
  var melButton = {
    nameKey: 'mel',
    documentKey: document.getElementById('CharacterIntroductionMel')
  };
  var knightButton = {
    nameKey: 'knight',
    documentKey: document.getElementById('CharacterIntroductionKnight')
  };
  var dameButton = {
    nameKey: 'dame',
    documentKey: document.getElementById('CharacterIntroductionDame')
  };
  var witchButton = {
    nameKey: 'witch',
    documentKey: document.getElementById('CharacterIntroductionWitch')
  };
  var golemButton = {
    nameKey: 'golem',
    documentKey: document.getElementById('CharacterIntroductionGolem')
  };
  var rockspiderButton = {
    nameKey: 'rockspider',
    documentKey: document.getElementById('CharacterIntroductionRockspider')
  };
  var buttonList = [melButton, knightButton, dameButton, witchButton, golemButton, rockspiderButton];

  var _loop = function _loop() {
    var key = _buttonList[_i];
    key.documentKey.addEventListener('mouseenter', function () {
      key.documentKey.src = './assets/charactor/' + String(key.nameKey) + '.png'; // テキストを表示

      document.getElementById('CharacterIntroductionTextBox').style.display = 'block';
      document.getElementById('CharacterIntroductionText').style.display = 'block';
      document.getElementById('IntroductionText' + String(key.nameKey)).style.display = 'block'; // メル、ナイト、デイムであればテキストボックスの場所を変更する

      if (key.nameKey === 'mel' || key.nameKey === 'knight' || key.nameKey === 'dame') {
        document.getElementById('CharacterIntroductionTextBox').style.left = '388px';
        document.getElementById('CharacterIntroductionText').style.left = '411px';
      } else {
        document.getElementById('CharacterIntroductionTextBox').style.left = '63px';
        document.getElementById('CharacterIntroductionText').style.left = '86px';
      }
    });
    key.documentKey.addEventListener('mouseleave', function () {
      key.documentKey.src = './assets/charactor/' + String(key.nameKey) + 'line' + '.png'; // テキストを表示

      document.getElementById('CharacterIntroductionTextBox').style.display = 'none';
      document.getElementById('CharacterIntroductionText').style.display = 'none';
      document.getElementById('IntroductionText' + String(key.nameKey)).style.display = 'none';
    });
  };

  for (var _i = 0, _buttonList = buttonList; _i < _buttonList.length; _i++) {
    _loop();
  }

  ;
  popWIndowDIsplay('page3');
}

; // 4ページ目

function page4HowToPlay() {
  var howToPlayText1 = document.getElementById('howToPlayText1');
  var howToPlayText2 = document.getElementById('howToPlayText2');
  var howToPlayText3 = document.getElementById('howToPlayText3');
  var howToPlayImage = {
    image1Src: './assets/howtoplay/howtoplayimage1.png',
    image2Src: './assets/howtoplay/howtoplayimage2.png',
    image3Src: './assets/howtoplay/howtoplayimage3.png'
  };
  howToPlayText1.addEventListener('click', function () {
    document.getElementById('howToPlayImage').src = howToPlayImage.image1Src;
  });
  howToPlayText2.addEventListener('click', function () {
    document.getElementById('howToPlayImage').src = howToPlayImage.image2Src;
  });
  howToPlayText3.addEventListener('click', function () {
    document.getElementById('howToPlayImage').src = howToPlayImage.image3Src;
  });
  nextPageGenerate('page4HowToPlay');
  popWIndowDIsplay('page4');
}

; // 5ページ目

function page5PlayGame() {
  // キャラクターのステータス
  // document.getElementById('playGameButton').addEventListener('click', () => {
  //   window.location.href = 'https://www.google.com/'
  // });
  // ボタン作成
  var playGameTitle1 = {
    documentKey: document.getElementById('playGame1'),
    textKey: 'playGame1Introduction',
    nextLevel: 2
  };
  var playGameTitle2 = {
    documentKey: document.getElementById('playGame2'),
    textKey: 'playGame1ThisChapter',
    nextLevel: 2
  };
  var playGameTitle3 = {
    documentKey: document.getElementById('playGame3'),
    textKey: 'playGame1Conclusion',
    nextLevel: 4
  };
  var playGameTitle4 = {
    documentKey: document.getElementById('playGame4'),
    textKey: 'playGame2Introduction',
    nextLevel: 5
  };
  var playGameTitle5 = {
    documentKey: document.getElementById('playGame5'),
    textKey: 'playGame2ThisChapter',
    nextLevel: 5
  };
  var playGameTitle6 = {
    documentKey: document.getElementById('playGame6'),
    textKey: 'playGame2Conclusion',
    nextLevel: 7
  };
  var playGameTitle7 = {
    documentKey: document.getElementById('playGame7'),
    textKey: 'playGame3Introduction',
    nextLevel: 8
  };
  var playGameTitle8 = {
    documentKey: document.getElementById('playGame8'),
    textKey: 'playGame3ThisChapter',
    nextLevel: 8
  };
  var playGameTitle9 = {
    documentKey: document.getElementById('playGame9'),
    textKey: 'playGame3Conclusion',
    nextLevel: 9
  };
  var playGameTitleList = [playGameTitle1, playGameTitle2, playGameTitle3, playGameTitle4, playGameTitle5, playGameTitle6, playGameTitle7, playGameTitle8, playGameTitle9]; // ステージ数

  var stageBreak = 0;

  var _loop2 = function _loop2() {
    var key = _playGameTitleList[_i2];
    key.documentKey.addEventListener('click', function () {
      // クリックするとlocalStorage.gameStageが上がるように(ゲーム時は上がらないように)
      if (Number(localStorage.gameStage) + 1 === key.nextLevel) {
        localStorage.gameStage = key.nextLevel;
      }

      playGameTextDisplay(key.textKey);
    });
    ++stageBreak;

    if (stageBreak <= Number(localStorage.gameStage)) {
      key.documentKey.style.display = 'block';
    } else {
      key.documentKey.style.display = 'none';
    }
  };

  for (var _i2 = 0, _playGameTitleList = playGameTitleList; _i2 < _playGameTitleList.length; _i2++) {
    _loop2();
  }

  ; // ページ作成関数

  nextPageGenerate('page5PlayGame'); // データ削除をする

  document.getElementById('gameData').addEventListener('click', function () {
    var gameDelete = window.confirm('データを削除してよろしいですか？');

    if (gameDelete === true) {
      localStorage.clear();
      window.location.reload();
    }

    ;
  });
  document.getElementById('playGameText').style.display = 'none';
  popWIndowDIsplay('page5');
}

;

function playGameTextDisplay(displayText) {
  var playGame1Introduction = {
    name: 'playGame1Introduction',
    documentKey: document.getElementById('playGame1Introduction'),
    Image1: '1',
    Image2: '2',
    Image3: '3'
  };
  var playGame1Conclusion = {
    name: 'playGame1Conclusion',
    documentKey: document.getElementById('playGame1Conclusion'),
    Image1: '4',
    Image2: '5',
    Image3: '6'
  };
  var playGame2Introduction = {
    name: 'playGame2Introduction',
    documentKey: document.getElementById('playGame2Introduction'),
    Image1: '7',
    Image2: '8',
    Image3: '9'
  };
  var playGame2Conclusion = {
    name: 'playGame2Conclusion',
    documentKey: document.getElementById('playGame2Conclusion'),
    Image1: '10',
    Image2: '11',
    Image3: '12'
  };
  var playGame3Introduction = {
    name: 'playGame3Introduction',
    documentKey: document.getElementById('playGame3Introduction'),
    Image1: '13',
    Image2: '14',
    Image3: '15'
  };
  var playGame3Conclusion = {
    name: 'playGame3Conclusion',
    documentKey: document.getElementById('playGame3Conclusion'),
    Image1: '16',
    Image2: '17',
    Image3: '18'
  };
  var playGameTextList = [playGame1Introduction, playGame1Conclusion, playGame2Introduction, playGame2Conclusion, playGame3Introduction, playGame3Conclusion]; // 本編ならゲームを開始する

  if (displayText === 'playGame1ThisChapter' || displayText === 'playGame2ThisChapter' || displayText === 'playGame3ThisChapter') {
    conditionsToFight(displayText);
  }

  ; // 表示テキストについて

  for (var _i3 = 0, _playGameTextList = playGameTextList; _i3 < _playGameTextList.length; _i3++) {
    var key = _playGameTextList[_i3];

    // /表示する文章
    if (displayText === key.name) {
      (function () {
        // 表示画像について
        var playGameText = document.getElementById('playGameText');
        var playGameImage1 = document.getElementById('playGameImage1');
        playGameImage1.src = './assets/gamestartimage/gamestartimage' + String(key.Image1) + '.png';
        var playGameImage2 = document.getElementById('playGameImage2');
        playGameImage2.src = './assets/gamestartimage/gamestartimage' + String(key.Image2) + '.png';
        var playGameImage3 = document.getElementById('playGameImage3');
        playGameImage3.src = './assets/gamestartimage/gamestartimage' + String(key.Image3) + '.png';
        var playGameTextPList = document.querySelectorAll('#' + key.name + ' p');
        playGameImage1.style.display = 'none';
        playGameImage2.style.display = 'none';
        playGameImage3.style.display = 'none';
        key.documentKey.style.display = 'block';
        playGameTextPList.item(0).style.display = 'none';
        playGameTextPList.item(1).style.display = 'none';
        playGameTextPList.item(2).style.display = 'none';
        var playGameTextButton = document.getElementById('playGameText');
        playGameTextButton.style.display = 'none';
        playGameText.style.display = 'block';

        playGameText.animate({
          opacity: ['0', '1']
        }, {
          duration: 3000,
          fill: 'forwards',
          easing: 'ease'
        }).onfinish = function () {
          playGameImage1.style.display = 'block';
          playGameImage1.animate({
            opacity: ['0', '1']
          }, {
            duration: 5000,
            fill: 'forwards',
            easing: 'ease'
          });
          playGameTextPList.item(0).style.display = 'flex';

          playGameTextPList.item(0).animate({
            opacity: ['0', '1']
          }, {
            duration: 5000,
            fill: 'forwards',
            easing: 'ease'
          }).onfinish = function () {
            playGameImage2.style.display = 'block';
            playGameImage2.animate({
              opacity: ['0', '1']
            }, {
              duration: 5000,
              fill: 'forwards',
              easing: 'ease'
            });
            playGameTextPList.item(1).style.display = 'flex';

            playGameTextPList.item(1).animate({
              opacity: ['0', '1']
            }, {
              duration: 5000,
              fill: 'forwards',
              easing: 'ease'
            }).onfinish = function () {
              playGameImage3.style.display = 'block';
              playGameImage3.animate({
                opacity: ['0', '1']
              }, {
                duration: 5000,
                fill: 'forwards',
                easing: 'ease'
              });
              playGameTextPList.item(2).style.display = 'flex';

              playGameTextPList.item(2).animate({
                opacity: ['0', '1']
              }, {
                duration: 5000,
                fill: 'forwards',
                easing: 'ease'
              }).onfinish = function () {
                // 出てきたテキストを閉じるボタン
                playGameTextButton.style.display = 'block';
                playGameTextButton.addEventListener('click', function () {
                  // 現段階で
                  playGameTextButton.style.display = 'none'; // テキストをどこまで進めるか、又、上げるか

                  playGameDisplayStage();
                });
              };
            };
          };
        };
      })();
    } // 非表示にする文章
    else {
        key.documentKey.style.display = 'none';
      }

    ;
  }

  ;
}

; // ステータスの設定

function conditionsToFight(displayTextElement) {
  // テキスト表示
  document.getElementById('firstPlayText5Gamestart1').style.display = 'none';
  document.getElementById('firstPlayText5Gamestart2').style.display = 'none';
  document.getElementById('firstPlayText5Gamestart3').style.display = 'none';
  document.getElementById('popWindowGamestart').style.display = 'block';
  var playGame1 = {
    nameKey: 'playGame1ThisChapter',
    documentKey: document.getElementById('firstPlayText5Gamestart1'),
    textKey: 'firstPlayText5Gamestart1'
  };
  var playGame2 = {
    nameKey: 'playGame2ThisChapter',
    documentKey: document.getElementById('firstPlayText5Gamestart2'),
    textKey: 'firstPlayText5Gamestart2'
  };
  var playGame3 = {
    nameKey: 'playGame3ThisChapter',
    documentKey: document.getElementById('firstPlayText5Gamestart3'),
    textKey: 'firstPlayText5Gamestart3'
  };
  var playGameList = [playGame1, playGame2, playGame3]; // テキスト表示

  for (var _i4 = 0, _playGameList = playGameList; _i4 < _playGameList.length; _i4++) {
    var key = _playGameList[_i4];

    if (displayTextElement === key.nameKey) {
      key.documentKey.style.display = 'block';
    } else {
      key.documentKey.style.display = 'none';
    }

    ;
  }

  ;
  document.getElementById('popWindowGamestart').addEventListener('click', function () {
    document.getElementById('popWindowGamestart').style.display = 'none'; // 本編ならゲームを開始する

    if (displayTextElement === 'playGame1ThisChapter') {
      localStorage.stageChoice = 1;
      gameStart();
    } else if (displayTextElement === 'playGame2ThisChapter') {
      localStorage.stageChoice = 2;
      gameStart();
    } else if (displayTextElement === 'playGame3ThisChapter') {
      localStorage.stageChoice = 3;
      gameStart();
    }

    ;
  });
}

; // ステージ表示

function playGameDisplayStage() {
  // ボタン作成
  var playGameTitle1 = {
    documentKey: document.getElementById('playGame1'),
    textKey: 'playGame1Introduction',
    KeyLevel: 1
  };
  var playGameTitle2 = {
    documentKey: document.getElementById('playGame2'),
    textKey: 'playGame1ThisChapter',
    KeyLevel: 2
  };
  var playGameTitle3 = {
    documentKey: document.getElementById('playGame3'),
    textKey: 'playGame1Conclusion',
    KeyLevel: 3
  };
  var playGameTitle4 = {
    documentKey: document.getElementById('playGame4'),
    textKey: 'playGame2Introduction',
    KeyLevel: 4
  };
  var playGameTitle5 = {
    documentKey: document.getElementById('playGame5'),
    textKey: 'playGame2ThisChapter',
    KeyLevel: 5
  };
  var playGameTitle6 = {
    documentKey: document.getElementById('playGame6'),
    textKey: 'playGame2Conclusion',
    KeyLevel: 6
  };
  var playGameTitle7 = {
    documentKey: document.getElementById('playGame7'),
    textKey: 'playGame3Introduction',
    KeyLevel: 7
  };
  var playGameTitle8 = {
    documentKey: document.getElementById('playGame8'),
    textKey: 'playGame3ThisChapter',
    KeyLevel: 8
  };
  var playGameTitle9 = {
    documentKey: document.getElementById('playGame9'),
    textKey: 'playGame3Conclusion',
    KeyLevel: 9
  };
  var playGameTitleList = [playGameTitle1, playGameTitle2, playGameTitle3, playGameTitle4, playGameTitle5, playGameTitle6, playGameTitle7, playGameTitle8, playGameTitle9];

  for (var _i5 = 0, _playGameTitleList2 = playGameTitleList; _i5 < _playGameTitleList2.length; _i5++) {
    var key = _playGameTitleList2[_i5];

    // ステージ表示
    if (Number(localStorage.gameStage) >= key.KeyLevel) {
      key.documentKey.style.display = 'block';
    } else {
      key.documentKey.style.display = 'none';
    }
  }

  ;
}

; // 6ページ目

function page6Imprint() {
  // 奥付の背景を白のみにする
  // ページ作成関数
  nextPageGenerate('page6Imprint');
}

; // 最初であればポップアップウィンドウを表示する

function popWIndowDIsplay(pageDisplay) {
  var page1 = {
    nameKey: 'page1',
    popWindowKey: document.getElementById('popWindow1Index'),
    documentKey: document.getElementById('firstPlay1Index'),
    clickButton: document.getElementById('firstPlayClickButton1Index')
  };
  var page2 = {
    nameKey: 'page2',
    popWindowKey: document.getElementById('popWindow2Introduction'),
    documentKey: document.getElementById('firstPlay2Introduction'),
    clickButton: document.getElementById('firstPlayClickButton2Introduction')
  };
  var page3 = {
    nameKey: 'page3',
    popWindowKey: document.getElementById('popWindow3CharacterIntroduction'),
    documentKey: document.getElementById('firstPlay3CharacterIntroduction'),
    clickButton: document.getElementById('firstPlayClickButton3CharacterIntroduction')
  };
  var page4 = {
    nameKey: 'page4',
    popWindowKey: document.getElementById('popWindow4HowToPlay'),
    documentKey: document.getElementById('firstPlay4HowToPlay'),
    clickButton: document.getElementById('firstPlayClickButton4HowToPlay')
  };
  var page5 = {
    nameKey: 'page5',
    popWindowKey: document.getElementById('popWindow5PlayGame'),
    documentKey: document.getElementById('firstPlay5PlayGame'),
    clickButton: document.getElementById('firstPlayClickButton5PlayGame')
  };
  var popWIndowList = [page1, page2, page3, page4, page5]; // 表紙だったら

  if (pageDisplay === 'page0') {
    if (localStorage.gameStage <= 1) {
      document.getElementById('popWindow0Cover').style.display = 'block';
      document.getElementById('pageLowerRightBtn').style.display = 'none';
      document.getElementById('firstPlay0Cover').style.display = 'block';
      document.getElementById('alreadyPlay0Cover').style.display = 'none'; // ポップウィンドウの表示

      document.getElementById('firstPlayText0CoverClickButton').addEventListener('click', function () {
        document.getElementById('popWindow0Cover').style.display = 'none';
        document.getElementById('pageLowerRightBtn').style.display = 'block';
      });
    } // 二回目以降
    else {
        document.getElementById('popWindow0Cover').style.display = 'block';
        document.getElementById('pageLowerRightBtn').style.display = 'none';
        document.getElementById('firstPlay0Cover').style.display = 'none';
        document.getElementById('alreadyPlay0Cover').style.display = 'block'; // ポップウィンドウはいの表示

        document.getElementById('alreadyPlayYes').addEventListener('click', function () {
          document.getElementById('popWindow0Cover').style.display = 'none';
          page5PlayGame();
        }); // ポップウィンドウいいえの表示

        document.getElementById('alreadyPlayNo').addEventListener('click', function () {
          document.getElementById('popWindow0Cover').style.display = 'none';
          document.getElementById('pageLowerRightBtn').style.display = 'block';
        }); // ポップウィンドウゲームデータの削除の表示

        document.getElementById('alreadyPlayGamedataDelete').addEventListener('click', function () {
          localStorage.clear();
          window.close();
          alert('ウィンドウが自動で閉じない場合はご自身でこのままウィンドウを閉じてください');
        });
      }

    ;
  } else {
    var _iterator = _createForOfIteratorHelper(popWIndowList),
        _step;

    try {
      var _loop3 = function _loop3() {
        var key = _step.value;

        // 表紙以外なら
        if (pageDisplay === key.nameKey) {
          if (localStorage.gameStage <= 1) {
            console.log(key.popWindowKey);
            key.popWindowKey.style.display = 'block';
            document.getElementById('pageLowerRightBtn').style.display = 'none';
            key.documentKey.style.display = 'block'; // ポップウィンドウの表示

            key.clickButton.addEventListener('click', function () {
              key.popWindowKey.style.display = 'none';
              document.getElementById('pageLowerRightBtn').style.display = 'block';
            });
          } // 二回目以降
          else {
              key.popWindowKey.style.display = 'none';
            }

          ;
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop3();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  ;
}

;

function nextPageGenerate(visiblePage) {
  // どのページを表示するか
  var pageList = ['page0Cover', 'page1Index', 'page2Introduction', 'page3CharacterIntroduction', 'page4HowToPlay', 'page5PlayGame', 'page6Imprint']; // 戻るボタン、目次ボタン、次へすすむボタンを削除するよう

  var _loop4 = function _loop4(i) {
    if (visiblePage === pageList[i]) {
      document.getElementById(pageList[i]).style.visibility = 'visible'; // 0ページ目でないときに次のページがめくれるときにめくってるときも表示されるように
      // かつ最後のページでなければ

      if (i + 1 < pageList.length) {
        document.getElementById(pageList[i + 1]).style.visibility = 'visible'; // removeDiv内をいったん削除

        var test = document.getElementById('removeDiv');

        while (test.lastChild) {
          test.removeChild(test.lastChild);
        } // めくるアニメーションを作成


        var pageLowerRightBtn = document.createElement('input');
        pageLowerRightBtn.setAttribute('type', 'button');
        pageLowerRightBtn.setAttribute('id', 'pageLowerRightBtn');
        document.getElementById('removeDiv').appendChild(pageLowerRightBtn);
        pageLowerRightBtn.addEventListener('mouseenter', function () {
          // 本がめくれるようにボタンを作成
          var turnOverButton = document.createElement('input');
          turnOverButton.setAttribute('type', 'button');
          turnOverButton.setAttribute('id', 'turnOverButton'); // 離れたときにページが閉じるようにボタンを作成

          var leaveButton = document.createElement('input');
          leaveButton.setAttribute('type', 'button');
          leaveButton.setAttribute('id', 'leaveButton');
          document.getElementById('removeDiv').appendChild(leaveButton); // めくるページ

          var turningPage = document.getElementById(visiblePage); // 本の右影

          var pageRightShadow = document.createElement('div');
          pageRightShadow.setAttribute('id', 'pageRightGrade');
          pageRightShadow.setAttribute('class', 'pageAll');
          document.getElementById(visiblePage).appendChild(pageRightShadow); // 本のめくれたときの光

          var pageReflection = document.createElement('div');
          pageReflection.setAttribute('id', 'pageLeftGrade');
          pageReflection.setAttribute('class', 'pageAll');
          document.getElementById(visiblePage).appendChild(pageReflection); //マウスが乗ったときに少しめくれるように

          turningPage.animate({
            transform: ['rotateY(0deg)', 'rotateY(20deg)']
          }, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease'
          });
          pageRightShadow.animate({
            opacity: ['0', '0.25'],
            transform: ['translateX(0px)', 'translateX(10px)']
          }, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease'
          });
          pageReflection.animate({
            opacity: ['0', '0.25'],
            transform: ['scaleX(0)', //開始
            'scaleX(2)' //終了
            ]
          }, {
            duration: 1000,
            fill: 'forwards',
            easing: 'ease'
          }); // 本がめくれるボタンを押したら本がめくれるように

          document.getElementById('removeDiv').appendChild(turnOverButton).addEventListener('click', function () {
            leaveButton.remove();
            document.getElementById('pageLowerRightBtn').style.display = 'none'; // クリックしたら離れるボタンを削除する

            if (pageLowerRightBtn !== undefined) {
              pageLowerRightBtn.remove();
            }

            turningPage.animate({
              transform: ['rotateY(20deg)', 'rotateY(120deg)'],
              opacity: ['1', '0.5']
            }, {
              duration: 3000,
              fill: 'forwards',
              easing: 'ease'
            }).onfinish = function () {
              if (document.getElementById('backButton') !== null) {
                document.getElementById('backButton').remove();
              }

              ;

              if (document.getElementById('indexButton') !== null) {
                document.getElementById('indexButton').remove();
              }

              ; // アニメーションが終わった後に実行する

              pageRightShadow.remove();
              pageReflection.remove();

              switch (visiblePage) {
                case 'page0Cover':
                  page1Index();
                  break;

                case 'page1Index':
                  page2Introduction();
                  break;

                case 'page2Introduction':
                  page3CharacterIntroduction();
                  break;

                case 'page3CharacterIntroduction':
                  page4HowToPlay();
                  break;

                case 'page4HowToPlay':
                  page5PlayGame();
                  break;

                case 'page5PlayGame':
                  page6Imprint();
                  break;

                default:
                  break;
              }
            };

            pageRightShadow.animate({
              opacity: ['0.5', '0.75'],
              transform: ['translateX(0px)', 'translateX(150px)']
            }, {
              duration: 4000,
              fill: 'forwards',
              easing: 'ease'
            });
            pageReflection.animate({
              opacity: ['0', '0.25'],
              transform: ['scaleX(0)', //開始
              'scaleX(2)' //終了
              ]
            }, {
              duration: 1000,
              fill: 'forwards',
              easing: 'ease'
            });
          }); // マウスが離れたときに右下が閉じるようなアニメーション

          document.getElementById('leaveButton').addEventListener('mouseleave', function () {
            leaveButton.remove();
            turnOverButton.remove(); // ボタンを大きくする

            turningPage.animate({
              transform: ['rotateY(20deg)', 'rotateY(0deg)']
            }, {
              duration: 1000,
              fill: 'forwards',
              easing: 'ease'
            });
            pageRightShadow.animate({
              opacity: ['0.75', '0'],
              transform: ['translateX(10px)', 'translateX(0px)']
            }, {
              duration: 1000,
              fill: 'forwards',
              easing: 'ease'
            });
            pageReflection.animate({
              opacity: ['0', '0.25'],
              transform: ['scaleX(2)', //開始
              'scaleX(0)' //終了
              ]
            }, {
              duration: 1000,
              fill: 'forwards',
              easing: 'ease'
            });
            pageRightShadow.remove();
            pageReflection.remove();
          });
        }, false);
      }

      ; // 0ページではないときに前ページに戻るボタンを作成する

      if (visiblePage !== pageList[0]) {
        var backButton = document.createElement('p');
        backButton.setAttribute('id', 'backButton');
        backButton.textContent = '1ページ戻る';
        backButton.style.fontSize = '1em';
        document.getElementById(visiblePage).appendChild(backButton);
        backButton.addEventListener('click', function () {
          // 1ページ前のページを表示
          var previousPage = document.getElementById(pageList[i - 1]);
          previousPage.style.visibility = 'visible';

          previousPage.animate({
            transform: ['rotateY(120deg)', 'rotateY(0deg)'],
            opacity: ['1', '1']
          }, {
            duration: 3000,
            fill: 'forwards',
            easing: 'ease'
          }).onfinish = function () {
            if (document.getElementById('backButton') !== null) {
              document.getElementById('backButton').remove();
            }

            ;

            if (document.getElementById('indexButton') !== null) {
              document.getElementById('indexButton').remove();
            }

            ;

            switch (visiblePage) {
              case 'page1Index':
                page0Cover();
                break;

              case 'page2Introduction':
                page1Index();
                break;

              case 'page3CharacterIntroduction':
                page2Introduction();
                break;

              case 'page4HowToPlay':
                page3CharacterIntroduction();
                break;

              case 'page5PlayGame':
                page4HowToPlay();
                break;

              case 'page6Imprint':
                page5PlayGame();
                break;

              default:
                break;
            }
          };
        }); // 目次に戻るボタン

        if (visiblePage !== pageList[1]) {
          var indexButton = document.createElement('p');
          indexButton.setAttribute('id', 'indexButton');
          indexButton.textContent = '目次へ戻る';
          indexButton.style.fontSize = '1em';
          document.getElementById(visiblePage).appendChild(indexButton);
          indexButton.addEventListener('click', function () {
            // 1ページ前のページを表示
            var indexPage = document.getElementById('page1Index');
            indexPage.style.visibility = 'visible';

            indexPage.animate({
              transform: ['rotateY(120deg)', 'rotateY(0deg)'],
              opacity: ['1', '1']
            }, {
              duration: 3000,
              fill: 'forwards',
              easing: 'ease'
            }).onfinish = function () {
              if (document.getElementById('backButton') !== null) {
                document.getElementById('backButton').remove();
              }

              ;

              if (document.getElementById('indexButton') !== null) {
                document.getElementById('indexButton').remove();
              }

              ;

              if (document.getElementById('pageLowerRightBtn') !== null) {
                document.getElementById('pageLowerRightBtn').remove();
              }

              ;
              page1Index();
            };
          });
        }

        ;
      }

      ;
    } else if (visiblePage !== pageList[i] && visiblePage !== pageList[i - 1]) {
      document.getElementById(pageList[i]).style.visibility = 'hidden';
    }

    ;
  };

  for (var i = 0; i < pageList.length; i++) {
    _loop4(i);
  }

  ;
}

;

function gameStart() {
  // 画面を作成
  // めくるアニメーションを作成
  var gameScreen = document.createElement('div');
  gameScreen.setAttribute('id', 'gameScreen');
  var div = document.getElementById('page6Imprint');
  document.getElementById('wholePage').insertBefore(gameScreen, div);
  var game = new Phaser.Game({
    width: 768,
    height: 576,
    scene: [_loadscene.loadScene, _animation.animation, _menuscene.menuScene, _playscene.playScene],
    parent: 'gameScreen',
    render: {
      pixelArt: false
    },
    physics: {
      default: "arcade",
      arcade: {
        debug: false,
        fps: 30
      }
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    type: Phaser.AUTO
  });
}

;
},{"./gamesrc/scenes/loadscene":"gamesrc/scenes/loadscene.ts","./gamesrc/scenes/animation":"gamesrc/scenes/animation.ts","./gamesrc/scenes/playscene":"gamesrc/scenes/playscene.ts","./gamesrc/scenes/menuscene":"gamesrc/scenes/menuscene.ts"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52178" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript.js"], null)
//# sourceMappingURL=/javascript.fdd706da.js.map