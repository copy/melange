// Generated by Melange
'use strict';

const Belt__Belt_Array = require("melange.belt/belt_Array.js");

function range(i, j) {
  return Belt__Belt_Array.makeBy((j - i | 0) + 1 | 0, (function (k) {
          return k + i | 0;
        }));
}

function randomRange(i, j) {
  const v = Belt__Belt_Array.makeBy((j - i | 0) + 1 | 0, (function (k) {
          return k + i | 0;
        }));
  Belt__Belt_Array.shuffleInPlace(v);
  return v;
}

exports.range = range;
exports.randomRange = randomRange;
/* No side effect */
