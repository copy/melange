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

const u = (function fib(n){
  if(n===0||n==1){
    return 1
  }
  return fib(n-1) + fib(n-2)
}
);

eq("File \"jscomp/test/gpr_4442_test.ml\", line 14, characters 6-13", u(2), 2);

eq("File \"jscomp/test/gpr_4442_test.ml\", line 15, characters 6-13", u(3), 3);

Mt.from_pair_suites("jscomp/test/gpr_4442_test.ml", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.u = u;
/*  Not a pure module */
