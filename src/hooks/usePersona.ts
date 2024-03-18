import { paths } from "../openapi-types";
import { UseQueryResourceOptions, useQueryResource } from "./useQueryResource";

export type PersonaData =
  paths["/personas/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type UsePersonaInput =
  paths["/personas/{id}"]["get"]["parameters"]["path"] &
    NonNullable<paths["/personas/{id}"]["get"]["parameters"]["query"]>;

export type UsePersonaOptions = UseQueryResourceOptions<PersonaData>;

export function usePersona(input: UsePersonaInput, opts?: UsePersonaOptions) {
  return useQueryResource<PersonaData>(
    {
      collectionName: "personas",
      input,
    },
    opts,
  );
}
