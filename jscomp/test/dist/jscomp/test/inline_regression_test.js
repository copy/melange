// Generated by Melange
'use strict';

const Caml_string = require("melange.js/caml_string.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib__Filename = require("melange/filename.js");
const Stdlib__String = require("melange/string.js");

function generic_basename(is_dir_sep, current_dir_name, name) {
  if (name === "") {
    return current_dir_name;
  } else {
    let _n = name.length - 1 | 0;
    while (true) {
      const n = _n;
      if (n < 0) {
        return Stdlib__String.sub(name, 0, 1);
      }
      if (!Curry._2(is_dir_sep, name, n)) {
        let _n$1 = n;
        let p = n + 1 | 0;
        while (true) {
          const n$1 = _n$1;
          if (n$1 < 0) {
            return Stdlib__String.sub(name, 0, p);
          }
          if (Curry._2(is_dir_sep, name, n$1)) {
            return Stdlib__String.sub(name, n$1 + 1 | 0, (p - n$1 | 0) - 1 | 0);
          }
          _n$1 = n$1 - 1 | 0;
          continue;
        };
      }
      _n = n - 1 | 0;
      continue;
    };
  }
}

function basename(param) {
  return generic_basename((function (s, i) {
        return Caml_string.get(s, i) === /* '/' */47;
      }), Stdlib__Filename.current_dir_name, param);
}

const suites_0 = [
  "basename",
  (function (param) {
    return {
      TAG: /* Eq */ 0,
      _0: basename("b/c/a.b"),
      _1: "a.b"
    };
  })
];

const suites = {
  hd: suites_0,
  tl: /* [] */ 0
};

Mt.from_pair_suites("Inline_regression_test", suites);

exports.generic_basename = generic_basename;
exports.basename = basename;
exports.suites = suites;
/*  Not a pure module */
