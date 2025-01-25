// Generated by Melange
'use strict';

const Caml_oo_curry = require("melange.js/caml_oo_curry.js");
const CamlinternalOO = require("melange/camlinternalOO.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");

function f(u) {
  return Caml_oo_curry.js2(5740587, 1, u, 32);
}

function f_js(u) {
  return u.say(32);
}

const object_tables = {
  TAG: /* Cons */ 0,
  key: undefined,
  data: undefined,
  next: undefined
};

const suites_0 = [
  "caml_obj",
  (function (param) {
    if (!object_tables.key) {
      const $$class = CamlinternalOO.create_table(["say"]);
      const say = CamlinternalOO.get_method_label($$class, "say");
      CamlinternalOO.set_method($$class, say, (function (self$1, x) {
        return 1 + x | 0;
      }));
      const env_init = function (env) {
        return CamlinternalOO.create_object_opt(undefined, $$class);
      };
      CamlinternalOO.init_class($$class);
      object_tables.key = env_init;
    }
    return {
      TAG: /* Eq */ 0,
      _0: 33,
      _1: f(Curry._1(object_tables.key, undefined))
    };
  })
];

const suites_1 = {
  hd: [
    "js_obj",
    (function (param) {
      return {
        TAG: /* Eq */ 0,
        _0: 34,
        _1: ({
          say: (function (x) {
            return x + 2 | 0;
          })
        }).say(32)
      };
    })
  ],
  tl: {
    hd: [
      "js_obj2",
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: 34,
          _1: ({
            say: (function (x) {
              return x + 2 | 0;
            })
          }).say(32)
        };
      })
    ],
    tl: {
      hd: [
        "empty",
        (function (param) {
          return {
            TAG: /* Eq */ 0,
            _0: 0,
            _1: Object.keys({}).length
          };
        })
      ],
      tl: {
        hd: [
          "assign",
          (function (param) {
            return {
              TAG: /* Eq */ 0,
              _0: {
                a: 1
              },
              _1: Object.assign({}, {
                a: 1
              })
            };
          })
        ],
        tl: {
          hd: [
            "merge",
            (function (param) {
              const original = {
                a: 1
              };
              return {
                TAG: /* Eq */ 0,
                _0: {
                  a: 2
                },
                _1: Object.assign({}, original, {
                  a: 2
                })
              };
            })
          ],
          tl: {
            hd: [
              "merge-preserves-original",
              (function (param) {
                const original = {
                  a: 1
                };
                Object.assign({}, original, {
                  a: 2
                });
                return {
                  TAG: /* Eq */ 0,
                  _0: {
                    a: 1
                  },
                  _1: original
                };
              })
            ],
            tl: /* [] */ 0
          }
        }
      }
    }
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Js_obj_test", suites);

module.exports = {
  f,
  f_js,
  suites,
}
/*  Not a pure module */
