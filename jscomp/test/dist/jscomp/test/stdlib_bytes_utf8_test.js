// Generated by Melange
'use strict';

const Caml_array = require("melange.js/caml_array.js");
const Caml_bytes = require("melange.js/caml_bytes.js");
const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
const Curry = require("melange.js/curry.js");
const Stdlib = require("melange/stdlib.js");
const Stdlib__Array = require("melange/array.js");
const Stdlib__Bytes = require("melange/bytes.js");
const Stdlib__List = require("melange/list.js");
const Stdlib__Printf = require("melange/printf.js");
const Stdlib__Uchar = require("melange/uchar.js");

function fold_uchars(f, acc) {
  let _acc = acc;
  let _u = Stdlib__Uchar.min;
  while(true) {
    const u = _u;
    const acc$1 = _acc;
    const acc$2 = Curry._2(f, acc$1, u);
    if (u === Stdlib__Uchar.max) {
      return acc$2;
    }
    _u = Stdlib__Uchar.succ(u);
    _acc = acc$2;
    continue ;
  };
}

const utf_8_spec_0 = [
  [
    0,
    127
  ],
  [[
      0,
      127
    ]]
];

const utf_8_spec_1 = {
  hd: [
    [
      128,
      2047
    ],
    [
      [
        194,
        223
      ],
      [
        128,
        191
      ]
    ]
  ],
  tl: {
    hd: [
      [
        2048,
        4095
      ],
      [
        [
          224,
          224
        ],
        [
          160,
          191
        ],
        [
          128,
          191
        ]
      ]
    ],
    tl: {
      hd: [
        [
          4096,
          53247
        ],
        [
          [
            225,
            236
          ],
          [
            128,
            191
          ],
          [
            128,
            191
          ]
        ]
      ],
      tl: {
        hd: [
          [
            53248,
            55295
          ],
          [
            [
              237,
              237
            ],
            [
              128,
              159
            ],
            [
              128,
              191
            ]
          ]
        ],
        tl: {
          hd: [
            [
              57344,
              65535
            ],
            [
              [
                238,
                239
              ],
              [
                128,
                191
              ],
              [
                128,
                191
              ]
            ]
          ],
          tl: {
            hd: [
              [
                65536,
                262143
              ],
              [
                [
                  240,
                  240
                ],
                [
                  144,
                  191
                ],
                [
                  128,
                  191
                ],
                [
                  128,
                  191
                ]
              ]
            ],
            tl: {
              hd: [
                [
                  262144,
                  1048575
                ],
                [
                  [
                    241,
                    243
                  ],
                  [
                    128,
                    191
                  ],
                  [
                    128,
                    191
                  ],
                  [
                    128,
                    191
                  ]
                ]
              ],
              tl: {
                hd: [
                  [
                    1048576,
                    1114111
                  ],
                  [
                    [
                      244,
                      244
                    ],
                    [
                      128,
                      143
                    ],
                    [
                      128,
                      191
                    ],
                    [
                      128,
                      191
                    ]
                  ]
                ],
                tl: /* [] */0
              }
            }
          }
        }
      }
    }
  }
};

const utf_8_spec = {
  hd: utf_8_spec_0,
  tl: utf_8_spec_1
};

const utf_16be_spec_0 = [
  [
    0,
    55295
  ],
  [
    [
      0,
      215
    ],
    [
      0,
      255
    ]
  ]
];

const utf_16be_spec_1 = {
  hd: [
    [
      57344,
      65535
    ],
    [
      [
        224,
        255
      ],
      [
        0,
        255
      ]
    ]
  ],
  tl: {
    hd: [
      [
        65536,
        1114111
      ],
      [
        [
          216,
          219
        ],
        [
          0,
          255
        ],
        [
          220,
          223
        ],
        [
          0,
          255
        ]
      ]
    ],
    tl: /* [] */0
  }
};

const utf_16be_spec = {
  hd: utf_16be_spec_0,
  tl: utf_16be_spec_1
};

function uchar_map_of_spec(spec) {
  const map = Caml_array.make(Stdlib__Uchar.max + 1 | 0, Stdlib__Bytes.empty);
  const add_range = function (param) {
    const bytes = param[1];
    const match = param[0];
    const len = bytes.length;
    const uchar = {
      contents: match[0]
    };
    const buf = Caml_bytes.caml_create_bytes(len);
    const add = function (len$p) {
      if (len === len$p) {
        Caml_array.set(map, uchar.contents, Stdlib__Bytes.copy(buf));
        uchar.contents = uchar.contents + 1 | 0;
        return ;
      }
      
    };
    for(let b0 = 0 < len ? Caml_array.get(bytes, 0)[0] : Stdlib.max_int ,b0_finish = 0 < len ? Caml_array.get(bytes, 0)[1] : Stdlib.min_int; b0 <= b0_finish; ++b0){
      Caml_bytes.set(buf, 0, b0);
      for(let b1 = 1 < len ? Caml_array.get(bytes, 1)[0] : Stdlib.max_int ,b1_finish = 1 < len ? Caml_array.get(bytes, 1)[1] : Stdlib.min_int; b1 <= b1_finish; ++b1){
        Caml_bytes.set(buf, 1, b1);
        for(let b2 = 2 < len ? Caml_array.get(bytes, 2)[0] : Stdlib.max_int ,b2_finish = 2 < len ? Caml_array.get(bytes, 2)[1] : Stdlib.min_int; b2 <= b2_finish; ++b2){
          Caml_bytes.set(buf, 2, b2);
          for(let b3 = 3 < len ? Caml_array.get(bytes, 3)[0] : Stdlib.max_int ,b3_finish = 3 < len ? Caml_array.get(bytes, 3)[1] : Stdlib.min_int; b3 <= b3_finish; ++b3){
            Caml_bytes.set(buf, 3, b3);
            add(4);
          }
          add(3);
        }
        add(2);
      }
      add(1);
    }
    if ((uchar.contents - 1 | 0) === match[1]) {
      return ;
    }
    throw new Caml_js_exceptions.MelangeError("Assert_failure", {
              MEL_EXN_ID: "Assert_failure",
              _1: [
                "jscomp/test/stdlib_bytes_utf8_test.ml",
                69,
                4
              ]
            });
  };
  Stdlib__List.iter(add_range, spec);
  return map;
}

function uchar_map_get(u, map) {
  return Caml_array.get(map, u);
}

const utf_8 = uchar_map_of_spec(utf_8_spec);

const utf_16be = uchar_map_of_spec(utf_16be_spec);

function swap(_u, b) {
  const len = b.length;
  if (len === 0) {
    return ;
  }
  for(let i = 0 ,i_finish = (b.length >> 1); i < i_finish; ++i){
    const j = (i << 1);
    Stdlib__Bytes.set_uint16_le(b, j, Stdlib__Bytes.get_uint16_be(b, j));
  }
}

const map = Stdlib__Array.map(Stdlib__Bytes.copy, utf_16be);

Stdlib__Array.iteri(swap, map);

function test_utf(utf, utf_len, get_utf, set_utf, utf_is_valid) {
  const f = function (param, u) {
    const utf_len$1 = Curry._1(utf_len, u);
    const buf = Caml_bytes.caml_create_bytes(utf_len$1);
    if (Curry._3(set_utf, buf, 0, u) !== utf_len$1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  97,
                  4
                ]
              });
    }
    if (!Caml_bytes.caml_bytes_equal(buf, Caml_array.get(utf, u))) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  98,
                  4
                ]
              });
    }
    if (!Caml_bytes.caml_bytes_equal(buf, Caml_array.get(utf, u))) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  99,
                  4
                ]
              });
    }
    const dec = Curry._2(get_utf, buf, 0);
    if ((dec >>> 27) !== 1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  101,
                  4
                ]
              });
    }
    if (((dec >>> 24) & 7) !== utf_len$1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  102,
                  4
                ]
              });
    }
    if ((dec & 16777215) !== u) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  103,
                  4
                ]
              });
    }
    if (!Curry._1(utf_is_valid, buf)) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  104,
                  4
                ]
              });
    }
    
  };
  fold_uchars(f, undefined);
}

test_utf(utf_8, Stdlib__Uchar.utf_8_byte_length, Stdlib__Bytes.get_utf_8_uchar, Stdlib__Bytes.set_utf_8_uchar, Stdlib__Bytes.is_valid_utf_8);

test_utf(utf_16be, Stdlib__Uchar.utf_16_byte_length, Stdlib__Bytes.get_utf_16be_uchar, Stdlib__Bytes.set_utf_16be_uchar, Stdlib__Bytes.is_valid_utf_16be);

test_utf(map, Stdlib__Uchar.utf_16_byte_length, Stdlib__Bytes.get_utf_16le_uchar, Stdlib__Bytes.set_utf_16le_uchar, Stdlib__Bytes.is_valid_utf_16le);

function raises(f) {
  let tmp;
  try {
    Curry._1(f, undefined);
    tmp = false;
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === Stdlib.Invalid_argument) {
      tmp = true;
    } else {
      throw new Caml_js_exceptions.MelangeError(exn.MEL_EXN_ID, exn);
    }
  }
  if (tmp) {
    return ;
  }
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              124,
              4
            ]
          });
}

raises(function (param) {
      return Stdlib__Bytes.get_utf_8_uchar(Stdlib__Bytes.empty, 0);
    });

raises(function (param) {
      return Stdlib__Bytes.set_utf_8_uchar(Stdlib__Bytes.empty, 0, Stdlib__Uchar.min);
    });

raises(function (param) {
      return Stdlib__Bytes.get_utf_16le_uchar(Stdlib__Bytes.empty, 0);
    });

raises(function (param) {
      return Stdlib__Bytes.set_utf_16le_uchar(Stdlib__Bytes.empty, 0, Stdlib__Uchar.min);
    });

raises(function (param) {
      return Stdlib__Bytes.get_utf_16be_uchar(Stdlib__Bytes.empty, 0);
    });

raises(function (param) {
      return Stdlib__Bytes.set_utf_16be_uchar(Stdlib__Bytes.empty, 0, Stdlib__Uchar.min);
    });

const b = Stdlib__Bytes.make(1, /* '\171' */171);

if (!(Stdlib__Bytes.set_utf_8_uchar(b, 0, Stdlib__Uchar.max) === 0 && Caml_bytes.get(b, 0) === /* '\171' */171)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              141,
              2
            ]
          });
}

if (!(Stdlib__Bytes.set_utf_16be_uchar(b, 0, Stdlib__Uchar.max) === 0 && Caml_bytes.get(b, 0) === /* '\171' */171)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              142,
              2
            ]
          });
}

if (!(Stdlib__Bytes.set_utf_16le_uchar(b, 0, Stdlib__Uchar.max) === 0 && Caml_bytes.get(b, 0) === /* '\171' */171)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              143,
              2
            ]
          });
}

const b$1 = [
  0,
  0
];

Caml_bytes.set(b$1, 0, 195);

Caml_bytes.set(b$1, 1, 0);

if (Stdlib__Bytes.is_valid_utf_8(b$1)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              151,
              2
            ]
          });
}

const b$2 = Stdlib__Bytes.of_string("\xc0\xaf\xe0\x80\xbf\xf0\x81\x82A");

function ok(i) {
  return i === (b$2.length - 1 | 0);
}

for(let i = 0 ,i_finish = b$2.length; i < i_finish; ++i){
  const dec = Stdlib__Bytes.get_utf_8_uchar(b$2, i);
  if (ok(i)) {
    if ((dec >>> 27) === 1 !== true) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  166,
                  6
                ]
              });
    }
    if (((dec >>> 24) & 7) !== 1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  167,
                  6
                ]
              });
    }
    if ((dec & 16777215) !== Stdlib__Uchar.of_int(65)) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  168,
                  6
                ]
              });
    }
    
  } else {
    if ((dec >>> 27) === 1 !== false) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  162,
                  6
                ]
              });
    }
    if (((dec >>> 24) & 7) !== 1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  163,
                  6
                ]
              });
    }
    if ((dec & 16777215) !== Stdlib__Uchar.rep) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  164,
                  6
                ]
              });
    }
    
  }
}

const b$3 = Stdlib__Bytes.of_string("\xed\xa0\x80\xed\xbf\xbf\xed\xafA");

function ok$1(i) {
  return i === (b$3.length - 1 | 0);
}

for(let i$1 = 0 ,i_finish$1 = b$3.length; i$1 < i_finish$1; ++i$1){
  const dec$1 = Stdlib__Bytes.get_utf_8_uchar(b$3, i$1);
  if (ok$1(i$1)) {
    if ((dec$1 >>> 27) === 1 !== true) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  179,
                  6
                ]
              });
    }
    if (((dec$1 >>> 24) & 7) !== 1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  180,
                  6
                ]
              });
    }
    if ((dec$1 & 16777215) !== Stdlib__Uchar.of_int(65)) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  181,
                  6
                ]
              });
    }
    
  } else {
    if ((dec$1 >>> 27) === 1 !== false) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  175,
                  6
                ]
              });
    }
    if (((dec$1 >>> 24) & 7) !== 1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  176,
                  6
                ]
              });
    }
    if ((dec$1 & 16777215) !== Stdlib__Uchar.rep) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  177,
                  6
                ]
              });
    }
    
  }
}

const b$4 = Stdlib__Bytes.of_string("\xf4\x91\x92\x93\xffA\x80\xbfB");

function ok$2(i) {
  if (i === 5) {
    return true;
  } else {
    return i === 8;
  }
}

for(let i$2 = 0 ,i_finish$2 = b$4.length; i$2 < i_finish$2; ++i$2){
  const dec$2 = Stdlib__Bytes.get_utf_8_uchar(b$4, i$2);
  if (ok$2(i$2)) {
    if ((dec$2 >>> 27) === 1 !== true) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  192,
                  6
                ]
              });
    }
    if (((dec$2 >>> 24) & 7) !== 1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  193,
                  6
                ]
              });
    }
    if ((dec$2 & 16777215) !== Caml_bytes.get(b$4, i$2)) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  194,
                  6
                ]
              });
    }
    
  } else {
    if ((dec$2 >>> 27) === 1 !== false) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  188,
                  6
                ]
              });
    }
    if (((dec$2 >>> 24) & 7) !== 1) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  189,
                  6
                ]
              });
    }
    if ((dec$2 & 16777215) !== Stdlib__Uchar.rep) {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "jscomp/test/stdlib_bytes_utf8_test.ml",
                  190,
                  6
                ]
              });
    }
    
  }
}

const b$5 = Stdlib__Bytes.of_string("\xe1\x80\xe2\xf0\x91\x92\xf1\xbfA");

const d0 = Stdlib__Bytes.get_utf_8_uchar(b$5, 0);

if ((d0 >>> 27) === 1 !== false) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              199,
              2
            ]
          });
}

if (((d0 >>> 24) & 7) !== 2) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              200,
              2
            ]
          });
}

if ((d0 & 16777215) !== Stdlib__Uchar.rep) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              201,
              2
            ]
          });
}

const d2 = Stdlib__Bytes.get_utf_8_uchar(b$5, 2);

if ((d2 >>> 27) === 1 !== false) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              203,
              2
            ]
          });
}

if (((d2 >>> 24) & 7) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              204,
              2
            ]
          });
}

if ((d2 & 16777215) !== Stdlib__Uchar.rep) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              205,
              2
            ]
          });
}

const d3 = Stdlib__Bytes.get_utf_8_uchar(b$5, 3);

if ((d3 >>> 27) === 1 !== false) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              207,
              2
            ]
          });
}

if (((d3 >>> 24) & 7) !== 3) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              208,
              2
            ]
          });
}

if ((d3 & 16777215) !== Stdlib__Uchar.rep) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              209,
              2
            ]
          });
}

const d6 = Stdlib__Bytes.get_utf_8_uchar(b$5, 6);

if ((d6 >>> 27) === 1 !== false) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              211,
              2
            ]
          });
}

if (((d6 >>> 24) & 7) !== 2) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              212,
              2
            ]
          });
}

if ((d6 & 16777215) !== Stdlib__Uchar.rep) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              213,
              2
            ]
          });
}

const d8 = Stdlib__Bytes.get_utf_8_uchar(b$5, 8);

if (((d8 >>> 24) & 7) !== 1) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              215,
              2
            ]
          });
}

if ((d8 & 16777215) !== Stdlib__Uchar.of_int(65)) {
  throw new Caml_js_exceptions.MelangeError("Assert_failure", {
            MEL_EXN_ID: "Assert_failure",
            _1: [
              "jscomp/test/stdlib_bytes_utf8_test.ml",
              216,
              2
            ]
          });
}

Stdlib__Printf.printf(/* Format */{
      _0: {
        TAG: /* String_literal */11,
        _0: "All UTF tests passed!\n",
        _1: /* End_of_format */0
      },
      _1: "All UTF tests passed!\n"
    });

const utf_16le = map;

exports.fold_uchars = fold_uchars;
exports.utf_8_spec = utf_8_spec;
exports.utf_16be_spec = utf_16be_spec;
exports.uchar_map_of_spec = uchar_map_of_spec;
exports.uchar_map_get = uchar_map_get;
exports.utf_8 = utf_8;
exports.utf_16be = utf_16be;
exports.utf_16le = utf_16le;
exports.test_utf = test_utf;
/* utf_8 Not a pure module */
