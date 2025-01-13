// Generated by Melange
'use strict';

const Js__Js_types = require("melange.js/js_types.js");
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

eq("File \"jscomp/test/gpr_1658_test.ml\", line 11, characters 7-14", null, null);

const match = Js__Js_types.classify(null);

if (/* tag */(typeof match === "number" || typeof match === "string") && match === /* JSNull */2) {
  eq("File \"jscomp/test/gpr_1658_test.ml\", line 14, characters 11-18", true, true);
} else {
  eq("File \"jscomp/test/gpr_1658_test.ml\", line 16, characters 11-18", true, false);
}

eq("File \"jscomp/test/gpr_1658_test.ml\", line 17, characters 7-14", true, Js__Js_types.test(null, /* Null */1));

Mt.from_pair_suites("File \"jscomp/test/gpr_1658_test.ml\", line 19, characters 22-29", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */
