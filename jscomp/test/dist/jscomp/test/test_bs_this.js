// Generated by Melange
'use strict';


function uux_this(x, y) {
  let o = this;
  return (o.length + x | 0) + y | 0;
}

function even(x) {
  let o = this;
  return x + o | 0;
}

function bark(param) {
  return function (x, y) {
    let o = this;
    console.log([
          o.length,
          o.x,
          o.y,
          x,
          y
        ]);
    return x + y | 0;
  };
}

const js_obj = {
  bark: (function (x, y) {
    let o = this;
    console.log(o);
    return x + y | 0;
  })
};

function f(x) {
  x.onload = (function () {
    let o = this;
    console.log(o);
  });
  x.addEventListener("onload", (function () {
        let o = this;
        console.log(o.response);
      }));
}

function u(x) {
  return x;
}

module.exports = {
  uux_this,
  even,
  bark,
  js_obj,
  f,
  u,
}
/* uux_this Not a pure module */
