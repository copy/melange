// Generated by Melange
'use strict';


function odd(_z) {
  while (true) {
    const z = _z;
    const even = Math.imul(z, z);
    const a = (even + 4 | 0) + even | 0;
    console.log(String(a));
    _z = 32;
    continue;
  };
}

const even = odd;

exports.odd = odd;
exports.even = even;
/* No side effect */
