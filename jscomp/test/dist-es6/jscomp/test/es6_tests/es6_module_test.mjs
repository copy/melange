// Generated by Melange

import * as Mt from "../mt.mjs";
import * as Stdlib__List from "melange/list.mjs";

function length(param) {
  return 3;
}

Mt.from_pair_suites("Es6_module_test", {
      hd: [
        "list_length",
        (function (param) {
            return {
              TAG: /* Eq */0,
              _0: Stdlib__List.length({
                    hd: 1,
                    tl: {
                      hd: 2,
                      tl: /* [] */0
                    }
                  }),
              _1: 2
            };
          })
      ],
      tl: {
        hd: [
          "length",
          (function (param) {
              return {
                TAG: /* Eq */0,
                _0: 3,
                _1: 3
              };
            })
        ],
        tl: /* [] */0
      }
    });

export {
  length ,
}
/*  Not a pure module */
