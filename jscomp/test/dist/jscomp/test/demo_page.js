// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const React = require("react");
const ReactDom = require("react-dom");

function fib(n) {
  if (n === 2 || n === 1) {
    return 1;
  } else {
    return fib(n - 1 | 0) + fib(n - 2 | 0) | 0;
  }
}

function sum(n) {
  let v = 0;
  for (let i = 0; i <= n; ++i) {
    v = v + i | 0;
  }
  return v;
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

function test_curry(x, y) {
  return x + y | 0;
}

function f(param) {
  return 32 + param | 0;
}

ReactDom.render(React.createClass({
          render: (function (param) {
            return React.DOM.div({
                  alt: "pic"
                }, React.DOM.h1(undefined, "hello react"), React.DOM.h2(undefined, "type safe!"));
          })
        }), document.getElementById("hi"));

module.exports = {
  fib,
  sum,
  map,
  test_curry,
  f,
}
/*  Not a pure module */
