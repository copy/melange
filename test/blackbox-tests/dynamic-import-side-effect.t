Demonstrate dynamic `import()` semantics

  $ . ./setup.sh

  $ cat > dune-project <<EOF
  > (lang dune 3.9)
  > (using melange 0.1)
  > EOF

  $ cat > dune <<EOF
  > (melange.emit
  >  (target out)
  >  (preprocess (pps melange.ppx))
  >  (emit_stdlib false))
  > EOF

  $ cat > x.ml <<EOF
  > module type int  = module type of Int
  > let () =
  >  let _x = Js.import ((module Stdlib.Int) : (module int)) in
  >  ()
  > EOF

  $ cat > y.ml <<EOF
  > let x = 1
  > EOF

  $ dune build @melange

  $ cat _build/default/out/x.js
  // Generated by Melange
  'use strict';
  
  
  import("melange/int.js");
  
  /*  Not a pure module */

