Test `@mel.send` + `@mel.this` in the presence of `[@mel.as ".."]` constant args

  $ . ./setup.sh

  $ cat > x.ml <<EOF
  > type t
  > external foo : int -> int -> (_ [@mel.as 1]) -> (t[@mel.this]) -> unit =
  >   "foo" [@@mel.send]
  > external bar : int -> int -> (_ [@mel.as 1]) -> unit =
  >   "bar" [@@mel.send.pipe: t]
  > let () =
  >   let arr: t = Obj.magic [| 0; 1; 2 |] in
  >   bar 1 0 arr;
  >   foo 1 0 arr;
  > EOF

  $ OCAMLRUNPARAM=b melc -ppx 'melppx -alert -deprecated' x.ml
  // Generated by Melange
  'use strict';
  
  
  const arr = [
    0,
    1,
    2
  ];
  
  arr.bar(1, 0, 1);
  
  arr.foo(1, 0, 1);
  /*  Not a pure module */


  $ cat > x.ml <<EOF
  > type t
  > type popStateEvent
  > external addPopStateEventListener :
  >   (_[@mel.as "popstate"]) -> (popStateEvent -> unit) -> (t[@mel.this]) -> unit
  >   = "addEventListener"
  > [@@mel.send]
  > let () =
  >  let fake_window = Obj.magic [%obj { a = 2}] in
  >  addPopStateEventListener (fun _popstate -> Js.log "hi") fake_window
  > EOF

  $ melc -ppx melppx ./x.ml
  // Generated by Melange
  'use strict';
  
  
  const fake_window = {
    a: 2
  };
  
  fake_window.addEventListener("popstate", (function (_popstate) {
    console.log("hi");
  }));
  /*  Not a pure module */


  $ cat > x.ml <<EOF
  > external get : (_ [@mel.as {json|{}|json}]) -> string = "some-fn" [@@mel.send]
  > let x = get
  > EOF
  $ melc -ppx melppx -alert -unprocessed ./x.ml
  File "./x.ml", line 1, characters 0-78:
  1 | external get : (_ [@mel.as {json|{}|json}]) -> string = "some-fn" [@@mel.send]
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Error: `[@mel.send]`'s must have at least a non-constant argument
  [2]
