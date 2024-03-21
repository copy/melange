
  $ . ./setup.sh
  $ cat > dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF
  $ cat > dune <<EOF
  > (melange.emit
  >  (target js-out)
  >  (emit_stdlib false)
  >  (libraries melange.js)
  >  (preprocess (pps melange.ppx)))
  > EOF
  $ cat > x.ml << EOF
  > exception A of int
  > let () =
  >   let a0 =
  >     try [%mel.raw{| (function (){throw 2} ()) |}] with
  >     | A x -> x
  >     | Js.Exn.Error v -> Obj.magic v
  >     | _ -> assert false
  >   in
  >   Js.log a0
  > EOF
  $ dune build @melange
  $ cat _build/default/js-out/x.js
  // Generated by Melange
  'use strict';
  
  const Caml_exceptions = require("melange.js/caml_exceptions.js");
  const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
  const Js__Js_exn = require("melange.js/js_exn.js");
  
  const A = /* @__PURE__ */Caml_exceptions.create("Melange__X.A");
  
  let a0;
  
  try {
    a0 = ((function (){throw 2} ())
    );
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === A || exn.MEL_EXN_ID === Js__Js_exn.$$Error) {
      a0 = exn._1;
    } else {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "x.ml",
                  7,
                  11
                ]
              });
    }
  }
  
  console.log(a0);
  
  exports.A = A;
  /* a0 Not a pure module */
  $ node _build/default/js-out/x.js
  2

Raise `null` / `undefined`

  $ cat > x.ml << EOF
  > exception A of int
  > let () =
  >   let a0 =
  >     try [%mel.raw{| (function (){throw undefined} ()) |}] with
  >     | A x -> x
  >     | Js.Exn.Error v -> Obj.magic v
  >     | _ -> assert false
  >   and a1 =
  >     try [%mel.raw{| (function (){throw null} ()) |}] with
  >     | A x -> x
  >     | Js.Exn.Error v -> Obj.magic v
  >     | _ -> assert false
  >   in
  >   Js.log2 a0 a1
  > EOF
  $ dune build @melange
  $ cat _build/default/js-out/x.js
  // Generated by Melange
  'use strict';
  
  const Caml_exceptions = require("melange.js/caml_exceptions.js");
  const Caml_js_exceptions = require("melange.js/caml_js_exceptions.js");
  const Js__Js_exn = require("melange.js/js_exn.js");
  
  const A = /* @__PURE__ */Caml_exceptions.create("Melange__X.A");
  
  let a0;
  
  try {
    a0 = ((function (){throw undefined} ())
    );
  }
  catch (raw_exn){
    const exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
    if (exn.MEL_EXN_ID === A || exn.MEL_EXN_ID === Js__Js_exn.$$Error) {
      a0 = exn._1;
    } else {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "x.ml",
                  7,
                  11
                ]
              });
    }
  }
  
  let a1;
  
  try {
    a1 = ((function (){throw null} ())
    );
  }
  catch (raw_exn$1){
    const exn$1 = Caml_js_exceptions.internalToOCamlException(raw_exn$1);
    if (exn$1.MEL_EXN_ID === A || exn$1.MEL_EXN_ID === Js__Js_exn.$$Error) {
      a1 = exn$1._1;
    } else {
      throw new Caml_js_exceptions.MelangeError("Assert_failure", {
                MEL_EXN_ID: "Assert_failure",
                _1: [
                  "x.ml",
                  12,
                  11
                ]
              });
    }
  }
  
  console.log(a0, a1);
  
  exports.A = A;
  /* a0 Not a pure module */
  $ node _build/default/js-out/x.js
  undefined null
