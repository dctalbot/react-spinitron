import { paths } from "../openapi-types";
import { UseQueryResourceOptions, useQueryResource } from "./useQueryResource";

export type SpinData =
  paths["/spins/{id}"]["get"]["responses"]["200"]["content"]["application/json"];

export type UseSpinInput = paths["/spins/{id}"]["get"]["parameters"]["path"] &
  NonNullable<paths["/spins/{id}"]["get"]["parameters"]["query"]>;

export type UseSpinOptions = UseQueryResourceOptions<SpinData>;

export function useSpin(input: UseSpinInput, opts?: UseSpinOptions) {
  return useQueryResource<SpinData>(
    {
      collectionName: "spins",
      input,
    },
    opts,
  );
}
