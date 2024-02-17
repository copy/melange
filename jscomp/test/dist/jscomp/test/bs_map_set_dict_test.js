// Generated by Melange
'use strict';

const Array_data_util = require("./array_data_util.js");
const Belt__Belt_Array = require("melange.belt/belt_Array.js");
const Belt__Belt_Id = require("melange.belt/belt_Id.js");
const Belt__Belt_List = require("melange.belt/belt_List.js");
const Belt__Belt_Map = require("melange.belt/belt_Map.js");
const Belt__Belt_MapDict = require("melange.belt/belt_MapDict.js");
const Belt__Belt_SetDict = require("melange.belt/belt_SetDict.js");
const Caml = require("melange.js/caml.js");
const Mt = require("./mt.js");

const suites = {
  contents: /* [] */0
};

const test_id = {
  contents: 0
};

function eq(loc, x, y) {
  Mt.eq_suites(test_id, suites, loc, x, y);
}

function b(loc, v) {
  Mt.bool_suites(test_id, suites, loc, v);
}

const Icmp = Belt__Belt_Id.comparable(Caml.caml_int_compare);

const Icmp2 = Belt__Belt_Id.comparable(Caml.caml_int_compare);

const Ic3 = Belt__Belt_Id.comparable(Caml.caml_int_compare);

const m0_cmp = Icmp.cmp;

const m0 = {
  cmp: m0_cmp,
  data: undefined
};

const m00_cmp = Ic3.cmp;

const m00 = {
  cmp: m00_cmp,
  data: undefined
};

const I2 = Belt__Belt_Id.comparable(function (x, y) {
      return Caml.caml_int_compare(y, x);
    });

const m_cmp = Icmp2.cmp;

const m = {
  cmp: m_cmp,
  data: undefined
};

const m2_cmp = I2.cmp;

const m2 = {
  cmp: m2_cmp,
  data: undefined
};

let data;

Belt__Belt_Map.getId(m2);

const m_dict = Belt__Belt_Map.getId(m);

for(let i = 0; i <= 100000; ++i){
  data = Belt__Belt_MapDict.set(data, i, i, m_dict.cmp);
}

const data$1 = data;

const newm_cmp = m_dict.cmp;

const newm = {
  cmp: newm_cmp,
  data: data$1
};

console.log(newm);

const m11 = Belt__Belt_MapDict.set(undefined, 1, 1, Icmp.cmp);

console.log(m11);

const m_dict$1 = Belt__Belt_Map.getId(m);

const cmp = m_dict$1.cmp;

let data$2;

for(let i$1 = 0; i$1 <= 100000; ++i$1){
  data$2 = Belt__Belt_SetDict.add(data$2, i$1, cmp);
}

console.log(data$2);

function f(param) {
  return Belt__Belt_Map.fromArray(param, Icmp);
}

function $eq$tilde(a, b) {
  return function (param) {
    return Belt__Belt_Map.eq(a, b, param);
  };
}

const u0 = f(Belt__Belt_Array.map(Array_data_util.randomRange(0, 39), (function (x) {
            return [
                    x,
                    x
                  ];
          })));

const u1 = Belt__Belt_Map.set(u0, 39, 120);

b("File \"jscomp/test/bs_map_set_dict_test.ml\", line 80, characters 4-11", Belt__Belt_Array.every2(Belt__Belt_MapDict.toArray(u0.data), Belt__Belt_Array.map(Array_data_util.range(0, 39), (function (x) {
                return [
                        x,
                        x
                      ];
              })), (function (param, param$1) {
            if (param[0] === param$1[0]) {
              return param[1] === param$1[1];
            } else {
              return false;
            }
          })));

b("File \"jscomp/test/bs_map_set_dict_test.ml\", line 85, characters 4-11", Belt__Belt_List.every2(Belt__Belt_MapDict.toList(u0.data), Belt__Belt_List.fromArray(Belt__Belt_Array.map(Array_data_util.range(0, 39), (function (x) {
                    return [
                            x,
                            x
                          ];
                  }))), (function (param, param$1) {
            if (param[0] === param$1[0]) {
              return param[1] === param$1[1];
            } else {
              return false;
            }
          })));

eq("File \"jscomp/test/bs_map_set_dict_test.ml\", line 90, characters 5-12", Belt__Belt_Map.get(u0, 39), 39);

eq("File \"jscomp/test/bs_map_set_dict_test.ml\", line 91, characters 5-12", Belt__Belt_Map.get(u1, 39), 120);

const u = f(Belt__Belt_Array.makeByAndShuffle(10000, (function (x) {
            return [
                    x,
                    x
                  ];
          })));

eq("File \"jscomp/test/bs_map_set_dict_test.ml\", line 97, characters 4-11", Belt__Belt_Array.makeBy(10000, (function (x) {
            return [
                    x,
                    x
                  ];
          })), Belt__Belt_MapDict.toArray(u.data));

Mt.from_pair_suites("Bs_map_set_dict_test", suites.contents);

let vv;

let vv2;

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.b = b;
exports.Icmp = Icmp;
exports.Icmp2 = Icmp2;
exports.Ic3 = Ic3;
exports.m0 = m0;
exports.m00 = m00;
exports.I2 = I2;
exports.m = m;
exports.m2 = m2;
exports.vv = vv;
exports.vv2 = vv2;
exports.f = f;
exports.$eq$tilde = $eq$tilde;
/* Icmp Not a pure module */
