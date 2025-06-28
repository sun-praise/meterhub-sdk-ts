# Changelog

## 0.1.0-alpha.1 (2025-06-28)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/Svtter/meterhub-sdk-ts/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** add support for endpoint-specific base URLs ([aaa87ba](https://github.com/Svtter/meterhub-sdk-ts/commit/aaa87ba79597e0551cec5ce9b3d3e533127a1107))
* **client:** add withOptions helper ([a639e93](https://github.com/Svtter/meterhub-sdk-ts/commit/a639e930f103d707bd69b51fd8d7d4be27362579))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([945b991](https://github.com/Svtter/meterhub-sdk-ts/commit/945b9911c5e2fbbed3d7884c791c16fd850bce32))
* **client:** always overwrite when merging headers ([c00c299](https://github.com/Svtter/meterhub-sdk-ts/commit/c00c2993fc2b6ddbd7f6d7e7f875dd97a33e3561))
* **client:** explicitly copy fetch in withOptions ([3c4bc7a](https://github.com/Svtter/meterhub-sdk-ts/commit/3c4bc7abde36ac630c370c6b1558eec3153f3db8))
* **client:** get fetchOptions type more reliably ([d7d29bc](https://github.com/Svtter/meterhub-sdk-ts/commit/d7d29bcd3533bfa2f35ae24fb144ab9b1b13dc94))
* compat with more runtimes ([9be9fb3](https://github.com/Svtter/meterhub-sdk-ts/commit/9be9fb3c74d175b3f882d74b7c6dd3a878023919))
* publish script — handle NPM errors correctly ([d83840c](https://github.com/Svtter/meterhub-sdk-ts/commit/d83840ce1c2d76df28be73f8df8bb23cb012fab3))


### Chores

* adjust eslint.config.mjs ignore pattern ([31e0785](https://github.com/Svtter/meterhub-sdk-ts/commit/31e07858e00d0d1dc87af92b7603ce5d518dc1aa))
* avoid type error in certain environments ([a0e42a1](https://github.com/Svtter/meterhub-sdk-ts/commit/a0e42a18c57d7aa596e18a565391415d0acbd253))
* **ci:** enable for pull requests ([99a542e](https://github.com/Svtter/meterhub-sdk-ts/commit/99a542e67573806a481c3e4864aab05233769f60))
* **ci:** only run for pushes and fork pull requests ([f995c2f](https://github.com/Svtter/meterhub-sdk-ts/commit/f995c2fa5511c3f87ed9f0068ff8bbd0cd29181c))
* **client:** drop support for EOL node versions ([ab1be10](https://github.com/Svtter/meterhub-sdk-ts/commit/ab1be10aae1ad267a7a823233f0220edb52595b8))
* **client:** refactor imports ([b0d3915](https://github.com/Svtter/meterhub-sdk-ts/commit/b0d3915b0b0cad55adeaebc820c3747ef4f14790))
* **deps:** bump eslint-plugin-prettier ([10c5ab2](https://github.com/Svtter/meterhub-sdk-ts/commit/10c5ab2838b0ecdd93b8000cba80a7052be54452))
* **docs:** grammar improvements ([c65688d](https://github.com/Svtter/meterhub-sdk-ts/commit/c65688d9829d234fe7dc15e4aaf02442ff0335c0))
* **docs:** use top-level-await in example snippets ([6931792](https://github.com/Svtter/meterhub-sdk-ts/commit/6931792bdb7838d6270e909dc290c559e5d0eb9e))
* improve publish-npm script --latest tag logic ([8b87f4a](https://github.com/Svtter/meterhub-sdk-ts/commit/8b87f4a173b65bd1e7a2d062f52e0064c781824a))
* **internal:** add pure annotations, make base APIResource abstract ([bc6cbef](https://github.com/Svtter/meterhub-sdk-ts/commit/bc6cbef6eb4abf528e84040e9433683b4b47578a))
* **internal:** codegen related update ([71229d5](https://github.com/Svtter/meterhub-sdk-ts/commit/71229d55d9a890b87a77d9d10bc534a7db6b7890))
* **internal:** fix readablestream types in node 20 ([085111b](https://github.com/Svtter/meterhub-sdk-ts/commit/085111be68cbd1acacafd98eb1814a44fbe12c7a))
* **internal:** share typescript helpers ([eef7808](https://github.com/Svtter/meterhub-sdk-ts/commit/eef78083dc35aa07f87badc267f44f6d616f37b9))
* **internal:** update jest config ([16a0370](https://github.com/Svtter/meterhub-sdk-ts/commit/16a03701e62d1cee6f7ee84ce808276cb3965ab6))
* **package:** remove engines ([4dc7793](https://github.com/Svtter/meterhub-sdk-ts/commit/4dc779399369d76a8b48013583b05bfcbebf215e))
* **readme:** update badges ([c0a75f3](https://github.com/Svtter/meterhub-sdk-ts/commit/c0a75f321f0057462eb470d28de534128e8c46ef))
* **readme:** use better example snippet for undocumented params ([7ea9090](https://github.com/Svtter/meterhub-sdk-ts/commit/7ea9090ee9af0433aaa6debd46e16aced50bbc69))
* update SDK settings ([8b1b1a5](https://github.com/Svtter/meterhub-sdk-ts/commit/8b1b1a5ca4f1b76e749ab9255a88063351be6b27))
* update SDK settings ([53717a8](https://github.com/Svtter/meterhub-sdk-ts/commit/53717a80489f32c585fe09b66f42f2ba2160ef8e))
* update SDK settings ([6a5232d](https://github.com/Svtter/meterhub-sdk-ts/commit/6a5232d1ed792064f701ba2b57f9b2df53d384c9))
* update SDK settings ([0cebf04](https://github.com/Svtter/meterhub-sdk-ts/commit/0cebf04f6df36c1a206b76d0e9755ae11f13b1f2))


### Refactors

* **types:** replace Record with mapped types ([bb1189c](https://github.com/Svtter/meterhub-sdk-ts/commit/bb1189c725271b273a42b5f70b5c8e21d6d2ef75))
