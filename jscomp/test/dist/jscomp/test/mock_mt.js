// Generated by Melange
'use strict';

const Curry = require("melange.js/curry.js");
const Stdlib__List = require("melange/list.js");

function from_pair_suites(name, suites) {
  console.log([
        name,
        "testing"
      ]);
  Stdlib__List.iter((function (param) {
        const name = param[0];
        const fn = Curry._1(param[1], undefined);
        switch (fn.TAG) {
          case /* Eq */ 0 :
              console.log([
                    name,
                    fn._0,
                    "eq?",
                    fn._1
                  ]);
              return;
          case /* Neq */ 1 :
              console.log([
                    name,
                    fn._0,
                    "neq?",
                    fn._1
                  ]);
              return;
          case /* StrictEq */ 2 :
              console.log([
                    name,
                    fn._0,
                    "strict_eq?",
                    fn._1
                  ]);
              return;
          case /* StrictNeq */ 3 :
              console.log([
                    name,
                    fn._0,
                    "strict_neq?",
                    fn._1
                  ]);
              return;
          case /* Ok */ 4 :
              console.log([
                    name,
                    fn._0,
                    "ok?"
                  ]);
              return;
          case /* Approx */ 5 :
              console.log([
                    name,
                    fn._0,
                    "~",
                    fn._1
                  ]);
              return;
          case /* ApproxThreshold */ 6 :
              console.log([
                    name,
                    fn._1,
                    "~",
                    fn._2,
                    " (",
                    fn._0,
                    ")"
                  ]);
              return;
          case /* ThrowAny */ 7 :
              return;
          case /* Fail */ 8 :
              console.log("failed");
              return;
          case /* FailWith */ 9 :
              console.log("failed: " + fn._0);
              return;
          
        }
      }), suites);
}

exports.from_pair_suites = from_pair_suites;
/* No side effect */
