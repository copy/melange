// Generated by Melange
'use strict';

const Caml = require("melange.js/caml.js");
const Caml_bytes = require("melange.js/caml_bytes.js");
const Caml_exceptions = require("melange.js/caml_exceptions.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");
const Mt = require("./mt.js");
const Stdlib__Bytes = require("melange/bytes.js");
const Stdlib__Char = require("melange/char.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function escaped(s) {
  let n = 0;
  for (let i = 0 ,i_finish = s.length; i < i_finish; ++i) {
    const match = s[i];
    n = n + (
      match >= 32 ? (
          match > 92 || match < 34 ? (
              match >= 127 ? 4 : 1
            ) : (
              match > 91 || match < 35 ? 2 : 1
            )
        ) : (
          match >= 11 ? (
              match !== 13 ? 4 : 2
            ) : (
              match >= 8 ? 2 : 4
            )
        )
    ) | 0;
  }
  if (n === s.length) {
    return Stdlib__Bytes.copy(s);
  }
  const s$p = Caml_bytes.caml_create_bytes(n);
  n = 0;
  for (let i$1 = 0 ,i_finish$1 = s.length; i$1 < i_finish$1; ++i$1) {
    const c = s[i$1];
    let exit = 0;
    if (c >= 35) {
      if (c !== 92) {
        if (c >= 127) {
          exit = 1;
        } else {
          s$p[n] = c;
        }
      } else {
        exit = 2;
      }
    } else if (c >= 32) {
      if (c >= 34) {
        exit = 2;
      } else {
        s$p[n] = c;
      }
    } else if (c >= 14) {
      exit = 1;
    } else {
      switch (c) {
        case 8 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 'b' */98;
            break;
        case 9 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 't' */116;
            break;
        case 10 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 'n' */110;
            break;
        case 0 :
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 6 :
        case 7 :
        case 11 :
        case 12 :
            exit = 1;
            break;
        case 13 :
            s$p[n] = /* '\\' */92;
            n = n + 1 | 0;
            s$p[n] = /* 'r' */114;
            break;
        
      }
    }
    switch (exit) {
      case 1 :
          s$p[n] = /* '\\' */92;
          n = n + 1 | 0;
          s$p[n] = 48 + (c / 100 | 0) | 0;
          n = n + 1 | 0;
          s$p[n] = 48 + (c / 10 | 0) % 10 | 0;
          n = n + 1 | 0;
          s$p[n] = 48 + c % 10 | 0;
          break;
      case 2 :
          s$p[n] = /* '\\' */92;
          n = n + 1 | 0;
          s$p[n] = c;
          break;
      
    }
    n = n + 1 | 0;
  }
  return s$p;
}

function starts_with(xs, prefix, p) {
  const H = /* @__PURE__ */Caml_exceptions.create("H");
  const len1 = xs.length;
  const len2 = prefix.length;
  if (len2 > len1) {
    return false;
  }
  try {
    for (let i = 0; i < len2; ++i) {
      if (!Curry._2(p, Caml_bytes.get(xs, i), Caml_bytes.get(prefix, i))) {
        throw new Caml_js_exceptions.MelangeError(H, {
              MEL_EXN_ID: H
            });
      }
      
    }
    return true;
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === H) {
      return false;
    }
    throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
  }
}

const a = Stdlib__Bytes.init(100, Stdlib__Char.chr);

Stdlib__Bytes.blit(a, 5, a, 10, 10);

eq("File \"jscomp/test/ext_bytes_test.ml\", line 96, characters 7-14", a, Stdlib__Bytes.of_string("\0\x01\x02\x03\x04\x05\x06\x07\b\t\x05\x06\x07\b\t\n\x0b\f\r\x0e\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abc"));

const a$1 = Stdlib__Bytes.init(100, Stdlib__Char.chr);

Stdlib__Bytes.blit(a$1, 10, a$1, 5, 10);

eq("File \"jscomp/test/ext_bytes_test.ml\", line 102, characters 7-14", a$1, Stdlib__Bytes.of_string("\0\x01\x02\x03\x04\n\x0b\f\r\x0e\x0f\x10\x11\x12\x13\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abc"));

const f = Stdlib__Char.chr;

const a$2 = Caml_bytes.bytes_to_string(Stdlib__Bytes.init(100, f));

const b = Stdlib__Bytes.init(100, (function (i) {
        return /* '\000' */0;
      }));

Stdlib__Bytes.blit_string(a$2, 10, b, 5, 10);

eq("File \"jscomp/test/ext_bytes_test.ml\", line 109, characters 7-14", b, Stdlib__Bytes.of_string("\0\0\0\0\0\n\x0b\f\r\x0e\x0f\x10\x11\x12\x13\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0"));

const s = Stdlib__Bytes.init(50000, (function (i) {
        return Stdlib__Char.chr(i % 137);
      }));

const s1 = Stdlib__Bytes.to_string(s);

const s2 = Stdlib__Bytes.of_string(s1);

eq("File \"jscomp/test/ext_bytes_test.ml\", line 115, characters 7-14", s, s2);

function f$1(a, b) {
  return [
    Caml_bytes.caml_bytes_greaterthan(a, b),
    Caml_bytes.caml_bytes_greaterequal(a, b),
    Caml_bytes.caml_bytes_lessthan(a, b),
    Caml_bytes.caml_bytes_lessequal(a, b),
    Caml_bytes.caml_bytes_equal(a, b)
  ];
}

function f_0(a, b) {
  return [
    Caml.i64_gt(a, b),
    Caml.i64_ge(a, b),
    Caml.i64_lt(a, b),
    Caml.i64_le(a, b),
    Caml.i64_eq(a, b)
  ];
}

Mt.from_pair_suites("Ext_bytes_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.escaped = escaped;
exports.starts_with = starts_with;
exports.f = f$1;
exports.f_0 = f_0;
/* a Not a pure module */
