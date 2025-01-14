// Generated by Melange
'use strict';

const Belt__Belt_Array = require("melange.belt/belt_Array.js");
const Belt__Belt_MapInt = require("melange.belt/belt_MapInt.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Js__Js_exn = require("melange.js/js_exn.js");
const Immutable = require("immutable");

const empty = new Immutable.OrderedMap();

function fromArray(kvs) {
  let v = empty;
  for (let i = 0, i_finish = kvs.length; i < i_finish; ++i) {
    const match = kvs[i];
    v = v.set(match[0], match[1]);
  }
  return v;
}

function should(b) {
  if (b) {
    return;
  }
  throw new Caml_js_exceptions.MelangeError(new Error("impossible").MEL_EXN_ID, new Error("impossible"));
}

const shuffledDataAdd = Belt__Belt_Array.makeByAndShuffle(1000001, (function (i) {
      return [
        i,
        i
      ];
    }));

function test(param) {
  const v = fromArray(shuffledDataAdd);
  for (let j = 0; j <= 1000000; ++j) {
    should(v.has(j));
  }
}

function test2(param) {
  const v = Belt__Belt_MapInt.fromArray(shuffledDataAdd);
  for (let j = 0; j <= 1000000; ++j) {
    should(Belt__Belt_MapInt.has(v, j));
  }
}

console.time("imm_map_bench.ml 44");

test(undefined);

console.timeEnd("imm_map_bench.ml 44");

console.time("imm_map_bench.ml 45");

test2(undefined);

console.timeEnd("imm_map_bench.ml 45");

const count = 1000000;

exports.empty = empty;
exports.fromArray = fromArray;
exports.should = should;
exports.count = count;
exports.shuffledDataAdd = shuffledDataAdd;
exports.test = test;
exports.test2 = test2;
/* empty Not a pure module */
