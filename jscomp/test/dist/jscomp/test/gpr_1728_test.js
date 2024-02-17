// Generated by Melange
'use strict';

const Caml_format = require("melange.js/caml_format.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
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
                  TAG: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    tl: suites.contents
  };
}

function foo(x) {
  return Caml_format.caml_int_of_string(x) !== 3;
}

function badInlining(obj) {
  const x = obj.field;
  Caml_format.caml_int_of_string(x) !== 3;
}

eq("File \"jscomp/test/gpr_1728_test.ml\", line 17, characters 6-13", badInlining({
          field: "3"
        }), undefined);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 19, characters 6-13", Caml_format.caml_int_of_string("-13"), -13);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 20, characters 6-13", Caml_format.caml_int_of_string("+13"), 13);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 21, characters 6-13", Caml_format.caml_int_of_string("13"), 13);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 22, characters 6-13", Caml_format.caml_int_of_string("0u32"), 32);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 23, characters 6-13", Caml_format.caml_int_of_string("-0u32"), -32);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 24, characters 6-13", Caml_format.caml_int_of_string("+0u32"), 32);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 25, characters 6-13", Caml_format.caml_int_of_string("+0x32"), 50);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 26, characters 6-13", Caml_format.caml_int_of_string("-0x32"), -50);

eq("File \"jscomp/test/gpr_1728_test.ml\", line 27, characters 6-13", Caml_format.caml_int_of_string("0x32"), 50);

Mt.from_pair_suites("Gpr_1728_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.foo = foo;
exports.badInlining = badInlining;
/*  Not a pure module */
