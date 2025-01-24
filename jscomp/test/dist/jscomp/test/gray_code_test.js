// Generated by Melange
'use strict';

const Caml_bytes = require("melange.js/caml_bytes.js");
const Stdlib__Bytes = require("melange/bytes.js");

function gray_encode(b) {
  return b ^ (b >>> 1);
}

function gray_decode(n) {
  let _p = n;
  let _n = (n >>> 1);
  while (true) {
    const n$1 = _n;
    const p = _p;
    if (n$1 === 0) {
      return p;
    }
    _n = (n$1 >>> 1);
    _p = p ^ n$1;
    continue;
  };
}

function bool_string(len, n) {
  const s = Stdlib__Bytes.make(len, /* '0' */48);
  let _i = len - 1 | 0;
  let _n = n;
  while (true) {
    const n$1 = _n;
    const i = _i;
    if ((n$1 & 1) === 1) {
      Caml_bytes.set(s, i, /* '1' */49);
    }
    if (i <= 0) {
      return s;
    }
    _n = (n$1 >>> 1);
    _i = i - 1 | 0;
    continue;
  };
}

function next_power(v) {
  const v$1 = v - 1 | 0;
  const v$2 = (v$1 >>> 1) | v$1;
  const v$3 = (v$2 >>> 2) | v$2;
  const v$4 = (v$3 >>> 4) | v$3;
  const v$5 = (v$4 >>> 8) | v$4;
  const v$6 = (v$5 >>> 16) | v$5;
  return v$6 + 1 | 0;
}

module.exports = {
  gray_encode,
  gray_decode,
  bool_string,
  next_power,
}
/* No side effect */
