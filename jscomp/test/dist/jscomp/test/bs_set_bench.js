// Generated by Melange
'use strict';

const Belt__Belt_SetInt = require("melange.belt/belt_SetInt.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");

function bench(param) {
  let data;
  console.time("bs_set_bench.ml 7");
  for(let i = 0; i <= 1000000; ++i){
    data = Belt__Belt_SetInt.add(data, i);
  }
  console.timeEnd("bs_set_bench.ml 7");
  console.time("bs_set_bench.ml 11");
  for(let i$1 = 0; i$1 <= 1000000; ++i$1){
    if (!Belt__Belt_SetInt.has(data, i$1)) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/bs_set_bench.ml",
                  12,
                  4
                ]
              });
    }
    
  }
  console.timeEnd("bs_set_bench.ml 11");
  console.time("bs_set_bench.ml 14");
  for(let i$2 = 0; i$2 <= 1000000; ++i$2){
    data = Belt__Belt_SetInt.remove(data, i$2);
  }
  console.timeEnd("bs_set_bench.ml 14");
  if (Belt__Belt_SetInt.size(data) === 0) {
    return ;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/bs_set_bench.ml",
              17,
              2
            ]
          });
}

console.time("bs_set_bench.ml 21");

bench(undefined);

console.timeEnd("bs_set_bench.ml 21");

const count = 1000000;

exports.count = count;
exports.bench = bench;
/*  Not a pure module */
