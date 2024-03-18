import { paths } from "../openapi-types";
import {
  UseQueryCollectionOptions,
  useQueryCollection,
} from "./useQueryCollection";

export type PersonasData =
  paths["/personas"]["get"]["responses"]["200"]["content"]["application/json"];

export type UsePersonasInput = NonNullable<
  paths["/personas"]["get"]["parameters"]["query"]
>;

export type UsePersonasOptions = UseQueryCollectionOptions<PersonasData>;

export function usePersonas(
  input?: UsePersonasInput,
  opts?: UsePersonasOptions,
) {
  return useQueryCollection<PersonasData>(
    {
      collectionName: "personas",
      input,
    },
    opts,
  );
}
