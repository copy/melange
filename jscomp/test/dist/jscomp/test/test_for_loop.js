// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Curry = require("melange.js/curry.js");
const Stdlib__Array = require("melange/array.js");

function for_(x) {
  for(let i = 0 ,i_finish = (console.log("hi"), x.length); i <= i_finish; ++i){
    console.log(Caml_array.get(x, i));
  }
}

function for_2(x) {
  for(let i = 0 ,i_finish = x.length; i <= i_finish; ++i){
    console.log(Caml_array.get(x, i));
  }
}

function for_3(x) {
  const v = {
    contents: 0
  };
  const arr = Stdlib__Array.map((function (param, param$1) {
          
        }), x);
  for(let i = 0 ,i_finish = x.length; i <= i_finish; ++i){
    const j = (i << 1);
    Caml_array.set(arr, i, (function (param) {
            v.contents = v.contents + j | 0;
          }));
  }
  Stdlib__Array.iter((function (x) {
          Curry._1(x, undefined);
        }), arr);
  return v.contents;
}

function for_4(x) {
  const v = {
    contents: 0
  };
  const arr = Stdlib__Array.map((function (param, param$1) {
          
        }), x);
  for(let i = 0 ,i_finish = x.length; i <= i_finish; ++i){
    const j = (i << 1);
    const k = (j << 1);
    Caml_array.set(arr, i, (function (param) {
            v.contents = v.contents + k | 0;
          }));
  }
  Stdlib__Array.iter((function (x) {
          Curry._1(x, undefined);
        }), arr);
  return v.contents;
}

function for_5(x, u) {
  const v = {
    contents: 0
  };
  const arr = Stdlib__Array.map((function (param, param$1) {
          
        }), x);
  for(let i = 0 ,i_finish = x.length; i <= i_finish; ++i){
    const k = Math.imul((u << 1), u);
    Caml_array.set(arr, i, (function (param) {
            v.contents = v.contents + k | 0;
          }));
  }
  Stdlib__Array.iter((function (x) {
          Curry._1(x, undefined);
        }), arr);
  return v.contents;
}

function for_6(x, u) {
  const v = {
    contents: 0
  };
  const arr = Stdlib__Array.map((function (param, param$1) {
          
        }), x);
  const v4 = {
    contents: 0
  };
  const v5 = {
    contents: 0
  };
  v4.contents = v4.contents + 1 | 0;
  for(let _j = 0; _j <= 1; ++_j){
    v5.contents = v5.contents + 1 | 0;
    const v2 = {
      contents: 0
    };
    for(let i = 0 ,i_finish = x.length; i <= i_finish; ++i){
      const k = Math.imul((u << 1), u);
      const h = (v5.contents << 1);
      v2.contents = v2.contents + 1 | 0;
      Caml_array.set(arr, i, (function (param) {
              v.contents = (((((v.contents + k | 0) + v2.contents | 0) + u | 0) + v4.contents | 0) + v5.contents | 0) + h | 0;
            }));
    }
  }
  Stdlib__Array.iter((function (x) {
          Curry._1(x, undefined);
        }), arr);
  return v.contents;
}

exports.for_ = for_;
exports.for_2 = for_2;
exports.for_3 = for_3;
exports.for_4 = for_4;
exports.for_5 = for_5;
exports.for_6 = for_6;
/* No side effect */
