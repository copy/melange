// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Stdlib__List = require("melange/list.js");

function fib(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else {
    return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
  }
}

function cons(x, y) {
  return {
    TAG: /* Cons */ 0,
    _0: x,
    _1: y
  };
}

function map(f, param) {
  if (/* tag */ typeof param === "number" || typeof param === "string") {
    return /* Nil */ 0;
  } else {
    return {
      TAG: /* Cons */ 0,
      _0: Curry._1(f, param._0),
      _1: map(f, param._1)
    };
  }
}

function sum(n) {
  let v = 0;
  for (let i = 0; i <= n; ++i) {
    v = v + i | 0;
  }
  return v;
}

function f(x, y) {
  return function (z) {
    return (x + y | 0) + z | 0;
  };
}

function g(x, y) {
  const u = x + y | 0;
  return function (z) {
    return u + z | 0;
  };
}

function g1(x, y) {
  const u = x + y | 0;
  return function (xx, yy) {
    return (xx + yy | 0) + u | 0;
  };
}

const u = 8;

const x = u + 6 | 0;

const u$1 = 7;

function v(param) {
  return (6 + param | 0) + u$1 | 0;
}

const nil = /* Nil */ 0;

const len = Stdlib__List.length;

module.exports = {
  fib,
  nil,
  cons,
  map,
  sum,
  len,
  f,
  g,
  g1,
  x,
  v,
}
/* No side effect */
