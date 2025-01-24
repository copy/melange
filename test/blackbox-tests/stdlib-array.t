Test cases for stdlib Array

  $ . ./setup.sh
  $ cat > x.ml <<EOF
  > let t = Array.create_float 10
  > let t2 = Array.init 10 Fun.id
  > let m: unit Js.undefined array array = Array.make_matrix 2 2 Js.undefined
  > let x = Array.append [| 2 |] [| 3 |]
  > let c = Array.concat [ [|1|]; [|2|] ]
  > let s = Array.sub c 1 1
  > let s2 = Array.copy s
  > let () = Array.fill s 0 2 42
  > (* floatarray *)
  > let fl = Array.Floatarray.create 3
  > let () =
  >   for i = 0 to 2 do
  >     Array.Floatarray.unsafe_set fl i 42.
  >   done
  > EOF

  $ melc x.ml
  // Generated by Melange
  'use strict';
  
  const Caml_array = require("melange.js/caml_array.js");
  const Stdlib__Array = require("melange/array.js");
  
  const t = Caml_array.make_float(10);
  
  const t2 = Stdlib__Array.init(10, (function (prim) {
        return prim;
      }));
  
  const m = Stdlib__Array.make_matrix(2, 2, undefined);
  
  const x = Stdlib__Array.append([2], [3]);
  
  const c = Stdlib__Array.concat({
        hd: [1],
        tl: {
          hd: [2],
          tl: /* [] */ 0
        }
      });
  
  const s = Stdlib__Array.sub(c, 1, 1);
  
  const s2 = Stdlib__Array.copy(s);
  
  Stdlib__Array.fill(s, 0, 2, 42);
  
  const fl = Caml_array.make_float(3);
  
  for (let i = 0; i <= 2; ++i) {
    fl[i] = 42;
  }
  
  module.exports = {
    t,
    t2,
    m,
    x,
    c,
    s,
    s2,
    fl,
  }
  /* t Not a pure module */
