// Generated by Melange
'use strict';

const Caml = require("melange.js/caml.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib__Array = require("melange/array.js");
const Stdlib__Hashtbl = require("melange/hashtbl.js");
const Stdlib__List = require("melange/list.js");
const Stdlib__MoreLabels = require("melange/moreLabels.js");

function to_list(tbl) {
  return Stdlib__Hashtbl.fold((function (k, v, acc) {
                return {
                        hd: [
                          k,
                          v
                        ],
                        tl: acc
                      };
              }), tbl, /* [] */0);
}

function f(param) {
  const tbl = Stdlib__Hashtbl.create(undefined, 17);
  Stdlib__Hashtbl.add(tbl, 1, /* '1' */49);
  Stdlib__Hashtbl.add(tbl, 2, /* '2' */50);
  return Stdlib__List.sort((function (param, param$1) {
                return Caml.caml_int_compare(param[0], param$1[0]);
              }), to_list(tbl));
}

function g(count) {
  const tbl = Stdlib__Hashtbl.create(undefined, 17);
  for(let i = 0; i <= count; ++i){
    Stdlib__Hashtbl.replace(tbl, (i << 1), String(i));
  }
  for(let i$1 = 0; i$1 <= count; ++i$1){
    Stdlib__Hashtbl.replace(tbl, (i$1 << 1), String(i$1));
  }
  const v = to_list(tbl);
  return Stdlib__Array.of_list(Stdlib__List.sort((function (param, param$1) {
                    return Caml.caml_int_compare(param[0], param$1[0]);
                  }), v));
}

const suites_0 = [
  "simple",
  (function (param) {
      return {
              TAG: /* Eq */0,
              _0: {
                hd: [
                  1,
                  /* '1' */49
                ],
                tl: {
                  hd: [
                    2,
                    /* '2' */50
                  ],
                  tl: /* [] */0
                }
              },
              _1: f(undefined)
            };
    })
];

const suites_1 = {
  hd: [
    "more_iterations",
    (function (param) {
        return {
                TAG: /* Eq */0,
                _0: Stdlib__Array.init(1001, (function (i) {
                        return [
                                (i << 1),
                                String(i)
                              ];
                      })),
                _1: g(1000)
              };
      })
  ],
  tl: {
    hd: [
      "More_labels_regressionfix_374",
      (function (param) {
          const tbl = Curry._2(Stdlib__MoreLabels.Hashtbl.create, undefined, 30);
          Stdlib__Hashtbl.add(tbl, 3, 3);
          return {
                  TAG: /* Eq */0,
                  _0: tbl.size,
                  _1: 1
                };
        })
    ],
    tl: /* [] */0
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Hashtbl_test", suites);

exports.to_list = to_list;
exports.f = f;
exports.g = g;
exports.suites = suites;
/*  Not a pure module */
