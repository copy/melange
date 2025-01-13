// Generated by Melange
'use strict';

const Array_data_util = require("./array_data_util.js");
const Belt__Belt_Array = require("melange.belt/belt_Array.js");
const Belt__Belt_Range = require("melange.belt/belt_Range.js");
const Belt__Belt_SortArray = require("melange.belt/belt_SortArray.js");
const Belt__Belt_SortArrayInt = require("melange.belt/belt_SortArrayInt.js");
const Caml = require("melange.js/caml.js");
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

function cmp(x, y) {
  return x - y | 0;
}

function unions(xs, ys) {
  const lenX = xs.length;
  const lenY = ys.length;
  const o = new Array(lenX + lenY | 0);
  const v = Belt__Belt_SortArray.union(xs, 0, lenX, ys, 0, lenY, o, 0, cmp);
  o.length = v;
  return o;
}

function inters(xs, ys) {
  const lenX = xs.length;
  const lenY = ys.length;
  const o = new Array(lenX);
  const v = Belt__Belt_SortArray.intersect(xs, 0, lenX, ys, 0, lenY, o, 0, cmp);
  o.length = v;
  return o;
}

function diffs(xs, ys) {
  const lenX = xs.length;
  const lenY = ys.length;
  const o = new Array(lenX);
  const v = Belt__Belt_SortArray.diff(xs, 0, lenX, ys, 0, lenY, o, 0, cmp);
  o.length = v;
  return o;
}

eq("File \"jscomp/test/bs_sort_test.ml\", line 32, characters 5-12", unions(Array_data_util.range(1, 10), Array_data_util.range(3, 13)), Array_data_util.range(1, 13));

eq("File \"jscomp/test/bs_sort_test.ml\", line 33, characters 5-12", unions(Array_data_util.range(1, 10), Array_data_util.range(9, 13)), Array_data_util.range(1, 13));

eq("File \"jscomp/test/bs_sort_test.ml\", line 34, characters 5-12", unions(Array_data_util.range(8, 10), Array_data_util.range(9, 13)), Array_data_util.range(8, 13));

eq("File \"jscomp/test/bs_sort_test.ml\", line 35, characters 5-12", unions(Array_data_util.range(0, 2), Array_data_util.range(4, 7)), [
      0,
      1,
      2,
      4,
      5,
      6,
      7
    ]);

eq("File \"jscomp/test/bs_sort_test.ml\", line 39, characters 5-12", inters(Array_data_util.range(1, 10), Array_data_util.range(3, 13)), Array_data_util.range(3, 10));

eq("File \"jscomp/test/bs_sort_test.ml\", line 40, characters 5-12", inters(Array_data_util.range(1, 10), Array_data_util.range(9, 13)), Array_data_util.range(9, 10));

eq("File \"jscomp/test/bs_sort_test.ml\", line 41, characters 5-12", inters(Array_data_util.range(8, 10), Array_data_util.range(9, 13)), Array_data_util.range(9, 10));

eq("File \"jscomp/test/bs_sort_test.ml\", line 42, characters 5-12", inters(Array_data_util.range(0, 2), Array_data_util.range(4, 7)), []);

eq("File \"jscomp/test/bs_sort_test.ml\", line 45, characters 5-12", diffs(Array_data_util.range(1, 10), Array_data_util.range(3, 13)), Array_data_util.range(1, 2));

eq("File \"jscomp/test/bs_sort_test.ml\", line 46, characters 5-12", diffs(Array_data_util.range(1, 10), Array_data_util.range(9, 13)), Array_data_util.range(1, 8));

eq("File \"jscomp/test/bs_sort_test.ml\", line 47, characters 5-12", diffs(Array_data_util.range(8, 10), Array_data_util.range(9, 13)), Array_data_util.range(8, 8));

eq("File \"jscomp/test/bs_sort_test.ml\", line 48, characters 5-12", diffs(Array_data_util.range(0, 2), Array_data_util.range(4, 7)), [
      0,
      1,
      2
    ]);

b("File \"jscomp/test/bs_sort_test.ml\", line 50, characters 4-11", Belt__Belt_Range.every(0, 200, (function (i) {
          const v = Array_data_util.randomRange(0, i);
          Belt__Belt_SortArray.stableSortInPlaceBy(v, cmp);
          return Belt__Belt_SortArray.isSorted(v, cmp);
        })));

b("File \"jscomp/test/bs_sort_test.ml\", line 56, characters 4-11", Belt__Belt_Range.every(0, 200, (function (i) {
          const v = Array_data_util.randomRange(0, i);
          Belt__Belt_SortArray.stableSortInPlaceBy(v, cmp);
          return Belt__Belt_SortArray.isSorted(v, cmp);
        })));

b("File \"jscomp/test/bs_sort_test.ml\", line 62, characters 4-11", Belt__Belt_SortArray.isSorted([], cmp));

b("File \"jscomp/test/bs_sort_test.ml\", line 65, characters 4-11", Belt__Belt_SortArray.isSorted([0], cmp));

b("File \"jscomp/test/bs_sort_test.ml\", line 68, characters 4-11", Belt__Belt_SortArray.isSorted([
          0,
          1
        ], cmp));

b("File \"jscomp/test/bs_sort_test.ml\", line 70, characters 4-11", !Belt__Belt_SortArray.isSorted([
          1,
          0
        ], cmp));

const u = Array_data_util.randomRange(0, 1000000);

const u1 = u.slice(0);

const u2 = u.slice(0);

console.time("bs_sort_test.ml 80");

Belt__Belt_SortArray.stableSortInPlaceBy(u, cmp);

console.timeEnd("bs_sort_test.ml 80");

b("File \"jscomp/test/bs_sort_test.ml\", line 81, characters 4-11", Belt__Belt_SortArray.isSorted(u, cmp));

console.time("bs_sort_test.ml 82");

Belt__Belt_SortArrayInt.stableSortInPlace(u2);

console.timeEnd("bs_sort_test.ml 82");

b("File \"jscomp/test/bs_sort_test.ml\", line 83, characters 4-11", Belt__Belt_SortArray.isSorted(u2, cmp));

console.time("bs_sort_test.ml 84");

Belt__Belt_SortArray.stableSortInPlaceBy(u1, cmp);

console.timeEnd("bs_sort_test.ml 84");

b("File \"jscomp/test/bs_sort_test.ml\", line 85, characters 4-11", Belt__Belt_SortArray.isSorted(u1, cmp));

const u$1 = [
  [
    1,
    "a"
  ],
  [
    1,
    "b"
  ],
  [
    2,
    "a"
  ]
];

eq("File \"jscomp/test/bs_sort_test.ml\", line 90, characters 5-12", Belt__Belt_SortArray.stableSortBy(u$1, (function (param, param$1) {
          return param[0] - param$1[0] | 0;
        })), [
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        2,
        "a"
      ]
    ]);

const u$2 = [
  [
    1,
    "b"
  ],
  [
    1,
    "a"
  ],
  [
    1,
    "b"
  ],
  [
    2,
    "a"
  ]
];

eq("File \"jscomp/test/bs_sort_test.ml\", line 96, characters 5-12", Belt__Belt_SortArray.stableSortBy(u$2, (function (param, param$1) {
          return param[0] - param$1[0] | 0;
        })), [
      [
        1,
        "b"
      ],
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        2,
        "a"
      ]
    ]);

const u$3 = [
  [
    1,
    "c"
  ],
  [
    1,
    "b"
  ],
  [
    1,
    "a"
  ],
  [
    1,
    "b"
  ],
  [
    1,
    "c"
  ],
  [
    2,
    "a"
  ]
];

eq("File \"jscomp/test/bs_sort_test.ml\", line 102, characters 5-12", Belt__Belt_SortArray.stableSortBy(u$3, (function (param, param$1) {
          return param[0] - param$1[0] | 0;
        })), [
      [
        1,
        "c"
      ],
      [
        1,
        "b"
      ],
      [
        1,
        "a"
      ],
      [
        1,
        "b"
      ],
      [
        1,
        "c"
      ],
      [
        2,
        "a"
      ]
    ]);

eq("File \"jscomp/test/bs_sort_test.ml\", line 111, characters 5-12", Belt__Belt_SortArray.binarySearchBy([
          1,
          3,
          5,
          7
        ], 4, Caml.caml_int_compare) ^ -1, 2);

eq("File \"jscomp/test/bs_sort_test.ml\", line 112, characters 5-12", Belt__Belt_SortArray.binarySearchBy([
          1,
          2,
          3,
          4,
          33,
          35,
          36
        ], 33, cmp), 4);

eq("File \"jscomp/test/bs_sort_test.ml\", line 113, characters 5-12", Belt__Belt_SortArray.binarySearchBy([
          1,
          2,
          3,
          4,
          33,
          35,
          36
        ], 1, cmp), 0);

eq("File \"jscomp/test/bs_sort_test.ml\", line 114, characters 5-12", Belt__Belt_SortArray.binarySearchBy([
          1,
          2,
          3,
          4,
          33,
          35,
          36
        ], 2, cmp), 1);

eq("File \"jscomp/test/bs_sort_test.ml\", line 115, characters 5-12", Belt__Belt_SortArray.binarySearchBy([
          1,
          2,
          3,
          4,
          33,
          35,
          36
        ], 3, cmp), 2);

eq("File \"jscomp/test/bs_sort_test.ml\", line 116, characters 5-12", Belt__Belt_SortArray.binarySearchBy([
          1,
          2,
          3,
          4,
          33,
          35,
          36
        ], 4, cmp), 3);

const aa = Array_data_util.range(0, 1000);

b("File \"jscomp/test/bs_sort_test.ml\", line 118, characters 4-11", Belt__Belt_Range.every(0, 1000, (function (i) {
          return Belt__Belt_SortArray.binarySearchBy(aa, i, cmp) === i;
        })));

const cc = Belt__Belt_Array.map(Array_data_util.range(0, 2000), (function (x) {
      return (x << 1);
    }));

eq("File \"jscomp/test/bs_sort_test.ml\", line 123, characters 5-12", Belt__Belt_SortArray.binarySearchBy(cc, 5000, cmp) ^ -1, 2001);

eq("File \"jscomp/test/bs_sort_test.ml\", line 124, characters 5-12", Belt__Belt_SortArray.binarySearchBy(cc, -1, cmp) ^ -1, 0);

eq("File \"jscomp/test/bs_sort_test.ml\", line 125, characters 5-12", Belt__Belt_SortArray.binarySearchBy(cc, 0, cmp), 0);

eq("File \"jscomp/test/bs_sort_test.ml\", line 127, characters 5-12", Belt__Belt_SortArray.binarySearchBy(cc, 1, cmp) ^ -1, 1);

b("File \"jscomp/test/bs_sort_test.ml\", line 128, characters 4-11", Belt__Belt_Range.every(0, 1999, (function (i) {
          return (Belt__Belt_SortArray.binarySearchBy(cc, (i << 1) + 1 | 0, cmp) ^ -1) === (i + 1 | 0);
        })));

function lt(x, y) {
  return x < y;
}

eq("File \"jscomp/test/bs_sort_test.ml\", line 135, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([], lt), 0);

eq("File \"jscomp/test/bs_sort_test.ml\", line 136, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([1], lt), 1);

eq("File \"jscomp/test/bs_sort_test.ml\", line 137, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([
          1,
          1
        ], lt), 1);

eq("File \"jscomp/test/bs_sort_test.ml\", line 138, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([
          1,
          1,
          2
        ], lt), 1);

eq("File \"jscomp/test/bs_sort_test.ml\", line 139, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([
          1,
          2
        ], lt), 2);

eq("File \"jscomp/test/bs_sort_test.ml\", line 140, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([
          1,
          2,
          3,
          4,
          3
        ], lt), 4);

eq("File \"jscomp/test/bs_sort_test.ml\", line 141, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([
          4,
          4,
          3,
          2,
          1
        ], lt), 1);

eq("File \"jscomp/test/bs_sort_test.ml\", line 142, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([
          4,
          3,
          2,
          1
        ], lt), -4);

eq("File \"jscomp/test/bs_sort_test.ml\", line 143, characters 5-12", Belt__Belt_SortArray.strictlySortedLength([
          4,
          3,
          2,
          1,
          0
        ], lt), -5);

Mt.from_pair_suites("Bs_sort_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.cmp = cmp;
exports.unions = unions;
exports.inters = inters;
exports.diffs = diffs;
exports.lt = lt;
/*  Not a pure module */
