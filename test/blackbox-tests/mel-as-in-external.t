Test the attribute @mel.as in external with @mel.set

  $ . ./setup.sh

  $ cat > x.ml <<\EOF
  > type document
  > 
  > external document : document = "document"
  > 
  > external transition :
  >   document ->
  >   [ `ease
  >   | `easeIn [@mel.as "ease-in"]
  >   | `easeOut [@mel.as "ease-out"]
  >   | `easeInOut [@mel.as "ease-in-out"]
  >   | `linear ] ->
  >   unit = "transitionTimingFunction"
  > [@@mel.set]
  > 
  > let () = transition document `easeIn
  > EOF

  $ cat > dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF

  $ cat > dune <<EOF
  > (melange.emit
  >  (target out)
  >  (emit_stdlib false)
  >  (preprocess (pps melange.ppx)))
  > EOF

  $ cat > x.ml <<\EOF
  > type document
  > 
  > external document : document = "document"
  > 
  > external transition :
  >   document ->
  >   ([ `ease
  >   | `easeIn [@mel.as "ease-in"]
  >   | `easeOut [@mel.as "ease-out"]
  >   | `easeInOut [@mel.as "ease-in-out"]
  >   | `linear ] [@mel.string]) ->
  >   unit = "transitionTimingFunction"
  > [@@mel.set]
  > 
  > let () = transition document `easeIn
  > EOF

Using @mel.string fixes it

  $ dune build @melange

  $ cat ./_build/default/out/x.js
  // Generated by Melange
  'use strict';
  
  
  document.transitionTimingFunction = "ease-in";
  /*  Not a pure module */
