{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    nixpkgs,
    utils,
    ...
  }:
    utils.lib.eachDefaultSystem (
      system: let
        name = "gocl";
        pkgs = import nixpkgs {
          inherit system;
        };
      in rec {
        devShells.default = pkgs.mkShell {
          name = "${name}-devshell";
          packages =
            (with pkgs; [
              sqlite
            ])
            ++ (with pkgs.nodePackages_latest; [
              pnpm
              prisma
              tailwindcss
            ]);
          shellHook = with pkgs; ''
            export PRISMA_MIGRATION_ENGINE_BINARY="${prisma-engines}/bin/migration-engine"
            export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
            export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
            export PRISMA_INTROSPECTION_ENGINE_BINARY="${prisma-engines}/bin/introspection-engine"
            export PRISMA_FMT_BINARY="${prisma-engines}/bin/prisma-fmt"
          '';
        };
      }
    );
}
