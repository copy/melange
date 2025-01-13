// Generated by Melange
'use strict';

const Array_data_util = require("./array_data_util.js");
const Belt__Belt_Array = require("melange.belt/belt_Array.js");
const Belt__Belt_HashSetInt = require("melange.belt/belt_HashSetInt.js");
const Belt__Belt_SetInt = require("melange.belt/belt_SetInt.js");
const Belt__Belt_SortArrayInt = require("melange.belt/belt_SortArrayInt.js");
const Belt__Belt_internalBucketsType = require("melange.belt/belt_internalBucketsType.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

function add(x, y) {
  return x + y | 0;
}

function sum2(h) {
  const v = {
    contents: 0
  };
  Belt__Belt_HashSetInt.forEach(h, (function (x) {
        v.contents = v.contents + x | 0;
      }));
  return v.contents;
}

const u = Belt__Belt_Array.concat(Array_data_util.randomRange(30, 100), Array_data_util.randomRange(40, 120));

const v = Belt__Belt_HashSetInt.fromArray(u);

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 19, characters 5-12", v.size, 91);

const xs = Belt__Belt_SetInt.toArray(Belt__Belt_SetInt.fromArray(Belt__Belt_HashSetInt.toArray(v)));

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 21, characters 5-12", xs, Array_data_util.range(30, 120));

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 23, characters 5-12", Belt__Belt_HashSetInt.reduce(v, 0, add), 6825);

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 24, characters 5-12", sum2(v), 6825);

const u$1 = Belt__Belt_Array.concat(Array_data_util.randomRange(0, 100000), Array_data_util.randomRange(0, 100));

const v$1 = Belt__Belt_internalBucketsType.make(undefined, undefined, 40);

Belt__Belt_HashSetInt.mergeMany(v$1, u$1);

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 30, characters 5-12", v$1.size, 100001);

for (let i = 0; i <= 1000; ++i) {
  Belt__Belt_HashSetInt.remove(v$1, i);
}

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 34, characters 5-12", v$1.size, 99000);

for (let i$1 = 0; i$1 <= 2000; ++i$1) {
  Belt__Belt_HashSetInt.remove(v$1, i$1);
}

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 38, characters 5-12", v$1.size, 98000);

const u0 = Belt__Belt_HashSetInt.fromArray(Array_data_util.randomRange(0, 100000));

const u1 = Belt__Belt_HashSetInt.copy(u0);

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 46, characters 5-12", Belt__Belt_HashSetInt.toArray(u0), Belt__Belt_HashSetInt.toArray(u1));

for (let i$2 = 0; i$2 <= 2000; ++i$2) {
  Belt__Belt_HashSetInt.remove(u1, i$2);
}

for (let i$3 = 0; i$3 <= 1000; ++i$3) {
  Belt__Belt_HashSetInt.remove(u0, i$3);
}

const v0 = Belt__Belt_Array.concat(Array_data_util.range(0, 1000), Belt__Belt_HashSetInt.toArray(u0));

const v1 = Belt__Belt_Array.concat(Array_data_util.range(0, 2000), Belt__Belt_HashSetInt.toArray(u1));

Belt__Belt_SortArrayInt.stableSortInPlace(v0);

Belt__Belt_SortArrayInt.stableSortInPlace(v1);

eq("File \"jscomp/test/bs_hashset_int_test.ml\", line 57, characters 5-12", v0, v1);

const h = Belt__Belt_HashSetInt.fromArray(Array_data_util.randomRange(0, 1000000));

const histo = Belt__Belt_HashSetInt.getBucketHistogram(h);

b("File \"jscomp/test/bs_hashset_int_test.ml\", line 62, characters 4-11", histo.length <= 10);

Mt.from_pair_suites("Bs_hashset_int_test", suites.contents);

const $plus$plus = Belt__Belt_Array.concat;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.$plus$plus = $plus$plus;
exports.add = add;
exports.sum2 = sum2;
/* u Not a pure module */
