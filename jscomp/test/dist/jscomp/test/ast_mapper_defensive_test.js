// Generated by Melange
'use strict';

const Js__Js_mapper_runtime = require("melange.js/js_mapper_runtime.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function $$throw(loc, x) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* ThrowAny */ 7,
          _0: x
        };
      })
    ],
    tl: suites.contents
  };
}

const _map = {"c0":"c0","c1":"c1","c2":"c2"};

function cToJs(param) {
  return param;
}

function cFromJs(param) {
  return Js__Js_mapper_runtime.raiseWhenNotFound(_map[param]);
}

$$throw("File \"jscomp/test/ast_mapper_defensive_test.ml\", line 19, characters 15-22", (function (param) {
      cFromJs(33);
    }));

Mt.from_pair_suites("Ast_mapper_defensive_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.$$throw = $$throw;
exports.cToJs = cToJs;
exports.cFromJs = cFromJs;
/*  Not a pure module */
