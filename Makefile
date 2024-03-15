.PHONY: check
check: 
	npx prettier --log-level warn --write .
	npx tsc
	npx eslint . --fix
	npx vitest --run


.PHONY: generate
generate: 
	npx openapi-typescript ./src/api/openapi.yaml -o ./src/api/openapi-types.ts
