{ melange
, lib
, buildDunePackage
, cppo
, menhir
, nodejs
, js_of_ocaml
, js_of_ocaml-compiler
, reason
, reason-react-ppx
, melange-compiler-libs-vendor-dir
}:

buildDunePackage {
  pname = "melange-playground";
  version = "dev";
  duneVersion = "3";

  src =
    let fs = lib.fileset; in
    fs.toSource {
      root = ./..;
      fileset = fs.unions [
        ../belt
        ../bin
        ../dune-project
        ../dune
        (fs.difference ../jscomp ../jscomp/test)
        ../melange-playground.opam
        ../playground
        ../test/blackbox-tests/melange-playground
        ../vendor
      ];
    };

  postPatch = ''
    rm -rf vendor/melange-compiler-libs
    mkdir -p ./vendor
    cp -r ${melange-compiler-libs-vendor-dir} ./vendor/melange-compiler-libs
  '';

  doCheck = true;
  nativeBuildInputs = [ cppo menhir nodejs js_of_ocaml ];
  propagatedBuildInputs = [ js_of_ocaml-compiler melange reason reason-react-ppx ];
}
