// Generated by Melange
'use strict';

let Caml_exceptions = require("melange.js/caml_exceptions.js");
let Mt = require("./mt.js");
let Stdlib = require("melange/stdlib.js");
let Stdlib__Printexc = require("melange/printexc.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

const A = /* @__PURE__ */Caml_exceptions.create("Exception_def.A");

const A$1 = /* @__PURE__ */Caml_exceptions.create("Exception_def.U.A");

const U = {
  A: A$1
};

const H = {};

const Bx = /* @__PURE__ */Caml_exceptions.create("Exception_def.Bx");

const u = {
  MEL_EXN_ID: Bx
};

const Ax = /* @__PURE__ */Caml_exceptions.create("Exception_def.Ax");

const XXX = /* @__PURE__ */Caml_exceptions.create("Exception_def.XXX");

const v_1 = [
  "",
  0,
  0
];

const v = {
  MEL_EXN_ID: Stdlib.Match_failure,
  _1: v_1
};

const H1 = /* @__PURE__ */Caml_exceptions.create("Exception_def.H1");

const H2 = /* @__PURE__ */Caml_exceptions.create("Exception_def.H2");

const h2 = {
  MEL_EXN_ID: H2
};

const h3 = {
  MEL_EXN_ID: H2
};

const h4 = {
  MEL_EXN_ID: Stdlib.Not_found
};

const h5 = {
  MEL_EXN_ID: Stdlib.Invalid_argument,
  _1: "xx"
};

Stdlib__Printexc.register_printer(function (param) {
      if (param.MEL_EXN_ID === A) {
        return "A";
      }
      
    });

function p(e) {
  if (e.MEL_EXN_ID === Stdlib.Invalid_argument) {
    return 0;
  } else if (e.MEL_EXN_ID === H2) {
    return 1;
  } else if (e.MEL_EXN_ID === H2) {
    return 2;
  } else if (e.MEL_EXN_ID === Stdlib.Not_found) {
    return 4;
  } else if (e.MEL_EXN_ID === Stdlib.Not_found) {
    return 3;
  } else {
    return -1;
  }
}

eq("File \"jscomp/test/exception_def.ml\", line 54, characters 6-13", p(h5), 0);

eq("File \"jscomp/test/exception_def.ml\", line 55, characters 6-13", p({
          MEL_EXN_ID: Stdlib.Not_found
        }), 4);

eq("File \"jscomp/test/exception_def.ml\", line 56, characters 6-13", p({
          MEL_EXN_ID: Stdlib.Not_found
        }), 4);

eq("File \"jscomp/test/exception_def.ml\", line 57, characters 6-13", p({
          MEL_EXN_ID: H2
        }), 1);

eq("File \"jscomp/test/exception_def.ml\", line 58, characters 6-13", p({
          MEL_EXN_ID: H2
        }), 1);

eq("File \"jscomp/test/exception_def.ml\", line 59, characters 6-13", p({
          MEL_EXN_ID: Stdlib.Invalid_argument,
          _1: ""
        }), 0);

Mt.from_pair_suites("jscomp/test/exception_def.ml", suites.contents);

const a = 3;

const Aa = Stdlib.Match_failure;

const H0 = Stdlib.Not_found;

const H3 = H2;

const H4 = Stdlib.Invalid_argument;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.A = A;
exports.U = U;
exports.H = H;
exports.Bx = Bx;
exports.a = a;
exports.u = u;
exports.Ax = Ax;
exports.XXX = XXX;
exports.Aa = Aa;
exports.v = v;
exports.H0 = H0;
exports.H1 = H1;
exports.H2 = H2;
exports.H3 = H3;
exports.h2 = h2;
exports.h3 = h3;
exports.h4 = h4;
exports.H4 = H4;
exports.h5 = h5;
exports.p = p;
/*  Not a pure module */
