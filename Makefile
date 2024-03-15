.PHONY: check
check: 
	npx prettier --log-level warn --write .
	npx tsc
	npx eslint . --fix
	npx vitest --run


.PHONY: generate
generate: 
	npx openapi-typescript ./src/openapi.yaml -o ./src/openapi-types.ts
