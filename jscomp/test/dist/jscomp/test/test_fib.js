// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");

function fib(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
  }
}

function fib2(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else {
    return fib2(n - 1 | 0) + fib2(n - 2 | 0) | 0;
  }
}

let v = 0;

for (let i = 0; i <= 10; ++i) {
  v = v + i | 0;
}

const sum = v;

let v$1 = 0;

for (let i$1 = 10; i$1 >= 0; --i$1) {
  v$1 = v$1 + i$1 | 0;
}

const sumdown = v$1;

function cons(x, y) {
  return {
    TAG: /* Cons */ 0,
    _0: x,
    _1: y
  };
}

function length(x) {
  if (/* tag */ typeof x === "number" || typeof x === "string") {
    return 0;
  } else {
    return 1 + length(x._1) | 0;
  }
}

function map(f, x) {
  if (/* tag */ typeof x === "number" || typeof x === "string") {
    return /* Nil */ 0;
  } else {
    return {
      TAG: /* Cons */ 0,
      _0: Curry._1(f, x._0),
      _1: map(f, x._1)
    };
  }
}

function f(x) {
  let v = x;
  let sum = 0;
  while(v > 0) {
    sum = sum + v | 0;
    v = v - 1 | 0;
  };
  return sum;
}

function fib3(n) {
  let _a = 0;
  let _b = 1;
  let _n = n;
  while(true) {
    const n$1 = _n;
    const b = _b;
    const a = _a;
    if (n$1 <= 0) {
      return a;
    }
    _n = n$1 - 1 | 0;
    _b = a + b | 0;
    _a = b;
    continue;
  };
}

const b = fib;

exports.fib = fib;
exports.fib2 = fib2;
exports.b = b;
exports.sum = sum;
exports.sumdown = sumdown;
exports.cons = cons;
exports.length = length;
exports.map = map;
exports.f = f;
exports.fib3 = fib3;
/*  Not a pure module */
