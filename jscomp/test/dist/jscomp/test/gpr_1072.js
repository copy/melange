// Generated by Melange
'use strict';


const u = {
  y: 3
};

const v_ice_cream3_0 = {
  flavor: "vanilla",
  num: 3
};

const v_ice_cream3_1 = {
  hd: {
    flavor: "x",
    num: 3
  },
  tl: {
    hd: {
      flavor: "vanilla",
      num: 3
    },
    tl: /* [] */ 0
  }
};

const v_ice_cream3 = {
  hd: v_ice_cream3_0,
  tl: v_ice_cream3_1
};

const v_ice_cream4_0 = {
  flavor: "vanilla",
  num: 3
};

const v_ice_cream4_1 = {
  hd: {
    flavor: "x",
    num: 3
  },
  tl: /* [] */ 0
};

const v_ice_cream4 = {
  hd: v_ice_cream4_0,
  tl: v_ice_cream4_1
};

const vv = {
  x: 3
};

const int_expect = {
  x: 0
};

const int_expect2 = {
  x: 0
};

const int_expects_0 = {};

const int_expects_1 = {
  hd: {
    x: 2
  },
  tl: {
    hd: {
      x: 3
    },
    tl: /* [] */ 0
  }
};

const int_expects = {
  hd: int_expects_0,
  tl: int_expects_1
};

const mk_ice = {
  flavour: "vanilla",
  num: 3
};

const my_ice2 = {
  flavour: "vanilla",
  num: 1
};

const my_ice3 = {
  num: 2
};

const v_mk4 = {
  y: 3
};

const v_mk5 = {
  x: undefined,
  y: 3
};

const v_mk6 = {
  y: 3
};

const v_mk6_1 = {
  x: undefined,
  y: 3
};

const mk_u = {
  x: 0
};

const v_mk7_0 = {
  y: 3
};

const v_mk7_1 = {
  hd: {
    y: 2
  },
  tl: {
    hd: {
      y: 2
    },
    tl: /* [] */ 0
  }
};

const v_mk7 = {
  hd: v_mk7_0,
  tl: v_mk7_1
};

again("a", 3);

again(undefined, 3);

again(undefined, 3);

again(undefined, 3);

again2("a", 3);

again3(3);

again3(2);

const side_effect = {
  contents: 0
};

again4(undefined, undefined, 166);

again4(undefined, undefined, 167);

again4(undefined, undefined, 168);

again4(undefined, undefined, 169);

again4(undefined, undefined, 170);

again4((side_effect.contents = side_effect.contents + 1 | 0, undefined), undefined, 171);

again4((side_effect.contents = side_effect.contents + 1 | 0, undefined), (side_effect.contents = side_effect.contents - 1 | 0, undefined), 172);

again4(undefined, (side_effect.contents = side_effect.contents - 1 | 0, undefined), 173);

again4((side_effect.contents = side_effect.contents + 1 | 0, undefined), undefined, 174);

module.exports = {
  u,
  v_ice_cream3,
  v_ice_cream4,
  vv,
  int_expect,
  int_expect2,
  int_expects,
  mk_ice,
  my_ice2,
  my_ice3,
  v_mk4,
  v_mk5,
  v_mk6,
  v_mk6_1,
  mk_u,
  v_mk7,
  side_effect,
}
/*  Not a pure module */
