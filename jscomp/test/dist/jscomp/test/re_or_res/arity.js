// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");

function u(f, a, b) {
  console.log(f(a, b));
  console.log(f(a, b));
}

function u2(f, a, b) {
  console.log(Curry._2(f, a, b));
  console.log(Curry._2(f, a, b));
}

function f(x, y) {
  return x + y | 0;
}

function add(prim0, prim1) {
  return prim0 + prim1 | 0;
}

function h(u) {
  const m = u.hi;
  return m(1, 2);
}

const nested = {
  x: {
    y: 3
  }
};

function inl(param) {
  
}

function inl2(x, y) {
  return x + y | 0;
}

module.exports = {
  u,
  u2,
  f,
  add,
  h,
  nested,
  inl,
  inl2,
}
/* No side effect */
