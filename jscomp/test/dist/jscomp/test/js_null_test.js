// Generated by Melange
'use strict';

const Caml_option = require("melange.js/caml_option.js");
const Js__Js_null = require("melange.js/js_null.js");
const Mt = require("./mt.js");

const suites_0 = [
  "toOption - empty",
  (function (param) {
    return {
      TAG: /* Eq */ 0,
      _0: undefined,
      _1: undefined
    };
  })
];

const suites_1 = {
  hd: [
    "toOption - 'a",
    (function (param) {
      return {
        TAG: /* Eq */ 0,
        _0: Caml_option.some(undefined),
        _1: Caml_option.some(undefined)
      };
    })
  ],
  tl: {
    hd: [
      "return",
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: "something",
          _1: Caml_option.null_to_opt("something")
        };
      })
    ],
    tl: {
      hd: [
        "test - empty",
        (function (param) {
          return {
            TAG: /* Eq */ 0,
            _0: true,
            _1: true
          };
        })
      ],
      tl: {
        hd: [
          "test - 'a",
          (function (param) {
            return {
              TAG: /* Eq */ 0,
              _0: false,
              _1: false
            };
          })
        ],
        tl: {
          hd: [
            "bind - empty",
            (function (param) {
              return {
                TAG: /* StrictEq */ 2,
                _0: null,
                _1: Js__Js_null.bind((function (v) {
                  return v;
                }), null)
              };
            })
          ],
          tl: {
            hd: [
              "bind - 'a",
              (function (param) {
                return {
                  TAG: /* StrictEq */ 2,
                  _0: 4,
                  _1: Js__Js_null.map((function (n) {
                    return (n << 1);
                  }), 2)
                };
              })
            ],
            tl: {
              hd: [
                "iter - empty",
                (function (param) {
                  const hit = {
                    contents: false
                  };
                  Js__Js_null.iter((function (param) {
                    hit.contents = true;
                  }), null);
                  return {
                    TAG: /* Eq */ 0,
                    _0: false,
                    _1: hit.contents
                  };
                })
              ],
              tl: {
                hd: [
                  "iter - 'a",
                  (function (param) {
                    const hit = {
                      contents: 0
                    };
                    Js__Js_null.iter((function (v) {
                      hit.contents = v;
                    }), 2);
                    return {
                      TAG: /* Eq */ 0,
                      _0: 2,
                      _1: hit.contents
                    };
                  })
                ],
                tl: {
                  hd: [
                    "fromOption - None",
                    (function (param) {
                      return {
                        TAG: /* Eq */ 0,
                        _0: null,
                        _1: Js__Js_null.fromOption(undefined)
                      };
                    })
                  ],
                  tl: {
                    hd: [
                      "fromOption - Some",
                      (function (param) {
                        return {
                          TAG: /* Eq */ 0,
                          _0: 2,
                          _1: Js__Js_null.fromOption(2)
                        };
                      })
                    ],
                    tl: /* [] */ 0
                  }
                }
              }
            }
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

Mt.from_pair_suites("Js_null_test", suites);

module.exports = {
  suites,
}
/*  Not a pure module */
