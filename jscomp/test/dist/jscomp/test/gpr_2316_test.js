// Generated by Melange
'use strict';

const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");

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

let y;

try {
  throw new Caml_js_exceptions.MelangeError("Failure", {
        MEL_EXN_ID: "Failure",
        _1: "boo"
      });
}
catch (raw_msg){
  const msg = Caml_js_exceptions.internalToOCamlException(raw_msg);
  if (msg.MEL_EXN_ID === Stdlib.Failure) {
    y = msg._1;
  } else {
    throw new Caml_js_exceptions.MelangeError(msg.MEL_EXN_ID, msg);
  }
}

let x;

let exit = 0;

try {
  throw new Caml_js_exceptions.MelangeError("Failure", {
        MEL_EXN_ID: "Failure",
        _1: "boo"
      });
}
catch (raw_msg$1){
  const msg$1 = Caml_js_exceptions.internalToOCamlException(raw_msg$1);
  if (msg$1.MEL_EXN_ID === Stdlib.Failure) {
    x = msg$1._1;
  } else {
    throw new Caml_js_exceptions.MelangeError(msg$1.MEL_EXN_ID, msg$1);
  }
}

if (exit === 1) {
  console.log("ok");
  x = undefined;
}

eq("File \"jscomp/test/gpr_2316_test.ml\", line 20, characters 5-12", y, "boo");

eq("File \"jscomp/test/gpr_2316_test.ml\", line 21, characters 5-12", x, "boo");

Mt.from_pair_suites("Gpr_2316_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.y = y;
exports.x = x;
/* y Not a pure module */
