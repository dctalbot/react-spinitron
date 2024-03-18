import { paths } from "../openapi-types";
import { UseQueryResourceOptions, useQueryResource } from "./useQueryResource";

export type ShowData =
  paths["/shows/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type UseShowInput = paths["/shows/{id}"]["get"]["parameters"]["path"] &
  NonNullable<paths["/shows/{id}"]["get"]["parameters"]["query"]>;

export type UseShowOptions = UseQueryResourceOptions<ShowData>;

export function useShow(input: UseShowInput, opts?: UseShowOptions) {
  return useQueryResource<ShowData>(
    {
      collectionName: "shows",
      input,
    },
    opts,
  );
}
