// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

const v = Caml_array.make_float(5);

for (let i = 0; i <= 4; ++i) {
  v[i] = 0;
}

Caml_array.set(v, 2, 15.5);

eq("File \"jscomp/test/floatarray_test.ml\", line 15, characters 5-12", [
      v.length,
      v[2],
      Caml_array.get(v, 1)
    ], [
      5,
      15.5,
      0
    ]);

Mt.from_pair_suites("Floatarray_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/* v Not a pure module */
