.PHONY: check
check: 
	npx prettier --log-level warn --write .
	npx tsc
	npx eslint . --fix
	npx vitest --run

.PHONY: build
build: 
	npm run build

.PHONY: publish
publish: 
	npm publish --access public

.PHONY: generate
generate: 
	npx openapi-typescript ./src/openapi.yaml -o ./src/openapi-types.ts
