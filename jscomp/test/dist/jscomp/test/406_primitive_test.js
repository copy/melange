// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
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

eq("File \"jscomp/test/406_primitive_test.ml\", line 13, characters 6-13", 32, 32);

const backend_type = {
  TAG: /* Other */ 0,
  _0: "Melange"
};

eq("File \"jscomp/test/406_primitive_test.ml\", line 24, characters 6-13", backend_type, {
  TAG: /* Other */ 0,
  _0: "Melange"
});

function f(param) {
  const A = /* @__PURE__ */ Caml_exceptions.create("A");
  try {
    for (let i = 0; i <= 200; ++i) {
      if (i === 10) {
        throw new Caml_js_exceptions.MelangeError(A, {
              MEL_EXN_ID: A,
              _1: 0
            });
      }
      
    }
    return;
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === A) {
      return;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

Mt.from_pair_suites("406_primitive_test", suites.contents);

const v = 32;

const max_array_length = /* Max_wosize */ 2147483647;

module.exports = {
  suites,
  test_id,
  eq,
  v,
  backend_type,
  max_array_length,
  f,
}
/*  Not a pure module */
