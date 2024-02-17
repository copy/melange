// Generated by Melange
'use strict';

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

function make(x) {
  return x;
}

function get(param) {
  return param;
}

const x = "foo";

eq("File \"jscomp/test/unboxed_attribute_test.ml\", line 18, characters 3-10", x, x);

const x$1 = "foo";

eq("File \"jscomp/test/unboxed_attribute_test.ml\", line 26, characters 3-10", x$1, x$1);

const x$2 = "foo";

eq("File \"jscomp/test/unboxed_attribute_test.ml\", line 33, characters 3-10", x$2, x$2);

let y = {};

y._0 = y;

Mt.from_pair_suites("jscomp/test/unboxed_attribute_test.ml", suites.contents);

const v0 = 3;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.v0 = v0;
exports.make = make;
exports.get = get;
exports.y = y;
/*  Not a pure module */
