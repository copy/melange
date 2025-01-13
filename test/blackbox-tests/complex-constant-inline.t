
  $ . ./setup.sh
  $ cat >dune-project <<EOF
  > (lang dune 3.8)
  > (using melange 0.1)
  > EOF

  $ cat >dune <<EOF
  > (melange.emit
  >  (target out)
  >  (emit_stdlib false))
  > EOF

  $ cat > x.ml <<EOF
  > module Test1 = struct
  >   type status = Vacations of int | Sabbatical of int | Sick
  >   type person = Teacher of { age : int } | Student of { status : status }
  > 
  >   let person1 = Teacher { age = 12345 }
  > 
  >   let message =
  >     match person1 with
  >     | Student { status = Vacations _ | Sick } -> "a"
  >     | _ -> "b"
  > end
  > EOF

  $ dune build

  $ cat _build/default/out/x.js
  // Generated by Melange
  'use strict';
  
  
  const person1 = {
    TAG: /* Teacher */ 0,
    age: 12345
  };
  
  let message;
  
  if (person1.TAG === /* Teacher */ 0) {
    message = "b";
  } else {
    let tmp = 12345;
    message = /* tag */ typeof tmp === "number" || typeof tmp === "string" || tmp.TAG === /* Vacations */ 0 ? "a" : "b";
  }
  
  const Test1 = {
    person1: person1,
    message: message
  };
  
  exports.Test1 = Test1;
  /* message Not a pure module */
