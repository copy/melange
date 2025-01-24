// Generated by Melange
'use strict';

const Caml_option = require("melange.js/caml_option.js");
const Mt = require("./mt.js");

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

function ok(loc, x) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Ok */ 4,
          _0: x
        };
      })
    ],
    tl: suites.contents
  };
}

const match = typeof ___undefined_value === "undefined" ? undefined : ___undefined_value;

const a = match !== undefined ? 2 : 1;

function test(param) {
  const match = typeof __DEV__ === "undefined" ? undefined : __DEV__;
  if (match !== undefined) {
    console.log("dev mode");
  } else {
    console.log("producton mode");
  }
}

function test2(param) {
  const f = typeof __filename === "undefined" ? undefined : __filename;
  if (f !== undefined) {
    console.log(f);
  } else {
    console.log("non node environment");
  }
}

function test3(param) {
  if (Caml_option.undefined_to_opt(typeof __DEV__ === "undefined" ? undefined : __DEV__) === undefined) {
    console.log("production mode");
    return;
  }
  
}

function f(x) {
  return x === undefined;
}

ok("File \"jscomp/test/undef_regression2_test.ml\", line 44, characters 5-12", a > 0);

eq("File \"jscomp/test/undef_regression2_test.ml\", line 45, characters 5-12", a, 1);

Mt.from_pair_suites("Undef_regression2_test", suites.contents);

module.exports = {
  suites,
  test_id,
  eq,
  ok,
  a,
  test,
  test2,
  test3,
  f,
}
/* match Not a pure module */
