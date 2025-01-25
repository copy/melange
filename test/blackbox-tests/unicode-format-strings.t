
  $ . ./setup.sh
  $ cat > dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF
  $ cat > dune <<EOF
  > (melange.emit
  >  (target output)
  >  (alias mel)
  >  (preprocess (pps melange.ppx)))
  > EOF

  $ cat > x.ml <<EOF
  > let () = Js.log (Format.sprintf {js|你 %s|js} "xx")
  > EOF

  $ dune build @mel
  $ cat _build/default/output/x.js
  // Generated by Melange
  'use strict';
  
  const Curry = require("melange.js/curry.js");
  const Stdlib__Format = require("melange/format.js");
  
  console.log(Curry._1(Stdlib__Format.sprintf({
    TAG: /* Format */ 0,
    _0: {
      TAG: /* String_literal */ 11,
      _0: "你 ",
      _1: {
        TAG: /* String */ 2,
        _0: /* No_padding */ 0,
        _1: /* End_of_format */ 0
      }
    },
    _1: "你 %s"
  }), "xx"));
  /*  Not a pure module */

  $ node _build/default/output/x.js
  你 xx

Show that `{j| ... |j}` with interpolation doesn't work because string
concatenation isn't a literal

  $ cat > x.ml <<EOF
  > let x = "xx"
  > let () = Js.log (Format.sprintf {j|你 \$(x) %s|j} "xx")
  > EOF
  $ dune build @mel
  File "x.ml", line 1:
  Error: This expression has type string but an expression was expected of type
           ('a -> 'b, unit, string) format =
             ('a -> 'b, unit, string, string, string, string) format6
  [1]
