// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib__List = require("melange/list.js");

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

function f(x) {
  console.log(x);
  console.log(Stdlib__List.length(x));
  return Stdlib__List;
}

const h = f(/* [] */ 0);

const a = Curry._1(h.length, {
  hd: 1,
  tl: {
    hd: 2,
    tl: {
      hd: 3,
      tl: /* [] */ 0
    }
  }
});

eq("File \"jscomp/test/module_alias_test.ml\", line 30, characters 6-13", a, 3);

Mt.from_pair_suites("Module_alias_test", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  f,
  a,
}
/* h Not a pure module */
