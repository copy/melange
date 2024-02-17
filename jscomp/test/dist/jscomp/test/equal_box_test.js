// Generated by Melange
'use strict';

const Caml_int64 = require("melange.js/caml_int64.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Mt = require("./mt.js");

const aa = Caml_obj.caml_equal_null;

const bb = Caml_obj.caml_equal_undefined;

const cc = Caml_obj.caml_equal_nullable;

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

function f(param) {
  
}

function shouldBeNull(param) {
  return null;
}

b("File \"jscomp/test/equal_box_test.ml\", line 21, characters 4-11", 3 !== null);

b("File \"jscomp/test/equal_box_test.ml\", line 22, characters 4-11", !Caml_obj.caml_equal_null(undefined, null));

b("File \"jscomp/test/equal_box_test.ml\", line 23, characters 4-11", "3" !== null);

b("File \"jscomp/test/equal_box_test.ml\", line 24, characters 4-11", /* '3' */51 !== null);

b("File \"jscomp/test/equal_box_test.ml\", line 25, characters 4-11", !Caml_int64.equal_null(Caml_int64.zero, null));

b("File \"jscomp/test/equal_box_test.ml\", line 26, characters 4-11", 0 !== null);

b("File \"jscomp/test/equal_box_test.ml\", line 27, characters 4-11", true);

b("File \"jscomp/test/equal_box_test.ml\", line 28, characters 4-11", !Caml_obj.caml_equal_null(undefined, null));

b("File \"jscomp/test/equal_box_test.ml\", line 29, characters 4-11", Caml_obj.caml_equal_null(null, null));

b("File \"jscomp/test/equal_box_test.ml\", line 30, characters 4-11", true);

b("File \"jscomp/test/equal_box_test.ml\", line 31, characters 4-11", Caml_obj.caml_equal_null(undefined, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 32, characters 4-11", !Caml_obj.caml_equal_null(3, undefined));

const v = null;

b("File \"jscomp/test/equal_box_test.ml\", line 36, characters 4-11", 3 !== v);

b("File \"jscomp/test/equal_box_test.ml\", line 37, characters 4-11", !Caml_obj.caml_equal_nullable(undefined, v));

b("File \"jscomp/test/equal_box_test.ml\", line 38, characters 4-11", "3" !== v);

b("File \"jscomp/test/equal_box_test.ml\", line 39, characters 4-11", /* '3' */51 !== v);

b("File \"jscomp/test/equal_box_test.ml\", line 40, characters 4-11", !Caml_int64.equal_nullable(Caml_int64.zero, v));

b("File \"jscomp/test/equal_box_test.ml\", line 41, characters 4-11", 0 !== v);

b("File \"jscomp/test/equal_box_test.ml\", line 42, characters 4-11", 0 !== v);

b("File \"jscomp/test/equal_box_test.ml\", line 43, characters 4-11", !Caml_obj.caml_equal_nullable(undefined, v));

b("File \"jscomp/test/equal_box_test.ml\", line 44, characters 4-11", Caml_obj.caml_equal_nullable(null, v));

b("File \"jscomp/test/equal_box_test.ml\", line 45, characters 4-11", true);

b("File \"jscomp/test/equal_box_test.ml\", line 46, characters 4-11", Caml_obj.caml_equal_nullable(undefined, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 47, characters 4-11", !Caml_obj.caml_equal_nullable(3, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 52, characters 4-11", 3 !== undefined);

b("File \"jscomp/test/equal_box_test.ml\", line 53, characters 4-11", Caml_obj.caml_equal_undefined(undefined, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 54, characters 4-11", "3" !== undefined);

b("File \"jscomp/test/equal_box_test.ml\", line 55, characters 4-11", /* '3' */51 !== undefined);

b("File \"jscomp/test/equal_box_test.ml\", line 56, characters 4-11", !Caml_int64.equal_undefined(Caml_int64.zero, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 57, characters 4-11", 0 !== undefined);

b("File \"jscomp/test/equal_box_test.ml\", line 58, characters 4-11", true);

b("File \"jscomp/test/equal_box_test.ml\", line 59, characters 4-11", Caml_obj.caml_equal_undefined(undefined, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 63, characters 4-11", !Caml_obj.caml_equal_undefined(null, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 64, characters 4-11", true);

b("File \"jscomp/test/equal_box_test.ml\", line 65, characters 4-11", Caml_obj.caml_equal_undefined(undefined, undefined));

b("File \"jscomp/test/equal_box_test.ml\", line 66, characters 4-11", !Caml_obj.caml_equal_undefined(3, undefined));

Mt.from_pair_suites("File \"jscomp/test/equal_box_test.ml\", line 71, characters 23-30", suites.contents);

exports.aa = aa;
exports.bb = bb;
exports.cc = cc;
exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.f = f;
exports.shouldBeNull = shouldBeNull;
/*  Not a pure module */
