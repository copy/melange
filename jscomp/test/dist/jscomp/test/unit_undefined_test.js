// Generated by Melange
'use strict';

const Caml_option = require("melange.js/caml_option.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function f_01(param) {
  return hi(function () {
        console.log("x");
      });
}

function u(x) {
  if (x > 3) {
    return 1;
  } else if (x < 2) {
    return 2;
  } else if (x > 4) {
    return 0;
  } else {
    return 3;
  }
}

function fx(param) {
  
}

function u0(x) {
  return Caml_option.some(x);
}

const u1 = Caml_option.some(undefined);

function u2(x) {
  return Caml_option.some(x);
}

const u3 = Caml_option.some(undefined);

eq("File \"jscomp/test/unit_undefined_test.ml\", line 31, characters 6-13", Caml_option.some(undefined), Caml_option.some(undefined));

eq("File \"jscomp/test/unit_undefined_test.ml\", line 32, characters 6-13", u1, Caml_option.some(undefined));

eq("File \"jscomp/test/unit_undefined_test.ml\", line 33, characters 6-13", Caml_option.some(undefined), Caml_option.some(undefined));

eq("File \"jscomp/test/unit_undefined_test.ml\", line 34, characters 6-13", u3, Caml_option.some(undefined));

eq("File \"jscomp/test/unit_undefined_test.ml\", line 35, characters 6-13", undefined, undefined);

Mt.from_pair_suites("jscomp/test/unit_undefined_test.ml", suites.contents);

let u4;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.f_01 = f_01;
exports.u = u;
exports.fx = fx;
exports.u0 = u0;
exports.u1 = u1;
exports.u2 = u2;
exports.u3 = u3;
exports.u4 = u4;
/*  Not a pure module */
