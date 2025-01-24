// Generated by Melange
'use strict';

const Caml_option = require("melange.js/caml_option.js");
const Mt = require("./mt.js");

const suites_0 = [
  "fromArray/toArray",
  (function (param) {
    const array = [
      [
        1,
        "a"
      ],
      [
        2,
        "b"
      ],
      [
        3,
        "c"
      ]
    ];
    const map = new Map(array);
    return {
      TAG: /* Eq */ 0,
      _0: array,
      _1: Array.from(map)
    };
  })
];

const suites_1 = {
  hd: [
    "size - empty map",
    (function (param) {
      const map = new Map();
      return {
        TAG: /* Eq */ 0,
        _0: 0,
        _1: map.size
      };
    })
  ],
  tl: {
    hd: [
      "size",
      (function (param) {
        const map = new Map([
              [
                1,
                "one"
              ],
              [
                2,
                "two"
              ],
              [
                2,
                "two"
              ]
            ]);
        return {
          TAG: /* Eq */ 0,
          _0: 2,
          _1: map.size
        };
      })
    ],
    tl: {
      hd: [
        "size - with duplicates",
        (function (param) {
          const map = new Map([
                [
                  1,
                  "one"
                ],
                [
                  1,
                  "one"
                ]
              ]);
          return {
            TAG: /* Eq */ 0,
            _0: 1,
            _1: map.size
          };
        })
      ],
      tl: {
        hd: [
          "has - true",
          (function (param) {
            const map = new Map([
                  [
                    1,
                    "one"
                  ],
                  [
                    2,
                    "two"
                  ]
                ]);
            return {
              TAG: /* Eq */ 0,
              _0: true,
              _1: map.has(1)
            };
          })
        ],
        tl: {
          hd: [
            "has - false",
            (function (param) {
              const map = new Map([
                    [
                      1,
                      "one"
                    ],
                    [
                      2,
                      "two"
                    ]
                  ]);
              return {
                TAG: /* Eq */ 0,
                _0: false,
                _1: map.has(3)
              };
            })
          ],
          tl: {
            hd: [
              "get",
              (function (param) {
                const map = new Map([
                      [
                        1,
                        "one"
                      ],
                      [
                        2,
                        "two"
                      ]
                    ]);
                const one = map.get(1);
                const two = map.get(2);
                const three = map.get(3);
                return {
                  TAG: /* Eq */ 0,
                  _0: [
                    "one",
                    "two",
                    undefined
                  ],
                  _1: [
                    one === undefined ? undefined : Caml_option.some(one),
                    two === undefined ? undefined : Caml_option.some(two),
                    three === undefined ? undefined : Caml_option.some(three)
                  ]
                };
              })
            ],
            tl: {
              hd: [
                "set",
                (function (param) {
                  const map = new Map().set(1, "one").set(2, "two");
                  return {
                    TAG: /* Eq */ 0,
                    _0: [
                      [
                        1,
                        "one"
                      ],
                      [
                        2,
                        "two"
                      ]
                    ],
                    _1: Array.from(map)
                  };
                })
              ],
              tl: {
                hd: [
                  "delete",
                  (function (param) {
                    const map = new Map([
                          [
                            1,
                            "one"
                          ],
                          [
                            2,
                            "two"
                          ]
                        ]);
                    const deleted = map.delete(2);
                    return {
                      TAG: /* Eq */ 0,
                      _0: [
                        true,
                        false
                      ],
                      _1: [
                        deleted,
                        map.has(2)
                      ]
                    };
                  })
                ],
                tl: {
                  hd: [
                    "clear",
                    (function (param) {
                      const map = new Map([
                            [
                              1,
                              "one"
                            ],
                            [
                              2,
                              "two"
                            ]
                          ]);
                      map.clear();
                      return {
                        TAG: /* Eq */ 0,
                        _0: 0,
                        _1: map.size
                      };
                    })
                  ],
                  tl: {
                    hd: [
                      "set mutate + return new map",
                      (function (param) {
                        const map_1 = new Map();
                        const map_2 = map_1.set(1, "one");
                        const map_3 = map_2.set(2, "two");
                        const all_same_size = map_1.size === 2 && map_2.size === 2 && map_3.size === 2;
                        const all_same_ref = map_1 === map_2 && map_2 === map_3;
                        return {
                          TAG: /* Eq */ 0,
                          _0: [
                            true,
                            true
                          ],
                          _1: [
                            all_same_size,
                            all_same_ref
                          ]
                        };
                      })
                    ],
                    tl: {
                      hd: [
                        "forEach",
                        (function (param) {
                          const map = new Map([
                                [
                                  1,
                                  "one"
                                ],
                                [
                                  2,
                                  "two"
                                ]
                              ]);
                          const arr = {
                            contents: []
                          };
                          map.forEach(function (value, key, param) {
                                arr.contents.push([
                                      key,
                                      value
                                    ]);
                              });
                          return {
                            TAG: /* Eq */ 0,
                            _0: [
                              [
                                1,
                                "one"
                              ],
                              [
                                2,
                                "two"
                              ]
                            ],
                            _1: arr.contents
                          };
                        })
                      ],
                      tl: {
                        hd: [
                          "keys",
                          (function (param) {
                            const keys = Array.from(new Map([
                                        [
                                          1,
                                          "one"
                                        ],
                                        [
                                          2,
                                          "two"
                                        ]
                                      ]).keys());
                            return {
                              TAG: /* Eq */ 0,
                              _0: [
                                1,
                                2
                              ],
                              _1: keys
                            };
                          })
                        ],
                        tl: {
                          hd: [
                            "values",
                            (function (param) {
                              const values = Array.from(new Map([
                                          [
                                            1,
                                            "one"
                                          ],
                                          [
                                            2,
                                            "two"
                                          ]
                                        ]).values());
                              return {
                                TAG: /* Eq */ 0,
                                _0: [
                                  "one",
                                  "two"
                                ],
                                _1: values
                              };
                            })
                          ],
                          tl: {
                            hd: [
                              "entries",
                              (function (param) {
                                const array = [
                                  [
                                    1,
                                    "one"
                                  ],
                                  [
                                    2,
                                    "two"
                                  ]
                                ];
                                const entries = Array.from(new Map(array).entries());
                                return {
                                  TAG: /* Eq */ 0,
                                  _0: array,
                                  _1: entries
                                };
                              })
                            ],
                            tl: /* [] */ 0
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Js_map_test", suites);

module.exports = {
  suites,
}
/*  Not a pure module */
