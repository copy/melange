// Generated by Melange
'use strict';

const Mt = require("./mt.js");

const suites = {
  contents: /* [] */ 0
};

const test_id = {
  contents: 0
};

function eq(loc, param) {
  const y = param[1];
  const x = param[0];
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + String(test_id.contents)),
      (function (param) {
        return {
          TAG: /* Eq */ 0,
          _0: x,
          _1: y
        };
      })
    ],
    tl: suites.contents
  };
}

const v5 = {
  x: 3,
  y: 3,
  setY: (function (v) {
    let self = this;
    self.y = 2;
    return [
      self.y,
      v
    ];
  }),
  say: (function () {
    let self = this;
    return self.x + self.y | 0;
  }),
  hihi: (function (u) {
    let self = this;
    return self.x + self.say() | 0;
  }),
  bark: (function () {
    console.log("bark");
  }),
  xz: (function () {
    return 3;
  })
};

const v = {
  x: 3,
  y: 0,
  reset: (function () {
    let self = this;
    self.y = 0;
  }),
  incr: (function () {
    let self = this;
    self.y = self.y + 1 | 0;
  }),
  getY: (function () {
    let self = this;
    return self.y;
  }),
  say: (function () {
    let self = this;
    return self.x + self.y | 0;
  })
};

const u = {
  incr: (function () {
    console.log("hey");
  }),
  getY: (function () {
    return 3;
  }),
  say: (function () {
    return 7;
  })
};

const test_type_1 = {
  hd: v,
  tl: /* [] */ 0
};

const test_type = {
  hd: u,
  tl: test_type_1
};

const z = {
  x: {
    contents: 3
  },
  setX: (function (x) {
    let self = this;
    self.x.contents = x;
  }),
  getX: (function () {
    let self = this;
    return self.x.contents;
  })
};

const eventObj = {
  events: [],
  empty: (function () {
    let self = this;
    self.events.splice(0);
  }),
  push: (function (a) {
    let self = this;
    self.events.push(a);
  }),
  needRebuild: (function () {
    let self = this;
    return self.events.length !== 0;
  })
};

function test__(x) {
  eventObj.push(x);
}

const zz = {
  x: 3,
  setX: (function (x) {
    let self = this;
    self.x = x;
  }),
  getX: (function () {
    let self = this;
    return self.x;
  })
};

const test_type2_1 = {
  hd: zz,
  tl: /* [] */ 0
};

const test_type2 = {
  hd: z,
  tl: test_type2_1
};

eq("File \"jscomp/test/ppx_this_obj_field.ml\", line 94, characters 5-12", [
      6,
      v5.say()
    ]);

const a = v.say();

v.incr();

const b = v.say();

v.incr();

const c = v.say();

v.incr();

eq("File \"jscomp/test/ppx_this_obj_field.ml\", line 101, characters 5-12", [
      [
        3,
        4,
        5
      ],
      [
        a,
        b,
        c
      ]
    ]);

const aa = z.getX();

z.setX(32);

const bb = z.getX();

eq("File \"jscomp/test/ppx_this_obj_field.ml\", line 105, characters 5-12", [
      [
        3,
        32
      ],
      [
        aa,
        bb
      ]
    ]);

Mt.from_pair_suites("Ppx_this_obj_field", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.v5 = v5;
exports.v = v;
exports.u = u;
exports.test_type = test_type;
exports.z = z;
exports.eventObj = eventObj;
exports.test__ = test__;
exports.zz = zz;
exports.test_type2 = test_type2;
/* v5 Not a pure module */
