USER_SHELL = $(shell echo $$SHELL)

nix-%:
	nix develop -L '.?submodules=1#' --command $*

.PHONY: shell
shell:
	nix develop -L '.?submodules=1#' --command $(USER_SHELL)

.PHONY: release-shell
release-shell:
	nix develop -L '.?submodules=1#release' --command $(USER_SHELL)

.PHONY: vim
vim:
	$(MAKE) nix-n$@

.PHONY: generate-dune-files
generate-dune-files:
	node scripts/ninja.js

.PHONY: dev
dev:
	dune build @install

.PHONY: test
test:
	opam exec -- dune runtest -p melange,melange-playground

.PHONY: opam-create-switch
opam-create-switch: ## Create opam switch
	opam switch create . 5.3.0~beta2 -y --no-install

.PHONY: opam-install-test
opam-install-test: ## Install test dependencies
	opam pin add melange.dev . --with-test -y --no-action
	opam pin add melange-playground.dev . --with-test -y --no-action
	opam install melange.dev melange-playground.dev -t

.PHONY: opam-install-dev
opam-install-dev: opam-install-test ## Install development dependencies
	opam install -y ocaml-lsp-server

.PHONY: opam-init
opam-init: opam-create-switch opam-install-test ## Configure everything to develop this repository in local

.PHONY: playground
playground:
	opam exec -- dune build --profile=release playground/mel_playground.bc.js

.PHONY: playground-dev
playground-dev:
	opam exec -- dune build --profile=dev playground/mel_playground.bc.js

.PHONY: playground-dev-test
playground-dev-test:
	opam exec -- dune build --profile=dev @@test/blackbox-tests/melange-playground/runtest

.PHONY: playground-test
playground-test:
	opam exec -- dune build --profile=release @@test/blackbox-tests/melange-playground/runtest
