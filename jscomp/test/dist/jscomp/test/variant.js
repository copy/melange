// Generated by Melange
'use strict';

const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Caml_obj = require("melange.js/caml_obj.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");

function foo(n) {
  if (typeof n === "number") {
    if (n === /* A1 */0) {
      return 1;
    } else {
      return 2;
    }
  }
  switch (n.TAG | 0) {
    case /* B */0 :
        return n._0;
    case /* C */1 :
        return n._0 + n._1 | 0;
    case /* D */2 :
        const match = n._0;
        return match[0] + match[1] | 0;
    
  }
}

function fooA1(param) {
  if (typeof param === "number" && !param) {
    return 1;
  } else {
    return 42;
  }
}

function fooC(param) {
  if (typeof param === "number" || param.TAG !== /* C */1) {
    return 42;
  } else {
    return param._0 + param._1 | 0;
  }
}

function switchNum(param) {
  switch (param) {
    case 0 :
        return "0";
    case 1 :
        return "1";
    case 2 :
        return "2";
    default:
      return "_";
  }
}

const same = Caml_obj.caml_equal;

const compare = Caml_obj.caml_compare;

const Path = {
  same: same,
  compare: compare
};

function Make(M) {
  const find = function (x) {
    
  };
  return {
          find: find
        };
}

function find(x) {
  
}

const M = {
  find: find
};

function rollback_path(subst, p) {
  try {
    return "try";
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Not_found) {
      switch (p.TAG | 0) {
        case /* Pdot */1 :
            return "Pdot";
        case /* Pident */0 :
        case /* Papply */2 :
            return "Pident | Papply";
        
      }
    } else {
      throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
    }
  }
}

const EA1 = /* @__PURE__ */Caml_exceptions.create("Variant.EA1");

const EA2 = /* @__PURE__ */Caml_exceptions.create("Variant.EA2");

const EB = /* @__PURE__ */Caml_exceptions.create("Variant.EB");

const EC = /* @__PURE__ */Caml_exceptions.create("Variant.EC");

const ED = /* @__PURE__ */Caml_exceptions.create("Variant.ED");

function fooExn(f) {
  try {
    return Curry._1(f, undefined);
  }
  catch (raw_n){
    const n = Caml_js_exceptions.internalToOCamlException(raw_n);
    if (n.MEL_EXN_ID === EA1) {
      return 1;
    }
    if (n.MEL_EXN_ID === EA2) {
      return 2;
    }
    if (n.MEL_EXN_ID === EB) {
      return n._1;
    }
    if (n.MEL_EXN_ID === EC) {
      return n._1 + n._2 | 0;
    }
    if (n.MEL_EXN_ID === ED) {
      const match = n._1;
      return match[0] + match[1] | 0;
    }
    throw new Caml_js_exceptions.MelangeError(n.MEL_EXN_ID, n);
  }
}

const a1 = /* A1 */0;

const a2 = /* A2 */1;

const b = {
  TAG: /* B */0,
  _0: 34
};

const c = {
  TAG: /* C */1,
  _0: 4,
  _1: 2
};

const d = {
  TAG: /* D */2,
  _0: [
    4,
    2
  ]
};

exports.a1 = a1;
exports.a2 = a2;
exports.b = b;
exports.c = c;
exports.d = d;
exports.foo = foo;
exports.fooA1 = fooA1;
exports.fooC = fooC;
exports.switchNum = switchNum;
exports.Path = Path;
exports.Make = Make;
exports.M = M;
exports.rollback_path = rollback_path;
exports.EA1 = EA1;
exports.EA2 = EA2;
exports.EB = EB;
exports.EC = EC;
exports.ED = ED;
exports.fooExn = fooExn;
/* No side effect */
