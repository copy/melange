// Generated by Melange
'use strict';

const Belt__Belt_MutableQueue = require("melange.belt/belt_MutableQueue.js");
const Belt__Belt_MutableStack = require("melange.belt/belt_MutableStack.js");
const Js__Js_undefined = require("melange.js/js_undefined.js");
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

function inOrder(v) {
  let current = v;
  const s = {
    root: undefined
  };
  const q = {
    length: 0,
    first: undefined,
    last: undefined
  };
  while(current !== undefined) {
    const v$1 = current;
    Belt__Belt_MutableStack.push(s, v$1);
    current = v$1.left;
  };
  while(s.root !== undefined) {
    current = Belt__Belt_MutableStack.popUndefined(s);
    const v$2 = current;
    Belt__Belt_MutableQueue.add(q, v$2.value);
    current = v$2.right;
    while(current !== undefined) {
      const v$3 = current;
      Belt__Belt_MutableStack.push(s, v$3);
      current = v$3.left;
    };
  };
  return Belt__Belt_MutableQueue.toArray(q);
}

function inOrder3(v) {
  let current = v;
  const s = {
    root: undefined
  };
  const q = {
    length: 0,
    first: undefined,
    last: undefined
  };
  while(current !== undefined) {
    const v$1 = current;
    Belt__Belt_MutableStack.push(s, v$1);
    current = v$1.left;
  };
  Belt__Belt_MutableStack.dynamicPopIter(s, (function (popped) {
          Belt__Belt_MutableQueue.add(q, popped.value);
          let current = popped.right;
          while(current !== undefined) {
            const v = current;
            Belt__Belt_MutableStack.push(s, v);
            current = v.left;
          };
        }));
  return Belt__Belt_MutableQueue.toArray(q);
}

function inOrder2(v) {
  let todo = true;
  let cursor = v;
  const s = {
    root: undefined
  };
  const q = {
    length: 0,
    first: undefined,
    last: undefined
  };
  while(todo) {
    if (cursor !== undefined) {
      const v$1 = cursor;
      Belt__Belt_MutableStack.push(s, v$1);
      cursor = v$1.left;
    } else if (s.root !== undefined) {
      cursor = Belt__Belt_MutableStack.popUndefined(s);
      const current = cursor;
      Belt__Belt_MutableQueue.add(q, current.value);
      cursor = current.right;
    } else {
      todo = false;
    }
  };
}

function n(l, r, a) {
  return {
          value: a,
          left: Js__Js_undefined.fromOption(l),
          right: Js__Js_undefined.fromOption(r)
        };
}

const test1 = n(n(n(undefined, undefined, 4), n(undefined, undefined, 5), 2), n(undefined, undefined, 3), 1);

function pushAllLeft(st1, s1) {
  let current = st1;
  while(current !== undefined) {
    const v = current;
    Belt__Belt_MutableStack.push(s1, v);
    current = v.left;
  };
}

const test2 = n(n(n(n(n(undefined, undefined, 4), undefined, 2), undefined, 5), undefined, 1), undefined, 3);

const test3 = n(n(n(n(undefined, undefined, 4), undefined, 2), undefined, 5), n(undefined, undefined, 3), 1);

eq("File \"jscomp/test/bs_stack_test.ml\", line 137, characters 6-13", inOrder(test1), [
      4,
      2,
      5,
      1,
      3
    ]);

eq("File \"jscomp/test/bs_stack_test.ml\", line 140, characters 6-13", inOrder3(test1), [
      4,
      2,
      5,
      1,
      3
    ]);

Mt.from_pair_suites("jscomp/test/bs_stack_test.ml", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.inOrder = inOrder;
exports.inOrder3 = inOrder3;
exports.inOrder2 = inOrder2;
exports.n = n;
exports.test1 = test1;
exports.pushAllLeft = pushAllLeft;
exports.test2 = test2;
exports.test3 = test3;
/* test1 Not a pure module */
