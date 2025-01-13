// Generated by Melange
'use strict';

const Caml_int64 = require("melange.js/caml_int64.js");
const Inline_const = require("./inline_const.js");
const Mt = require("./mt.js");
const Stdlib__Int64 = require("melange/int64.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

const H = {};

const f = "hello";

const f1 = "a";

const f2 = "中文";

const f3 = "中文";

const f4 = "中文";

eq("File \"jscomp/test/inline_const_test.ml\", line 29, characters 5-12", f, "hello");

eq("File \"jscomp/test/inline_const_test.ml\", line 30, characters 5-12", f1, "a");

eq("File \"jscomp/test/inline_const_test.ml\", line 31, characters 5-12", f2, "中文");

eq("File \"jscomp/test/inline_const_test.ml\", line 32, characters 5-12", f3, "中文");

eq("File \"jscomp/test/inline_const_test.ml\", line 33, characters 5-12", f4, "中文");

eq("File \"jscomp/test/inline_const_test.ml\", line 34, characters 5-12", true, true);

eq("File \"jscomp/test/inline_const_test.ml\", line 35, characters 5-12", 1, 1);

eq("File \"jscomp/test/inline_const_test.ml\", line 36, characters 5-12", 3e-6, 0.000003);

const h = Caml_int64.add(Caml_int64.add([
          0,
          100
        ], Stdlib__Int64.one), Caml_int64.one);

Mt.from_pair_suites("File \"jscomp/test/inline_const_test.ml\", line 43, characters 22-29", suites.contents);

const f5 = true;

const f6 = 1;

const f7 = 3e-6;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.H = H;
exports.f = f;
exports.f1 = f1;
exports.f2 = f2;
exports.f3 = f3;
exports.f4 = f4;
exports.f5 = f5;
exports.f6 = f6;
exports.f7 = f7;
exports.h = h;
/*  Not a pure module */
