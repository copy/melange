// Generated by Melange
'use strict';


function f(x) {
  return x;
}

function ff(x) {
  return x;
}

function fff(x) {
  const x$1 = {
    TAG: /* A */ 0,
    _0: x
  };
  switch (x$1.TAG) {
    case /* A */ 0 :
      return x;
    case /* B */ 1 :
      return 1;
    case /* C */ 2 :
      return 2;
  }
}

function h(x) {
  if (x === "B") {
    return 1;
  } else if (x === "C") {
    return 2;
  } else {
    return 0;
  }
}

function hh(param) {
  return 3;
}

const g = h("A");

module.exports = {
  f,
  ff,
  fff,
  h,
  hh,
  g,
}
/* g Not a pure module */
