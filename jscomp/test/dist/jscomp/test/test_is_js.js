// Generated by Melange
'use strict';

const Mt = require("./mt.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function b(loc, x) {
  Mt.bool_suites(test_id, suites, loc, x);
}

b("File \"jscomp/test/test_is_js.ml\", line 9, characters 2-9", true);

b("File \"jscomp/test/test_is_js.ml\", line 12, characters 2-9", true);

Mt.from_pair_suites("Test_is_js", suites.contents);

/*  Not a pure module */
