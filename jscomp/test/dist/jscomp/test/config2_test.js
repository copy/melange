// Generated by Melange
'use strict';


function test_v(x) {
  return x.hey(1, 2);
}

function test_vv(h) {
  const hey = h.hey;
  return hey(1, 2);
}

module.exports = {
  test_v,
  test_vv,
}
/* No side effect */
