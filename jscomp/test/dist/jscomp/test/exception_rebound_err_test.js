// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: x,
          _1: y
        };
      })
    ],
    tl: suites.contents
  };
}

const A = /* @__PURE__ */ Caml_exceptions.create("Exception_rebound_err_test.A");

const B = /* @__PURE__ */ Caml_exceptions.create("Exception_rebound_err_test.B");

const C = /* @__PURE__ */ Caml_exceptions.create("Exception_rebound_err_test.C");

function test_js_error4(param) {
  try {
    JSON.parse(" {\"x\"}");
    return 1;
  }
  catch (raw_e){
    const e = Caml_js_exceptions.internalToOCamlException(raw_e);
    if (e.MEL_EXN_ID === Stdlib.Not_found) {
      return 2;
    }
    if (e.MEL_EXN_ID === Stdlib.Invalid_argument && e._1 === "x") {
      return 3;
    }
    if (e.MEL_EXN_ID === A) {
      if (e._1 !== 2) {
        return 7;
      } else {
        return 4;
      }
    } else if (e.MEL_EXN_ID === B) {
      return 5;
    } else if (e.MEL_EXN_ID === C && !(e._1 !== 1 || e._2 !== 2)) {
      return 6;
    } else {
      return 7;
    }
  }
}

function f(g) {
  try {
    return Curry._1(g, undefined);
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Not_found) {
      return 1;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

eq("File \"jscomp/test/exception_rebound_err_test.ml\", line 24, characters 6-13", test_js_error4(undefined), 7);

Mt.from_pair_suites("Exception_rebound_err_test", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  A,
  B,
  C,
  test_js_error4,
  f,
}
/*  Not a pure module */
