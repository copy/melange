// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

const T0_myList = {
  hd: 1,
  tl: {
    hd: 2,
    tl: /* [] */ 0
  }
};

const T0_tail = {
  hd: 2,
  tl: /* [] */ 0
};

const T0 = {
  myList: T0_myList,
  head: 1,
  tail: T0_tail
};

throw new Caml_js_exceptions.MelangeError("Match_failure", {
      MEL_EXN_ID: "Match_failure",
      _1: [
        "jscomp/test/gpr_4632.ml",
        12,
        6
      ]
    });

module.exports = {
  T0,
  T1,
}
/* T1 Not a pure module */
