// Generated by Melange
'use strict';


const v = {
  x: (function () {
    return 3;
  }),
  say: (function (x) {
    let self = this;
    return self.x() + x | 0;
  })
};

const u = v.x() + v.say(3) | 0;

module.exports = {
  v,
  u,
}
/* v Not a pure module */
