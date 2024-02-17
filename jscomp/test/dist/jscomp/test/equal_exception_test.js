// Generated by Melange
'use strict';

const Caml_bytes = require("melange.js/caml_bytes.js");
const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Mt = require("./mt.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__Bytes = require("melange/bytes.js");

const v = "gso";

function is_equal(param) {
  if (Caml_bytes.get(Stdlib__Bytes.make(3, /* 'a' */97), 0) !== /* 'a' */97) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/equal_exception_test.ml",
                9,
                4
              ]
            });
  }
  if (Stdlib__Bytes.make(3, /* 'a' */97)[0] !== /* 'a' */97) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/equal_exception_test.ml",
                10,
                4
              ]
            });
  }
  const u = Stdlib__Bytes.make(3, /* 'a' */97);
  u[0] = /* 'b' */98;
  if (u[0] !== /* 'b' */98) {
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/equal_exception_test.ml",
                13,
                4
              ]
            });
  }
  
}

function is_exception(param) {
  try {
    throw new Caml_js_exceptions.MelangeError(Stdlib.Not_found, {
              MEL_EXN_ID: Stdlib.Not_found
            });
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Not_found) {
      return ;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

function is_normal_exception(_x) {
  const A = /* @__PURE__ */Caml_exceptions.create("A");
  const v = {
    MEL_EXN_ID: A,
    _1: 3
  };
  try {
    throw new Caml_js_exceptions.MelangeError(v.MEL_EXN_ID, v);
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === A) {
      if (exn._1 === 3) {
        return ;
      }
      throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

function is_arbitrary_exception(param) {
  const A = /* @__PURE__ */Caml_exceptions.create("A");
  try {
    throw new Caml_js_exceptions.MelangeError(A, {
              MEL_EXN_ID: A
            });
  }
  catch (exn){
    return ;
  }
}

const suites_0 = [
  "is_equal",
  is_equal
];

const suites_1 = {
  hd: [
    "is_exception",
    is_exception
  ],
  tl: {
    hd: [
      "is_normal_exception",
      is_normal_exception
    ],
    tl: {
      hd: [
        "is_arbitrary_exception",
        is_arbitrary_exception
      ],
      tl: /* [] */0
    }
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

const e = {
  MEL_EXN_ID: Stdlib.Not_found
};

function eq(param) {
  return param.MEL_EXN_ID === Stdlib.Not_found;
}

const Not_found = /* @__PURE__ */Caml_exceptions.create("Equal_exception_test.Not_found");

if (Caml_obj.caml_equal(e, {
        MEL_EXN_ID: Not_found
      }) !== false) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/equal_exception_test.ml",
              50,
              3
            ]
          });
}

if (Not_found === Stdlib.Not_found !== false) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/equal_exception_test.ml",
              51,
              3
            ]
          });
}

Mt.from_suites("exception", suites);

exports.v = v;
exports.is_equal = is_equal;
exports.is_exception = is_exception;
exports.is_normal_exception = is_normal_exception;
exports.is_arbitrary_exception = is_arbitrary_exception;
exports.suites = suites;
exports.e = e;
exports.eq = eq;
exports.Not_found = Not_found;
/*  Not a pure module */
