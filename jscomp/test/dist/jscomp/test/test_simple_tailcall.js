// Generated by Melange
'use strict';


function tailcall(x) {
  while (true) {
    continue;
  };
}

function non_length(x) {
  if (x) {
    return 1 + non_length(x.tl) | 0;
  } else {
    return 0;
  }
}

function length(_acc, _x) {
  while (true) {
    const x = _x;
    const acc = _acc;
    if (!x) {
      return acc;
    }
    const match = x.tl;
    if (match) {
      return 1 + length(acc + 1 | 0, match.tl) | 0;
    }
    _x = x.tl;
    _acc = acc + 1 | 0;
    continue;
  };
}

module.exports = {
  tailcall,
  non_length,
  length,
}
/* No side effect */
